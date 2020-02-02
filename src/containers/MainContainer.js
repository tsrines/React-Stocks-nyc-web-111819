import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'



class MainContainer extends Component {

  state = {
    stocks: [],
    displayStocks: [],
    portfolioStocks: [],
    option: ""
  }

  componentDidMount() {
    fetch("http://localhost:3000/stocks")
      .then(resp => resp.json())
      .then(data => this.setState({
        stocks: data,
        displayStocks: data
      }))
  }



  addPortfolio = (stock) => {
    this.setState({
      portfolioStocks: [...this.state.portfolioStocks, stock]
    })
  }

  removeStock = (stock) => {
    this.setState({
      portfolioStocks: this.state.portfolioStocks.filter(s => s !== stock) 
    })
  }

  filterStockHandler = (type) => {
    if (type !== "All") {
      this.setState({
        displayStocks: this.state.stocks.filter(s => s.type === type)
      })
    } else {
      this.setState({
        displayStocks: this.state.stocks
      })
    }
  }

  sortStockHandler = (sortBy) => {
    console.log(sortBy)
    let sortedArray = []
    switch(sortBy){
      // case "None":
      //   sortedArray = this.state.stocks
      //   // this.setState({
      //   //   option: sortBy.target.value
      //   // })
      //   break;
      case "Alphabetically":
        sortedArray = this.state.displayStocks.sort((a,b) => a.name > b.name ? 1 : -1)
        // this.setState({
        //   option: sortBy.target.value
        // })
        break;
      case "Price":
          sortedArray = this.state.displayStocks.sort((a,b) => a.price < b.price ? 1 : -1)
          // this.setState({
          //   option: sortBy.target.value
          // })
        break;
      default:
        console.log("How do we even get here?")
    }
    this.setState({
      displayStocks: sortedArray,
      option: sortBy
    })
  }

   optionHandler = (option) => {
    this.setState({
      option: option
    })
  }



  render() {
    return (
      <div>
        <SearchBar optionHandler={this.optionHandler} option={this.state.option} sortStockHandler={this.sortStockHandler} filterStockHandler={this.filterStockHandler} />

        <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.displayStocks} addPortfolio={this.addPortfolio}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.state.portfolioStocks} removeStock={this.removeStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
