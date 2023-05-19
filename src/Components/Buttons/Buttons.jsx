import "../Buttons/Buttons.css";

const Buttons = ({onCompleteItems, onDelete, onIncrement, onDecrement, count}) =>{
    return(
        <>
            <input type="radio" className="mark-btn" onClick={onCompleteItems} />
            <div className="delete-btn" onClick={onDelete}><i class="fa fa-trash-o"></i></div>
            <div className="shopping-item-btn">
                <div onClick={onDecrement}><i class="fa fa-angle-left"></i></div>
                <div className="number-of-shopping-items">{count}</div>
                <div onClick={onIncrement}><i class="fa fa-angle-right"></i></div>
            </div>
        </>
    )
}
export default Buttons;