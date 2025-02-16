import image from "../assets/react-logo.png?url"

export default function Navbar(){
    return(
        <header>
            <nav>
                <img src={image} alt="React logo"/>
                <span>ReactFacts</span>
            </nav>
        </header>
    )
}