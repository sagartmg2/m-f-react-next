import '@/styles/globals.css'
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from 'react';
import { store } from '../redux/store'
import { Provider, useDispatch } from 'react-redux'
import axios from 'axios';
import { setReduxUser } from '@/redux/slice/userSlice';
import { setCartItems } from '@/redux/slice/cartSlice';
import Header from '@/components/Header';

function App({ Component, pageProps }) {

  const [user, setUser] = useState(null);
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get("https://ecommerce-sagartmg2.vercel.app/api/users/get-user", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token")
      }
    }).then(res => {
      dispatch(setReduxUser(res.data))
    })

    let cart_items = JSON.parse(localStorage.getItem("cart_items"));
    dispatch(setCartItems(cart_items))
  }, [])


  return <>
    <Header />
    <Component user={user} {...pageProps} setUser={setUser} />
  </>
}

/* Higher Order Component ( HOC )
       A componet which returns another component
*/

const WithReduxProvider = (App) => {

  function Wrapper(props) {

    return <>
      <Provider store={store}>
        <App  {...props} />
      </Provider>
    </>

  }
  return Wrapper

}

export default WithReduxProvider(App)


