import { IPricingTableDataType } from '@/utils/pricing-table-data.type';
import pricingTableData from '../../fake-data/pricing-data.json';
import { DECREMENT, INCREMENT } from '../actions/actions';

export interface IInitialStateType {
	pricingTableData: IPricingTableDataType | any;
}

// Initial state
const initialState: IInitialStateType = {
	pricingTableData: pricingTableData,
};

// Reducer function
const pricingDataReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case INCREMENT:
			return { ...state, count: state.pricingTableData };
		case DECREMENT:
			return { ...state, count: state.pricingTableData };
		default:
			return state;
	}
};

export default pricingDataReducer;
