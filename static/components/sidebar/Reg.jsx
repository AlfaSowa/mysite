import React, { Component } from 'react';

export default  class Reg extends Component {
    state = {
        title: 'Заголовок',
        txt: 'зарегестрируйтесь',
        link: '#',
        text: ''
    }

    handleChange = (e) => {
        this.setState({ 
            text: e.target.value 
        });
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.text)
    }

    render() {
        return (
            <div className='sidebar'>
                <h2 className='reg__welcome'>Welcom</h2>
		        <div className='reg'>
                    <h3 className='reg__title'>{this.state.title}</h3>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <div className='reg__txt'>{this.state.txt}</div>
                            <input
                                onChange={this.handleChange}
                                value={this.state.text}
                            />
                        </label>
                        <button>Регистрация</button>
                    </form>
                </div>
            </div>
        )
    }
}