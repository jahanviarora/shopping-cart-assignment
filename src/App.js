import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import RegisterUser from "./components/Register/Register";
import SignIn from "./components/SignIn/SignIn";
import Cart from "./components/Cart/Cart";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <main>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/home" />} />
            <Route path="/home" component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/signin" component={SignIn} />
            <Route path="/cart" component={Cart} />
            <Route path="/register" component={RegisterUser} />
          </Switch>
          
        </main>
      </BrowserRouter>

      <Footer />
    </div>
  );
};
export default App;
