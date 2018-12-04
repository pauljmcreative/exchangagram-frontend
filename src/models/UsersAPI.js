import axios from 'axios';
const baseUrl = 'http://localhost:4000/api/users/';

class UsersAPI {
  static show = (id) => axios.get(baseUrl + id);
  static signup = (userData) => axios.post(baseUrl + 'signup', userData);
  static signin = (signinData) => axios.post(baseUrl + 'signin', signinData);
  static update = (id, profileData) => axios.put(baseUrl + id, profileData);


};

export default UsersAPI;


