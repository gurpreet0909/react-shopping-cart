import React from 'react';
import data from "./data.json";
import Product from './compoenets/Product';
import Filter from './compoenets/Filter';


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    };
  }

  sortProducts = (event) => {
    console.log(event.target.value);
    const sort = event.target.value;
    this.setState((state) => ({
      sort: sort,
      products: this.state.products.slice().sort((a,b) => (
        sort === "lowest" ? ((a.price > b.price) ? 1:-1) : 
        sort === "highest" ? ((a.price < b.price)) ? 1: -1 :
        ((a._id < b._id)? 1: -1)
      ))
    }));   
  }

  filterProducts = (event) =>{
    console.log(event.target.value);
    if(event.target.value === "") {
      this.setState({size: event.target.value, products: data.products})
    } else {
    this.setState({
      size:event.target.value,
      products: data.products.filter(
        (product) => product.availableSizes.indexOf(event.target.value)>=0)
      });
    }
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
                <Filter count={this.state.products.length}
                  sort={this.state.sort}
                  size ={this.state.size}
                  sortProducts = {this.sortProducts}
                  filterProducts = {this.filterProducts}>
                </Filter>
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
