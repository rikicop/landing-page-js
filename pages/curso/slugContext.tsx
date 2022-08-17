import { createContext, useContext } from "react";

// Context API for Checkout
export type GlobalContent = {
  checkout: any;
  setCheckout: (c:any) => void;
}

export const MyGlobalContext = createContext<GlobalContent>({
checkout: 'Hello World', // set a default value
setCheckout: () => {},
})

export const useGlobalContext = () => useContext(MyGlobalContext)
// End Context API for Checkout
