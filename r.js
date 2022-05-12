const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const BUY_CAKE = "BUY_CAKE";

const BUY_ICECREAM = "BUY_ICECREAM";
//action creator
function buyCake() {
  return {
    type: BUY_CAKE,
  };
}
function buyIcecream() {
  return {
    type: BUY_ICECREAM,
  };
}

const initialBuyCake = {
  numberOfCake: 18,
};
const initialBuyIceream = {
  numberOfIcecream: 29,
};

const cakeRaducer = (state = initialBuyCake, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return { ...state, numberOfCake: state.numberOfCake - 1 };
    default:
      return state;
  }
};
const iceCreamRaducer = (state = initialBuyIceream, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return { ...state, numberOfIcecream: state.numberOfIcecream - 1 };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeRaducer,
  iceCream: iceCreamRaducer,
});

const store = createStore(rootReducer);

console.log("initial state", store.getState());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
