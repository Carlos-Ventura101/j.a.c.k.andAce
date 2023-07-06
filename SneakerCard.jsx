import React from "react";
import { useNavigate } from "react-router-dom";

function SneakerCard(props) {
  console.log(props, "SneakerBox");
  const aSneaker = props.sneaker;
  console.log(aSneaker);
  const navigate = useNavigate();

  const onSneakerClicked = (e) => {
    e.preventDefault();
    props.onSneakerClicked(e);
    const sneakerState = { state: { payload: aSneaker } };
    navigate(`/sneaker_box/new/${aSneaker.id}`, sneakerState);
  };

  return (
    <React.Fragment>
      <div className="card col-3">
        <img src={aSneaker.img} alt="img" />
        <h5>
          {aSneaker.brand} {aSneaker.model} {aSneaker.nickName} {aSneaker.type}
        </h5>
        <div className="card-text">Placeholder for content</div>
        <button
          type="button"
          id="viewMore"
          name="viewMore"
          onClick={onSneakerClicked}
          className="link-btn btn btn-primary"
        >
          View More
        </button>
      </div>
    </React.Fragment>
  );
}
export default SneakerCard;
