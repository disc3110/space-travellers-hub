import { SUCCESS_MISSION, JOIN_MISSION } from './actiontypes';

export const successMission = (payload) => ({
  type: SUCCESS_MISSION,
  payload,
});

export const joinMission = (payload) => ({
  type: JOIN_MISSION,
  payload,
});
