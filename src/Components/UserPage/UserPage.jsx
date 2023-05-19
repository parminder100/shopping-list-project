import userImage from "../../Assets/Img/userImage.png";
import categoriesIcon from "../../Assets/Img/categoriesIcon.png"; 
import "../UserPage/UserPage.css";
import {ProSidebarProvider } from 'react-pro-sidebar'
import {Menu, MenuItem } from 'react-pro-sidebar';

const UserPage = () =>{
    return(
        <>
            <ProSidebarProvider>
                <Menu className="prosidebar-menu">
                    <MenuItem><img className="user-image" src={userImage} alt="userImage.png" /></MenuItem>
                    <MenuItem><p className="user-page-name">Parminder <br/> Singh</p></MenuItem>
                    <MenuItem><p className="user-categories"><i className="fa fa-bookmark"></i>Templates</p></MenuItem>
                    <MenuItem><p className="user-categories"><img className="categories-icon" src={categoriesIcon} alt="categoriesIcon" />Categories</p></MenuItem>
                    <MenuItem><p className="user-categories"><i class='fa fa-pie-chart'></i>Analytics</p></MenuItem>
                    <MenuItem><p className="user-categories"><i class="fa fa-gear"></i>Settings</p></MenuItem>
                </Menu>
            </ProSidebarProvider>
        </>
    )
}
export default UserPage;