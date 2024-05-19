import { useContext } from "react";
import completeIcon from "../assets/images/icon-complete.svg";
import { Button } from "./ui/button";
import { CardContext } from "@/context/cardTypes";

const Result = () => {
  const { handleReset } = useContext(CardContext);
  return (
    <div className="md:w-2/5 w-full m-auto flex flex-col md:gap-6 gap-4 md:p-8 p-4">
      <div className="self-center">
        <img src={completeIcon} alt="check" />
      </div>
      <h1 className="uppercase text-2xl tracking-widest text-center font-medium text-very-dark-violet">
        Thank You!
      </h1>
      <p className="text-center text-dark-grayish-violet">
        We've added your card details
      </p>
      <Button
        className="mt-4 h-12 text-xl bg-very-dark-violet hover:bg-active-input-border tracking-wider"
        onClick={handleReset}
      >
        Continue
      </Button>
    </div>
  );
};

export default Result;
