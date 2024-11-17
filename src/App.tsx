import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import PricingColumnCard from './components/PricingColumnCard';
import PricingTabController from './components/PricingTabController';
import { IInitialStateType } from './redux/reducer/reducer';
import { colors } from './utils/colors-variant';
import {
	IPlanType,
	IPricingTableDataType,
} from './utils/pricing-table-data.type';

const App = () => {
	// pricingData state from the redux store
	const pricingData: IPricingTableDataType = useSelector(
		(state: IInitialStateType) => state.pricingTableData
	);

	// price tab state
	const [isMonthlyPrice, setIsMonthlyPrice] = useState<boolean>(true);

	return (
		<div>
			<div className='container'>
				<div className='w-full'>
					{/* tabs */}
					<PricingTabController
						onChangeIsMonthlyPrice={setIsMonthlyPrice}
						isMonthlyPrice={isMonthlyPrice}
						pricingData={pricingData}
					/>

					{/* content */}
					<div className='mt-8'>
						<div className='pricing_table_wrapper'>
							{/* useMemo has no effects here because it's not a big task. I used useMemo for showing optimizing way. */}
							{useMemo(() => {
								return pricingData?.plans?.map(
									(plan: IPlanType, idx: number) => (
										<PricingColumnCard
											key={idx}
											plan={plan}
											colors={colors[idx]}
											features={pricingData?.features}
											isMonthlyPrice={isMonthlyPrice}
										/>
									)
								);
							}, [pricingData, isMonthlyPrice])}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
