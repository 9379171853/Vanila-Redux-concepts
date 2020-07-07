const redux = require('redux');
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';
const reduxLogger = require('redux-logger');

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleWare = redux.applyMiddleware;
const logger = reduxLogger.createLogger();
//action
function buyCake() {
  return {
    type: BUY_CAKE,
    info: 'First redux action',
  };
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
  };
}
//reducer

// formula for new state
// prevState + action = new state

// const initialState = {
//     numOfCakes: 10,
//   };

const initialCakeState = {
  numOfCakes: 10,
};

const initialIceCreamState = {
  numOfIceCream: 20,
};
// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//       case BUY_CAKE:
//         return {
//           ...state,
//           numOfCakes: state.numOfCakes - 1,
//         };
//       case BUY_ICECREAM:
//         return {
//           ...state,
//           numOfIceCream: state.numOfIceCream - 1,
//         };
//       default:
//         return state;
//     }
//   };

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    default:
      return state;
  }
};
const iceReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      };
    default:
      return state;
  }
};

//combine reducer
const rootReducer = redux.combineReducers({
  cake: cakeReducer,
  iceCream: iceReducer,
});

//store

const store = redux.createStore(rootReducer, redux.applyMiddleware(logger));
console.log('Initial state', store.getState());

const unsubscribe = store.subscribe(() => {});

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

unsubscribe();
