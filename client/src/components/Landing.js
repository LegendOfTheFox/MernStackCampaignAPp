import React from "react";

const Landing = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Connect with your users today!</h1>
      <p>
        Collect feedback from your users and let the results drive your
        business. We provide an advanced platform to allow for the easy
        distribution of customer communications. Get realtime statistics about
        any aspect of your business from your users. Results are delivered in
        realtime to your own personal dashboard console.
      </p>
      <div class="row">
        <div class="col s4">
          <i className="material-icons light-blue-text darken-3">chat_bubble</i>
          <p>Connect with your clients with ease!</p>
        </div>
        <div class="col s4">
          <i className="material-icons light-blue-text darken-3">thumb_up</i>
          <p>Affordable Pricing</p>
        </div>
        <div class="col s4">
          <i className="material-icons light-blue-text darken-3">group</i>
          <p>Drive Customer Satisfaction</p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
