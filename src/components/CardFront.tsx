import { useContext } from "react";

import cardLogo from "../assets/images/card-logo.svg";
import { CardContext } from "@/context/cardTypes";

const CardFront = () => {
  const { cardNumber, name, expiryMonth, expiryYear } = useContext(CardContext);
  return (
    <div className="md:w-[30rem] md:h-64 w-[70%] h-36 bg-card-front bg-no-repeat bg-cover rounded-lg md:px-10 md:py-6 p-4 flex flex-col justify-between">
      <div className="h-1/3">
        <img src={cardLogo} alt="card-logo" className="h-full" />
      </div>
      <div className="flex flex-col justify-between gap-2 md:h-2/5">
        <p className="md:text-3xl text-card md:tracking-[0.2rem] tracking-wider">
          {cardNumber ? cardNumber : "0000 0000 0000 0000"}
        </p>
        <div className="flex justify-between">
          <p className="uppercase text-card tracking-wider">
            {name ? name : "Jane Appleseed"}
          </p>
          <p className="uppercase text-card tracking-wider">
            {expiryMonth ? expiryMonth : "00"}/{expiryYear ? expiryYear : "00"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardFront;
