import { IColorsType } from '@/utils/colors-variant';
import { IDetailsType, IPlanType } from '@/utils/types/pricing-table-data.type';
import { IconInfoCircle } from '@tabler/icons-react';
import React from 'react';
import {
	TitleBadge,
	VariantPrice,
	VariantSelectDropdown,
} from '../../ui/styled-components';
import Tooltip from '../Tooltip';

interface IColumnCardHeaderProps {
	plan: IPlanType[] | IPlanType | any;
	planIndex: number;
	colors: IColorsType;
	isMonthlyPrice: boolean;
	onChangePlanIndex: (state: number) => void;
}

const ColumnCardHeader: React.FC<IColumnCardHeaderProps> = ({
	plan,
	planIndex,
	colors,
	isMonthlyPrice,
	onChangePlanIndex,
}) => {
	// get price
	const getPrice = (planDetails: IDetailsType, isMonthlyPrice: boolean) => {
		const priceKey = isMonthlyPrice ? '1_year' : '2_year';
		return planDetails?.[priceKey]?.price;
	};

	// get regular price
	const getPlanRegularPrice = (planDetails: IDetailsType) => {
		return planDetails?.['1_year']?.price;
	};

	// check is plan free
	const isFreePlan = plan?.name === 'Free';

	// price
	const price = getPrice(
		plan?.length ? plan?.[planIndex]?.details : plan?.details,
		isMonthlyPrice
	);

	const regularPriceText = getPlanRegularPrice(
		plan?.length ? plan?.[planIndex]?.details : plan?.details
	);

	// price class
	const priceClass = `flex gap-3 ${
		isMonthlyPrice ? 'items-baseline' : 'items-center'
	}`;

	return (
		<div className='column_header relative'>
			{plan?.name === 'Pro' && (
				<span className='popular__badge'>Most Popular</span>
			)}
			<TitleBadge>
				{plan?.length ? plan?.[planIndex]?.name : plan?.name}
			</TitleBadge>

			{/* price area */}
			<div className={priceClass}>
				<VariantPrice style={{ color: colors?.color_deep }}>
					{price}
				</VariantPrice>
				<div className='grid'>
					{!isMonthlyPrice && !isFreePlan && (
						<span className='regular_column_variant_price'>
							{regularPriceText}/Month
						</span>
					)}
					{!isFreePlan && <span className='variant_by'>/Month</span>}
				</div>
			</div>

			{plan?.length ? (
				<div
					className={'multiple_column_variant_dropdown'}
					style={{
						color: colors?.color_deep,
					}}
				>
					<VariantSelectDropdown
						onChange={(e) =>
							onChangePlanIndex(parseInt(e.target.value as string))
						}
						style={{
							borderColor: colors.color_deep,
							color: colors.color_deep,
						}}
					>
						{plan?.map((planDetails: IPlanType, idx: number) => (
							<option
								key={idx}
								value={idx}
								className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
								dangerouslySetInnerHTML={{ __html: planDetails?.title }}
							></option>
						))}
					</VariantSelectDropdown>

					<Tooltip
						title={<IconInfoCircle className='cursor-pointer' size={19} />}
						description={plan?.[planIndex]?.text}
					/>
				</div>
			) : (
				<div
					className={'tooltip__wrapper'}
					style={{
						backgroundColor: colors?.color_light,
						color: colors?.color_deep,
						display: '-webkit-inline-box',
					}}
				>
					<div dangerouslySetInnerHTML={{ __html: plan?.title }}></div>

					<Tooltip
						title={<IconInfoCircle className='cursor-pointer' size={19} />}
						description={plan?.text}
					/>
				</div>
			)}
		</div>
	);
};

export default ColumnCardHeader;
