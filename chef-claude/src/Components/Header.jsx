import icon from "../assets/Chef Claude Icon.png"

export default function Header() {
    return (
        <header className="App">
            <img src={icon} alt={"Chef Claude Icon"} />
            <h1>Chef Claude</h1>
        </header>
    )
}