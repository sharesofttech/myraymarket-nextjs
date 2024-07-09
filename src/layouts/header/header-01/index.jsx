/* eslint-disable no-console */
import { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import Web3 from "web3";
import Logo from "@components/logo";
import MainMenu from "@components/menu/main-menu";
import MobileMenu from "@components/menu/mobile-menu";
import SearchForm from "@components/search-form/layout-01";
import FlyoutSearchForm from "@components/search-form/layout-02";
import UserDropdown from "@components/user-dropdown";
import ColorSwitcher from "@components/color-switcher";
import BurgerButton from "@ui/burger-button";
import Anchor from "@ui/anchor";
import Button from "@ui/button";
import { useOffcanvas, useSticky, useFlyoutSearch } from "@hooks";
import headerData from "../../../data/general/header-01.json";
import menuData from "../../../data/general/menu.json";
import userimage from "../../../../public/images/logo/profile.png";
import {
    Navbar,
    Collapse,
    Nav,
    NavItem,
    NavbarBrand,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Dropdown,

  } from "reactstrap";
  import Image from 'next/image';

  import Popup from "./popup";
  import WalletPopup from "./walletPopup";
  import 'bootstrap-icons/font/bootstrap-icons.css';
// import '../styles/globals.css';

const Header = ({ className }) => {
    const sticky = useSticky();
    const { offcanvas, offcanvasHandler } = useOffcanvas();
    const { search, searchHandler } = useFlyoutSearch();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [ethBalance, setEthBalance] = useState("");
    const [dropdownOpen, setDropdownOpen] =useState(false);
    const [model,setModel]=useState(false);
    const [walletPopup,setWalletPopup]=useState(false);

    const detectCurrentProvider = () => {
        let provider;
        if (window.ethereum) {
            provider = window.ethereum;
        } else if (window.web3) {
            provider = window.web3.currentProvider;
        } else {
            console.log(
                "Non-ethereum browser detected. You should install Metamask"
            );
        }
        return provider;
    };

    const toggle = () => setDropdownOpen((prevState) => !prevState);
    const onConnect = async () => {
        try {
            const currentProvider = detectCurrentProvider();
            if (currentProvider) {
                await currentProvider.request({
                    method: "eth_requestAccounts",
                });
                const web3 = new Web3(currentProvider);
                const userAccount = await web3.eth.getAccounts();
                const account = userAccount[0];
                const getEthBalance = await web3.eth.getBalance(account);
                setEthBalance(getEthBalance);
                setIsAuthenticated(true);
            }
        } catch (err) {
            console.log(err);
        }
    };

    const onDisconnect = () => {
        setIsAuthenticated(false);
    };
    const togglePopup = () => {
        setModel(!model);
      };

      const toggleWalletPopup=()=>{
        setWalletPopup(!walletPopup);
      }

    return (
        <>
            <header
                className={clsx(
                    "rn-header haeder-default black-logo-version header--fixed header--sticky",
                    sticky && "sticky",
                    className
                )}
            >
                <div className="container">
                    <div className="header-inner">
                       
                        <div className="header-right">
                        <Logo logo={headerData.logo} />

                            <div className="setting-option d-none d-lg-block">
                                <SearchForm />
                            </div>
                            <div className="setting-option rn-icon-list d-block d-lg-none">
                                <div className="icon-box search-mobile-icon">
                                    <button
                                        type="button"
                                        aria-label="Click here to open search form"
                                        onClick={searchHandler}
                                    >
                                        <i className="feather-search" />
                                    </button>
                                </div>
                                <FlyoutSearchForm isOpen={search} />
                            </div>
                            {/* {!isAuthenticated && (
                            )} */}
                            {/* {isAuthenticated && (
                                <div className="setting-option rn-icon-list user-account">
                                    <UserDropdown
                                        onDisconnect={onDisconnect}
                                        ethBalance={ethBalance}
                                    />
                                </div>
                            )} */}
                            
                            <div className="setting-option mobile-menu-bar d-block d-xl-none">
                                <div className="hamberger">
                                    <BurgerButton onClick={offcanvasHandler} />
                                </div>
                            </div>
                            {/* <div
                                id="my_switcher"
                                className="setting-option my_switcher"
                            >
                                <ColorSwitcher /> 
                            </div> */}
                        </div>
                        <div className="header-left">
                            <div className="mainmenu-wrapper">
                                <nav
                                    id="sideNav"
                                    className="mainmenu-nav d-none d-xl-block"
                                >
                                    <MainMenu menu={menuData} />
                                    <Dropdown isOpen={dropdownOpen} toggle={toggle} className="me-3">
        <DropdownToggle color="iboost-white d-flex align-items-center gap-2 user_login">
       
            {/* <Image
        src={userimage}
     
        style={{height:30,width:30}}
      /> */}
       {/* <i className="bi bi-alarm"></i> */}
      {/* <i className="bi bi-person-circle"></i> */}
      {/* <i className="fa-solid fa-user"></i> */}
          <div className="d-none d-xl-flex admin_name">
           {/* Connect  */}
           {global.language!=undefined ?global?.language["connect"] :"Connect"}
            {/* <Button>Connect</Button> */}
         
          </div>
          <span><i className="d-none d-xl-block bi bi-chevron-down position-absolute top-0 fw-bold pt-2 mt-1"></i></span>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={togglePopup}> <i class="bi bi-wallet-fill"></i> My Wallet</DropdownItem>
          <DropdownItem divider />
          <DropdownItem
        onClick={toggleWalletPopup}
          >
           <i class="bi bi-wallet-fill"></i> Change Wallet
          </DropdownItem>
       
         
          
       
          <DropdownItem ><i class="bi bi-person-badge"></i> My Info</DropdownItem>
          <DropdownItem divider />
          <DropdownItem > <Anchor className="its_new" path="/profile">
          <i class="bi bi-gear-wide-connected"></i>  Settings
                </Anchor></DropdownItem>
          <DropdownItem ><i class="bi bi-box-arrow-right"></i> Logout</DropdownItem>
        </DropdownMenu>
      </Dropdown>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <MobileMenu
                isOpen={offcanvas}
                onClick={offcanvasHandler}
                menu={menuData}
                logo={headerData.logo}
            />
   <Popup show={model} onClose={togglePopup}>
        {/* <h2>Popup Content</h2>
        <p>This is an example of a popup.</p> */}
      </Popup>
      <WalletPopup show={walletPopup} onClose={toggleWalletPopup}>
        {/* <h2>Popup Content</h2>
        <p>This is an example of a popup.</p> */}
      </WalletPopup>
        </>
    );
};

Header.propTypes = {
    className: PropTypes.string,
};

export default Header;
