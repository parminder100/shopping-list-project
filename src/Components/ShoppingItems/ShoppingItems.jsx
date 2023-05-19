import { useNavigate} from "react-router-dom";
import Buttons from "../Buttons/Buttons";
import Searched from "../Searched/Searched";
import "../ShoppingItems/ShoppingItems.css";
import { useState } from "react";

const ShoppingItems = ({inputShoppingItem, CompleteItems, DeleteItems, incrementButton, decrementButton, calculateTotalCount}) =>{
    const [searchedShoppingItem, setSearchedShoppingItem] = useState("");

    const navigate = useNavigate();

    const AddShoppingItems = () =>{
        navigate("/searchitems")
    }


    const handleSearch = (searchedItem) => {
        setSearchedShoppingItem(searchedItem);
    };

    const filteredItems = inputShoppingItem.filter((item) =>
    item.text.toLowerCase().includes(searchedShoppingItem.toLowerCase())
    );
    return(
        <>
            <div className="container shopping-items-container">
                <Searched handleSearch={handleSearch} />
                <div className="shopping-items-list">
                    <p className="shopping-items-heading">Today's Task</p>
                    <p className="shopping-items-name">Lunch Break</p>
                    <p className="shopping-items-name">Meditation</p>
                    {
                        filteredItems.map((item,index)=>(
                            <>
                                <div className="items-list">
                                    <p style={{textDecoration: item.isDone ? "line-through" : "none"}} key={index} className="shopping-items-name custome-item-name">{item.text}</p>
                                    <Buttons
                                    onCompleteItems = {()=>CompleteItems(index)}
                                    onDelete = {()=>DeleteItems(index)}
                                    onIncrement = {()=>incrementButton(index)}
                                    onDecrement = {()=>decrementButton(index)}
                                    count = {item.count}
                                    />
                                </div>
                            </>
                        ))
                    }
                    <p className="text-end total-shopping-items">Total Shopping Items: {calculateTotalCount()}</p>
                    <button className="add-shopping-items" 
                        onClick={AddShoppingItems}>
                        <i className="fa fa-plus"></i>
                    </button>
                    <p className="copyright">© 2023 All Rights Reserved. Developed by Parminder Singh</p>
                </div>
            </div>
        </>
    )
}
export default ShoppingItems;