import Header from "./Components/header.jsx";
import Entry from "./Components/Entry.jsx";
import places from "./data.js"

export default function App(){
    const placeElements = places.map((place) => {
        return(
            <Entry
                key={place.id}
                place={place}
            />
        )
    })
    return(
        <>
            <Header/>
            <main className="container">
                {placeElements}
            </main>
        </>
    )
}