import React, { useState } from 'react';
import { Button } from '../ui/styled-components';
import ColumnCardContent from './ColumnComponents/ColumnCardContent';
import ColumnCardHeader from './ColumnComponents/ColumnCardHeader';

interface IPricingTableColumnCardProps {
	plan: any;
	colors: any;
	isMonthlyPrice: boolean;
}

const PricingColumnCard: React.FC<IPricingTableColumnCardProps> = ({
	plan,
	colors,
	isMonthlyPrice,
}) => {
	// index state for multiple pricing plan column
	const [planIndex, setPlanIndex] = useState<number>(0);

	return (
		<div
			className={'pricing_table_style'}
			style={{
				borderTopColor: colors?.color_deep,
			}}
		>
			{/* column header area  */}
			<ColumnCardHeader
				plan={plan}
				isMonthlyPrice={isMonthlyPrice}
				colors={colors}
				onChangePlanIndex={setPlanIndex}
				planIndex={planIndex}
			/>

			{/* column content area  */}
			<ColumnCardContent plan={plan} planIndex={planIndex} />

			{/* column action area  */}
			<div className='column_action'>
				<Button
					style={{
						backgroundColor: colors?.color_deep,
						width: '100%',
					}}
				>
					<a
						className='select-plan-btn'
						href='https://go.chaty.app/register'
						target='_blank'
						rel='noreferrer'
					>
						Select Plan
					</a>
				</Button>
			</div>
		</div>
	);
};

export default PricingColumnCard;
