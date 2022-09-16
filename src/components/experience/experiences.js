import React from "react";
import SectionTitle from "../section-title.js/section-title";
import Experience from "./experience";
import TimelineBatch from "./timeline-batch";

const Experiences = () => {
  return (
    <section id="experience" className="secPad">
      <div className="container">
        <SectionTitle
          title="Professional Experience"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing"
        />
        <div id="timeline">
          <div className="row timeline-movement timeline-movement-top">
            <div className="timeline-badge timeline-future-movement">
              <a href="#">
                <span className="glyphicon glyphicon-plus"></span>
              </a>
            </div>
            <div className="timeline-badge timeline-filter-movement">
              <a href="#">
                <span className="glyphicon glyphicon-time"></span>
              </a>
            </div>
          </div>
          <div className="row timeline-movement">
            <TimelineBatch month="Feb" year="2014" />

            <Experience
              title="Mussum ipsum cacilds"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit."
              sDate="18/02/2014"
              eDate="Present" 
              position="left"
              alone={false}
            />

            <Experience
              title="Mussum ipsum cacilds"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit."
              sDate="18/02/2014"
              eDate="Present"
              position="right"
              alone={false}
            />
          </div>

          
          <div className="row timeline-movement">
            <TimelineBatch month="Mar" year="2013" />

            <Experience
              title="Mussum ipsum cacilds"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit."
              sDate="10/03/2013"
              eDate="18/02/2014"
              position="right"
              alone={true}
            />
            <div className="col-sm-6 timeline-item">
              <div className="row">
                <div className="col-sm-11">
                  <div className="timeline-panel credits">
                    <ul className="timeline-panel-ul">
                      <li>
                        <span className="importo">Mussum ipsum cacilds</span>
                      </li>
                      <li>
                        <span className="causale">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </span>
                      </li>
                      <li>
                        <p>
                          <small className="text-muted">
                            10/03/2013 - 18/02/2014
                          </small>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row timeline-movement">
            <TimelineBatch month="Jan" year="2010" />

            <Experience
              title="Mussum ipsum cacilds"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit."
              sDate="11/01/2010"
              eDate="10/03/2013"
              position="right"
              alone={true}
            />
            <Experience
              title="Mussum ipsum cacilds"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit."
              sDate="11/01/2010"
              eDate="10/03/2013" 
              position="left"
              alone={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
