import axios from 'axios';
const baseUrl = 'http://localhost:4000/api/posts/';

class PostsAPI {
  static index = () => axios.get(baseUrl);

  static show = (id) => axios.get(baseUrl + id);

  static create = (data, id) => axios.post(baseUrl + 'new/' + id, data)


};

export default PostsAPI;