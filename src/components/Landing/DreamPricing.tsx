'use client'

import React from 'react'

export default function DreamPricing() {
  return (
    <div className="bg-white text-black py-16 px-4 md:px-12 lg:px-24">
      <h2 className="text-4xl font-semibold text-center font-guzan mb-12">Dream Pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        {/* Dream Lite */}
        <div className="border rounded-2xl p-8 shadow-sm text-center">
          <h3 className="text-2xl font-semibold mb-2">Dream Lite</h3>
          <p className="text-sm text-gray-500 mb-6">Get access to all of Dream’s translating models</p>
          <div className="text-3xl font-bold mb-6">$9.99<span className="text-sm font-normal text-gray-500">/month</span></div>
          <ul className="space-y-2 mb-6 text-sm text-left text-gray-700">
            <li>✓ 20,000 Words / Month</li>
            <li>✓ No Word Limit Per Request</li>
          </ul>
          <button className="w-full bg-gradient-to-r from-blue-400 to-pink-400 text-white rounded-lg py-2 font-medium">
            Subscribe
          </button>
        </div>

        {/* Dream Pro */}
        <div className="border-2 border-pink-400 rounded-2xl p-8 shadow-lg text-center relative bg-gradient-to-t from-white to-pink-50">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-pink-500 text-white text-sm px-4 py-1 rounded-full font-medium">
            Popular
          </div>
          <h3 className="text-2xl font-semibold mb-2 mt-4">Dream Pro</h3>
          <p className="text-sm text-gray-500 mb-6">Get access to all of Dream’s translating models</p>
          <div className="text-3xl font-bold mb-6">$19.99<span className="text-sm font-normal text-gray-500">/month</span></div>
          <ul className="space-y-2 mb-6 text-sm text-left text-gray-700">
            <li>✓ 50,000 Words / Month</li>
            <li>✓ No Word Limit Per Request</li>
          </ul>
          <button className="w-full bg-gradient-to-r from-blue-400 to-pink-400 text-white rounded-lg py-2 font-medium">
            Subscribe
          </button>
        </div>

        {/* Dream Extreme */}
        <div className="border rounded-2xl p-8 shadow-sm text-center">
          <h3 className="text-2xl font-semibold mb-2">Dream Extreme</h3>
          <p className="text-sm text-gray-500 mb-6">Get access to all of Dream’s translating models</p>
          <div className="text-3xl font-bold mb-6">$49.99<span className="text-sm font-normal text-gray-500">/month</span></div>
          <ul className="space-y-2 mb-6 text-sm text-left text-gray-700">
            <li>✓ 250,000 Words / Month</li>
            <li>✓ No Word Limit Per Request</li>
          </ul>
          <button className="w-full bg-gradient-to-r from-blue-400 to-pink-400 text-white rounded-lg py-2 font-medium">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}
