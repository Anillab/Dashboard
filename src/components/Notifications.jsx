import React, { Component } from "react";
import { MDBNotification, MDBContainer } from "mdbreact";

class Notification extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBNotification
          show
          fade
          iconClassName="text-primary"
          title="Bootstrap"
          message="See? Just like this."
          text="just now"
        />
        <MDBNotification
          show
          fade
          iconClassName="text-primary"
          title="Bootstrap"
          message="Heads up, toasts will stack automatically"
          text="2 seconds ago"
        />
        <MDBNotification
          show
          fade
          iconClassName="text-primary"
          title="Bootstrap"
          message="Heads up, toasts will stack automatically"
          text="2 seconds ago"
        />
        <MDBNotification
          show
          fade
          iconClassName="text-primary"
          title="Bootstrap"
          message="Heads up, toasts will stack automatically"
          text="2 seconds ago"
        />
      </MDBContainer>
    );
  }
}

export default Notification;
