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
		<div className='tab_list' id='tablist_responsive'>
			<TabName onClick={() => onChangeIsMonthlyPrice(true)}>
				<span className={isMonthlyPrice ? 'tab_active' : ''}>
					Billed monthly
				</span>
			</TabName>
			<div className='w-[1px] bg-[#c6d7e3]'></div>
			<TabName onClick={() => onChangeIsMonthlyPrice(false)}>
				<div className='flex gap-3 justify-center items-center'>
					<span className={!isMonthlyPrice ? 'tab_active' : ''}>
						Billed yearly
					</span>{' '}
					<DiscountBadge>
						{pricingData?.plansInfo?.['2_year']?.discount}
					</DiscountBadge>
				</div>
			</TabName>
		</div>
	);
};

export default PricingTabController;
