import initialState from "../initial-states/purchases";
import {
  GET_PURCHASES_PENDING,
  GET_PURCHASES_FULLFILED,
  GET_PURCHASES_REJECTED,
  ADD_PURCHASE_PENDING,
  ADD_PURCHASE_FULLFILED,
  ADD_PURCHASE_REJECTED,
  UPDATE_PURCHASE_PENDING,
  UPDATE_PURCHASE_FULLFILED,
  UPDATE_PURCHASE_REJECTED,
  DELETE_PURCHASE_PENDING,
  DELETE_PURCHASE_FULLFILED,
  DELETE_PURCHASE_REJECTED
} from "../actions/purchases";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PURCHASES_PENDING:
      return {
        ...state,
        list: [],
        errorMsg: null,
        successMsg: null,
        isLoading: true
      };
    case GET_PURCHASES_FULLFILED:
      return {
        ...state,
        list: action.Purchases,
        errorMsg: null,
        successMsg: action.payload,
        isLoading: false
      };
    case GET_PURCHASES_REJECTED:
      return {
        ...state,
        list: [],
        errorMsg: action.payload,
        successMsg: null,
        isLoading: false
      };
    case ADD_PURCHASE_PENDING:
      return {
        ...state,
        list: [],
        errorMsg: null,
        successMsg: null,
        isLoading: true
      };
    case ADD_PURCHASE_FULLFILED:
      return {
        ...state,
        list: [...state.list],
        errorMsg: null,
        successMsg: action.payload,
        isLoading: false
      };
    case ADD_PURCHASE_REJECTED:
      return {
        ...state,
        list: [...state.list],
        errorMsg: action.payload,
        successMsg: null,
        isLoading: false
      };
    case UPDATE_PURCHASE_PENDING:
      return {
        ...state,
        list: [...state.list],
        errorMsg: null,
        successMsg: null,
        isLoading: true
      };
    case UPDATE_PURCHASE_FULLFILED:
      return {
        ...state,
        list: [...state.list],
        errorMsg: null,
        successMsg: action.payload,
        isLoading: false
      };
    case UPDATE_PURCHASE_REJECTED:
      return {
        ...state,
        list: [...state.list],
        errorMsg: action.payload,
        successMsg: null,
        isLoading: false
      };
    case DELETE_PURCHASE_PENDING:
      return {
        ...state,
        list: [...state.list],
        errorMsg: null,
        successMsg: null,
        isLoading: true
      };
    case DELETE_PURCHASE_FULLFILED:
      return {
        ...state,
        list: state.list.filter(purchase => purchase._id !== action.purchaseId),
        errorMsg: null,
        successMsg: action.payload,
        isLoading: false
      };
    case DELETE_PURCHASE_REJECTED:
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
