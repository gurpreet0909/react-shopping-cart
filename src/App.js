import React from 'react';
import Product from './compoenets/Product';
import Filter from './compoenets/Filter';
import Cart from './compoenets/Cart';
import store from './store';
import { Provider } from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div class="grid-container">
          <header>
            <a href="/">React Shopping Cart</a>
          </header>
          <main>
            <div className="content">
              <div className="main">
                <Filter />
                <Product />
              </div>
              <div className="sidebar">
                <Cart />
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
