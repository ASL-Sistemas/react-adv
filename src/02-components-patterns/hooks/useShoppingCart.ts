import { useState } from "react";
import { onChangeArgs, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {
  
    const [shoppingCart, setShoppingCart] = useState<{[key: string]: ProductInCart}>({});

  const onProductCartChange = ({ count, product }: onChangeArgs): void => {
    
    setShoppingCart((oldShoppingCart) => {
    
        if(count === 0){
            const {[product.id]: toDelete, ...rest} = oldShoppingCart;
            return rest;
        }

        return {
            ...oldShoppingCart,
            [product.id]: {...product, count}
        }

    });
  };

  return {
    shoppingCart,
    onProductCartChange,
  };
};
