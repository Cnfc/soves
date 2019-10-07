import React, { Component } from "react";
import Cart from "./Components/Cart/Cart";
import MenuToRender from "./Components/MenuToRender/MenuToRender";


const link = "http://www.mocky.io/v2/5d944b9f2f00006b008ff619";

class App extends Component {
  state = {
    isLoading: true,
    products: [],
    filteredProducts: [],
    value: ''
  };

  async componentDidMount() {
    const res = await fetch(link);
    const pr = await res.json();    
    const products = pr.data;

    this.setState({
      products,
      filteredProducts: products
    })
  }
  
  renderCart = () => {
    this.setState({
      isLoading: false,
    })
  }


  handleLessMinimum = (e) => {
  
  }

// Is Available
  isAvailable = (e) => {
    e.preventDefault()
    let temp = [];
    for(let i of this.state.filteredProducts) {
      if(i.quantity > 0) {

        console.log(i)
        temp.push(i)
      }
    }

    this.setState({
      filteredProducts: temp
    })
  }


  // SELECT
  findCategory = (e) => {
    
    let temp = [];
    for(let i of this.state.filteredProducts) {

      if(i.category.id == e.target.value) {
        temp.push(i)
      }
    }

    this.setState({
      filteredProducts: temp
    })
  }

  reset = () => {
    let products = this.state.products
    this.setState({
      filteredProducts: products
    })
  }
  
  
  
  render() {
    return (
      <div onClick={this.renderCart} className="main">

          <h1>App</h1>
          <span >Click ME to render</span>
    
        {this.state.isLoading 
          ? <span>LOADNIG</span> 
          : (
              <>              
                <MenuToRender
                  handleChangeSize={this.handleChangeSize} 
                  handleChangeSort={this.handleChangeSort} 
                  count={this.state.filteredProducts.length}
                  handleLessMinimum={this.handleLessMinimum}
                  isAvailable={this.isAvailable}
                  change={this.findCategory}
                  value={this.state.value}
                  reset={this.reset}
                />
                <hr/>
                <Cart 
                  products={this.state.filteredProducts}
                  handleAddToCart={this.handleAddToCart}
                  handleRemoveFromCart={this.handleRemoveFromCart}
                /> 
           
              </>
            )
        
        }

      </div>
    );
  }
}

export default App;

