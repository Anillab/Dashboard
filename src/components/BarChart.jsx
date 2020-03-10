import React from "react";
import { Doughnut } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class ChartsPage extends React.Component {
state = {
  dataDoughnut: {
    labels: ["Informal", "Formal", "Semi-Formal"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
        hoverBackgroundColor: [
          "#FF5A5E",
          "#5AD3D1",
          "#FFC870"

        ]
      }
    ]
  }
}

render() {
    return (
    <MDBContainer>
      <Doughnut data={this.state.dataDoughnut} options={{ responsive: true }} />
    </MDBContainer>
    );
  }
}

export default ChartsPage;
