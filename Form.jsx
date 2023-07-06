import React, { useState, useEffect } from "react";
import toastr from "toastr";
import { useLocation, useNavigate } from "react-router-dom";
import * as friendsService from "../../services/peopleService";

function FriendForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const [friendFormData, setFriendFormData] = useState({
    title: "",
    bio: "",
    summary: "",
    headline: "",
    slug: "",
    skills: "",
    entityTypeId: "",
    statusId: "",
    primaryImage: {
      id: "",
      entityId: "",
      imageTypeId: "",
      imageUrl: "",
    },
  });

  const onFriendFormChange = (event) => {
    const { name, value } = event.target;
    setFriendFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addFriendClicked = async (e) => {
    e.preventDefault();
    try {
      const payload = await friendsService.addFriend(friendFormData);
      onAddFriendSuccess(payload);
    } catch (error) {
      onAddFriendError();
    }
  };

  const onAddFriendSuccess = (payload) => {
    console.log(payload);
    toastr.success("Hooray! You added a Friend!");
    navigate("/friends");
  };

  const onAddFriendError = () => {
    toastr.error("Failed to add Friend...that's unfortunate");
  };

  const updateFriendClicked = async () => {
    try {
      const data = await friendsService.updateFriend(
        friendFormData.id,
        friendFormData
      );
      onUpdateFriendSuccess(data);
    } catch (error) {
      onUpdateFriendError();
    }
  };

  const onUpdateFriendSuccess = (data) => {
    console.log(data);
    toastr.success("Yay! You Updated a Friend!");
  };

  const onUpdateFriendError = () => {
    toastr.error("Failed to update Friend...so sad");
  };

  useEffect(() => {
    if (location?.state?.type === "Friend_Edit" && location.state.payload) {
      setFriendFormData((prevState) => ({
        ...prevState,
        ...location.state.payload,
      }));
    }
  }, [location]);

  return (
    <React.Fragment>
      <h1>Add Friends</h1>
      <section className="vh-100 bg-image">
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card">
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">
                      Add A Friend
                    </h2>

                    <form>
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="title"
                          name="title"
                          value={friendFormData.title}
                          onChange={onFriendFormChange}
                          className="form-control form-control-lg"
                        />
                        <label htmlFor="title" className="form-label">
                          Enter Title
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="bio"
                          name="bio"
                          value={friendFormData.bio}
                          onChange={onFriendFormChange}
                          className="form-control form-control-lg"
                        />
                        <label htmlFor="bio" className="form-label">
                          Enter Bio
                        </label>
                      </div>

                      {/* Rest of the form fields */}

                      <div className="d-flex justify-content-center">
                        <button
                          type="button"
                          onClick={
                            friendFormData.id
                              ? updateFriendClicked
                              : addFriendClicked
                          }
                          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                        >
                          {friendFormData.id ? "Update Friend" : "Add Friend"}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default FriendForm;
