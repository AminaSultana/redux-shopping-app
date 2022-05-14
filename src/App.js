import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notifications";
import { uiActions } from "./store/uiSlice";

let isInitial=true;

function App() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const show = useSelector((state) => state.ui.isVisible);
  const notification = useSelector((state) => state.ui.notification);


  useEffect(() => {
    const sendCartToDB = async () => {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending cart data!",
        })
      );
      try {
        const response = await fetch(
          "https://redux-shopping-app-e5097-default-rtdb.firebaseio.com/cart.json",
          {
            method: "PUT",
            body: JSON.stringify(cartItems),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error();
        }
        dispatch(
          uiActions.showNotification({
            status: "success",
            title: "success!",
            message: "Sent cart data successfully",
          })
        );
      } catch (error) {
        dispatch(
          uiActions.showNotification({
            status: "Error",
            title: "Error!",
            message: "Something went wrong",
          })
        );
      }
    };
    if(isInitial){
      isInitial=false
      return
    }
    sendCartToDB();
  }, [cartItems, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {show && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
