import styles from './App.module.css';
import {Cards, Chart, CountryPicker} from "./Components";
import {fetchData} from "./api"
import React from 'react';
import covid from "./images/image.png";

class App extends React.Component {

  state={
      data: {},
      country: '',
  }
  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({data: fetchedData});
  }
  handleCountryChange = async(country) =>{
    const fetchedData = await fetchData(country);
    this.setState({data: fetchedData, country: country});
    console.log(fetchedData)
//fetch data
//set data
   }
  render(){
    const {data, country} = this.state;
    return (
      <div className={styles.container}>
        <img src={covid} alt="Main" className={styles.image}/>
       <Cards data={data}/>
       <CountryPicker handleCountryChange={this.handleCountryChange}/>
       <Chart data={data} country={country}/>
      </div>
    );
  } 
}

export default App;
