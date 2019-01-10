import axios from 'axios';
const baseUrl = 'https://exchangagram-backend.herokuapp.com/api/comments/';

class CommentsAPI {
  static index = () => axios.get(baseUrl);

  // static postComments = (post_id) => axios.get(baseUrl + '/post/' + post_id);

  static show = (id) => axios.get(baseUrl + id);

  static create = (data, user_id, post_id) => axios.post(baseUrl + 'create/' + user_id + '/' + post_id, data)


};

export default CommentsAPI;