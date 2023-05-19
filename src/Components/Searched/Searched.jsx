import { useState } from "react";
import "../Searched/Searched.css";
import UserPage from "../UserPage/UserPage";

const Searched = ({ handleSearch}) => {
  const [searchShoppingItem, setSearchShoppingItem] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [showUserpage, setShowUserPage] = useState(false);

  const handleChange = (e) => {
    setSearchShoppingItem(e.target.value);
    handleSearch(e.target.value);
  };

  const handleShowInput = () =>{
    setShowInput(!showInput);
  }

  const handleShowUserPage = () =>{
    setShowUserPage(!showUserpage);
  }
  return (
    <>
        {showUserpage && <UserPage />}
        <div className="container navbar-pt pt-4">
            <div className="row">
                <div className="col-sm-3">
                    <i onClick={handleShowUserPage} class="fa fa-bars"></i>
                </div>
                <div className="col-sm-9 search-input-and-alert-bell-column">
                    <div className="search-container">
                        <input className="search-input" style={{width: showInput? "91px" : "0px"}} type="text" value={searchShoppingItem} onChange={handleChange} />
                        <i onClick={handleShowInput} className="fa fa-search search-icon"></i>
                        <div>
                            <i class='fa fa-bell'></i>
                        </div>
                    </div>
                </div>
                <p className="user-name">What's up, Parminder!</p>
            </div>
        </div>
    </>
  );
};
export default Searched;
