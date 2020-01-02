// import React from 'react';
//
//
// const Landing = () => {
//   return (
//   <div style={{textAlign: 'center'}}>
//     <h1>
//       Emaily!
//     </h1>
//     Collect feedback from your users!
//   </div>
//   );
// }
//
//
//
//
// export default Landing;


import React, { Component } from 'react';


const jumbotronStyle = {
  paddingBottom: '150px',
  backgroundColor: "#e57373",
  textAlign: "center"
}

class Landing extends Component {
  render() {
    return (
      <div className="card-panel" style={jumbotronStyle}>
        <div className="container">
          <h1>Welcome to Emaily</h1>
          <p>Here you can send your users surveys to help better your business...</p>
        </div>
       </div>
    );
  }
}

export default Landing;
