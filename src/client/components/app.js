import "./app.scss";

import React, {Component} from "react";
import ReactPoint from 'react-point';

class AppContainer extends Component {

	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		displayValue: '0'
	// 	};
	// }

	state = {
		displayValue: '0'
	}

	clearDisplay() {
		this.setState({
			displayValue: '0'
		});
	}

	inputDigit(digit) {
		const { displayValue } = this.state;

		this.setState({ 
			displayValue: displayValue === '0' ? String(digit) : displayValue + digit
		});
	}

	inputDot() {
		const { displayValue } = this.state;

		if (displayValue.indexOf('.') === -1) {
			this.setState({
				displayValue: displayValue + '.'
			});
		}
	}

	toggleSign() {
		const { displayValue } = this.state;

		this.setState({
			displayValue: displayValue.charAt(0) === '-' ? displayValue.substr(-1) : '-' + displayValue
		});
	}		

	inputPercent() {
		const { displayValue } = this.state;
		const value = parseFloat(displayValue);

		this.setState({
			displayValue: String(value / 100)
		});
	}		

  render() {
		const { displayValue } = this.state;
		console.log(displayValue);

    return (
			<div id="wrapper">
				<div className="calculator">
					<div className="calculator-display">{displayValue}</div>
					<div className="calculator-keypad">
						<div className="input-keys">
							<div className="function-keys">
								<button className="calculator-key key-clear" onClick={() => this.clearDisplay()}>AC</button>
								<button className="calculator-key key-sign"  onClick ={() =>this.toggleSign()}>±</button>
								<button className="calculator-key key-percent" onClick={() => this.inputPercent()}>%</button>
							</div>
							<div className="digit-keys">
								<button className="calculator-key key-0" onClick ={() =>this.inputDigit(0)}>0</button>
								<button className="calculator-key key-dot" onClick ={() =>this.inputDot()}>●</button>
								<button className="calculator-key key-1" onClick ={() =>this.inputDigit(1)}>1</button>
								<button className="calculator-key key-2" onClick ={() =>this.inputDigit(2)}>2</button>
								<button className="calculator-key key-3" onClick ={() =>this.inputDigit(3)}>3</button>
								<button className="calculator-key key-4" onClick ={() =>this.inputDigit(4)}>4</button>
								<button className="calculator-key key-5" onClick ={() =>this.inputDigit(5)}>5</button>
								<button className="calculator-key key-6" onClick ={() =>this.inputDigit(6)}>6</button>
								<button className="calculator-key key-7" onClick ={() =>this.inputDigit(7)}>7</button>
								<button className="calculator-key key-8" onClick ={() =>this.inputDigit(8)}>8</button>
								<button className="calculator-key key-9" onClick ={() =>this.inputDigit(9)}>9</button>
							</div>
						</div>
						<div className="operator-keys">
							<button className="calculator-key key-divide">÷</button>
							<button className="calculator-key key-multiply">×</button>
							<button className="calculator-key key-subtract">−</button>
							<button className="calculator-key key-add">+</button>
							<button className="calculator-key key-equals">=</button>
						</div>
					</div>
				</div>
			</div>
    );
  }
}

export default AppContainer;