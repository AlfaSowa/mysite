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
                <input
                    type="text"
                    name='search'
                    className='search_input'
                    value={this.state.value} 
                    onChange={this.handleChange}
                />
            </form>
        )
    }
}