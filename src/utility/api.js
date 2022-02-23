import axios from 'axios';

export const fetchData = async url => {
  try {
    const result = await axios.get(url,  {
      headers: { 'User-Agent':'Axios 0.21.1' }
    });
    return result;
  } catch (e) {
    console.log(e);
  }
};
