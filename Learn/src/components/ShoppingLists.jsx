import { useState } from "react";

const ShoppingLists = () => {
  const [items, setItems] = useState([]);
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit =(e)=>{
    e.preventDefault()
    if(!product|| !quantity)return;

    const newItems ={
        "product" : product,
        "quantity":parseInt(quantity)
    }
    setItems((prev)=>[
        ...prev, newItems
    ])
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="product"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
        />
        <input
          type="text"
          name="product"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button type="submit"> Add </button>
      </form>
      <ul>
        {items.map((prod, index) => (
          <li key={index}>
            {prod.product} - Quantity - {prod.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingLists;
