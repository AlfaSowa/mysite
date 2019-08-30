import React from 'react';

export default class Weather extends React.Component {
    state = {
        weatherMiddle: 17,
        unitTemp: true
    }
    
    render() {
        const title = 'weather'
        return (
            <div onClick={() => this.props.showMore(title)} className='place__module'>
                <div className='place__module_item'>
                    <div className='weather'>
                        <div className='weather__middle'>
                            <span className='weather__middle_number'>{this.state.weatherMiddle}</span>
                            <span>{this.state.unitTemp ? 'celsius ' : 'fahrenheit'}</span>
                        </div>
                        <div>{title}</div>
                    </div>
                </div>
            </div>
        )
    }
}