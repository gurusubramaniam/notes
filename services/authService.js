import { account } from './appwrite';
import { ID } from 'react-native-appwrite';

const authService = {
  async register(email, password) {
    try {
      const response = await account.create(ID.unique(), email, password);
      console.log(response);
      return response;
    } catch (error) {
      return {
        error: error.message || 'registration failed, please try again',
      };
    }
  },
  async login(email, password) {
    try {
      const response = await account.createEmailPasswordSession(
        email,
        password
      );
      console.log(response);
      return response;
    } catch (error) {
      return {
        error: error.message || 'login failed, please try again',
      };
    }
  },
  async getUser() {
    try {
      const response = await account.get();
      return response;
    } catch (error) {
      return {
        error: error.message || 'get user failed, please try again',
      };
    }
  },

  async logout() {
    try {
      const response = await account.deleteSession('current');
      return response;
    } catch (error) {
      return {
        error: error.message || 'Logout failed, please try again',
      };
    }
  },
};

export default authService;
