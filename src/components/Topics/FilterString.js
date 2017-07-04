import React, { Component } from 'react';

class FilterString extends Component {
  constructor(){
		super()

		this.state = {
			unFilteredArray: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
			userInput: '',
			filteredArray: []
		}
	}
	
	handleChange(val){
		this.setState({ userInput: val })
	}

	solveFilterString(userInput){
		var unFiltered = this.state.unFilteredArray
		var filtered = []

		for(var i = 0; i < unFiltered.length; i++){
			if(unFiltered[i].includes(userInput)){
				filtered.push(unFiltered[i])
			}
		}

		this.setState({ filteredArray: filtered })
	}

	render(){
    return(
			<div className='puzzleBox filterStringPB'>
				<h4>Filter String</h4>
				<span className='puzzleText'> Names: { JSON.stringify(this.state.unFilteredArray, null, 10) }</span>
				<input className='inputLine' onChange={ (e) => { this.handleChange(e.target.value) }}></input>
				<button className='confirmationButton' onClick={ () => this.solveFilterString(this.state.userInput) }> Filter </button>
				<span className='resultsBox filterStringRB'> Filtered Names: { JSON.stringify(this.state.filteredArray, null, 10) } </span>
			</div>
    )
  }
}

export default FilterString;