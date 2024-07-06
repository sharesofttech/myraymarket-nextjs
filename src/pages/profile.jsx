import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import Breadcrumb from "@components/breadcrumb";
import EditProfileArea from "@containers/edit-profile";
// import PersonalInformation from "./personal-information";
import PersonalInformation from "@containers/edit-profile/personal-information";
import darksky from "../../public/images/logo/darksky.jpg";
import Image from 'next/image';
import TabContainer from "react-bootstrap/TabContainer";
import TabContent from "react-bootstrap/TabContent";
import TabPane from "react-bootstrap/TabPane";
import Nav from "react-bootstrap/Nav";
import clsx from "clsx";
import userimage from "../../public/images/logo/profile.png";
import { useState } from "react";
import { Button } from "reactstrap";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Profile = () => {
    const [personal,setPersonal]=useState(false);
    return(

    
    <Wrapper>
        <SEO pageTitle="Edit Profile" />
        <Header />
      
        <main id="main-content">
            {/* <Breadcrumb pageTitle="Edit Profile" currentPage="Edit Profile" /> */}
            {/* <EditProfileArea /> */}
            <Image
        src={darksky}
     
        style={{height:200,width:"100%"}}
      />
      <div className="profile_page">
      <div className="container">
        <div className={clsx("pd-title-area")}>
      <div className="profile_image">      
        <Image
        src={userimage}
     
        style={{height:30,width:30}}
      />
       </div>
      <div className="profile_title">
        <h4 className="title">Test title</h4>
        <h5 className="title">@Test title</h5>
      </div>
      <Button color="primary-alta" path="#">
                        Like
      </Button>
    </div>
  
       <TabContainer defaultActiveKey="nav-home">
        <div className={clsx("tab-wrapper-one")}>
            <nav className="tab-button-one">
                <Nav as="div" className="nav-tabs">
                    <Nav.Link as="button" eventKey="nav-home" onClick={()=>setPersonal(false)}>
                        Sale
                    </Nav.Link>
                    <Nav.Link as="button" eventKey="nav-profile" onClick={()=>setPersonal(false)}>
                        Holding
                    </Nav.Link>
                    <Nav.Link as="button" eventKey="nav-contact" onClick={()=>setPersonal(true)}>
                        Setting
                    </Nav.Link>
                </Nav>
            </nav>
           
        </div>
    </TabContainer>
    {personal===true &&
            <div className="col-lg-9 col-md-9 col-sm-12 mt_sm--30">
            <PersonalInformation />
            </div>
}
</div>
</div>
        </main>
        <Footer />
    </Wrapper>
    )
};

export default Profile;
