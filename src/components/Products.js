import React, { useEffect, useState, useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import "../index.css";

function Products() {
  const [data, setData] = useState();
  const [filteredData, setFilteredData] = useState();
  const {
    productList,
    setProductList,
    totalCounter,
    setTotalCounter,
    grandTotal,
    setGrandTotal,
  } = useContext(ProductContext);

  const getData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const incomingData = await response.json();
      setData(incomingData.products);
      setFilteredData(incomingData.products);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleClick = (pProduct, e) => {
    e.preventDefault();
    const selectedProduct = productList.filter(
      (product) => product.product.id === pProduct.id
    );

    if (selectedProduct.length === 0) {
      const product = {
        id: pProduct.id,
        image: pProduct.thumbnail,
        title: pProduct.title,
        description: pProduct.description,
        category: pProduct.category,
        price: pProduct.price,
        count: 1,
      };
      setGrandTotal(grandTotal + pProduct.price);
      setTotalCounter(totalCounter + 1);
      setProductList([...productList, { product }]);
    } else {
      selectedProduct[0].product.count += 1;
      setTotalCounter(totalCounter + 1);
      setGrandTotal(grandTotal + selectedProduct[0].product.price);
    }
  };

  const getSelectedProduct = (e) => {
    e.preventDefault();
    const selectedData = data?.filter(
      (product) => product?.category === e.target.value
    );
    setFilteredData(selectedData);
  };

  return (
    <div className="row me-0 vh-100">
      <div className="sidebar col-2 ">
        <button
          className="btn-product d-block fs-1"
          type="button"
          value="products"
          onClick={() => getData()}
        >
          {" "}
          Products{" "}
        </button>
        <button
          className="btn-product d-block fs-4 ms-3"
          type="button"
          value="smartphones"
          onClick={(e) => getSelectedProduct(e)}
        >
          {" "}
          Smartphones{" "}
        </button>
        <button
          className="btn-product d-block fs-4 ms-3"
          type="button"
          value="laptops"
          onClick={(e) => getSelectedProduct(e)}
        >
          {" "}
          Laptops{" "}
        </button>
        <button
          className="btn-product d-block fs-4 ms-3"
          type="button"
          value="fragrances"
          onClick={(e) => getSelectedProduct(e)}
        >
          {" "}
          Fragrances{" "}
        </button>
        <button
          className="btn-product d-block fs-4 ms-3"
          type="button"
          value="skincare"
          onClick={(e) => getSelectedProduct(e)}
        >
          {" "}
          Skincare{" "}
        </button>
        <button
          className="btn-product d-block fs-4 ms-3"
          type="button"
          value="groceries"
          onClick={(e) => getSelectedProduct(e)}
        >
          {" "}
          Groceries{" "}
        </button>
        <button
          className="btn-product d-block fs-4 ms-3"
          type="button"
          value="home-decoration"
          onClick={(e) => getSelectedProduct(e)}
        >
          {" "}
          Home-decoration{" "}
        </button>
      </div>
      <div className="content col-10">
        <div className="d-flex flex-wrap justify-content-center">
          {filteredData?.map((product) => {
            return (
              <div
                key={product.id}
                className="card-style card mx-3 my-2 mt-3"
                style={{ width: "20rem", backgroundColor: "#dae9ae" }}
              >
                <img
                  src={product?.thumbnail}
                  className="card-img-top m-auto p-3 "
                  height="250px"
                  alt={product?.title}
                />
                <div className="m-2">
                  <h6>{product?.title}</h6>
                  <p> {product?.description}</p>
                  <hr />
                  <p>Category: {product?.category}</p>
                  <hr />
                  <p>Rating: {product?.rating}</p>
                  <hr />
                  <p>Stock: {product?.stock}</p>
                  <hr />
                  <div className="d-flex align-items-center justify-content-between">
                    <p>Price: {product?.price}</p>
                    <span>
                      <button
                        onClick={(e) => handleClick(product, e)}
                        className=" border-0 text-success"
                        style={{ backgroundColor: "#dae9ae" }}
                      >
                        <i className="bi bi-cart-plus-fill fs-3"></i>
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Products;
