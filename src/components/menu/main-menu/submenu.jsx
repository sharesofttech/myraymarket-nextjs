import PropTypes from "prop-types";
import Anchor from "@ui/anchor";
import { useTheme } from "next-themes";



const SubMenu = ({ menu }) => {

    const { setTheme } = useTheme();
    console.log("menuuusss",menu);
    return(
    <ul className="submenu">
        {menu.map((nav) => (
            <li key={nav.id}>
                <Anchor
                    path={nav.path}
                    className={nav.isLive ? "live-expo" : ""}
                    onClick={() =>nav.text=="Light"? setTheme("light"): nav.text=="Dark"?setTheme("dark"):null}
                    // onClick={()=>console.log("checkingss")}
                >
                    {nav.text}
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
