const topupState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  results: {},
  message: null
}

export const topUp = (state = topupState, action) => {
  switch (action.type) {
    case 'TOPUP_PENDING': {
      state.isError = false;
      state.results = {};
      state.message = null;
      state.isLoading = true;
      state.isSuccess = false;
      return { ...state };
    }
    case 'TOPUP_FULFILLED': {
      const { data } = action.payload;
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = true;
      state.results = data.results;
      state.message = data.message;
      return { ...state };
    }
    case 'TOPUP_REJECTED': {
      const { message } = action.payload.response.data;
      state.isError = true;
      state.isLoading = false;
      state.results = {};
      state.message = message;
      state.isSuccess = false;
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
}

const transState = {
  isLoading: false,
  isError: false,
  errMessage: null
}
export const transfer = (state = transState, action) => {
  switch (action.type) {
    case 'TRANSFER_PENDING': {
      state.isError = false;
      state.errMessage = null;
      state.isLoading = true;
      return { ...state };
    }
    case 'TRANSFER_FULFILLED': {
      state.isError = false;
      state.isLoading = false;
      state.errMessage = false;
      return { ...state };
    }
    case 'TRANSFER_REJECTED': {
      const { message } = action.payload.response.data
      state.isLoading = false;
      state.isError = true;
      state.errMessage = message;
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
}
