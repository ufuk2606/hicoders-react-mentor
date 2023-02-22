import { createContext, useState } from "react";

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
    const [productList, setProductList] = useState([]);
    const [totalCounter, setTotalCounter] = useState(0);
    const [grandTotal, setGrandTotal] = useState(0);
   

  return (
    <ProductContext.Provider
      value={{
        productList,
        setProductList,
        totalCounter,
        setTotalCounter,
        grandTotal,
        setGrandTotal,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;