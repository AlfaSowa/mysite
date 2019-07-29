import React, { Component } from 'react';

export default  class Welcome extends Component {
    state = {
        name: 'Alex',
        title: 'Заголовок',
        txt: 'какойто текст какойто текст какойто текст какойто текст какойто текст какойто текст какойто текст какойто текст какойто текст какойто текст какойто текст какойто текст',
        link: '#',
    }

    render() {
        return (
            <div className='sidebar'>
                <h2 className='report__welcome'>{`Welcome, ${this.state.name}`}</h2>
		        <div className='report'>
                    <h3 className='report__title'>{this.state.title}</h3>
                    <div className='report__txt'>
                        <p>{this.state.txt}</p>
                    </div>
                    <div className='report__btn'>
                        <a href={this.state.link}>читать далее
                            <svg className='report__btn_arrow'>
                                <use href='#report__btn_arrow' xlink="http://www.w3.org/1999/xlink" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}