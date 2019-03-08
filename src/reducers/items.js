import initialState from "../initial-states/items";
import {
  GET_ITEMS_PENDING,
  GET_ITEMS_FULLFILED,
  GET_ITEMS_REJECTED,
  ADD_ITEM_PENDING,
  ADD_ITEM_FULLFILED,
  ADD_ITEM_REJECTED,
  UPDATE_ITEM_PENDING,
  UPDATE_ITEM_FULLFILED,
  UPDATE_ITEM_REJECTED,
  DELETE_ITEM_PENDING,
  DELETE_ITEM_FULLFILED,
  DELETE_ITEM_REJECTED
} from "../actions/items";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS_PENDING:
      return {
        ...state,
        list: [],
        errorMsg: null,
        successMsg: null,
        isLoading: true
      };
    case GET_ITEMS_FULLFILED:
      return {
        ...state,
        list: action.items,
        errorMsg: null,
        successMsg: action.payload,
        isLoading: false
      };
    case GET_ITEMS_REJECTED:
      return {
        ...state,
        list: [],
        errorMsg: action.payload,
        successMsg: null,
        isLoading: false
      };
    case ADD_ITEM_PENDING:
      return {
        ...state,
        list: [...state.list],
        errorMsg: null,
        successMsg: null,
        isLoading: true
      };
    case ADD_ITEM_FULLFILED:
      return {
        ...state,
        list: [...state.list, action.product],
        errorMsg: null,
        successMsg: action.payload,
        isLoading: false
      };
    case ADD_ITEM_REJECTED:
      return {
        ...state,
        list: [...state.list],
        errorMsg: action.payload,
        successMsg: null,
        isLoading: false
      };
    case UPDATE_ITEM_PENDING:
      return {
        ...state,
        list: [...state.list],
        errorMsg: null,
        successMsg: null,
        isLoading: true
      };
    case UPDATE_ITEM_FULLFILED:
      return {
        ...state,
        list: [...state.list],
        errorMsg: null,
        successMsg: action.payload,
        isLoading: false
      };
    case UPDATE_ITEM_REJECTED:
      return {
        ...state,
        list: [...state.list],
        errorMsg: action.payload,
        successMsg: null,
        isLoading: false
      };
    case DELETE_ITEM_PENDING:
      return {
        ...state,
        list: [...state.list],
        errorMsg: null,
        successMsg: null,
        isLoading: true
      };
    case DELETE_ITEM_FULLFILED:
      return {
        ...state,
        list: state.list.filter(item => item._id !== action.itemId),
        errorMsg: null,
        successMsg: "Item deleted successfully!",
        isLoading: false
      };
    case DELETE_ITEM_REJECTED:
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
