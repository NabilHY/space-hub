const url = 'https://api.spacexdata.com/v3/rockets';

const fetchData = async () => {
  const data = await fetch(url);
  const response = await data.json();
  return response;
};

export default fetchData;
