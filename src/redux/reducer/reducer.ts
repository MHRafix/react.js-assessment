import {
	IPlanType,
	IPricingTableDataType,
} from '@/utils/pricing-table-data.type';
import pricingTableData from '../../fake-data/pricing-data.json';
import { filterPricingData } from '../../utils/growth-data-filter';

export interface IInitialStateType {
	pricingTableData: IPricingTableDataType | any;
}

// Initial state
const initialState: IInitialStateType = {
	pricingTableData: {
		plans: filterPricingData(pricingTableData?.plans as IPlanType[]),
		features: pricingTableData?.features,
		plansInfo: pricingTableData?.plansInfo,
	},
};

// Reducer function
const pricingDataReducer = (state = initialState, action: any) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default pricingDataReducer;
