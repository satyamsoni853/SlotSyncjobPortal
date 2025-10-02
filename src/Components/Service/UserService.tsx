import axios from 'axios';
const base_url="http://localhost:8080/users"

const registerUser = async (userData: any) => {
  console.log('UserService received:', userData);
  try {
    const response = await axios.post(`${base_url}/register`, userData);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error registering user:', error.response ? error.response.data : error.message);
      if (error.response) {
        throw error.response.data;
      } else {
        throw new Error('Network Error');
      }
    } else {
      console.error('Error registering user:', error);
      throw error;
    }
  }
};
const loginUser = async (userData: any) => {
  try {
    const response = await axios.post(`${base_url}/Login`, userData);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error logging in user:', error.response ? error.response.data : error.message);
      if (error.response) {
        throw error.response.data;
      } else {
        throw new Error('Network Error');
      }
    } else {
      console.error('Error logging in user:', error);
      throw error;
    }
  }
};


const sendOtp = async (email: string) => {
  try {
    const response = await axios.post(`${base_url}/sendOtp/${email}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error sending OTP:', error.response ? error.response.data : error.message);
      if (error.response) {
        throw error.response.data;
      } else {
        throw new Error('Network Error');
      }
    } else {
      console.error('Error sending OTP:', error);
      throw error;
    }
  }
};

const verifyOtp = async (email: string, otp: string) => {
  try {
    const response = await axios.get(`${base_url}/verifyOtp/${email}/${otp}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error verifying OTP:', error.response ? error.response.data : error.message);
      if (error.response) {
        throw error.response.data;
      } else {
        throw new Error('Network Error');
      }
    } else {
      console.error('Error verifying OTP:', error);
      throw error;
    }
  }
};

const changePassword = async (userData: any) => {
  try {
    const response = await axios.post(`${base_url}/changePassword`, userData);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error changing password:', error.response ? error.response.data : error.message);
      if (error.response) {
        throw error.response.data;
      } else {
        throw new Error('Network Error');
      }
    } else {
      console.error('Error changing password:', error);
      throw error;
    }
  }
};

export default {
  registerUser,
  loginUser,
  sendOtp,
  verifyOtp,
  changePassword,
};