import axios from 'axios';
const base_url="http://localhost:8080/profiles"

const getProfile = async (id: string) => {
  console.log('ProfileService received:', id);
  try {
    const response = await axios.get(`${base_url}/get/${id}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error getting profile:', error.response ?   error.response.data : error.message);
      if (error.response) {
        throw error.response.data;
      } else {
        throw new Error('Network Error');
      }
    } else {
      console.error('Error getting profile:', error);
      throw error;
    }
  }
};

const updateProfile = async (userData: any) => {
  console.log('ProfileService received:', userData);
  try {
    const response = await axios.put(`${base_url}/update`, userData);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error updating profile:', error.response ? error.response.data : error.message);
      if (error.response) {
        throw error.response.data;
      } else {
        throw new Error('Network Error');
      }
    } else {
      console.error('Error updating profile:', error);
      throw error;
    }
  }
};


export default {
  getProfile,
  updateProfile,};