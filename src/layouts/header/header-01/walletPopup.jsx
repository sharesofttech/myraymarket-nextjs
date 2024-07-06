import React from 'react';
import clsx from "clsx";
import { Button } from 'react-bootstrap';
import Image from 'next/image';
import icon1 from "../../../../public/images/logo/icon1.png";
import icon2 from "../../../../public/images/logo/icon2.png";
import icon4 from "../../../../public/images/logo/icon4.png";
import icon3 from "../../../../public/images/logo/icon3.png";

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
                  <Image src={icon1}  style={{borderRadius: "10px", verticalAlign: "middle",width:"30px",marginRight:"10px"}}></Image>
                 MYRAY Wallet
                </Button>
                <Button
                    color={ "primary-alta"}
                    className="mt--30"
                    // onClick={handleBidModal}
                >
                      <Image src={icon2}   style={{borderRadius: "10px", verticalAlign: "middle",width:"30px",marginRight:"10px"}}></Image>
                  Metamask
                </Button>
                <Button
                    color={ "primary-alta"}
                    className="mt--30"
                    // onClick={handleBidModal}
                >
                       <Image src={icon3}  style={{borderRadius: "10px", verticalAlign: "middle",width:"30px",marginRight:"10px"}}></Image>
              Kaikas
                </Button>
                <Button
                    color={ "primary-alta"}
                    className="mt--30"
                    // onClick={handleBidModal}
                >
                      <Image src={icon4} style={{borderRadius: "10px", verticalAlign: "middle",width:"30px",marginRight:"10px"}}></Image>
                Wallet Connect
                </Button>

             
            </div>
      </div>
    </div>
  );
};

export default WalletPopup;