import {
	IPlanType,
	IPricingTableDataType,
} from '@/utils/pricing-table-data.type';
import pricingTableData from '../../fake-data/pricing-data.json';
import { filterPricingData } from '../../utils/growth-data-filter';
import { DECREMENT, INCREMENT } from '../actions/actions';

export interface IInitialStateType {
	pricingTableData: IPricingTableDataType | any;
}

const { growthPlan, restPlan } = filterPricingData(
	pricingTableData?.plans as IPlanType[]
);

// Initial state
const initialState: IInitialStateType = {
	pricingTableData: {
		plans: [...restPlan, { growthPlans: growthPlan }],
		features: pricingTableData?.features,
		plansInfo: pricingTableData?.plansInfo,
	},
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
