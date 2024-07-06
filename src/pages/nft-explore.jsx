import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import Breadcrumb from "@components/breadcrumb";
import ExploreCarouselArrowArea from "@containers/explore-product/layout-05";
import ExploreCarouselDotsArea from "@containers/explore-product/layout-06";
import ExploreCarouselBothArea from "@containers/explore-product/layout-07";
import TabContainer from "react-bootstrap/TabContainer";
import TabContent from "react-bootstrap/TabContent";
import TabPane from "react-bootstrap/TabPane";
import Nav from "react-bootstrap/Nav";
import clsx from "clsx";
import { useState } from "react";
// import Map from "./map";
// import GoogleMapReact from "google-map-react";
// import Capture from "./Capture";

// Demo data
import productData from "../data/products.json";
import BidsData from "../data/bids.json";
import History from "../data/history.json";
import { useStateWithHistory } from "react-use";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const location = {
    address: "1600 Amphitheatre Parkway, Mountain View, california.",
    lat: 37.42216,
    lng: -122.08427,
  };

const Explore = () => {
    const [bids,setBids]=useState(false);
    const[details,setDetail]=useState(false);
    const[history,setHistory]=useState(false);
    return(
    <Wrapper>
        <SEO pageTitle="Explore Carousel" />
        <Header />
        <main id="main-content">
        <div className="google-map">
          <div className="container">  
        {/* <img src={require("./capture.png")} >
        </img>        */}
        <text>Real Asset-Based Profitable NFTs</text>
        <TabContainer defaultActiveKey="nav-home">
        <div className={clsx("tab-wrapper-one")}>
            <nav className="tab-button-one">
                <Nav as="div" className="nav-tabs">
                    <Nav.Link as="button" eventKey="nav-home"  onClick={()=>{setBids(true),setDetail(false),setHistory(false)}}>
                        Bids
                    </Nav.Link>
                    <Nav.Link as="button" eventKey="nav-profile"  onClick={()=>{setDetail(true),setBids(false),setHistory(false)}}>
                        Details
                    </Nav.Link>
                    <Nav.Link as="button" eventKey="nav-contact" onClick={()=>{setHistory(true),setBids(false),setDetail(false)}}>
                        History
                    </Nav.Link>
                </Nav>
            </nav>
           
        </div>
    </TabContainer>
       
        </div>
      </div>
      {bids===true &&
            <ExploreCarouselBothArea
                space={4}
                data={{
                    section_title: {
                        // title: "Explore Carousel Both",
                        title: "Products",
                    },
                    products: productData.slice(0, 8),
                }}
            />
}
{history===true &&
            <ExploreCarouselBothArea
                space={4}
                data={{
                    section_title: {
                        // title: "Explore Carousel Both",
                        title: "Products",
                    },
                    products: History.slice(0, 8),
                }}
            />
}
{details===true &&
            <ExploreCarouselBothArea
                space={4}
                data={{
                    section_title: {
                        // title: "Explore Carousel Both",
                        title: "Products",
                    },
                    products: BidsData.slice(0, 8),
                }}
            />
}
        </main>
        <Footer />
    </Wrapper>
    )
};

export default Explore;
