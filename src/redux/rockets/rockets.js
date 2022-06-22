import fetchData from '../../apiServices/getRockets';

const ROCKETS = 'redux/actions/get_rockets';

const rockets = (rockets) => ({
  type: ROCKETS,
  payload: rockets,
});

export const getRockets = () => (dispach) => {
  fetchData().then((rocket) => {
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
