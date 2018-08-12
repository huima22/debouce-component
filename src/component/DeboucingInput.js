import React, { Component } from 'react';
import {DebounceInput} from 'react-debounce-input';

class DeboucingInput extends Component {
	constructor(){
		super();
		this.state = {
	      value: '',
	      isLoading: false
	    };
	}
	render() {
		return (
			<div className='container'>
				<DebounceInput  minLength={2} debounceTimeout={300} onChange={event => this.setState({value: event.target.value})} />
				<p1>{this.state.value}</p1>
			</div>
		);
	}


}
export default DeboucingInput;