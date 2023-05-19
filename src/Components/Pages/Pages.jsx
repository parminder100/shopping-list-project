import { useState } from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Searched from "../Searched/Searched";
import SearchItem from "../SearchItem/SearchItem";
import ShoppingItems from "../ShoppingItems/ShoppingItems";

const Pages = () =>{
    const [inputShoppingItem, setInputShoppingItem] = useState([]);

    const handleShoppingItem = (newItemText) =>{
        const newItem = {text: newItemText, isDone:false, count: 0}
        setInputShoppingItem([...inputShoppingItem, newItem]);
    }

    const CompleteItems = (index) =>{
        const updatedItems = [...inputShoppingItem];
        const currentItem = updatedItems[index];

        if (currentItem && currentItem.hasOwnProperty('isDone')) {
            currentItem.isDone = !currentItem.isDone;
            setInputShoppingItem(updatedItems);
        }
    }

    const DeleteItems = (index) =>{
        const updatedItem = [...inputShoppingItem];
        updatedItem.splice(index,1);
        setInputShoppingItem(updatedItem);
    }

    const incrementButton = (index) =>{
        const updatedItem = [...inputShoppingItem];
        updatedItem[index].count++;
        setInputShoppingItem(updatedItem);
    }

    const decrementButton = (index) =>{
        const updatedItem = [...inputShoppingItem];
        if(updatedItem[index].count > 0){
            updatedItem[index].count--;
            setInputShoppingItem(updatedItem);
        }
    }

    const calculateTotalCount = () =>{
        let totalCount = 0;
        for(const item of inputShoppingItem){
            totalCount += item.count;
        }
        return totalCount;
    }
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<ShoppingItems 
                    inputShoppingItem = {inputShoppingItem} CompleteItems={CompleteItems} 
                    DeleteItems={DeleteItems} incrementButton={incrementButton} 
                    decrementButton={decrementButton} calculateTotalCount={calculateTotalCount} />}></Route>
                    <Route exact path="/searchitems" element={<SearchItem handleShoppingItem = {handleShoppingItem} CompleteItems = {CompleteItems} DeleteItems={DeleteItems} incrementButton={incrementButton} decrementButton={decrementButton} calculateTotalCount={calculateTotalCount} />}></Route>
                    <Route exact path="/" element={<Searched />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Pages;