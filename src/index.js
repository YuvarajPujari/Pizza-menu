import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  //   const style = {
  //     color: "khaki",
  //     fontSize: "50px",
  //     textTransform: "uppercase",
  //   };
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>;
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];

  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our menu is</h2>
      {numPizzas > 0 ? (
        <>
          <p>Italian Pizzas made from fresh ingredients come and visit us</p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We are still praparing food come back later</p>
      )}

      {/* <Pizza
        name="Focaccia"
        ingredients="Bread with italian olive oil and rosemary"
        photoName="pizzas/focaccia.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato,mushroom"
        price={12}
        photoName="pizzas/funghi.jpg"
      /> */}
    </main>
  );
}
function Pizza({ pizzObj }) {
  return (
    <li className={`pizza ${pizzObj.soldOut ? "sold-out" : ""}`}>
      <div>
        <img src={pizzObj.photoName} alt={pizzObj.name}></img>
        <h3>{pizzObj.name}</h3>
        <p>{pizzObj.ingredients}</p>
        <span>{pizzObj.soldOut ? "SOLD OUT " : pizzObj.price + 3}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          we welcome u between {openHour}:00 and {closeHour}:00{" "}
        </p>
      )}
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        we are open {openHour}:00 untill {closeHour}:00.Come visit us or order
        Online
      </p>
      <button className="btn">Order</button>
    </div>
  );
}
