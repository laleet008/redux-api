import React from "react";
import striptags from "striptags";

import { useDispatch, useSelector } from "react-redux";
import { getApplications } from "./actions";
import "./App.css";

const Career = () => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getApplications);
  // }, [dispatch]);
  const fetchApplicationData = () => {
    return dispatch(getApplications());
  };
  fetchApplicationData();

  const applications = useSelector((state) => state.dataReducer.applications);

  return (
    <div>
      <div className="career_page">
        {/* <h1>Naxa Applications</h1>
        <p>{applications.id}</p> */}
        {/* <button onClick={() => dispatch(getApplications())}>
          Get Applications
        </button> */}

        <h3> Our Works:</h3>
        {applications.map((application) => (
          <div key={application.id} className="application_container">
            <div className="head_container">
              <div className="img_div">
                <img src={application.icon} className="icon" alt="icon" />
              </div>

              <h2>{application.title}</h2>
            </div>

            <p style={{ marginTop: "10px" }}>
              {striptags(application.description1)}
            </p>
            <br />
            <p>{striptags(application.description2)}</p>

            {/* <img src={application.photo} alt="photo" /> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Career;
