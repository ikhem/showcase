import React, { Component } from 'react';

class FilterObject extends Component {
	constructor(){
		super();

		this.state = {
			unFilteredArray: [
				{
					"name": "Jimmy Joe",
					"title": "Hack0r",
					"age": 12
				},
				{
					"name": "Jeremy Schrader",
					"age": 24,
					"hairColor": "brown"
				},
				{
					"name": "Carly Armstrong",
					"title": "CEO"
				}
			],
			userInput: '',
			filteredArray: []
		}
	}

	handleChange(val){
		this.setState({ userInput: val });
	}

	solveFilter(userInput){
		var unFiltered = this.state.unFilteredArray
		var filtered = []

		for(var key in unFiltered){
			if(userInput in unFiltered[key]){
				filtered.push(unFiltered[key])
			}
		}

		this.setState({ filteredArray: filtered });
	}

  render(){
    return(
    	<div className='puzzleBox filterObjectPB'>
				<h4>Filter Object</h4>
				<span className='puzzleText'> Original: { JSON.stringify(this.state.unFilteredArray )}</span>
				<input className='inputLine' onChange={ (e) => { this.handleChange(e.target.value) }}></input>
				<button className='confirmationButton' onClick={ () => this.solveFilter(this.state.userInput) }> Filter </button>
				<span className='resultsBox filterObjectRB'> Filtered: { JSON.stringify(this.state.filteredArray, null, 10) }</span>
			</div>
    )
  }
}

export default FilterObject;