import axios from "axios"

class UserService {
  async list() {
    console.log('URL API:', process.env.REACT_APP_API_URL);
    const users = await axios.get(`${process.env.REACT_APP_API_URL}/users`, {
      headers: {
        "Authorization": "Bearer " + sessionStorage.getItem("token")
      }
    });
    console.log(users);
    return users.data;
  }
  async get(id) {
    const user = await axios.get(`${process.env.REACT_APP_API_URL}/users/${id}`, {
      headers: {
        "Authorization": "Bearer " + sessionStorage.getItem("token")
      }
    })
    return user.data;
  }
  async create(data) {
    const user = await axios.post(`${process.env.REACT_APP_API_URL}/users`, data, {
      headers: {  
        "Authorization": "Bearer " + sessionStorage.getItem("token")
      }
    })
    return user.data;
  }
  async delete(id) {
    const user = await axios.delete(`${process.env.REACT_APP_API_URL}/users/${id}`, {
      headers: {
      "Authorization": "Bearer " + sessionStorage.getItem("token")
      }
    })
    return user.data;
  }
  async update(id, data) {
    const user = await axios.put(`${process.env.REACT_APP_API_URL}/users/${id}`, data, {
      headers: {
        "Authorization": "Bearer " + sessionStorage.getItem("token")
      }
    })
    return user.data;
  }
}

export default new UserService();
