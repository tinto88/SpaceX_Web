import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";
import "../TestCard/TestCard.css";

function TestCard(props) {
  let { url } = useRouteMatch();
  return (
    <>
      <div className="cardTest">
        <div className="contentTest">
          <h2 className="titleTest">{props.rocket.rocket_name}</h2>
          <p className="copyTest">{props.rocket.description}</p>
          <NavLink
            className="btnTest"
            to={`${url}/detail/${props.rocket.rocket_id}`}
          >
            Learn More
          </NavLink>
        </div>
        {/* {console.log(props.rocket.id)} */}
        <style>
          {`\
              .cardTest:nth-child(${props.rocket.id}):before {\
                background-image: url(${
                  props.rocket.id === 1
                    ? props.rocket.flickr_images[0]
                    : props.rocket.flickr_images[2]
                });\
              }\
              
          `}
        </style>
      </div>
    </>
  );
}
export default TestCard;
