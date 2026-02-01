import axios from "axios"

class AuthService {
  async login(credentials) {
    const users = await axios.post(`${process.env.REACT_APP_API_URL}/login`, credentials)
    return users;
  }
}

export default new AuthService();