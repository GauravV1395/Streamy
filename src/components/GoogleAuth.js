import React, { Component } from "react";

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId:
          "1043662059683-0iq1ngfrub1lj69jt075ftovndio7tjr.apps.googleusercontent.com", // obtained on google.developers console.
        scope: "email"
      });
    }); // gapi is window scoped hence we call it using window.gapi . If used without window, we end up getting an error saying gapi not known.
  }

  render() {
    return <div>GoogleAuth</div>;
  }
}

export default GoogleAuth;
