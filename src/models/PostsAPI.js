import axios from 'axios';
const baseUrl = 'https://exchangagram-backend.herokuapp.com/api/posts/';

class PostsAPI {
  static index = () => axios.get(baseUrl);

  static show = (id) => axios.get(baseUrl + id);

  static create = (data, id) => axios.post(baseUrl + 'new/' + id, data);

  static update = (id, data) => axios.put(baseUrl + id, data)

  static delete = (id) => axios.delete(baseUrl + id);


};

export default PostsAPI;