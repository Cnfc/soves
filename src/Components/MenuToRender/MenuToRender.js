import React, {Component} from 'react';
import Cart from '../Cart/Cart';




class MenuToRender extends Component {




  render() {
    return (
      <div  className='main' onClick={this.handleClick}>

        <span>Total products: {this.props.count}</span>

        <form onClick={this.formCEvent} className='menu'>

          <div className='radio_group'>
            <button onClick={this.props.handleLessMinimum}>less 5000</button>
            <button>more 5000</button>
          </div>

          <div onClick={this.props.isAvailable}>Check if Available</div>

          <div>
            <select id="lang" onChange={this.props.change} value={this.props.value}>
              <option value="select">Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>

            </select>
          </div>
          
          <div onClick={this.props.reset}>Reset</div>
       </form>
    </div>
    );
  }
}

export default MenuToRender;