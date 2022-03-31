import React from "react";
import "./service.css";

export default function Service() {
  return (
    <>
      <div className="services-wrapper container">
        <div className="services-offer">
          <h2>Services We offer</h2>
        </div>

        <div className="row services-row">
          <div className="col-lg-4 col-md-6">
            <div className="service-col-txt">
              <img src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-5a0369c/wp-content/themes/tkxel/assets/images/service-dedicated-teams.svg" />
              <h4>Dedicated Team</h4>
              <p>
                We grow your team using our development resource and recurment
                capaility
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-col-txt">
              <img src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-5a0369c/wp-content/themes/tkxel/assets/images/service-custom-software.svg" />
              <h4>Custom Software Development</h4>
              <p>
                We work with startups, SMBs & world leading enterprises to build
                customized software solutions.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-col-txt">
              <img src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-5a0369c/wp-content/themes/tkxel/assets/images/service-ui-ux.svg" />
              <h4>UI/UX Design</h4>
              <p>
                Our team of experienced product designers & developers help you
                build successful digital products.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-col-txt">
              <img src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-5a0369c/wp-content/themes/tkxel/assets/images/service-salesforce.svg" />
              <h4>Salesforce</h4>
              <p>
                We help you develop robust and reliable Salesforce Solutions to
                surpass your business expectations.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-col-txt">
              <img src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-5a0369c/wp-content/themes/tkxel/assets/images/big-data--icon.svg" />
              <h4>Data Science</h4>
              <p>
                We help organizations adopt data driven insights and automated
                reporting for faster decision making.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-col-txt">
              <img src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-5a0369c/wp-content/themes/tkxel/assets/images/service-discovry-workshop.svg" />
              <h4>Discovery Workshop</h4>
              <p>
                We help you define your idea from business perspectives through
                our 2 weeks collaborative discovery workshop.
              </p>
            </div>
          </div>
        </div>
        <div className="service-btn">
          <button>View All Services</button>
        </div>
      </div>
      <div className="ready-wrapper">
        <div class="container ready">
          <h2 class="home-heading-two">
            Ready <span>to</span> start your project?
          </h2>
          <a href="#cta-dark" class="custo-btn" id="stylebtn">
            Let's Talk <i class="la la-arrow-right"></i>
          </a>
        </div>
      </div>
    </>
  );
}
