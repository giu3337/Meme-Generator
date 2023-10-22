import { useEffect, useState } from 'react'


const MemeComponent = () => {


    const [meme, setMeme] = useState({
        topText:  "", 
        bottomText: "", 
        randomImage: "http://i.imgflip.com/1bij.jpg"
    }
    )

    

    const [allMemeImages, setAllMemeImages] = useState([])

    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
          .then( res => res.json())
          .then( data => {
            setAllMemeImages(data.data.memes);
          })
      }, []) 
   
  
    
    function getMemeImage() {

     const randomIndex = Math.floor(Math.random() * allMemeImages.length)
     const url = allMemeImages[randomIndex].url
    
     setMeme({
        ...meme,
        randomImage: url,
      });

     
    }

    function handleChange(e) {
        const {name, value } = e.target
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        }
            
        )
    }
  
  
  return (
    <main className="px-10 pt-20 max-w-2xl mx-auto">
            <div>
                <div className="flex justify-center ">
                    <input
                        type="text"
                        name="topText"
                        id="Addtitle"
                        placeholder="Add a Title"
                        className="border border-solid
                        w-6/12 px-2 py-1 rounded mr-2
                        sm:text-base
                        "
                        value={meme.topText}
                        onChange={handleChange}
                        
                        
                        />


                    <input
                        type="text"
                        name="bottomText"
                        id="AddText"
                        placeholder="Add a Text"
                        className="border border-solid
                        w-6/12 px-2 py-1 rounded ml-2
                        sm:text-base
                        "
                        value={meme.bottomText}
                        onChange={handleChange}
                        
                        
                        />
                </div>

                <button className="w-full mt-7 py-2 px-4
                    bg-gradient-to-r from-[#672280] to-[#A626D3] text-white
                    rounded font-bold  cursor-pointer sm:text-lg"
                    onClick={getMemeImage}
                >Get a new meme image 🖼️</button>
            </div>

            <div className='relative flex items-center justify-center' >
                <img
                    src={meme.randomImage}
                    alt="" 
                    className='w-full max-w-2xl pt-20 mb-10 mx-auto'
                />

                <h2 className="absolute top-24 text-2xl font-bold text-white  font-['Anton']  drop-shadow-two tracking-wider sm:text-4xl" >{meme.topText}</h2>
                <h2 className="absolute bottom-16 text-2xl  font-bold text-white  font-['Anton']   drop-shadow-two tracking-wider sm:text-4xl">{meme.bottomText}</h2>

            </div>
    </main>
  )
}

export default MemeComponent

 /**
    useEffect takes a function as its parameter. If that function
    returns something, it needs to be a cleanup function. Otherwise,
    it should return nothing. If we make it an async function, it
    automatically retuns a promise instead of a function or nothing.
    Therefore, if you want to use async operations inside of useEffect,
    you need to define the function separately inside of the callback
    function, as seen below:
    */