import React, { useContext } from "react";
import { OfferContext } from "../context/OfferContextProvider";

export const Offer: React.FC = () => {
  const { showOffer, setShowOffer } = useContext(OfferContext);

  const handleNoThanks = () => {
    setShowOffer(false);
  };

  if (!showOffer) {
    return null;
  }

  return (
    <div className="offer-container bg-gradient-to-r bg-darkRed text-white font-inter flex justify-between items-center px-28 py-2">
      <div className="text-container flex justify-start items-center flex-grow">
        <h3 className="font-bold text-lg mr-8">Make MyNews your homepage</h3>
        <p className="text-sm">
          Every day discover what's trending on the internet!
        </p>
      </div>
      <div className="button-container flex justify-end items-center flex-grow-0">
        <button
          className="m-2 text-lg font-bold text-black bg-white rounded-lg px-6 py-2 hover:bg-darkRed hover:text-white transition duration-200"
          onClick={handleNoThanks}
        >
          No, thanks
        </button>
        <button className="m-2 text-lg font-bold text-white bg-darkRed rounded-lg px-6 py-2 hover:bg-white hover:text-black transition duration-200">
          GET
        </button>
      </div>
    </div>
  );
};

export default Offer;
