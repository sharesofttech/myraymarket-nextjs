import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import Breadcrumb from "@components/breadcrumb";
import ExploreCarouselArrowArea from "@containers/explore-product/layout-05";
import ExploreCarouselDotsArea from "@containers/explore-product/layout-06";
import ExploreCarouselBothArea from "@containers/explore-product/layout-07";
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

const Home02 = () => (
    <Wrapper>
        <SEO pageTitle="Explore Carousel" />
        <Header />
        <main id="main-content">
        <div className="google-map">
          <div className="container">  
        {/* <img src={require("./capture.png")} >
        </img>        */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24183.6237183013!2d-73.9896985627702!3d40.74106047784459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a3f71c1f67%3A0xde2a6125ed704926!2sFlatiron%20Building!5e0!3m2!1sen!2sin!4v1720193735421!5m2!1sen!2sin"
         width="600" height="450" style={{border:0}}
        //   allowfullscreen="" 
          loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
            {/* <Breadcrumb
                pageTitle="Explore Carousel"
                currentPage="Explore With Carousel"
            /> */}
            {/* <ExploreCarouselArrowArea
                space={2}
                data={{
                    section_title: {
                        title: "Explore Carousel With Arrow",
                    },
                    products: productData.slice(0, 8),
                }}
            /> */}
            {/* <ExploreCarouselDotsArea
                space={3}
                data={{
                    section_title: {
                        title: "Explore Carousel Dots",
                    },
                    products: productData.slice(0, 8),
                }}
            /> */}
            {/* <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBXJ7yP9cDoN8Cng_jT8uAEXGiBnt8T-lM&callback=initMap"></script> */}
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

export default Home02;
