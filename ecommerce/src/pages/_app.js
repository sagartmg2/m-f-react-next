import '@/styles/globals.css'
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from 'react';
import { store } from '../redux/store'
import { Provider, useDispatch } from 'react-redux'
import axios from 'axios';
import { setReduxUser, stopLoading } from '@/redux/slice/userSlice';
import { setCartItems } from '@/redux/slice/cartSlice';
import Header from '@/components/Header';

function App({ Component, pageProps }) {

  const [user, setUser] = useState(null);
  const dispatch = useDispatch()

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      axios.get("https://ecommerce-sagartmg2.vercel.app/api/users/get-user", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token")
        }
      }).then(res => {
        dispatch(setReduxUser(res.data))
      })

      let cart_items = JSON.parse(localStorage.getItem("cart_items"));
      dispatch(setCartItems(cart_items))
    }
    else {
      dispatch(stopLoading())
    }

  }, [])


  return <>
    <Header />
    <Component user={user} {...pageProps} setUser={setUser} />
  </>
}

/* Higher Order Component ( HOC )
       A componet which returns another component
*/

export default function WithRedux({ Component, pageProps }) {
  return <>
    <Provider store={store}>
      <App Component={Component} pageProps={pageProps} />
    </Provider >
  </>
}



// const WithReduxProvider = (App) => {

//   function Wrapper(props) {

//     return <>
//       <Provider store={store}>
//         <App  {...props} />
//       </Provider>
//     </>

//   }
//   return Wrapper

// }

// export default WithReduxProvider(App)


