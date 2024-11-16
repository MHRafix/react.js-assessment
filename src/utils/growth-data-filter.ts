import { IPlanType } from './pricing-table-data.type';

// pricing data filter and make as my model
export const filterPricingData = (plans: IPlanType[]): IPlanType[] => {
	// const growthPlan: any[] = plans?.filter(
	// 	(plan: IPlanType) => plan?.name === 'Growth'
	// );

	const grouped: IPlanType[] = plans.reduce(
		(acc: any, currentPlan: IPlanType) => {
			// check any group exist for the current name
			const group: IPlanType[] = acc.find(
				(item: IPlanType) =>
					Array.isArray(item) && item[0]?.name === currentPlan.name
			);

			if (group) {
				// If exists, push the current object into the array
				group.push(currentPlan);
			} else {
				// If no group exists, create a new group for the current name
				acc.push([currentPlan]);
			}

			return acc;
		},
		[]
	);

	// Flatten the arrays
	const flattened = grouped.flat();

	// Create a new structure
	const result: any = [];

	// Create a map to handle duplicate names
	const map = new Map();

	// Iterate over the flattened array
	flattened.forEach((item) => {
		if (!map.has(item.name)) {
			map.set(item.name, []); // Initialize an array for each name
		}
		map.get(item.name).push(item); // Add item to the respective array
	});

	// Convert the map to the desired format
	map.forEach((value) => {
		result.push(value.length === 1 ? value[0] : value);
	});

	return result;
};
