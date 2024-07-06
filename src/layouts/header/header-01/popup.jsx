import React from 'react';
import clsx from "clsx";
import { Button } from 'react-bootstrap';

const Popup = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="overlay">
      <div className="popup">
        <button className="closeButton" onClick={onClose}>
          &times;
        </button>
        {/* <div className="content">{children}</div> */}
        <div className={clsx("place-bet-area")}>
                <div className="rn-bet-create">
                    <div className="bid-list winning-bid">
                       
                        <div className="top-seller-inner-one">
                            <div className="top-seller-wrapper">
                               

                                <div className="top-seller-content">
                                    <span className="heighest-bid">
                                     Total Balance
                                      
                                    </span>
                                    <span className="count-number">
                                       $0.00 USD
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                 
                </div>
                <Button
                    color={ "primary-alta"}
                    className="mt--30"
                    // onClick={handleBidModal}
                >
                   Add Funds
                </Button>

                <Button
                    color={ "primary-alta"}
                    className="mt--30"
                    // onClick={handleBidModal}
                >
                  View a list of available tokens
                </Button>
            </div>
      </div>
    </div>
  );
};

export default Popup;