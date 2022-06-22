import fetchData from '../../apiServices/getRockets';

const ROCKETS = 'redux/actions/get_rockets';

const RESERVE_ROCKET = 'redux/action/reserve_rocket';

const rocketsData = (rockets) => ({
  type: ROCKETS,
  payload: rockets,
});

export const reserveRocket = (rocketID) => ({
  type: RESERVE_ROCKET,
  payload: rocketID,
});

export const getRockets = () => (dispach) => {
  fetchData().then((response) => {
    const rockets = response.map((rocket) => ({
      id: rocket.rocket_id,
      name: rocket.rocket_name,
      image: rocket.flickr_images,
      description: rocket.description,
      reserved: false,
    }));
    dispach(rocketsData(rockets));
  });
};

const rocketsReducer = (state = [], action) => {
  switch (action.type) {
    case ROCKETS:
      return action.payload;
    case RESERVE_ROCKET:
      return state.map((rocket) => ((rocket.id) === action.payload
        ? { ...rocket, reserved: !rocket.reserved }
        : { ...rocket }));
    default:
      return state;
  }
};

export default rocketsReducer;
