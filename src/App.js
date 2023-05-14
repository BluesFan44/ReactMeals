import { useState } from "react";
import Header from "./Components/Layout/header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/cart";
import CartProvider from "./store/cart-provider";

function App() {
  const [cartIsShown, setCartIsShown] = useState();

  const showCartHandller = () => {
    setCartIsShown(true);
  };

  const hideCartHandller = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandller} />}
      <Header onShowCart={showCartHandller} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
