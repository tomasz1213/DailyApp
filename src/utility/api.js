import axios from 'axios';

export const fetchData = async url => {
  try {
    const result = await axios.get(url, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36',
      },
    });
    return result;
  } catch (e) {
    console.log(e);
  }
};
