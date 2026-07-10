'use client'

import { useState } from 'react'
import DonationItemsModal from './DonationItemsModal'

export default function WillingDonorsCTA() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="flex items-center justify-center gap-4 flex-wrap">
        <button onClick={() => setOpen(true)} className="btn-gold">
          View Donation List →
        </button>
        {/* <a href="/#give" className="btn-ghost" style={{ borderColor: 'rgba(255,255,255,.4)' }}>
          Give Online →
        </a> */}
      </div>
      <DonationItemsModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}
