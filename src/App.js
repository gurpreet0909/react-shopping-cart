// feature-1
import React from 'react';
import data from "./data.json";
import Product from './compoenets/Product';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    };
  }

  render() {
    return (
      <div class="grid-container">
        <header>
          <a href="/">React Shopping Cart</a>
        </header>
        <main>
            <div className= "content">
              <div className="main">
                <Product products={this.state.products}></Product>
              </div>
              <div className="sidebar">
              cart items
              </div>
            </div>
        </main>
        <footer>
           All rights reserved.
        </footer>
      </div>
    );
  }
}

export default App;
