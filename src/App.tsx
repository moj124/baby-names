import babyNames from "./babyNamesData.json";
import { Name } from "./components/Name";
import { FavouriteName } from "./components/FavouriteName";
import { useState } from "react";

function App(): JSX.Element {
  const [text, setText] = useState("");
  const [favourites, setFavourites] = useState<string[]>([]);
  const [gender, setGender] = useState("none");

  function getnames(gender: string) {
    if (gender !== "none") {
      return babyNames
        .filter(
          (element) =>
            element.name.toLowerCase().includes(text.toLowerCase()) &&
            element.sex === gender[0] &&
            !favourites.includes(element.name)
        )
        .sort((a, b) => ("" + a.name).localeCompare(b.name))
        .map((element) => (
          <Name
            key={element.id}
            id={element.id}
            name={element.name}
            gender={element.sex}
            setFavourites={(names: string[]) => setFavourites(names)}
            favourites={favourites}
          />
        ));
    } else {
      return babyNames
        .filter(
          (element) =>
            element.name.toLowerCase().includes(text.toLowerCase()) &&
            !favourites.includes(element.name)
        )
        .sort((a, b) => ("" + a.name).localeCompare(b.name))
        .map((element) => (
          <Name
            key={element.id}
            id={element.id}
            name={element.name}
            gender={element.sex}
            setFavourites={(names: string[]) => setFavourites(names)}
            favourites={favourites}
          />
        ));
    }
  }

  const favs = babyNames
    .filter((element) => favourites.includes(element.name))
    .sort((a, b) => ("" + a.name).localeCompare(b.name))
    .map((element) => (
      <FavouriteName
        key={element.id}
        id={element.id}
        name={element.name}
        gender={element.sex}
        setFavourites={(names: string[]) => setFavourites(names)}
        favourites={favourites}
      />
    ));

  return (
    <>
      <header>
        <div className="slick">
          <input
            onChange={(e) => setText(e.target.value)}
            placeholder="Search for a name..."
          />
          <button onClick={() => setGender("none")} id="all">
            🐥
          </button>
          <button onClick={() => setGender("female")} id="female">
            🐤
          </button>
          <button onClick={() => setGender("male")} id="male">
            🐣
          </button>
        </div>
        <div className="sick">
          {favs.length > 0 ? (
            <h3>Favourites:</h3>
          ) : (
            <h3>
              Favourites: Click some names below to add to your shortlist...
            </h3>
          )}

          {favs}
        </div>
        <hr></hr>
      </header>

      <main>{getnames(gender)}</main>

      <footer>
        <hr></hr>
      </footer>
    </>
  );
}

export default App;
