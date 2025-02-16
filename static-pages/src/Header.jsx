import reactLogo from "./assets/react-logo.png";

export default function Header() {
    return (
        <header className={"header"}>
            <img className={"react-logo"} src={reactLogo} alt="React logo" />
            <nav>
                <ul className="nav-list">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}