
import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import { Container, Row, Col } from "react-bootstrap";
import { Card } from "./Card.jsx";
import { StatsCard } from "./StatsCard.jsx";
import { Tasks } from "./Task.jsx";
import AccountData from './search.jsx';
import ChartsPage from './BarChart.jsx';
import LinePage from './LineChart.jsx';
import VerticalPage from './VerticalBar.jsx';

import {
  dataPie,
  legendPie,
  dataSales,
  optionsSales,
  responsiveSales,
  legendSales,
  dataBar,
  optionsBar,
  responsiveBar,
  legendBar
} from "./variables.jsx";

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
                statsValue="24"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated 5 Days Ago"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-wallet text-success" />}
                statsText="Total Contribution"
                statsValue="GHC 12000"
                statsIcon={<i className="fa fa-calendar-o" />}
                statsIconText="Updated 6 Hours Ago"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-graph1 text-danger" />}
                statsText="Errors"
                statsValue="23"
                statsIcon={<i className="fa fa-clock-o" />}
                statsIconText="In the last hour"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="fa fa-twitter text-info" />}
                statsText="Loan Requeets"
                statsValue="45"
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
                title="2014 Sales"
                category="All products including Taxes"
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
