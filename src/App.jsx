import "./App.css";
import Image from "./Image.component/Image";
import Header from "./Header.component/Header";
import Buttons from "./Buttons.component/Buttons";
import TextCard from "./TextCards.component/TextCard";

export const allImages = [
  { src: "./images/icon1.png", alt: "icon 1" },
  { src: "./images/icon2.png", alt: "icon 2" },
  { src: "./images/icon3.png", alt: "icon 3" },
  { src: "./images/icon4.png", alt: "icon 4" },
  { src: "./images/ironhack-logo.svg", alt: "Ironhack logo" },
  { src: "./images/menu-top.svg", alt: "Menu" },
];

const cards = [
  {
    title: "Declarative",
    body: "React makes it painless to create interactive Uls",
    source: { src: "./images/icon1.png", alt: "icon 1" },
  },
  {
    title: "Components",
    body: "Build encapsulated components that manage their state.",
    source: { src: "./images/icon2.png", alt: "icon 2" },
  },
  {
    title: "Single-Way",
    body: "A set of immutable values are passed to the component's.",
    source: { src: "./images/icon3.png", alt: "icon 3" },
  },
  {
    title: "JSX",
    body: "Statically-typed, designed to run on modern browsers",
    source: { src: "./images/icon4.png", alt: "icon 4" },
  },
];

const btns = [{ text: "Awesome!" }];

function App() {
  return (
    <div className="App">
      <div className="hero-page">
        <Header />
        <div className="hero-container">
          <h1 class="hero-title">
            Say hello to <span className="br">React JS</span>
          </h1>
          <p class="body">
            You will learn how to use the most popular frontend library, and
            become a super Ninja developer.
          </p>
          <Buttons text={btns[0]} />
        </div>
      </div>

      <div className="cards-container">
          <TextCard data={cards[0]} />
          <TextCard data={cards[1]} />
          <TextCard data={cards[2]} />
          <TextCard data={cards[3]} />
      </div>

    </div>
  );
}

export default App;
