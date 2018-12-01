import axios from 'axios';
const baseUrl = 'http://localhost:4000/api/images/';

class ImagesAPI {
  static images = () => axios.get(baseUrl);
  static image = (post_id) => axios.get(baseUrl + post_id);
  static create = (data, postid) => axios.post(baseUrl + postid + '/upload', data);





};

export default ImagesAPI;