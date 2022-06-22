import fetchRockets from '../../apiServices/getRockets';

const ROCKETS = 'redux/actions/get_rockets';

const rockets = (payload) => ({
  type: ROCKETS,
  payload,
});

export const getRockets = () => async (dispatch) => {
  const data = await fetchRockets();
  data.forEach((rocket) => {
    data.push({
      id: rocket.id,
      rocket_name: rocket.rocket_name,
      description: rocket.description,
      flickr_images: rocket.flickr_images[0],
      reserved: false,
    });
  });
  dispatch(fetchRockets(rockets));
};

const rocketsReducer = (state = [], action) => {
  switch (action.type) {
    case ROCKETS:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default rocketsReducer;
