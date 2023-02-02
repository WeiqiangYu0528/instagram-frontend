import React from 'react'
import SuggestedProfile from './suggested-profile'

export default function SuggestedProfiles() {
  return (
    <div>
        <div className="rounded flex flex-col">
            <div className="text-sm flex items-center align-items justify-between mb-2">
                <p className="font-bold text-gray-base">Suggestions for you</p>
            </div>
            <div className="mt-4 grid gap-5">
                <SuggestedProfile/>
                <SuggestedProfile/>
                <SuggestedProfile/>
            </div>
        </div>
    </div>
  )
}
