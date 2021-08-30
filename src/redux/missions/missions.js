
const SUCCESS_MISSION = 'SUCCESS_MISSION';
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/JRvgmQWxBSuTgawpguvn/books/';

const initialState = [];

export const successMission = (payload) => ({
  type: SUCCESS_MISSION,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_BOOK: {
      return Object.keys(action.payload).map((key) => ({
        id: key,
        title: action.payload[key][0].title,
        author: uniqueNamesGenerator({ dictionaries: [starWars] }),
        genre: action.payload[key][0].category,
      }));
    }
    default:
      return state;
  }
};

export default reducer;
