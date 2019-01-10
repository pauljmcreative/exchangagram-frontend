import axios from "axios";
const baseUrl = "https://exchangagram-backend.herokuapp.com/api/avatars/";

class AvatarsAPI {
  static avatars = () => axios.get(baseUrl);
  static avatar = user_id => axios.get(baseUrl + user_id);
  static create = (data, user_id) =>
    axios.post(baseUrl + user_id + "/upload", data);
}

export default AvatarsAPI;
