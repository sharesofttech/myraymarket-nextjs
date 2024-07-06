import PropTypes from "prop-types";
import clsx from "clsx";
import Button from "@ui/button";
import Accordion from "@ui/accordion";

const SupportArea = ({ className, space }) => (
    <div
        className={clsx(
            "rn-support-area",
            space === 1 && "rn-section-gapTop",
            className
        )}
    >
        <div className="faq_section">
        <div className="container">
            <div className="row g-6">
                <div className="col-lg-12">
                    <div className="rn-support-read">
                        <div className="read-card">
                            <h4>What is an NFT?</h4>
                            <div className="content">
                                <p>
                                What is an NFT?NFT stands for Non-Fungible Token, which is a token that represents a unique item or asset. Each NFT has its own distinct value and attributes, making it non-interchangeable and distinguishable from other NFTs. Additionally, NFTs are recorded on the blockchain, allowing for algorithmic verification and the ability to track and authenticate ownership.
                                </p>
                               
                            </div>
                        </div>
                        <div className="read-card">
                            <h4>What is NFT minting?</h4>
                            <div className="content">
                                <p>
                                NFT minting refers to the process of registering digital assets on the blockchain and issuing them as unique tokens. Minting can be divided into two main types: single minting and multiple minting. Single Minting: This refers to the issuance of a unique asset as a single NFT. Multiple Minting: This involves issuing multiple NFTs based on a single asset. In this case, the number of NFTs to be minted is predetermined, and each NFT is issued with its own unique characteristics. Therefore, even for the same asset, each NFT has a certain level of scarcity based on the number of copies minted.
                                </p>
                             
                            </div>
                        </div>
                        <div className="read-card">
                            <h4>How is the value of NFTs determined?</h4>
                            <div className="content">
                                <p>
                                The uniqueness and limited supply of the digital assets represented by NFTs play a significant role in increasing their value. Additionally, NFTs can gain value if they possess specific attributes or provide special functionalities.
                                </p>
                            </div>
                        </div>
                        <div className="read-card">
                            <h4>How can I purchase an NFT?</h4>
                            <div className="content">
                                <p>
                                Install a blockchain-enabled decentralized wallet such as 'lanGWallet' or 'MetaMask,' connect it to an NFT marketplace, search for the desired NFT, and make the payment using cryptocurrency. Once the transaction is completed, the purchased NFT will be stored in the connected wallet.  </p>
                            </div>
                        </div>
                        <div className="read-card">
                            <h4>What is the process for selling NFTs?</h4>
                            <div className="content">
                                <p>
                                What is the process for selling NFTs?Similar to the purchasing process, you need to connect the wallet where your NFT is stored, register the NFT you want to sell, and set a price. Depending on the type of NFT, you can choose between fixed prices or auction formats. Note that NFTs under staking cannot be sold.   </p>
                            </div>
                        </div>
                        <div className="read-card">
                            <h4>Which cryptocurrencies are used for NFT transactions?</h4>
                            <div className="content">
                                <p>
                                lanG, BNB, USDT (BEP 20), and others may be used depending on the type of NFT. 
                                </p>                           </div>
                        </div>
                        <div className="read-card">
                            <h4>How are NFT transaction fees determined?</h4>
                            <div className="content">
                                <p>
                                By default, NFT creators receive a 2% commission on all sales. However, the fees may vary depending on the type of NFT or the selling method. You can check the fees in the NFT information. In auction-style transactions, fees are only charged if the bid is successful.                                </p>                           </div>
                        </div>
                        <div className="read-card">
                            <h4>How are NFT copyrights managed?</h4>
                            <div className="content">
                                <p>
                                The purchase of an NFT grants digital ownership of the asset but does not include
                                 copyrights or commercial usage rights.                     </p>   </div>
                                 </div>
                        <Button path="/create" className="mr--15">
                            Create
                        </Button>
                        <Button href="/contact" color="primary-alta">
                            Contact Us
                        </Button>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="support-accordion">
                        <Accordion
                            defaultActiveKey={0}
                            items={[
                                {
                                    id: 0,
                                    title: "What is the NFTs reward system?",
                                    description:
                                        "<strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the, though the transition does limit overflow.",
                                },
                                {
                                    id: 1,
                                    title: "Which servers are available?",
                                    description:
                                        "<strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the, though the transition does limit overflow.",
                                },
                                {
                                    id: 2,
                                    title: "Which miners are supported?",
                                    description:
                                        "<strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the, though the transition does limit overflow.",
                                },
                                {
                                    id: 3,
                                    title: "Keep It Short, Simple, and to the Point.",
                                    description:
                                        "<strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the, though the transition does limit overflow.",
                                },
                                {
                                    id: 4,
                                    title: "How quickly can I get customer support?",
                                    description:
                                        "<strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the, though the transition does limit overflow.",
                                },
                                {
                                    id: 5,
                                    title: "Okay, I'm afraid to ask but... what is SEO?",
                                    description:
                                        "<strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the, though the transition does limit overflow.",
                                },
                            ]}
                        />
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
);

SupportArea.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1, 2]),
};
SupportArea.defaultProps = {
    space: 1,
};

export default SupportArea;
