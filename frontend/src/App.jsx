import React, { useEffect, useState } from "react";
import { GoArrowRight } from "react-icons/go";
import Card from "./components/Card";
import Footer from "./components/Footer";
import axios from "axios";

const App = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [card1, setCard1] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);

  const handleSubmit = async () => {
    try {
      const res = await axios.post(`http://localhost:3000/api/v1/cards`, {
        title,
        description,
      });
      console.log(res);
      fetchCards();
    } catch (err) {
      console.log(err);
    }
  };

  const handleSearch = async (searchTitle) => {
    try {
      const encodedTitle = title;

      const res = await axios.get(
        `http://localhost:3000/api/v1/cards/${encodedTitle}`
      );
      console.log("DATA", res.data);
      setFilteredCards(res.data);
      console.log("Filtered Cards:", filteredCards);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/v1/cards`);
        setCard1(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCards();
  }, []);

  return (
    <div className="font-[poppins]">
      
      {/* HEADER */}
      <div className="flex justify-between bg-zinc-950 py-6 px-10">
        <div className="flex items-center pl-10 gap-[8px] text-white">
          <div className="flex items-center gap-3">
            <img src="/src/assets/logo.png" className="w-8 rounded-[10px]" />
            <h1 className="font-bold text-xl">Abstract</h1>
          </div>
          <span className="text-3xl font-light">|</span>
          <div>Help Center</div>
        </div>
        <button className="text-white bg-zinc-900 mr-28 px-3 py-2 rounded-lg text-lg border border-zinc-300">
          Submit a Request
        </button>
      </div>

      {/* HERO */}
      <div className="py-36 bg-gradient-to-t gap-10 from-indigo-100 to-indigo-50 flex flex-col justify-center items-center">
        <h1 className="text-6xl">How Can We Help?</h1>
        <div className="flex border-2 border-black rounded-md w-[35%] bg-white items-center">
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="w-full py-5 rounded-md pl-6 focus:outline-none"
            placeholder="Search"
          />
          <div onClick={handleSearch}>
            <GoArrowRight className="text-3xl mr-4 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* BODY */}
      {filteredCards.length > 0 ? (
        <div className="flex flex-wrap justify-between w-[55%] my-36 m-auto gap-16">
          {filteredCards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap justify-between w-[55%] my-36 m-auto gap-16">
          {card1.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      )}

      {/* CREATE CARD */}
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-6xl">CREATE CARD</h1>
        <div className="flex justify-center items-center py-20 gap-10">
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="border-2 border-black py-4 w-96 px-4 rounded-md"
            placeholder="Title"
          />
          <input
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            className="border-2 border-black py-4 w-96 px-4 rounded-md"
            placeholder="Description"
          />
          <button
            onClick={handleSubmit}
            className="text-white bg-zinc-900 px-7 py-4 rounded-lg text-lg border border-zinc-300"
          >
            Create
          </button>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default App;
