const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();
const applyMiddleWare = redux.applyMiddleware;

const ORDER_PIZZA = "ORDER_PIZZA";
const ORDER_BURGER = "ORDER_BURGER";

// Action Creator-1
const orderPizza = () => {
  return {
    type: "ORDER_PIZZA",
    shopName: "Pizza Shop",
  };
};
// Action Creator-2
const orderBurger = () => {
  return {
    type: ORDER_BURGER,
  };
};

// Reducer
const initialStateForBurger = {
  burgerBuns: 200,
  //   tippings: ["cheese", "capsicum"],
};
const intialStateForPizza = {
  pizzaBase: 100,
};

const reducerPizza = (state = intialStateForPizza, action) => {
  switch (action.type) {
    case ORDER_PIZZA:
      return {
        ...state,
        pizzaBase: state.pizzaBase - 1,
      };
    default:
      return state;
  }
};
const reducerBurger = (state = initialStateForBurger, action) => {
  switch (action.type) {
    case ORDER_BURGER:
      return {
        ...state,
        burgerBuns: state.burgerBuns - 1,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  pizza: reducerPizza,
  burger: reducerBurger,
});
const store = createStore(rootReducer, applyMiddleWare(logger));

console.log("initialState", store.getState());

store.subscribe(() => {});

store.dispatch(orderPizza());
store.dispatch(orderBurger());
store.dispatch(orderBurger());
store.dispatch(orderPizza());
store.dispatch(orderPizza());
store.dispatch(orderPizza());
