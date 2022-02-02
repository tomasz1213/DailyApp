import axios from 'axios';

export const fetchData = async url => {
  try {
    const result = await axios.get(url);
    return result;
  } catch (e) {
    console.log(e);
  }
};
