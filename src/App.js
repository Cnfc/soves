import React, { Component } from "react";
import Cart from "./Components/Cart/Cart";





const link = "http://www.mocky.io/v2/5d944b9f2f00006b008ff619";

class App extends Component {
  state = {
    isLoading: true,
    data: {},
  };

  async componentDidMount() {
    const res = await fetch(link);
    const data = await res.json();

    this.setState({
      data
    })
  }
  
  renderCart = () => {
    this.setState({
      isLoading: false,
    })
  }

  render() {
    return (
      <div className="main">
        <h1>App</h1>
        
        <div onClick={this.renderCart}>

          Click Here to render
        </div>

        {this.state.isLoading 
          ? <span>LOADNIG</span> 
          : <Cart data={this.state.data.data} />
        }

      </div>
    );
  }
}

export default App;
