const registerState = {
  dataRegist: {},
  results: {},
  message: '',
  isError: false,
  isLoading: false
}

const registerUser = (state = registerState, action) => {
  switch (action.type) {
    case 'REGISTER_PENDING': {
      state.isError = false;
      state.message = '';
      state.dataRegist = {}
      state.isLoading = true;
      return { ...state }
    }
    case 'REGISTER_FULFILLED': {
      const {data} = action.payload
      state.isError = false;
      state.isLoading = false;
      state.results = data;
      return { ...state };
    }
    case 'REGISTER_REJECTED': {
      const { message } = action.payload.response.data;
      state.isLoading = false;
      state.isError = true;
      state.message = message;
      return { ...state };
    }
    case 'ADD_DATA_REGIST': {
      const { dataRegist } = action.payload;
      state.dataRegist = dataRegist;
    }
    default: {
      return { ...state };
    }
  }
}

export default registerUser;
