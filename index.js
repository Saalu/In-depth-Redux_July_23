const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const icecreamActions =
  require("./features/iceCream/icecreamSlice").icecreamActions;

const unsubscribe = store.subscribe(() => {});

store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(3));

store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.restocked(2));

unsubscribe();
