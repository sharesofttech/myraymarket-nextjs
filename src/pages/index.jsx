import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import HeroArea from "@containers/hero/layout-02";
import CreatorArea from "@containers/creator/layout-01";
import LiveExploreArea from "@containers/live-explore/layout-02";
import ServiceArea from "@containers/services/layout-01";
import NewestItmesArea from "@containers/product/layout-04";
import ExploreProductArea from "@containers/explore-product/layout-01";
import CollectionArea from "@containers/collection/layout-01";
import { normalizedData } from "@utils/methods";

// Demo data
import homepageData from "../data/homepages/home-02.json";
import sellerData from "../data/sellers.json";
import productData from "../data/products.json";
import collectionsData from "../data/collections.json";
import englishLanguage from "../data/language/english.json";
import koreanLanguage from "../data/language/korean.json";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

export async function setLanguage(language){
    // console.log("languagesss",global.code)
    global.code=language
    if(language=="ko"){
        global.language=koreanLanguage
    }
    else {
        global.language=englishLanguage
    }


}

const Home02 = () => {
  
    console.log("globallanguage",global.language,global.code);
    if(global?.code===undefined  || global.code=="en"){
        global.language=englishLanguage;
    }
    else {
        global.language=koreanLanguage;
    }
  
    const content = normalizedData(homepageData?.content || []);
    const liveAuctionData = productData
        .filter(
            (prod) =>
                prod?.auction_date && new Date() <= new Date(prod?.auction_date)
        )
        .sort(
            (a, b) =>
                Number(new Date(b.published_at)) -
                Number(new Date(a.published_at))
        )
        .slice(0, 4);
    const newestData = productData
        .sort(
            (a, b) =>
                Number(new Date(b.published_at)) -
                Number(new Date(a.published_at))
        )
        .slice(0, 4);
    return (
        <Wrapper>
            <SEO pageTitle="Home Page" />
            <Header />
            <main id="main-content">
                <HeroArea data={content["hero-section"]} />
                <NewestItmesArea
                    data={{
                        ...content["New NFTs"],
                        products: newestData,
                    }}
                />
                <CreatorArea
                    data={{
                        ...content["top-sller-section"],
                        creators: sellerData,
                    }}
                />
                <NewestItmesArea
                    data={{
                        ...content["newest-section"],
                        products: newestData,
                    }}
                />
                <LiveExploreArea
                    data={{
                        ...content["live-explore-section"],
                        products: liveAuctionData,
                    }}
                    gap={5}
                />
                <ExploreProductArea
                    data={{
                        ...content["explore-product-section"],
                        products: productData,
                    }}
                />
                <CollectionArea
                    data={{
                        ...content["collection-section"],
                        collections: collectionsData.slice(0, 4),
                    }}
                />
            </main>
            <Footer />
        </Wrapper>
    );
};

export default Home02;
