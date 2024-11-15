import React from 'react';

const Tooltip: React.FC<{ text: string }> = ({ text }) => {
	return <div className='absolute'>{text}</div>;
};

export default Tooltip;
