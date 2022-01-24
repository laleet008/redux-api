import { GET_APPLICATIONS_FULLY } from "./actions";

const dataReducer = (state = { applications: [] }, action) => {
  switch (action.type) {
    case GET_APPLICATIONS_FULLY:
      return { ...state, applications: action.applications };
    default:
      return state;
  }
};

export default dataReducer;
