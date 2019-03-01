import initialState from "../initial-states/providers";
import {
  GET_PROVIDERS_PENDING,
  GET_PROVIDERS_FULLFILED,
  GET_PROVIDERS_REJECTED,
  ADD_PROVIDER_PENDING,
  ADD_PROVIDER_FULLFILED,
  ADD_PROVIDER_REJECTED,
  UPDATE_PROVIDER_PENDING,
  UPDATE_PROVIDER_FULLFILED,
  UPDATE_PROVIDER_REJECTED,
  DELETE_PROVIDER_PENDING,
  DELETE_PROVIDER_FULLFILED,
  DELETE_PROVIDER_REJECTED
} from "../actions/providers";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROVIDERS_PENDING:
      return {
        ...state,
        list: [],
        errorMsg: null,
        successMsg: null,
        isLoading: true
      };
    case GET_PROVIDERS_FULLFILED:
      return {
        ...state,
        list: action.Providers,
        errorMsg: null,
        successMsg: action.payload,
        isLoading: false
      };
    case GET_PROVIDERS_REJECTED:
      return {
        ...state,
        list: [],
        errorMsg: action.payload,
        successMsg: null,
        isLoading: false
      };
    case ADD_PROVIDER_PENDING:
      return {
        ...state,
        list: [],
        errorMsg: null,
        successMsg: null,
        isLoading: true
      };
    case ADD_PROVIDER_FULLFILED:
      return {
        ...state,
        list: [...state.list],
        errorMsg: null,
        successMsg: action.payload,
        isLoading: false
      };
    case ADD_PROVIDER_REJECTED:
      return {
        ...state,
        list: [...state.list],
        errorMsg: action.payload,
        successMsg: null,
        isLoading: false
      };
    case UPDATE_PROVIDER_PENDING:
      return {
        ...state,
        list: [...state.list],
        errorMsg: null,
        successMsg: null,
        isLoading: true
      };
    case UPDATE_PROVIDER_FULLFILED:
      return {
        ...state,
        list: [...state.list],
        errorMsg: null,
        successMsg: action.payload,
        isLoading: false
      };
    case UPDATE_PROVIDER_REJECTED:
      return {
        ...state,
        list: [...state.list],
        errorMsg: action.payload,
        successMsg: null,
        isLoading: false
      };
    case DELETE_PROVIDER_PENDING:
      return {
        ...state,
        list: [...state.list],
        errorMsg: null,
        successMsg: null,
        isLoading: true
      };
    case DELETE_PROVIDER_FULLFILED:
      return {
        ...state,
        list: state.list.filter(provider => provider._id !== action.providerId),
        errorMsg: null,
        successMsg: action.payload,
        isLoading: false
      };
    case DELETE_PROVIDER_REJECTED:
      return {
        ...state,
        list: [state.list],
        errorMsg: action.payload,
        successMsg: null,
        isLoading: false
      };
    default:
      return state;
  }
};

export default reducer;
