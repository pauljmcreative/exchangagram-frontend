import axios from 'axios';
const baseUrl = 'http://localhost:4000/api/avatars/';

class AvatarsAPI {
  static avatars = () => axios.get(baseUrl);
  static avatar = (post_id) => axios.get(baseUrl + post_id);
  static create = (data, postid) => axios.post(baseUrl + postid + '/upload', data);





};

export default AvatarsAPI;