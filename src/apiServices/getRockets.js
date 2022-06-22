const url = 'https://api.spacexdata.com/v3/rockets';

const fetchRockets = async () => {
  const data = await fetch(url);
  const response = await data.json();
  return response;
};

export default fetchRockets;
