import redux, { createStore, combineReducers } from "redux";
import { bindActionCreators } from "redux";

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICE_ORDERED = "ICE_ORDERED";
const ICE_RESTOCKED = "ICE_RESTOCKED";

// action
function orderCake() {
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
}
function restockCake(qty = 1) {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
}
// Cake Action End================

// ===========IceCream===============
function orderIce() {
  return {
    type: ICE_ORDERED,
    payload: 1,
  };
}
function restockIce(qty = 1) {
  return {
    type: ICE_RESTOCKED,
    payload: qty,
  };
}

// Initial State
const initialState = {
  numOfCakes: 10,
  numOfIce: 20,
};

// (prevState, action) => newState
const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };

    default:
      return state;
  }
};
const iceReducer = (state = initialState, action) => {
  switch (action.type) {
    case ICE_ORDERED:
      return {
        ...state,
        numOfIce: state.numOfIce - 1,
      };
    case ICE_RESTOCKED:
      return {
        ...state,
        numOfIce: state.numOfIce + action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({ cake: cakeReducer, ice: iceReducer });

const store = createStore(rootReducer);
console.log("Initial state", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("update state", store.getState())
);

// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restockCake(3));

const actions = bindActionCreators(
  { orderCake, restockCake, orderIce, restockIce },
  store.dispatch
);
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restockCake(3);
actions.orderIce();
actions.orderIce();
actions.restockIce(2);

unsubscribe();
