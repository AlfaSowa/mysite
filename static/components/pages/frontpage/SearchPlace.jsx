import React from 'react';

export default class SearchPlace extends React.Component {
    state = {
        value: ''
    }
    
    handleChange = (e) => {
        this.setState({
            value: e.target.value
        });
    }

    render() {
        return (
            <form className='search__form' onSubmit={this.props.getPlace}>
                <label className='search__label'>
                    <input
                        type="text"
                        name='search'
                        className='search__input'
                        id='search__input'
                        value={this.state.value} 
                        onChange={this.handleChange}
                        placeholder='введите название страны или города'
                    />
                    <button className='btn btn__search' type='submit'>
                        <svg className='icon icon__search' viewBox="0 0 50 50">
                            <path d="M23 36c-7.2 0-13-5.8-13-13s5.8-13 13-13 13 5.8 13 13-5.8 13-13 13zm0-24c-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11-4.9-11-11-11z"></path>
                            <path d="M32.682 31.267l8.98 8.98-1.414 1.414-8.98-8.98z"></path>
                        </svg>
                    </button>
                </label>
            </form>
        )
    }
}