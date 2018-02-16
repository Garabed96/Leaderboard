import React from 'react';
import logo from './logo.svg';
import './index.scss'
import axios from 'axios';
import ReactDOM from 'react-dom';

/*User Story 1: I can see a table of the freeCodeCamp campers who've earned the most brownie points in the past 30 days.

User Story 2: I can see how many brownie points they've earned in the past 30 days, and how many they've earned total.

User Story 3: I can toggle between sorting the list by how many brownie points they've earned in the past 30 days and by how many brownie points they've earned total.

Top 100 campers for the last 30 days: https://fcctop100.herokuapp.com/api/fccusers/top/recent.

Top 100 campers of all time: https://fcctop100.herokuapp.com/api/fccusers/top/alltime.
*/

class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isToggleOn: true,
      recentList: [],
      alltimeList: []
    };
  }
  
  // So we may use setState to update component when data retrieved 
  componentDidMount() {
    var urlRecent = "https://fcctop100.herokuapp.com/api/fccusers/top/recent/";
    var urlAlltime = "https://fcctop100.herokuapp.com/api/fccusers/top/alltime/";
    console.log("mounted");
    fetch(urlRecent)
    .then(res => res.json())
    .then((data) => {
     console.log("This is the JSON, ", data);
      this.setState({
        recentList: data,
      });        
    })
    .catch(err => {console.log(err);
  });
  fetch(urlAlltime)
  .then(res => res.json())
  .then((data) => {
   console.log("This is the JSON, ", data);
    this.setState({
      alltimeList: data,
    });        
  })
  .catch(err => {console.log(err);
});

  }

  handleClick() {
    ReactDOM.hydrate(
    // this.setState(prevState => ({
    //   isToggleOn: !prevState.isToggleOn
      <div className="top">
    {this.state.alltimeList.map(lists => 
      <tr>
        <td key={lists.id}> {lists.username}: {lists.alltime} </td>
      </tr>
    )};
    </div>
    )
  }

  render() {
      return(
        <div className="all">
        <button onClick={this.handleClick()}>Alltime</button>   
        <div className="container-fluid">
            <h1>Top 30 Recent</h1>
        {this.state.recentList.map(lists => 
          <tr>
            <td> {lists.username}: {lists.alltime} </td>
          </tr>
        )};
         
        </div>
        </div>
      ); 

      // <div className="container-fluid">
      //   <h1> TopList </h1>
      //   <div id="TopList">
      //   </div>
      // </div>
      
  }

// grabData = () => {
//   var topRecent = "https://fcctop100.herokuapp.com/api/fccusers/top/recent"
//   $.ajax({
//     url: topRecent, 
//     type: "GET"
//     data: query,
//     dataType: 'text/json',
//     success: function (data) {
//       alert(data);
//       for (var listSize=0; listSize<data.length; listSize++) {
//         content = data[listSize].alltime;
//         content += "<br>";
//         $(content).appendTo("#TopList");
//       }
//     }
//   })
// }

} 


export default Board;