import styled from '@emotion/styled';

export const Button = styled.button`
	margin-top: 2rem;
	color: white;
	border-radius: 0.5rem;
	padding: 0.5rem 1.25rem;
	&:hover {
		transition: 0.2s;
	}
`;

export const TitleBadge = styled.div`
	font-size: 18px;
	color: #49687e;
	margin-top: 4px;
`;

export const VariantPrice = styled.span`
	font-size: 32px;
	font-weight: bold;
	margin-top: 1rem;
	margin-bottom: 1rem;
	display: flex;
	gap: 0.75rem;
	line-height: 2rem;
`;

export const VariantSelectDropdown = styled.select`
	z-index: 40;
	cursor: pointer;
	outline: none;
	height: 34px;
	line-height: 34px;
	padding-top: 3px;
	padding-bottom: 3px;
	padding-left: 0;
	padding-right: 0;
	border: 1px solid;
	border-radius: 4px;
	font-size: 14px;
`;

export const List = styled.li`
	cursor:pointer: 
	position: relative; 
	display: inline-block;
	margin: 6px 0px;
`;

export const UnorderedList = styled.li`
	display: grid;
	position: relative;
`;

export const TabName = styled.button`
	font-size: 16px;
	font-weight: semibold;
`;

export const DiscountBadge = styled.div`
	font-size: 16px;
	font-weight: 600;
	padding: 5px 12px;
	background-color: #f1eafb;
	border-radius: 9999px;
	margin-bottom: 5px;
	color: #49687e;
`;
