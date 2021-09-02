import React from 'react';
import MainNavigator from './navigation/navigation5';
import {createStore, combineReducers} from 'redux';
import mealsReducer from './store/reducers/meals';
import {enableScreens} from 'react-native-screens';
import {Provider} from 'react-redux';
enableScreens();
const rootReducer = combineReducers({
  meals: mealsReducer,
});
const store = createStore(rootReducer);
const App = () => {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
};

export default App;
