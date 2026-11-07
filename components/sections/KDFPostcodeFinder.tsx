'use client'

import { useState } from 'react'
import { kdfCentres, type KDFCentre } from '@/lib/kdf-centres'
import Spinner from '@/components/ui/Spinner'

function haversine(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371
  const toRad = (n: number) => (n * Math.PI) / 180
  const dLat = toRad(lat2 - lat1)
  const dLon = toRad(lon2 - lon1)
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
}

interface SearchResult {
  centre: KDFCentre
  miles: number
}

export default function KDFPostcodeFinder() {
  const [postcode, setPostcode] = useState('')
  const [results, setResults] = useState<SearchResult[] | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSearch(e: React.FormEvent) {
    e.preventDefault()
    const raw = postcode.trim()
    const pc = raw.replace(/\s+/g, '').toUpperCase()
    if (!pc) return

    setLoading(true)
    setError(null)
    setResults(null)

    try {
      let lat: number | null = null
      let lng: number | null = null

      // 1. Full postcode (e.g. SS14 1AB)
      const pcRes = await fetch(`https://api.postcodes.io/postcodes/${encodeURIComponent(pc)}`)
      const pcJson = await pcRes.json()

      if (pcJson.status === 200) {
        lat = pcJson.result.latitude
        lng = pcJson.result.longitude
      } else {
        // 2. Outward code (e.g. SS14, CM17, SE18, RM1)
        const outRes = await fetch(`https://api.postcodes.io/outcodes/${encodeURIComponent(pc)}`)
        const outJson = await outRes.json()

        if (outJson.status === 200) {
          lat = outJson.result.latitude
          lng = outJson.result.longitude
        } else {
          // 3. Place name (e.g. Basildon, Stratford, Woolwich, Croydon, Hatfield)
          // Fetch up to 10 results and pick whichever is closest to the
          // centroid of all KDF centres (~Brentwood/Romford area).
          // This resolves same-named places elsewhere in the UK
          // e.g. "Croydon, Surrey" beats "Croydon, Cambridgeshire"
          //      "Hatfield, Herts" beats "Hatfield, South Yorkshire"
          const KDF_CENTROID = { lat: 51.575, lng: 0.184 }

          const placeRes = await fetch(
            `https://api.postcodes.io/places?q=${encodeURIComponent(raw)}&limit=10`
          )
          const placeJson = await placeRes.json()

          if (placeJson.status === 200 && placeJson.result?.length > 0) {
            type Place = { latitude: number; longitude: number }
            const best = (placeJson.result as Place[]).reduce((a, b) =>
              haversine(KDF_CENTROID.lat, KDF_CENTROID.lng, a.latitude, a.longitude) <=
              haversine(KDF_CENTROID.lat, KDF_CENTROID.lng, b.latitude, b.longitude)
                ? a : b
            )
            lat = best.latitude
            lng = best.longitude
          }
        }
      }

      if (lat === null || lng === null) {
        setError("Location not found. Try your postcode (SS14 1AB), outward code (SS14), or area name (Basildon).")
        return
      }

      const sorted = kdfCentres
        .map(centre => ({
          centre,
          miles: haversine(lat!, lng!, centre.lat, centre.lng) * 0.621371,
        }))
        .sort((a, b) => a.miles - b.miles)
        .slice(0, 3)

      setResults(sorted)
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      className="relative overflow-hidden mx-auto max-w-2xl"
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(147,50,143,0.3)',
      }}
    >
      {/* Radar rings decoration */}
      <div aria-hidden className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        {[320, 240, 160, 80].map(r => (
          <div
            key={r}
            className="absolute rounded-full"
            style={{
              width: r,
              height: r,
              border: '1px solid rgba(147,50,143,0.12)',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 p-8 max-sm:p-5">
        {/* Radar icon */}
        <div className="flex justify-center mb-5">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            aria-hidden
          >
            <circle cx="24" cy="24" r="22" stroke="rgba(201,162,39,0.25)" strokeWidth="1" />
            <circle cx="24" cy="24" r="14" stroke="rgba(201,162,39,0.4)" strokeWidth="1" />
            <circle cx="24" cy="24" r="6" stroke="rgba(201,162,39,0.6)" strokeWidth="1" />
            <line x1="24" y1="24" x2="24" y2="4" stroke="#C9A227" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="24" y1="24" x2="40" y2="14" stroke="rgba(201,162,39,0.35)" strokeWidth="1" strokeLinecap="round" />
            <circle cx="24" cy="24" r="2.5" fill="#C9A227" />
            <circle cx="32" cy="10" r="2" fill="#C9A227" opacity="0.9" />
          </svg>
        </div>

        <h3 className="font-display font-black text-white uppercase tracking-tight text-center mb-2" style={{ fontSize: 20 }}>
          Find Your KDF Centre
        </h3>
        <p className="font-body text-white/50 text-[13px] text-center mb-6 leading-relaxed">
          Enter your postcode, outward code, or area name — we&apos;ll find the KDF Centre nearest to you.
        </p>

        {/* Form */}
        <form onSubmit={handleSearch} className="flex gap-3 max-sm:flex-col">
          <input
            type="text"
            value={postcode}
            onChange={e => setPostcode(e.target.value)}
            placeholder="e.g. SS14 1AB, SS14 or Basildon"
            maxLength={40}
            autoComplete="postal-code"
            aria-label="Your postcode"
            className="flex-1 font-display text-[14px] font-bold tracking-[2px] uppercase text-white px-5 py-4"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.12)',
              outline: 'none',
              transition: 'border-color 0.2s',
            }}
            onFocus={e => { (e.currentTarget as HTMLInputElement).style.borderColor = 'rgba(201,162,39,0.6)' }}
            onBlur={e => { (e.currentTarget as HTMLInputElement).style.borderColor = 'rgba(255,255,255,0.12)' }}
          />
          <button
            type="submit"
            disabled={loading || !postcode.trim()}
            className="btn-gold flex-shrink-0 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ transform: 'none' }}
          >
            {loading ? (
              <>
                <Spinner />
                Searching…
              </>
            ) : (
              'Find My Centre'
            )}
          </button>
        </form>

        {/* Error */}
        {error && (
          <p className="mt-4 font-body text-[13px] text-red-400 text-center" role="alert">
            {error}
          </p>
        )}

        {/* Results */}
        {results && (
          <div
            className="mt-6 flex flex-col gap-2"
            style={{ animation: 'fadeUp 0.5s ease both' }}
            aria-live="polite"
            aria-label="Nearest KDF centres"
          >
            {results.map(({ centre, miles }, i) => (
              <div
                key={centre.id}
                className="px-5 py-4"
                style={
                  i === 0
                    ? {
                      background: 'rgba(201,162,39,0.07)',
                      border: '1px solid rgba(201,162,39,0.4)',
                    }
                    : {
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.07)',
                    }
                }
              >
                {i === 0 && (
                  <div className="font-display text-[9px] font-black tracking-[3px] uppercase text-gold mb-1">
                    ★ Your Nearest Centre
                  </div>
                )}
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div
                      className="font-display font-black uppercase tracking-[1px] leading-tight"
                      style={{
                        fontSize: i === 0 ? 18 : 14,
                        color: i === 0 ? '#fff' : 'rgba(255,255,255,0.7)',
                      }}
                    >
                      {centre.name}
                    </div>
                    <div className="font-body text-[11px] text-white/45 mt-1 truncate">
                      {centre.areas.join(' · ')}
                    </div>
                  </div>
                  <div
                    className="font-display font-black whitespace-nowrap flex-shrink-0"
                    style={{
                      fontSize: i === 0 ? 16 : 13,
                      color: i === 0 ? '#C9A227' : 'rgba(255,255,255,0.35)',
                    }}
                  >
                    {miles.toFixed(1)} mi
                  </div>
                </div>
              </div>
            ))}
            {/* <p className="font-body text-[10px] text-white/25 text-center pt-1">
              Distances measured in straight lines and are approximate.
            </p> */}
          </div>
        )}
      </div>
    </div>
  )
}
