'use client'

import { useState } from 'react'
import FoodBankRequestModal from './FoodBankRequestModal'
import DonationItemsModal from './DonationItemsModal'

export default function FoodBankInteractive() {
  const [requestOpen, setRequestOpen] = useState(false)
  const [donationOpen, setDonationOpen] = useState(false)

  return (
    <>
      <div className="flex items-center gap-4 flex-wrap animate-fade-up-d2">
        <button onClick={() => setRequestOpen(true)} className="btn-gold">
          Request a Parcel →
        </button>
        <button
          onClick={() => setDonationOpen(true)}
          className="btn-ghost"
          style={{ borderColor: 'rgba(255,255,255,.35)' }}
        >
          See What We Need
        </button>
      </div>

      <FoodBankRequestModal open={requestOpen} onClose={() => setRequestOpen(false)} />
      <DonationItemsModal open={donationOpen} onClose={() => setDonationOpen(false)} />
    </>
  )
}
