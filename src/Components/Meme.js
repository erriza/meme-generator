import React, { useEffect, useState } from "react"

function Meme () {

    const [meme, setMeme] = useState({
        topText : "",
        bottomText: "",
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    })

    const [allMemes, setAllMemes] = useState([])

    useEffect( () => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => (setAllMemes(data.data.memes))
        )
    }, [])
    console.log(allMemes)


    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage  : url
        }))

    }

    function handleChange(event) {
        const {value, name} = event.target
        setMeme(prevMemeData => ({
            ...prevMemeData,
                [name]: value
        }))
    }

    return(
        <main>
            <div className="form">
                <input type="text"
                    className="form-input"
                    placeholder="Top text"
                    onChange={handleChange}
                    name="topText"
                    value={meme.topText}
                />
                <input type="text"
                    className="form-input"
                    placeholder="Bottom text"
                    onChange={handleChange}
                    name="bottomText"
                    value={meme.bottomText}
                />
                <button onClick={getMemeImage} 
                    className="form-btn">Get a new meme image 🖼
                </button>
            </div>
            <div  className="meme">
                <img src={meme.randomImage} className="meme-img"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
            
        </main>
    )
}

export default Meme;
