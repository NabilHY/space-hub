import fetchRockets from '../../apiServices/getRocketsApi';

const ROCKETS = 'redux/actions/get_rockets';

const rockets = (rockets) => ({
  type: ROCKETS,
  payload: rockets,
});

export const getRockets = () => (dispach) => {
  fetchRockets().then((rocket) => {
    dispach(rockets(rocket));
  });
};

const rocketsReducer = (state = [], action) => {
  switch (action.type) {
    case ROCKETS:
      return action.payload;
    default:
      return state;
  }
};

export default rocketsReducer;
