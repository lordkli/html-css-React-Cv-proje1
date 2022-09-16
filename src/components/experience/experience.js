import React from "react";

const Experience = (props) => {
  return (
    <div className={`${props.space}"col-sm-6 timeline-item"`}>
      <div className="row">
        <div className={`${props.position == "right" && "col-sm-offset-1"} col-sm-11`}>
          <div className={`timeline-panel ${props.position == 'left' ? "credits" : "debits"}` }>
            <ul className="timeline-panel-ul">
              <li>
                <span className="importo">{props.title}</span>
              </li>
              <li>
                <span className="causale">{props.desc}</span>
              </li>
              <li>
                <p>
                  <small className="text-muted">{props.sDate} - {props.eDate}</small>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
