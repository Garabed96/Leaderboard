import React from 'react';
import logo from './logo.svg';
import './index.scss'
import axios from 'axios';
import ReactDOM from 'react-dom';

/*User Story 1: I can see a table of the freeCodeCamp campers who've earned the most brownie points in the past 30 days.

User Story 2: I can see how many brownie points they've earned in the past 30 days, and how many they've earned total.

User Story 3: I can toggle between sorting the list by how many browni e points they've earned in the past 30 days and by how many brownie points they've earned total.

Top 100 campers for the last 30 days: https://fcctop100.herokuapp.com/api/fccusers/top/recent.

Top 100 campers of all time: https://fcctop100.herokuapp.com/api/fccusers/top/alltime.
*/

class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      toggle: false, 
      recentList: [],
      alltimeList: []
    };
    this.handleToggle = this.handleToggle.bind(this);
    
    // this.handleClick = this.handleClick.bind(this);
  };

  
  // So we may use setState to update component when data retrieved 
  componentDidMount() {
    var urlRecent = "https://fcctop100.herokuapp.com/api/fccusers/top/recent/";
    var urlAlltime = "https://fcctop100.herokuapp.com/api/fccusers/top/alltime/";
    console.log("mounted");

    Promise.all([
    fetch(urlRecent)
    .then((res) => res.json())
    .then((data) =>{
      this.setState({
        recentList: data
      });
    }),
    fetch(urlAlltime)
    .then((res) => res.json())
    .then((data) =>{
      this.setState({   
        alltimeList: data
      });
    })
  ]);

}

  handleToggle(e) {
    this.setState({ toggle: !this.state.toggle});
  }



  render() {
      return(
        <div className="all">
        <button
         onClick={this.handleToggle} toggle={this.state.toggle}>
          Toggle
        </button>
        {this.state.toggle && <p> This is a toggle </p>}
        <div className="container-fluid">
        <h1>Top 30 Recent</h1>
        {this.state.recentList.map((lists, i) => 
          <tr>
            <td key={lists.username}> {lists.username}: {lists.alltime} {lists.recent} </td>
          </tr>
        )};
        </div>

        </div>
      ); 
  }
} 

export default Board;