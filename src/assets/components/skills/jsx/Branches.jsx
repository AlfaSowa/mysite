import React from 'react';

export default class Branches extends React.Component {
	render() {
		const { item, ShowTree } = this.props;
		return (
			<div className='skills__content'>
				<div className='skills__model'>
					{item.branches.map((skill, index) => (
						<div className='skills__branch' key={index}>
							{skill.name}
						</div>
					))}
				</div>
			</div>
		);
	}
}
