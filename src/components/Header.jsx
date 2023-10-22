import { useState } from "react"


const Header = () => {
  return (
    <header className="flex justify-between items-center px-5 py-4
    bg-gradient-to-r from-[#672280] to-[#A626D3] text-white
    sm:px-9 
    ">
        <div className="flex gap-2 items-center">
            <img 
                src="/public/TrollFace.png" 
                alt="Troll Face" 
                className="w-8 sm:w-9"
                
                />
            <span className="font-bold text-base sm:text-lg">Meme Generator</span>
        </div>

        <span className="text-xs text-ellipsis font-medium sm:text-sm">React Course - Project - 3</span>
    </header>
  )
}

export default Header

