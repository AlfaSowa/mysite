import React from 'react'

const string = ("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~" + " ");
const logoText = 'alfa-sowa'

export default class App extends React.Component {

    state ={
        showMenu: false
    }

    toggleMenu = () => {
        this.setState({
            showMenu: !this.state.showMenu
        })
    }


    f1 = (i,x,temp,targetArray,stringArray) => {
        if (i < targetArray.length) {

            setTimeout(() => {
                this.f1(i,x,temp,targetArray,stringArray)
            }, .01);

            const rdn = temp[Math.round(Math.floor(Math.random() * Math.floor(temp.length)))];

            if (stringArray[i] != targetArray[i]) {
                stringArray[i] = rdn;
                let tempArray = temp.split('');
                tempArray.splice(temp.indexOf(rdn),1); 
                temp = tempArray.join('')                        
            }

            if (stringArray[i] == targetArray[i]) {
                i++;
                temp = string;
            }

            x = 0;

            this.f2(x,stringArray)
        }

    }

    f2 = (x,stringArray) => {

        if (x < stringArray.length) {
            setTimeout(() => {
                this.f2(x,stringArray)
            }, 10);
            this.logoText.innerText = stringArray.join('');
            x++;
        }
    }

    rollerText = (targetArray, stringArray) => {
        let i = 0;
        let x = 0; 
        let temp = string;
        this.f1(i,x,temp,targetArray,stringArray)
    }

    componentDidMount = () => {
        const targetArray = logoText.split('')
        const stringArray = new Array(targetArray.length).fill('')
        this.rollerText(targetArray, stringArray)
    }

    render(){
        return(
            <header className="header">
                <div className="header__top">
                    <div className="logo">
                        <a ref={e => this.logoText = e} className="logo__link" href="#"></a>
                    </div>

                    <nav className={`menu ${this.state.showMenu ? 'menu--active' : ''}`}>
                        <ul className="menu__list">
                            {this.props.menu.map((item, index) => (
                                <li onClick={this.toggleMenu} key={index} className="menu__item">
                                    <a className="menu__item_link" href={`#${item.name}`}>{item.text}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="hamburger" onClick={this.toggleMenu}></div>
                </div>

                <div className="header__bottom container">
                    <div className="header__content">
                        <div className="header__content_title">Привет, меня зовут Алексей.</div>
                        <div className="header__content_description">
                            <p className="alarm">Сайт находится в разработке, информация находящаяся здесь пока что не верная</p>
                            <p>Занимаюсь фронтенд частью в веб разработке. Этот сайт демонстрирует мои ключевые навыки во фронтенде, верстке (HTML/CSS), а так же знание react.</p>
                            <p>На сайте представленна информация обо мне чем я занимался, мои навыки и знания, а так же примеры некоторых моих работ.</p>
                            <p>Так же сам сайт представлен как пример  и его код можно посмотреть на GitHub</p>
                            <a className="btn btn__link" href="https://github.com/Grimmino/mysite">GitHub репозиторий сайта</a>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
