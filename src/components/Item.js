import React,{useState} from "react";

function Item({ name, category }) {
  const [AddCard,setAddCard] = useState(false);

  function handleAddCard(){
    setAddCard((AddCard) => !AddCard);
  }

  return (
    <li className={AddCard ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button
        className={AddCard ? "remove" : "add"}
        onClick={handleAddCard}
      >
        {AddCard ? "Remove From" : "Add to"} Cart
      </button>
    </li>
  );
}

export default Item;
