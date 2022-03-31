import React from "react";
import "./contact.css";

export default function Contactus() {
  return (
    <>
      <div className="contact-wrapper">
        <div className="contactus-header container">
          <div className="contact-heading">
            <p>CONTACT US</p>
            <h2>Let's get Started</h2>
          </div>
          <div className="contact-main">
            <div className="contact-form">
              <form action="">
                <select
                  name="menu-20"
                  class="wpcf7-form-control wpcf7-select"
                  aria-invalid="false"
                >
                  <option value="">How can we help you?</option>
                  <option value="Mobile App Development">
                    Mobile App Development
                  </option>
                  <option value="Enterprise Software Development">
                    Enterprise Software Development
                  </option>
                  <option value="Web Development">Web Development</option>
                  <option value="Dedicated Teams">Dedicated Teams</option>
                  <option value="IT Consulting">IT Consulting</option>
                  <option value="Internet of Things">Internet of Things</option>
                  <option value="Blockchain">Blockchain</option>
                  <option value="Augmented Reality">Augmented Reality</option>
                  <option value="Artificial Intelligence">
                    Artificial Intelligence
                  </option>
                  <option value="Cloud Computing">Cloud Computing</option>
                  <option value="FinTech">FinTech</option>
                  <option value="Other">Other</option>
                </select>
                <div className="input-mail">
                  <input
                    type="text"
                    size="35"
                    aria-required="true"
                    placeholder="Name"
                  />
                  <input
                    type="email"
                    size="40"
                    className="left-mail"
                    aria-required="true"
                    aria-invalid="false"
                    placeholder="Email"
                  />
                </div>
                <div className="phone">
                  <input
                    className="phone-no"
                    type="number"
                    size="50"
                    aria-required="true"
                    aria-invalid="false"
                    placeholder="Phone"
                  />
                  <input
                    className="left-mail"
                    type="text"
                    size="50"
                    placeholder="Organization"
                  ></input>
                </div>
                <div className="textare">
                  <textarea
                    cols="40"
                    rows="10"
                    aria-invalid="false"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="chk-box">
                  <input type="checkbox" aria-invalid="false" />
                  <span>Check here to subscribe for updates.</span>
                </div>
                <div className="form-btn">
                  <button>Send</button>
                </div>
              </form>
            </div>
            <div className="form-logo">
              <img
                className="form-imges"
                src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-5a0369c/wp-content/themes/tkxel/assets/images/salesforce/sf-clutch--black.svg"
              />

              <img
                className="form-imges"
                src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-5a0369c/wp-content/themes/tkxel/assets/images/el-goodfirms.svg"
              />
              <hr />
              <div className="pic-txt">
                <div className="img">
                  <img src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-5a0369c/wp-content/themes/tkxel/assets/images/jason-frost.webp" />
                </div>

                <div className="txt">
                  <p>Jason Frost </p>
                  <p>Manager, Customer Success</p>
                  <a href="mailto:jason.frost@tkxel.com">
                    jason.frost@tkxel.com
                  </a>
                  <br />
                  <a href="tel:+15715548110">+1 571 554 8110</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
