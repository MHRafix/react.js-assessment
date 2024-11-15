import { combineReducers } from 'redux';
import pricingDataReducer from './reducer';

const rootReducer = combineReducers({
	counter: pricingDataReducer,
});

export default rootReducer;
