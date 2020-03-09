import React from 'react';

export const Info = props => {
	return (
		<div className='info'>
			<ul className='info__list'>
				{props.info.map((item, index) => (
					<li key={index} className='info__item'>
						<span className='info__item-row info__item-title'>{item.title}</span>
						<span className='info__item-row info__item-result'>{item.result}</span>
					</li>
				))}
			</ul>
		</div>
	);
};

Info.defaultProps = {
	info: [
		{
			title: 'Родной город',
			result: 'Челябинск'
		},
		{
			title: 'Фракция',
			result: 'Frontend-разработчик'
		}
	]
};
