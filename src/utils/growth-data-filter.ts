import { IPlanType } from './pricing-table-data.type';

interface IReturnDataType {
	growthPlan: IPlanType[];
	restPlan: IPlanType[];
}

// pricing data filter and make as my model
export const filterPricingData = (plans: IPlanType[]): IReturnDataType => {
	const growthPlan: any[] = plans?.filter(
		(plan: IPlanType) => plan?.name === 'Growth'
	);

	// growth plan modify and inject children
	// const modifiedPlans = growthPlan[0];
	// growthPlan.shift();
	// modifiedPlans.children = growthPlan;

	// rest plan
	const restPlan: IPlanType[] = plans?.filter(
		(plan: IPlanType) => plan?.name !== 'Growth'
	);

	return { growthPlan, restPlan };
};
