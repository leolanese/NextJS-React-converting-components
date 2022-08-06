import requestRemoteApiClient from "./RequestRemoteApiClient";

const getComments = () => requestRemoteApiClient.get("/comments");

export default {
  getComments
};