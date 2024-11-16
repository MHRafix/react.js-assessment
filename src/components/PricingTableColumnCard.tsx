import { IFeatureType, IPlanType } from '@/utils/pricing-table-data.type';
import { IconInfoCircle } from '@tabler/icons-react';
import React, { useState } from 'react';

interface IPricingTableColumnCardProps {
	plan: IPlanType;
	colors: any;
	features: IFeatureType[];
	isMonthlyPrice: boolean;
}

const PricingTableColumnCard: React.FC<IPricingTableColumnCardProps> = ({
	plan,
	colors,
	features,
	isMonthlyPrice,
}) => {
	const [planIndex, setPlanIndex] = useState<number>(0);

	return (
		<div
			className={`pricing_table_style`}
			style={{
				borderTopColor: colors?.color_deep,
			}}
		>
			<div className='card_header relative'>
				{plan?.name === 'Pro' && (
					<span className='popular__badge'>Most Popular</span>
				)}
				<div className='mt-4 text-[#49687e] text-[18px]'>
					{plan?.growthPlans?.length
						? plan?.growthPlans?.[planIndex]?.name
						: plan?.name}
				</div>
				{!plan?.growthPlans?.length ? (
					<div className='flex gap-3 items-end'>
						<span
							className={`leading-8 flex gap-3 text-[32px] font-bold my-1 !text-${colors?.color_deep}`}
							style={{
								color: colors?.color_deep,
							}}
						>
							{isMonthlyPrice
								? plan?.details?.['1_year']?.price
								: plan?.details?.['2_year']?.price}
						</span>{' '}
						<div className='grid'>
							{!isMonthlyPrice && plan?.name !== 'Free' && (
								<span className='text-[red] font-normal line-through text-[12px]'>
									{plan?.details?.['1_year']?.price}/Month
								</span>
							)}
							<span className='text-sm font-normal text-[#83a1b7]'>/Month</span>
						</div>
					</div>
				) : (
					<div className='flex gap-3 items-end'>
						<span
							className={`leading-8 flex gap-3 text-[32px] font-bold my-1 !text-${colors?.color_deep}`}
							style={{
								color: colors?.color_deep,
							}}
						>
							{isMonthlyPrice
								? plan?.growthPlans?.[planIndex]?.details?.['1_year']?.price
								: plan?.growthPlans?.[planIndex]?.details?.['2_year']?.price}
						</span>{' '}
						<div className='grid'>
							{!isMonthlyPrice && plan?.name !== 'Free' && (
								<span className='text-[red] font-normal line-through text-[12px]'>
									{plan?.growthPlans?.[planIndex]?.details?.['1_year']?.price}
									/Month
								</span>
							)}
							<span className='text-sm font-normal text-[#83a1b7]'>/Month</span>
						</div>
					</div>
				)}
				{plan?.growthPlans?.length ? (
					<div
						className={`mt-3 text-[14px] inline-flex justify-normal items-center gap-1 rounded-full`}
						style={{
							color: colors?.color_deep,
							// display: '-webkit-inline-box',
						}}
					>
						<select
							onChange={(e) => setPlanIndex(parseInt(e.target.value as string))}
							className='z-40 cursor-pointer outline-none text-[#B78DEB] h-[34px] leading-[34px] !py-[3px] px-[0px] border-[1px] border-solid border-[#B78DEB] rounded-md text-[14px]'
						>
							<option value={0}>
								Up to <strong>150,000</strong> visitors/month
							</option>
							<option value={1}>
								Up to <strong>300,000</strong> visitors/month{' '}
							</option>
							<option value={2}>
								Up to <strong>500,000</strong> visitors/month
							</option>
							<option value={3}>
								Up to <strong>1,000,000</strong> visitors/month{' '}
							</option>
							<option value={4}>
								Up to <strong>2,000,000</strong> visitors/month{' '}
							</option>
						</select>
						<div className='tooltip'>
							<div className='tooltip__content'>
								<IconInfoCircle className='cursor-pointer' size={19} />
							</div>
							<div className='tooltip__hover'>
								{plan?.growthPlans?.[planIndex]?.text}
							</div>
						</div>
					</div>
				) : (
					<div
						className={`mt-3 text-[14px] justify-normal items-center gap-1 px-[15px] py-[7px] rounded-full`}
						style={{
							backgroundColor: colors?.color_light,
							color: colors?.color_deep,
							display: '-webkit-inline-box',
						}}
					>
						<div dangerouslySetInnerHTML={{ __html: plan?.title }}></div>

						<div className='tooltip'>
							<div className='tooltip__content'>
								<IconInfoCircle className='cursor-pointer' size={19} />
							</div>
							<div className='tooltip__hover'>{plan?.text}</div>
						</div>
					</div>
				)}
			</div>

			<div className='card_content'>
				<h3 className='text-[16px] font-semibold mt-7 mb-3'>
					{plan?.name === 'Free'
						? 'Free includes:'
						: 'Everything in free plus:'}
				</h3>
				<ul className='grid gap-2 !relative'>
					{plan?.name === 'Free' ? null : (
						<li className='cursor-pointer'>
							<div className='tooltip'>
								<div className='tooltip__content'>
									<span>
										{plan?.growthPlans?.length
											? plan?.growthPlans?.[planIndex]?.title
													.replace('<strong>', '')
													?.replace('</strong>', '')
											: plan?.title
													.replace('<strong>', '')
													?.replace('</strong>', '')}
									</span>
								</div>
								<div className='tooltip__hover'>
									{plan?.growthPlans?.length
										? plan?.growthPlans?.[planIndex]?.text
										: plan?.text}
								</div>
							</div>
						</li>
					)}
					{features?.map((feature: IFeatureType, idx: number) => {
						if (plan?.name === 'Free') {
							if (feature?.is_pro === '0') {
								return (
									<li
										key={idx}
										className='features_list cursor-pointer relative inline-block'
									>
										<div className='tooltip'>
											<div className='tooltip__content'>
												<span>{feature?.feature_title}</span>
											</div>
											<div className='tooltip__hover'>
												{feature?.feature_desc}
											</div>
										</div>
									</li>
								);
							}
						} else {
							if (feature?.is_pro === '1') {
								return (
									<li
										key={idx}
										className='features_list cursor-pointer relative inline-block'
									>
										<div className='tooltip'>
											<div className='tooltip__content'>
												<span>{feature?.feature_title}</span>
											</div>
											<div
												className='tooltip__hover'
												dangerouslySetInnerHTML={{
													__html: feature?.feature_desc,
												}}
											></div>
										</div>
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
