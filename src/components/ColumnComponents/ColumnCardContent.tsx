import { IInitialStateType } from '@/redux/reducer/reducer';
import { IFeatureType, IPlanType } from '@/utils/types/pricing-table-data.type';
import React from 'react';
import { useSelector } from 'react-redux';
import { List, UnorderedList } from '../../ui/styled-components';
import Tooltip from '../Tooltip';

interface IColumnCardContentProps {
	plan: IPlanType | IPlanType[] | any;
	planIndex: number;
}
const ColumnCardContent: React.FC<IColumnCardContentProps> = ({
	plan,
	planIndex,
}) => {
	// pricingData[features] state from the redux store
	const features: IFeatureType[] = useSelector(
		(state: IInitialStateType) => state.pricingTableData.features
	);

	return (
		<div className='column_content'>
			<h3 className='text-[16px] font-semibold mt-7 mb-3'>
				{plan?.name === 'Free' ? 'Free includes:' : 'Everything in free plus:'}
			</h3>
			<UnorderedList>
				{plan?.name === 'Free' ? null : (
					<List>
						<Tooltip
							title={
								plan?.length
									? plan?.[planIndex]?.title
											.replace('<strong>', '')
											?.replace('</strong>', '')
									: plan?.title
											.replace('<strong>', '')
											?.replace('</strong>', '')
							}
							description={plan?.length ? plan?.[planIndex]?.text : plan?.text}
						/>
					</List>
				)}
				{features?.map((feature: IFeatureType, idx: number) => {
					// feature should be displayed based on the plan and feature type
					const isFeatureVisible =
						(plan?.name === 'Free' && feature?.is_pro === '0') ||
						(plan?.name !== 'Free' && feature?.is_pro === '1');

					if (isFeatureVisible) {
						return (
							<List key={idx}>
								<Tooltip
									title={feature?.feature_title}
									description={feature?.feature_desc}
								/>
							</List>
						);
					}
					return null;
				})}
			</UnorderedList>
		</div>
	);
};

export default ColumnCardContent;
