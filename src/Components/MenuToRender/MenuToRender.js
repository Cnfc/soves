import React, {Component} from 'react';
import Cart from '../Cart/Cart';




class MenuToRender extends Component {

  render() {
    return (
      <div  className='main' onClick={this.handleClick}>

        <span>Total products: {this.props.count}</span>

        <form className='menu'>

          <div className='radio_group'>
            <input 
              type='radio'
              value="true"
              checked={this.props.selectRadioOption === true}
              onChange={this.props.radioChange}
              /> Yes


             <input 
              type='radio'
              value="false"
              checked={this.props.selectRadioOption === false}
              onChange={this.props.radioChange}
            /> Nop
          </div>

          <div onClick={this.props.isAvailable}>Check if Available</div>

          <div>
            <select id="lang" onChange={this.props.change} value={this.props.checkBoxValue}>
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