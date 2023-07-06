import React, { useState, useEffect, useCallback } from "react";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import locale from "rc-pagination/lib/locale/en_US";
import { Link } from "react-router-dom";
import * as friendsService from "../../services/peopleService";
import Friend from "../../components/friends/Friend";
import toastr from "toastr";
import debug from "sabio-debug";

function Friends() {
  const _logger = debug.extend("Friends");
  const [pageData, setPageData] = useState({
    arrayOfFriends: [],
    arrayOfSearchQuery: [],
    arrayOfPages: [],
    peopleComponents: [],
  });
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [currentPage, setCurrentPage] = useState({
    pageIndex: 0,
    pageSize: 6,
    searchQuery: "",
    totalCount: 18,
    current: 1,
  });

  const onChange = (page) => {
    _logger(page);
    setCurrentPage((prevState) => ({
      ...prevState,
      current: page,
      pageIndex: page,
    }));
  };

  const onSearchFormChange = (e) => {
    const { name, value } = e.target;
    setCurrentPage((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const setData = useCallback((data) => {
    const arrayOfFiends = data.item.pagedItems;
    toastr.success("Yay! You Found a Friend!");
    setPageData((prevState) => ({
      ...prevState,
      arrayOfFriends: arrayOfFiends,
      arrayOfSearchQuery: arrayOfFiends,
      arrayOfPages: arrayOfFiends,
      peopleComponents: arrayOfFiends.map(mapFriend),
      totalCount: data.item.totalCount,
    }));
  }, []);

  const mapFriend = useCallback((aFriend) => {
    return (
      <Friend
        friend={aFriend}
        key={"ListA" + aFriend.id}
        onPersonClicked={onDeleteRequested}
      />
    );
  }, []);

  const onDeleteRequested = useCallback((myPerson) => {
    friendsService
      .deletePerson(myPerson.id)
      .then(() => onDeleteSuccess(myPerson.id))
      .catch(onDeleteError);
  }, []);

  const onDeleteSuccess = useCallback(
    (idToBeDeleted) => {
      setPageData((prevState) => {
        const filteredArray = prevState.arrayOfFriends.filter(
          (person) => person.id !== idToBeDeleted
        );
        return {
          ...prevState,
          arrayOfFriends: filteredArray,
          peopleComponents: filteredArray.map(mapFriend),
        };
      });
    },
    [mapFriend]
  );

  useEffect(() => {
    if (!currentPage.searchQuery || currentPage.clear) {
      friendsService
        .getFriends(currentPage.pageIndex, currentPage.pageSize)
        .then(onGetFriendsSuccess)
        .catch(onGetFriendsError);
    } else {
      friendsService
        .searchFriend(
          currentPage.pageIndex,
          currentPage.pageSize,
          currentPage.searchQuery
        )
        .then(onSearchFormSuccess)
        .catch(onSearchFormError);
    }
  }, [currentPage]);

  const onGetFriendsSuccess = useCallback(
    (data) => {
      setData(data);
    },
    [setData]
  );

  const onGetFriendsError = (err) => {
    console.error(err);
  };

  const onSearchFormSuccess = useCallback(
    (data) => {
      setData(data);
    },
    [setData]
  );

  const onSearchFormError = () => {
    toastr.error("Awh No New Friends...that's unfortunate");
  };

  const onDeleteError = (err) => {
    console.error("Deleting", err);
  };

  const onHeaderClicked = () => {
    setCount((prevState) => prevState + 1);
  };

  const onToggleClick = () => {
    setToggle(!toggle);
  };

  return (
    <React.Fragment>
      <div className="container">
        <h3 onClick={onHeaderClicked}>Rendering Friends{count}</h3>
        <button onClick={onToggleClick} className="btn btn-primary">
          {toggle ? "Hide" : "Show"}
        </button>
        <Pagination
          className="ant-pagination mx-5"
          defaultPageSize={1}
          onChange={onChange}
          current={currentPage.current}
          total={10}
          locale={locale}
        />

        <div className="col-md-3">
          <Link to="/friends/new">
            <button
              className="justify-content-center shadow bg-body-tertiary rounded bg-light-subtle"
              id="cmdAdd"
              type="button"
              name="Add"
            >
              Add New Friend
            </button>
          </Link>
        </div>
        <div className="row">
          <div className="col-md-1 ">
            {" "}
            <input
              type="number"
              name="pageIndex"
              id="pageIndex"
              value={currentPage.pageIndex}
              onChange={onSearchFormChange}
            />
          </div>
          <div className="col-md-1">
            {" "}
            <input
              type="number"
              name="pageSize"
              id="pageSize"
              value={currentPage.pageSize}
              onChange={onSearchFormChange}
            />
          </div>
          <div className="col-md-3 ">
            {" "}
            <input
              value={currentPage.searchQuery}
              onChange={onSearchFormChange}
              type="text"
              name="searchQuery"
              id="searchQuery"
            />
          </div>

          <div className="col-md-2 ">
            {" "}
            <button
              className="justify-content-center shadow bg-body-tertiary rounded bg-light-subtle"
              id="cmdSearch"
              name="searchFriend"
              type="button"
              value={currentPage.searchQuery}
              onClick={onToggleClick}
            >
              {toggle ? "Clear" : "Search Friend"}
            </button>
          </div>
          <div className="row">{toggle && pageData.peopleComponents}</div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Friends;
