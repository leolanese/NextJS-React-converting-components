import requestRemoteApiClient from "./RequestRemoteApiClient";

const getPosts = () => requestRemoteApiClient.get("/posts");

export default {
  getPosts
};