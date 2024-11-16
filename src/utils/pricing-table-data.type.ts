export interface IPricingTableDataType {
	plans: IPlanType[];
	plansInfo: IPlansInfoType;
	features: IFeatureType[];
}

export interface IFeatureType {
	is_pro: string;
	feature_title: string;
	feature_desc: string;
}

export interface IPlanType {
	name: string;
	price: string;
	title: string;
	text: string;
	details: IDetailsType;
	growthPlans?: IPlanType[];
}

// export interface IPlanWithChildren extends IPlanType {
// 	children?: IPlanType[];
// }

export interface IDetailsType {
	'1_year': IDetails1_YearType;
	'2_year': IDetails1_YearType;
}

export interface IDetails1_YearType {
	price: string;
	price_postfix: IPricePostfixType;
	plan_type: IDDTextType;
	plan_info: IPlanInfoType;
	dd_text: IDDTextType;
	btn_text: IBtnTextType;
	price_id: string;
}

export enum IBtnTextType {
	BuyNow = 'Buy now',
}

export enum IDDTextType {
	BilledAnnually = 'Billed annually',
	BilledMonthly = 'Billed monthly',
}

export enum IPlanInfoType {
	Empty = '',
	Save = 'Save $',
}

export enum IPricePostfixType {
	Empty = '',
	Month = '/Month',
}

export interface IPlansInfoType {
	'1_year': IPlansInfo1_YearType;
	'2_year': IPlansInfo1_YearType;
}

export interface IPlansInfo1_YearType {
	title: string;
	sub_title: string;
	discount: string;
}
