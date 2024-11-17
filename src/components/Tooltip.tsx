import React from 'react';

const Tooltip: React.FC<{
	title: string | JSX.Element;
	description: string;
}> = ({ title, description }) => {
	return (
		<div className='tooltip'>
			<div className='tooltip__content'>
				<span>{title}</span>
			</div>
			<div
				className='tooltip__hover'
				dangerouslySetInnerHTML={{
					__html: description,
				}}
			></div>
		</div>
	);
};

export default Tooltip;
