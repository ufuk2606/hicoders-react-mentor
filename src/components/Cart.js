import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import "../index.css";

function Cart() {
  const {
    productList,
    setProductList,
    grandTotal,
    setGrandTotal,
    totalCounter,
    setTotalCounter,
  } = useContext(ProductContext);

  const deleteProduct = (pId) => {
    const selectedProduct = productList.filter(
      (product) => product.product.id === pId
    );
    const outNumber =
      selectedProduct[0].product.price * selectedProduct[0].product.count;
    setProductList(productList.filter((product) => product.product.id !== pId));
    setGrandTotal(grandTotal - outNumber);
    setTotalCounter(totalCounter - selectedProduct[0].product.count);
  };
  const handleIncrease = (pId) => {
    const selectedProduct = productList.filter(
      (product) => product.product.id === pId
    );
    selectedProduct[0].product.count += 1;
    setGrandTotal(grandTotal + selectedProduct[0].product.price);
    setTotalCounter(totalCounter + 1);
  };

  const handleDecrease = (pId) => {
    const selectedProduct = productList.filter(
      (product) => product.product.id === pId
    );

    if (selectedProduct[0].product.count === 1) {
      deleteProduct(pId);
    } else {
      selectedProduct[0].product.count -= 1;
      setGrandTotal(grandTotal - selectedProduct[0].product.price);
      setTotalCounter(totalCounter - 1);
    }
  };

  return (
    <div>
      <div className="cart-style container">
        {productList.map((product) => {
          const total = product.product.price * product.product.count;
          return (
            <div className="row" key={product.product.id}>
              <div className=" col-2 m-5">
                <img
                  src={product.product.image}
                  alt={product.product.title}
                  style={{ width: "300px", height: "200px" }}
                />
              </div>
              <div className="col-8 m-5">
                <div className="row ms-3">
                  <div className="col-4">
                    <h3>{product.product.title}</h3>
                    <p>{product.product.description}</p>
                    <p>{product.product.category}</p>
                  </div>
                  <div className="col-3">
                    <p>Price : {product.product.price}</p>
                    <p>Count : {product.product.count}</p>
                    <button
                    className="btn-increase-decrease"
                      onClick={(e) => handleIncrease(product.product.id)}
                      type="button"
                    >
                      +
                    </button>
                    <button
                    className="btn-increase-decrease"
                      onClick={(e) => handleDecrease(product.product.id)}
                      type="button"
                    >
                      -
                    </button>
                  </div>

                  <div className="col-3 ">
                    <h4>Total</h4>
                    <h4> {total} </h4>
                  </div>
                  <div className="col-1">
                    <button
                      className="bg-danger rounded text-white border-0 p-2 px-3"
                      type="button"
                      onClick={(e) => deleteProduct(product.product.id)}
                    >
                      {" "}
                      <i className="bi bi-trash fs-4 px-3"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-center content text-white">
        <h1>Grand Total : {grandTotal} </h1>
      </div>
    </div>
  );
}

export default Cart;
