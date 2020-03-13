
import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Card } from "./Card.jsx";
import { StatsCard } from "./StatsCard.jsx";
import AccountData from './search.jsx';
import ChartsPage from './BarChart.jsx';
import LinePage from './LineChart.jsx';
import VerticalPage from './VerticalBar.jsx';
import Notification from './Notifications.jsx';

class Dashboard extends Component {
  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }
  render() {
    return (
      <div className="content">
        <Container fluid>
        <Row>
        <Col md={6}>

        <AccountData />
        </Col>

        </Row>
          <Row>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-server text-warning" />}
                statsText="Total Number of Groups"
                statsValue="8"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated 5 Days Ago"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-wallet text-success" />}
                statsText="Total Contributions"
                statsValue="1200"
                statsIcon={<i className="fa fa-calendar-o" />}
                statsIconText="Updated 6 Hours Ago"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-graph1 text-danger" />}
                statsText="Growth Rate Monthly"
                statsValue="3%"
                statsIcon={<i className="fa fa-clock-o" />}
                statsIconText="In the last month"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="fa fa-twitter text-info" />}
                statsText="Pending Statements"
                statsValue="6"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated 2 days Ago"
              />
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <Card
                statsIcon="fa fa-history"
                id="chartHours"
                title="Groups Behavior"
                category="24 Hours performance"
                content={
                  <div className="ct-chart">
                    <LinePage  />
                  </div>
                }

              />
            </Col>
            <Col md={4}>
              <Card
                statsIcon="fa fa-clock-o"
                title="Group  Statistics"
                category="Types of Groups"
                stats="Updated 5 days Ago"
                content={
                  <div
                    id="chartPreferences"
                    className="ct-chart ct-perfect-fourth"
                  >
                    <ChartsPage />
                  </div>
                }

              />
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <Card
                id="chartActivity"
                title="2020 Group Contribution"
                category="Group Types"
                stats="Data information certified"
                statsIcon="fa fa-check"
                content={
                  <div className="ct-chart">
                    <VerticalPage  />
                  </div>
                }

              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Dashboard;
