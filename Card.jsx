import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Friend = ({ friend, onPersonClicked }) => {
  const onLocalPersonClicked = useCallback(
    (evt) => {
      evt.preventDefault();
      onPersonClicked(friend, evt);
    },
    [friend, onPersonClicked]
  );

  const navigate = useNavigate();

  const onEditPersonClicked = useCallback(
    (evt) => {
      evt.preventDefault();
      const { primaryImage, id, ...friendData } = friend;
      const updatedFriend = {
        ...friendData,
        primaryImage: primaryImage.imageUrl,
      };
      const friendState = {
        state: { type: "Friend_Edit", payload: updatedFriend },
      };
      navigate(`/friends/new/${id}`, friendState);
    },
    [friend, navigate]
  );

  return (
    <div className="col-md-3">
      <div className="card">
        <img
          src={friend.primaryImage.imageUrl}
          className="card-img-top"
          alt="I Love code"
        />
        <div className="card-body">
          <h5 className="card-title">
            {friend.title} {friend.headlines}
          </h5>
          <p className="card-text">{friend.summary}</p>
          <button
            className="link-btn btn btn-primary"
            onClick={onLocalPersonClicked}
          >
            Go somewhere
          </button>
          <button
            type="button"
            onClick={onEditPersonClicked}
            className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
          >
            Edit Friend
          </button>
        </div>
      </div>
    </div>
  );
};

Friend.propTypes = {
  friend: PropTypes.shape({
    title: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
    primaryImage: PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  onPersonClicked: PropTypes.func.isRequired,
};

export default React.memo(Friend);
