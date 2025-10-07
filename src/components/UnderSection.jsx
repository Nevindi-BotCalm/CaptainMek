import React from 'react'

function UnderSection() {
  return (
    <div className="relative w-full bg-black/50 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-8">
          PREPARE FOR BATTLE
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Captain Mek's arsenal is ready to defend the meme universe. 
          Join the fight and become a legend in the crypto space.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
          JOIN THE MISSION
        </button>
      </div>
    </div>
  )
}

export default UnderSection