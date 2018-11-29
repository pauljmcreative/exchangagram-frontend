import axios from 'axios';
const baseUrl = 'http://localhost:4000/api/users/';

class UsersAPI {
  static signup = (userData) => axios.post(baseUrl + 'signup', userData);


};

export default UsersAPI;


