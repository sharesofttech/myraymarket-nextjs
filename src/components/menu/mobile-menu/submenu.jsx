import PropTypes from "prop-types";
import Anchor from "@ui/anchor";
import { useTheme } from "next-themes";
import { setLanguage } from "src/pages";

const SubMenu = ({ menu }) => {
    const { setTheme } = useTheme();
    return (
        <ul className="submenu mobile-menu-children">
            {menu.map((nav) => (
                <li key={nav.id}>
                    <Anchor 
                        path={nav.path}
                        onClick={() =>
                           { nav.text=="Light"? setTheme("light"): nav.text=="Dark"?setTheme("dark"):null
                            nav.language=="ko"?setLanguage("ko"): nav.language=="en" ?setLanguage("en"):null
                            nav.language=="ko"?global.code="ko": nav.language=="en"?global.code="en":null
    

                           }
                        }
                    >
                        {/* {nav.text} */}
                        {global?.language!=undefined && global.language[nav?.text]!=undefined? global?.language[nav?.text] : nav.text}

                        {nav?.icon && <i className={`feather ${nav.icon}`} />}
                    </Anchor>
                </li>
            ))}
        </ul>
    )
    };

SubMenu.propTypes = {
    menu: PropTypes.arrayOf(PropTypes.shape({})),
};

export default SubMenu;
