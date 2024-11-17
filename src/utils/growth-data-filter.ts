import { IPlanType } from './types/pricing-table-data.type';

// pricing data filter and make as my model
export const filterPricingData = (plans: IPlanType[]): IPlanType[] => {
	const arrayGrouped: IPlanType[] = plans.reduce(
		(accumulator: any, currentPlan: IPlanType) => {
			// check any group exist for the current name
			const group: IPlanType[] = accumulator.find(
				(item: IPlanType) =>
					Array.isArray(item) && item[0]?.name === currentPlan.name
			);

			if (group) {
				// if exists, push the current object into the array
				group.push(currentPlan);
			} else {
				// if no group exists, create a new group for the current name
				accumulator.push([currentPlan]);
			}

			return accumulator;
		},
		[]
	);

	// flatten the arrays
	const flattened = arrayGrouped.flat();

	// Create a new structure
	const result: IPlanType[] = [];

	// create a map to handle duplicate names
	const map = new Map();

	// iterate over the flattened array
	flattened.forEach((item) => {
		if (!map.has(item.name)) {
			map.set(item.name, []); // initialize an array for each name
		}
		map.get(item.name).push(item); // add item to the respective array
	});

	// convert the map to the desired format
	map.forEach((value) => {
		result.push(value.length === 1 ? value[0] : value);
	});

	return result;
};
