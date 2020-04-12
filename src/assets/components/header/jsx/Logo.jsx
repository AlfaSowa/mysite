import React from 'react';

const string = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~' + ' ';
const logoText = 'alfa-sowa';

export default class App extends React.Component {
    f1 = (i, x, temp, targetArray, stringArray) => {
        if (i < targetArray.length) {
            setTimeout(() => {
                this.f1(i, x, temp, targetArray, stringArray);
            }, 0.01);

            const rdn = temp[Math.round(Math.floor(Math.random() * Math.floor(temp.length)))];

            if (stringArray[i] != targetArray[i]) {
                stringArray[i] = rdn;
                let tempArray = temp.split('');
                tempArray.splice(temp.indexOf(rdn), 1);
                temp = tempArray.join('');
            }

            if (stringArray[i] == targetArray[i]) {
                i++;
                temp = string;
            }

            x = 0;

            this.f2(x, stringArray);
        }
    };

    f2 = (x, stringArray) => {
        if (x < stringArray.length) {
            setTimeout(() => {
                this.f2(x, stringArray);
            }, 10);
            this.logoText.innerText = stringArray.join('');
            x++;
        }
    };

    rollerText = (targetArray, stringArray) => {
        let i = 0;
        let x = 0;
        let temp = string;
        this.f1(i, x, temp, targetArray, stringArray);
    };

    componentDidMount = () => {
        const targetArray = logoText.split('');
        const stringArray = new Array(targetArray.length).fill('');
        this.rollerText(targetArray, stringArray);
    };

    render() {
        return (
            <div className='logo'>
                <span ref={(e) => (this.logoText = e)} className='logo__link'></span>
            </div>
        );
    }
}
