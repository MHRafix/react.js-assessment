import { IPricingTableDataType } from '@/utils/pricing-table-data.type';
import React from 'react';
import { DiscountBadge, TabName } from '../ui/styled-components';

interface PricingTabControllerProps {
	onChangeIsMonthlyPrice: (state: boolean) => void;
	isMonthlyPrice: boolean;
	pricingData: IPricingTableDataType;
}

const PricingTabController: React.FC<PricingTabControllerProps> = ({
	onChangeIsMonthlyPrice,
	isMonthlyPrice,
	pricingData,
}) => {
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
