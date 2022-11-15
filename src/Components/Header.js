import trollFace from './../Icons/Troll Face.png'

function Header () {
    return ( 
        <header className='header'>
            <img className='header-img' src={trollFace}></img>
            <h2 className='header-title'>Meme generator</h2>
            <p className='header-p'>React Course - Project 3</p>
        </header>
    )
}

export default Header;