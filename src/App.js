import React from 'react';
import logo from './logo.svg';
import './index.scss'
import axios from 'axios';


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
      list: []
    };
  }
  
  // So we may use setState to update component when data retrieved 
  componentDidMount() {
    var url = "https://fcctop100.herokuapp.com/api/fccusers/top/recent/";
    console.log("mounted");
    fetch(url)
      .then(res => res.json())
      .then((data) => {
       console.log("This is the JSON, ", data);
        this.setState({
          list: data,
        });        
      })
      .catch(err => {console.log(err);
    });
  }

  render() {
      return(
        <div className="container-fluid">
            <h1>Top 30 Recent</h1>
        {this.state.list.map(lists => 
          <tr>
            <td> {lists.username}: {lists.alltime} </td>
          </tr>
        )};
            
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
