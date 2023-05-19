import 'bootstrap/dist/css/bootstrap.min.css';
import "../SearchItem/SearchItem.css";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SearchItem = ({handleShoppingItem, CompleteItems}) => {
    const [enterShoppingItem, setEnterShoppingItem] = useState("");

    const navigate = useNavigate();
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        handleShoppingItem(enterShoppingItem);
        CompleteItems(enterShoppingItem);
        navigate(`/`)
    }

  return (
    <>
        <form  className='container text-center mt-4'>
            <div className='search-item-container'>
                <input value={enterShoppingItem} onChange={(e)=>setEnterShoppingItem(e.target.value)} className='input-task' type="text" placeholder="Enter New Task" />
                <div className='mt-4'>
                    <button onClick={handleSubmit} className='task-submit-btn'>Submit</button>
                </div>
            </div>
        </form>
    </>
  );
};
export default SearchItem;
