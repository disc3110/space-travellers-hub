const SUCCESS_MISSION = 'SUCCESS_MISSION';

const initialState = [];

export const successMission = (payload) => ({
  type: SUCCESS_MISSION,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_MISSION: {
      return action.payload.map((element) => ({
        mission_id: element.mission_id,
        mission_name: element.mission_name,
        description: element.description,
      }));
    }
    default:
      return state;
  }
};

export default reducer;
