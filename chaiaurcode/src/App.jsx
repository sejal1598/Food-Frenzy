import AboutUs from "./component/AboutUs";
import Body from "./component/Body"
import Contact from "./component/ContactUs";
import ErrorPage from "./component/Error";
import Header from "./component/Header"
import RestaurantMenu from "./component/RestaurantMenu";
import Test from "./component/Test"


import { Routes, Route, Outlet } from 'react-router-dom';

function App() {

  return (
    <div className="app">
      <Header />
      <Outlet />
      <Routes>
        <Route
          path="/"
          element={<Body />}

        />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/restaurantMenu/:resId" element={<RestaurantMenu />} />

        <Route path="*" element={<ErrorPage />} /> {/* Catch-all for 404 */}
      </Routes>
      {/* <Routes>
        <Route
          path="/"
          element={<Body />}
          errorElement={<ErrorPage />} />
        <Route

          path="/about" element={<AboutUs />} />
      </Routes> */}
      {/* <Test /> */}
    </div>
  )
}

export default App
