import React from 'react';

import { Jumbotron, Button } from 'reactstrap';

const Landing = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Feedback Aggregating Tool</h1>
        <p className="lead">Welcome to Emaily, the feedback aggregating tool that allows you to connect with your
        users via email, obtain usefull feedback on your product and or service then it generates dashboard
        with all your relevant data vis-a-vis the specific campaigns that you issued.
        </p>
        <hr className="my-2" />
        <p>If you would like to see a walkthrough please click on the learn more button!</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Landing;

//
// const jumbotronStyle = {
//   paddingBottom: '150px',
//   backgroundColor: "#80d8ff",
//   textAlign: "center"
// }
//
// class Landing extends Component {
//   render() {
//     return (
//       <div className="card-panel" style={jumbotronStyle}>
//         <div className="container">
//           <h1>Welcome to Emaily</h1>
//           <p>Here you can send your users surveys to help better your business...</p>
//         </div>
//        </div>
//     );
//   }
// }
//
// export default Landing;
