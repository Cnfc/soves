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
              value='Yes'
              name="radio"
              checked={this.props.selectRadioOption === 'Yes'}
              onChange={this.props.radioChange}
              /> Yes


             <input 
              type='radio'
              value="No"
              name="radio"
              checked={this.props.selectRadioOption === 'No'}
              onChange={this.props.radioChange}
            /> Nop
            <h3>{this.props.selectRadioOption}</h3>
          </div>
            <button onClick={this.props.onRadioValue} value={this.props.radioValue}>1. Price Or Less 5000</button>













          <div onClick={this.props.isAvailable}>2. Check if Available</div>

          <div>
            <select id="lang" onChange={this.props.change} value={this.props.checkBoxValue}>
              <option value="select">3. Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>

            </select>
          </div>

          <div onClick={this.props.reset}>4. Reset</div>
       </form>
    </div>
    );
  }
}

export default MenuToRender;