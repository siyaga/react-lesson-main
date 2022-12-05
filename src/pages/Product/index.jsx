import React, { useEffect, useState } from "react";
import AddProducts from "./fragments/addproducts/AddProducts";
import Button from "./fragments/button/Button";
import CardBody from "./fragments/cards/CardBody";
import Category from "./fragments/categories";
import Header from "./fragments/header/Header";
import Search from "./fragments/search/Search";
import './styles.css';

function Product() {
  const [items, setItem] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [addedItems, setAddedItem] = useState([]);
  const [showAddProducts, setShowAddProducts] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  function changingSearchData(e) {
    setSearchValue(e.target.value);
  }

  const itmesFilter = items.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  function addItem(item) {
    item.addNumber = 1;
    const itemArr = addedItems;
    setAddedItem([...itemArr, item]);
  }

  function removeItem(item) {
    const newItems = addedItems.filter((addedItem) => addedItem.id !== item.id);
    setAddedItem(newItems);
  }

  return (
    <div className="body__container">
      <div className="navaaa">
        <Header />
        <div className="navaaa-right">
          <Search
            products={items}
            value={searchValue}
            onChangeData={changingSearchData}
          />
          <Button num={addedItems.length} click={setShowAddProducts} />
        </div>
      </div>
      <Category />

      {showAddProducts && (
        <AddProducts
          click={setShowAddProducts}
          items={addedItems}
          removeItem={removeItem}
          setAddedItem={setAddedItem}
        />
      )}
      <CardBody
        products={itmesFilter}
        addItem={addItem}
        removeItem={removeItem}
        addedItems={addedItems}
      />
    </div>
  );
}

export default Product;
