const SUCCESS_MISSION = 'SUCCESS_MISSION';
const JOIN_MISSION = 'JOIN_MISSION';

const initialState = [];

export const successMission = (payload) => ({
  type: SUCCESS_MISSION,
  payload,
});

export const joinMission = (payload) => ({
  type: JOIN_MISSION,
  payload,
});


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_MISSION: {
      if (state.length === 0) {
        const newState = action.payload.map((element) => ({
          mission_id: element.mission_id,
          mission_name: element.mission_name,
          description: element.description,
        }));
        return newState;
      }
      return state;
    }
    case JOIN_MISSION: {
      const newState = state.map((mission) => {
        if (mission.mission_id !== action.payload.id) return mission;
        return { ...mission, member: !mission.member, mission_button: !mission.mission_button };
      });
      return newState;
    }
    default:
      return state;
  }
};

export default reducer;
