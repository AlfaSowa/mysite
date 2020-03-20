import React from 'react';

export class Theme extends React.Component {
    state = {
        dark: true
    };

    changeTheme = () => {
        this.setState({
            dark: !this.state.dark
        });

        document.body.dataset.theme = document.body.dataset.theme == 'dark' ? 'light' : 'dark';
    };

    render() {
        return (
            <div className='header__item theme'>
                <div onClick={this.changeTheme} className='theme__toggler'>
                    <svg className='theme__icon'>
                        <use xlinkHref='#theme'></use>
                    </svg>
                </div>

                <div className='theme__circle'></div>
            </div>
        );
    }
}
