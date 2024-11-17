import { IInitialStateType } from '@/redux/reducer/reducer';
import { IPricingTableDataType } from '@/utils/types/pricing-table-data.type';
import React from 'react';
import { useSelector } from 'react-redux';
import { DiscountBadge, TabName } from '../ui/styled-components';

interface PricingTabControllerProps {
	onChangeIsMonthlyPrice: (state: boolean) => void;
	isMonthlyPrice: boolean;
}

const PricingTabController: React.FC<PricingTabControllerProps> = ({
	onChangeIsMonthlyPrice,
	isMonthlyPrice,
}) => {
	// pricingData state from the redux store
	const pricingData: IPricingTableDataType = useSelector(
		(state: IInitialStateType) => state.pricingTableData
	);

	return (
		<div className='tab_list'>
			<TabName
				onClick={() => onChangeIsMonthlyPrice(true)}
				className={isMonthlyPrice ? 'tab_active' : 'aaa'}
			>
				Billed monthly
			</TabName>
			<div className='w-[1px] bg-[#c6d7e3]'></div>
			<div className='flex gap-3'>
				<TabName
					onClick={() => onChangeIsMonthlyPrice(false)}
					className={!isMonthlyPrice ? 'tab_active' : 'aaa'}
				>
					Billed yearly
				</TabName>
				<DiscountBadge>
					{pricingData?.plansInfo?.['2_year']?.discount}
				</DiscountBadge>
			</div>
		</div>
	);
};

export default PricingTabController;
