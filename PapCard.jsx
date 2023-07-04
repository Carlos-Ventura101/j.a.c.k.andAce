import React from "react";
import { useNavigate } from "react-router-dom";

function PapCard(props) {
  console.log(props, "Everything Must Go!!!!");
  const aVehicle = props.vehicle;
  console.log(aVehicle);
  const navigate = useNavigate();

  const onVehicleClick = (e) => {
    e.preventDefault();
    props.onVehicleClick(e);
    const vehicleState = { state: { payload: aVehicle } };
    navigate(`/practice_card/new/${aVehicle.id}`, vehicleState);
  };

  return (
    <React.Fragment>
      {/* <div className="row "> */}
      <div className="card col-3 ">
        <img src={aVehicle.Img} alt="img" />
        <h5>
          {aVehicle.Year} {aVehicle.Make} {aVehicle.Model} {aVehicle.Type}{" "}
          {aVehicle.Color}
        </h5>
        <div className="card-text">
          Picture yourself rolling in this beautiful {aVehicle.Condition}{" "}
          {aVehicle.Model} All yours today for only {aVehicle.Price}{" "}
        </div>
        <button
          type="button"
          id="select"
          name="select"
          onClick={onVehicleClick}
          className="link-btn btn btn-primary"
        >
          Buy
        </button>
      </div>
      {/* </div> */}
    </React.Fragment>
  );
}
export default PapCard;
