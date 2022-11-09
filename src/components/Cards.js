import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://img.freepik.com/free-photo/landscape-morning-fog-mountains-with-hot-air-balloons-sunrise_335224-794.jpg?size=626&ext=jpg&ga=GA1.2.1761781605.1667647885"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="https://t4.ftcdn.net/jpg/03/17/32/79/240_F_317327959_JlW7B5pHTf5aQuPEnT8P5VJllB6yA6oK.jpg"
              text="Travel through the Islands of Bali in a private cruise"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="https://t4.ftcdn.net/jpg/02/73/49/43/240_F_273494306_lnXxn1zShrW9uc1y9upqCoOaI9EoxDbZ.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmorWORRcoWsgXvam8Mhs58TWfSmZRENRUSA&usqp=CAU"
              text="Travel through the Islands of Bali in a private cruise"
              label="Luxury"
              path="/services"
            />
            <CardItem
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwPiHf7dwFwKRIOfJ2SJt_LeN1C0JlrNy8g&usqp=CAU"
              text="Travel through the Islands of Bali in a private cruise"
              label="Luxury"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
