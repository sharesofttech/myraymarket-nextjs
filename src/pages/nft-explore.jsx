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
// import Map from "./map";
// import GoogleMapReact from "google-map-react";
// import Capture from "./Capture";

// Demo data
import productData from "../data/products.json";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const location = {
    address: "1600 Amphitheatre Parkway, Mountain View, california.",
    lat: 37.42216,
    lng: -122.08427,
  };

const Explore = () => (
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
                    <Nav.Link as="button" eventKey="nav-home">
                        Bids
                    </Nav.Link>
                    <Nav.Link as="button" eventKey="nav-profile">
                        Details
                    </Nav.Link>
                    <Nav.Link as="button" eventKey="nav-contact">
                        History
                    </Nav.Link>
                </Nav>
            </nav>
           
        </div>
    </TabContainer>
       
        </div>
      </div>
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
        </main>
        <Footer />
    </Wrapper>
);

export default Explore;
