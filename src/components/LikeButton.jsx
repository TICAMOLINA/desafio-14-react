import { useState } from "react"

const LikeButton = () => {

    const [liked, setLiked] = useState(true)

    const reaction = () => {
        setLiked(!liked)
    }

  return (
    <div>
        {
            liked ? (            
                <button onClick={reaction} 
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 cursor-pointer rounded-2xl"
                        >Like 👍🏽</button>
                
            ) : (
                <button onClick={reaction}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mt-4 cursor-pointer rounded-2xl"
                >Unlike 👎🏽</button>
            ) 
        }
    </div>
  )
}

export default LikeButton