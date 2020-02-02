import React, { Component } from 'react'

class SearchBar extends Component {

  // state = {
  //   option: ""
  // }

  // optionHandler = (option) => {
  //   this.setState({
  //     option: option
  //   })
  // }

  render (){

    return (
      <div>
  
        <strong>Sort by:</strong>
        {/* <label>
          <input type="radio" value="None" checked={this.props.option === "None"} onChange={(event) => this.props.sortStockHandler(event.target.value)}/>
          None
        </label> */}
        <label>
          <input type="radio" value="Alphabetically" checked={this.props.option === "Alphabetically"} onChange={(event) => this.props.sortStockHandler(event.target.value)}/>
          Alphabetically
        </label>
        <label>
          <input type="radio" value="Price" checked={this.props.option === "Price"} onChange={(event) => this.props.sortStockHandler(event.target.value)}/>
          Price
        </label>
        <br/>
  
        <label>
          <strong>Filter:</strong>
          <select onChange={(e) => {this.props.filterStockHandler(e.target.value)}}>
            <option  value="All">All</option>
            <option  value="Tech">Tech</option>
            <option  value="Sportswear">Sportswear</option>
            <option  value="Finance">Finance</option>
          </select>
        </label>
  
  
      </div>
    );


  }
}


export default SearchBar;
