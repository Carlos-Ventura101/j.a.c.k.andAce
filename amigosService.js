import axios from "axios";
import * as helper from "./serviceHelper";

const friendsService = {
  endpoint: "https://api.remotebootcamp.dev/api/friends"
};

const createConfig = (method, url, data) => ({
  method,
  url,
  data,
  crossdomain: true,
  headers: { "Content-Type": "application/json" }
});

const getFriends = (pageIndex, pageSize) =>
  axios(createConfig("GET", `${friendsService.endpoint}?pageIndex=${pageIndex}&pageSize=${pageSize}`))
    .then(helper.onGlobalSuccess);

const addFriend = (payload) =>
  axios(createConfig("POST", friendsService.endpoint, payload))
    .then(helper.onGlobalSuccess);

const deletePerson = (personId) =>
  axios(createConfig("DELETE", `${friendsService.endpoint}/${personId}`))
    .then(() => personId);

const updateFriend = (id, payload) =>
  axios(createConfig("PUT", `${friendsService.endpoint}/${id}`, payload))
    .then((response) => response);

const searchFriend = (index, size, searchQuery) =>
  axios(createConfig("GET", `${friendsService.endpoint}/search?pageIndex=${index}&pageSize=${size}&q=${searchQuery}`))
    .then(helper.onGlobalSuccess);

export { getFriends, addFriend, deletePerson, updateFriend, searchFriend };
