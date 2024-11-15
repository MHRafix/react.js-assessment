import { IFeatureType, IPlanType } from '@/utils/pricing-table-data.type';
import { IconInfoCircle } from '@tabler/icons-react';
import React from 'react';

interface IPricingTableColumnCardProps {
	plan: IPlanType;
	colors: any;
	features: IFeatureType[];
}

const PricingTableColumnCard: React.FC<IPricingTableColumnCardProps> = ({
	plan,
	colors,
	features,
}) => {
	return (
		<div
			className={`pricing_table_style`}
			style={{
				borderTopColor: colors?.color_deep,
			}}
		>
			<div className='card_header'>
				<span className='text-[#49687e] text-[18px]'> {plan?.name}</span>
				<h1
					className={`leading-8 text-[32px] font-bold my-1 !text-${colors?.color_deep}`}
					style={{
						color: colors?.color_deep,
					}}
				>
					{plan?.price}
				</h1>
				<div
					className={`mt-3 text-[14px] inline-flex justify-normal items-center gap-1 px-[15px] py-[7px] rounded-full`}
					style={{
						backgroundColor: colors?.color_light,
						color: colors?.color_deep,
					}}
				>
					<span dangerouslySetInnerHTML={{ __html: plan?.title }}></span>
					<IconInfoCircle className='cursor-pointer' size={19} />
				</div>
			</div>

			<div className='card_content'>
				<h3 className='text-[16px] font-semibold mt-7 mb-3'>
					{plan?.name === 'Free'
						? 'Free includes:'
						: 'Everything in free plus:'}
				</h3>
				<ul className='grid gap-2'>
					{plan?.name === 'Free' ? null : (
						<li className='cursor-pointer'>
							{plan?.title.replace('<strong>', '')?.replace('</strong>', '')}
						</li>
					)}
					{features?.map((feature: IFeatureType, idx: number) => {
						if (plan?.name === 'Free') {
							if (feature?.is_pro === '0') {
								return (
									<li key={idx} className='cursor-pointer relative'>
										{feature?.feature_title}
										<div className='hidden text-[14px] bg-white p-2 rounded-md absolute top-0 left-0'>
											{feature?.feature_desc}
										</div>
									</li>
								);
							}
						} else {
							if (feature?.is_pro === '1') {
								return (
									<li key={idx} className='cursor-pointer'>
										{feature?.feature_title}
									</li>
								);
							}
						}
					})}
				</ul>
			</div>
			<div className='!mt-auto !w-full'>
				<button
					className={`select_button`}
					style={{
						backgroundColor: colors?.color_deep,
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
				</button>
			</div>
		</div>
	);
};

export default PricingTableColumnCard;
