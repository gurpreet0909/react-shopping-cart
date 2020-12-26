import React from 'react';
import Product from './compoenets/Product';
import Filter from './compoenets/Filter';
import Cart from './compoenets/Cart';
import store from './store';
import { Provider } from 'react-redux';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      cartItems: localStorage.getItem("cartItms") ? JSON.parse(localStorage.getItem("cartItms")) : [],
    };
  }

  createOrder = (order) => {
    alert("Need to save order for " + order.name);
  }

  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({cartItems:  cartItems.filter(x => x._id !== product._id)});
    localStorage.setItem("cartItms", JSON.stringify(cartItems.filter(x => x._id !== product._id)));
  }

  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    
    cartItems.forEach((item) => {
      if(item._id === product._id) {
        item.count++;
        alreadyInCart = true;
      }
    });

    if(!alreadyInCart) {
      cartItems.push({...product, count: 1})
    }

    this.setState({cartItems});
    localStorage.setItem("cartItms", JSON.stringify(cartItems));
  };

  render() {
    return (
      <Provider store={store}>
      <div class="grid-container">
        <header>
          <a href="/">React Shopping Cart</a>
        </header>
        <main>
            <div className= "content">
              <div className="main">
                <Filter>
                </Filter>
                <Product addToCart={this.addToCart}>
                </Product>
              </div>
              <div className="sidebar">
               <Cart cartItems={this.state.cartItems}
                removeFromCart = {this.removeFromCart}
                createOrder = {this.createOrder}>
                </Cart>
              </div>
            </div>
        </main>
        <footer>
           All rights reserved.
        </footer>
      </div>
      </Provider>
    );
  }
}

export default App;
