const usersState = {
  isLoading: false,
  isError: false,
  results: [],
};

const users = (state = usersState, action) => {
  switch (action.type) {
    case 'GET_USERS_PENDING': {
      state.isError = false;
      state.isLoading = true;
      return { ...state };
    }
    case 'GET_USERS_FULFILLED': {
      const { data } = action.payload;
      state.isError = false;
      state.isLoading = false;
      state.results = data.results;
      return { ...state };
    }
    case 'GET_USERS_REJECTED': {
      state.isLoading = false;
      state.isError = true;
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};

export default users;
