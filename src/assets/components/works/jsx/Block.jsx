import React from 'react';

export default class Block extends React.Component {
	state = {
		isActive: false
	};

	render() {
		const { item, setRef, index, showInfo } = this.props;
		const getClassDifficulty = number => (number == 'A' ? 'low' : number == 'B' ? 'mid' : 'high');

		return (
			<li className='works__item'>
				<div onClick={item.title ? e => showInfo(e, item) : null} ref={setRef} className={`works__box ${item.title ? 'works__box--active' : ''}`}>
					{index}
				</div>

				<div className='works__dropdown'>
					<div className='works__dropdown-title'>{item.title ? item.title : item}</div>
					<div className='works__dropdown-content'>{item.description ? item.description : ''}</div>
				</div>
			</li>
		);
	}
}
