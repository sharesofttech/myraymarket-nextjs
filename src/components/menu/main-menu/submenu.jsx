import PropTypes from "prop-types";
import Anchor from "@ui/anchor";
import { useTheme } from "next-themes";



const SubMenu = ({ menu }) => {

    const { setTheme } = useTheme();
 
    return(
    <ul className="submenu">
        {menu.map((nav) => {
            // console.log("navsss",nav)
            return(

            
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
                {nav?.submenu && 
                <ul className="submenuchild">
             {   nav?.submenu?.length>0 && nav?.submenu?.map((item)=>{
                    return(
                        
                        <li key={item.id}>
                           <Anchor
                               path={item.path}
                       className={item.isLive ? "live-expo" : ""}
                           onClick={() =>item.text=="Light"? setTheme("light"): item.text=="Dark"?setTheme("dark"):null}
    // onClick={()=>console.log("checkingss")}
                      >
         {item.text}
    {item?.icon && <i className={`feather ${item.icon}`} />}
    
    </Anchor>
    </li>
   
                    )
                
                })}
                 </ul>
                  
              

                    }
               
            </li>
            )
})}
    </ul>
    )
};

SubMenu.propTypes = {
    menu: PropTypes.arrayOf(PropTypes.shape({})),
};

export default SubMenu;
