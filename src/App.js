import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Services from "./Components/Services";
import Layout from "./Components/Layout";
import Registration from "./Components/Registration";
import Registration1 from "./Components/Registration1";
import FruitDetails from "./Components/FruitDetails";
import FavoriteColorSelector from "./Components/FavoriteColorSelector";
import Quiz from "./Components/Quiz";
import CardGame from "./Components/CardGame";
import FetchData from "./Components/Fetch";
import Cart from "./Components/Cart";

function App() {
  const fruits = [
    {
      id: 1,
      name: "Mango",
      price: 300,
      img: "/images/mango.jpg",
      description:
        "The king of the Fruits in world Mango ,Sweet and favorite one of all peoples.",
    },
    {
      id: 2,
      name: "Apple",
      img: "/images/apple.jpg",
      price: 200,
      description:
        "A juicy and delicious apple, perfect for any time of the day.",
    },
    {
      id: 3,
      name: "Orange",
      price: 100,
      img: "/images/Orange.jpg",
      description: "A Juicy with vitamin C The Orange.",
    },
    {
      id: 4,
      name: "Banana",
      price: 30,
      img: "/images/banana.jpg",
      description: "This is Banana.",
    },
    {
      id: 5,
      name: "Watermalon",
      img: "/images/watermalon.jpg",
      price: 80,
      description: "This is Watermalon.",
    },
    {
      id: 6,
      name: "Guava",
      price: 70,
      img: "/images/guava.jpg",
      description: "This is Guava.",
    },
    {
      id: 7,
      name: "Kiwi",
      price: 100,
      img: "/images/kiwi.jpg",
      description: "This is Kiwi.",
    },
    {
      id: 8,
      name: "Papaya",
      price: 80,
      img: "/images/papaya.jpg",
      description: "This is Papaya.",
    },
  ];

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home fruits={fruits} />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/fruits/:id" element={<FruitDetails />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/registration1" element={<Registration1 />} />
            <Route path="/favoritecolor" element={<FavoriteColorSelector />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/cardgame" element={<CardGame />} />
            <Route path="/fetch" element={<FetchData />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
