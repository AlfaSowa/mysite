import React, { Component } from 'react';

export default class SearchPlace extends Component {

    render() {
        return (
            <form className='search'>
                <input
                    type="text"
                    className='search_input'
                />
            </form>
        )
    }
}