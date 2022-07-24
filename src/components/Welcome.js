import React from "react";

const Welcome = () => {
  return (
    <div>
      <h1 className="heading-intro">Bonjour. Hello!</h1>
      <h4 className="heading-info">
        Please navigate through the app using the navigation bar.
      </h4>
      <div className="center-or">
        <div className="dicv">
          <div className="dicv2">
            <div className="dicv3">
              <div className="or-line1"></div>
            </div>
            <div className="dicv4">
              <div className="dicv5">
                <div className="or">OR</div>
              </div>
            </div>
            <div className="dicv6">
              <div className="or-line2"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="button-area">
        <div className="center-button">
          <div class="row justify-content-evenly">
            <div class="row">
              <div class="col-7"><button className=" login-btn">Login</button> </div>
              <div class="col-5 "><button className="signup-btn">Signup</button></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
