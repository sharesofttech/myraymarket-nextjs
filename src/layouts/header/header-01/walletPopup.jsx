import React from 'react';
import clsx from "clsx";
import { Button } from 'react-bootstrap';

const WalletPopup = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="overlay changewallet">
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
                                    Please select a wallet to use
                                      
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
                 MYRAY Wallet
                </Button>
                <Button
                    color={ "primary-alta"}
                    className="mt--30"
                    // onClick={handleBidModal}
                >
                  Metamask
                </Button>
                <Button
                    color={ "primary-alta"}
                    className="mt--30"
                    // onClick={handleBidModal}
                >
              Kaikas
                </Button>
                <Button
                    color={ "primary-alta"}
                    className="mt--30"
                    // onClick={handleBidModal}
                >
                Wallet Connect
                </Button>

             
            </div>
      </div>
    </div>
  );
};

export default WalletPopup;