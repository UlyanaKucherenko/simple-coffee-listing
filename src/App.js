import { useEffect, useState } from "react";

import ProductCard from "./components/ProductCard";
import bgCafe from "./images/bg-cafe.jpg";
import titleDecor from "./images/title-decorate.svg";
import { FILTER_BUTTONS } from "./utils/consts";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");

  const getAllProducts = async () => {
    try {
      const response = await fetch(
        `https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json`
      );
      const res = await response.json();
      setData(res);
      setFilteredData(res);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAvailableProducts = () => {
    const availableProducts = data.filter((item) => item.available === true);
    setFilteredData(availableProducts);
  };

  const handleButton = (btnValue) => {
    switch (btnValue) {
      case "all":
        setFilteredData(data);
        setActiveFilter("all");
        break;

      case "available":
        getAvailableProducts();
        setActiveFilter("available");
        break;

      default:
        console.error("No exist btn");
        break;
    }
  };

  return (
    <div className="app">
      <div className="bgImage">
        <img src={bgCafe} alt="bg-cafe" />
      </div>
      <main className="main container">
        <header className="header">
          <img src={titleDecor} alt="" className="titleDecor" />
          <h1 className="title">Our Collection</h1>
          <p className="description">
            Introducing our Coffee Collection, a selection of unique coffees
            from different roast types and origins, expertly roasted in small
            batches and shipped fresh weekly.
          </p>
        </header>

        <div className="content">
          <div className="filter">
            {FILTER_BUTTONS.map((btn) => (
              <button
                key={btn.text}
                type="button"
                className={`filterBtn ${
                  activeFilter === btn.value ? "active" : ""
                }`}
                onClick={() => {
                  handleButton(btn.value);
                }}
              >
                {btn.text}
              </button>
            ))}
          </div>
          <ul className="products">
            {filteredData.map((item) => (
              <ProductCard
                key={item.id}
                id={item.id}
                available={item.available}
                imageUrl={item.image}
                name={item.name}
                popular={item.popular}
                price={item.price}
                rating={item.rating}
                votes={item.votes}
              />
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
