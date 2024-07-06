import PropTypes from "prop-types";
import Anchor from "@ui/anchor";
import { useTheme } from "next-themes";

const SubMenu = ({ menu }) => {
    const { setTheme } = useTheme();
    return (
        <ul className="submenu mobile-menu-children">
            {menu.map((nav) => (
                <li key={nav.id}>
                    <Anchor 
                        path={nav.path}
                        onClick={() =>nav.text=="Light"? setTheme("light"): nav.text=="Dark"?setTheme("dark"):null}
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
