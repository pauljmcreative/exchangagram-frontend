import axios from 'axios';
const baseUrl = 'https://exchangagram-backend.herokuapp.com/api/images/';

class ImagesAPI {
  static images = () => axios.get(baseUrl);
  static image = (post_id) => axios.get(baseUrl + post_id);
  static create = (data, postid) => axios.post(baseUrl + postid + '/upload', data);





};

export default ImagesAPI;