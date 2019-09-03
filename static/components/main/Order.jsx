import React from 'react'
import PropTypes from 'prop-types';
import shortid from 'shortid';


export default class Order extends React.Component {

    state = {
        sum: 0,
        name: typeof this.props.basket[0].name !== 'undefined' ? this.props.basket[0].name : '',
        img: typeof this.props.basket[0].img !== 'undefined' ? this.props.basket[0].img : '',
        description: typeof this.props.basket[0].description !== 'undefined' ? this.props.basket[0].description : '',
        price: typeof this.props.basket[0].price !== 'undefined' ? this.props.basket[0].price : '',
        composition: typeof this.props.basket[0].composition !== 'undefined' ? this.props.basket[0].composition : [],
        acute: typeof this.props.basket[0].acute!== 'undefined' ? this.props.basket[0].acute : ''
    }

    productInfo = (name, img, description, price, composition, acute) => {
        this.setState({
            name: name,
            img: img,
            description: description,
            price: price,
            composition: composition,
            acute: acute
        })
    }

    result = (item) => {
        console.log(item)
    }

    render() {
        const imgStyle = {
            background: `url('./img/${this.state.img}.jpg') no-repeat 50% / cover`,
        };
        const acute = []
        for (let i=0;i<this.state.acute;i++) {
            acute.push(<div className='product__acute_item' key={shortid.generate()}></div>)
        }
        return (
            <div className='order'>
                <h2>ИТОГОВАЯ СУММА </h2>
                <div className='product'>
                    <div className='product__img' style={imgStyle}>
                        <img src={`./img/${this.state.img}.jpg`} />
                    </div>
                    <div className='product__info'>
                        <div className='product__header'>
                            <div className='product__title'>{this.state.name}</div>
                            <div className='product__acute'>
                                {acute} - уровень остроты
                            </div>
                        </div>
                        <div className='product__description'>{this.state.description}</div>
                        <div className='product__composition'>
                            {this.state.composition.map(item => (
                                <div className='product__composition_item' key={shortid.generate()}>{item}</div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='basket'>
                    <div className="basket__inner">
                        {this.props.basket.map(item => (
                            <Product info={() => this.productInfo(item.name, item.img, item.description, item.price, item.composition, item.acute)} name={item.name} img={item.img} price={item.price} key={shortid.generate()} />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

class Product extends Order {

    state = {
        count: 1,
        price: 0
    }

    minusCount = () => {
        if (this.state.count >= 1) {
            this.setState({
                count: this.state.count - 1,
                price: this.props.price * (this.state.count - 1)
            })
        }
    }

    plusCount = () => {
        this.setState({
            count: this.state.count + 1,
            price: this.props.price * (this.state.count + 1)
        })
    }

    componentDidMount = () => {
        this.setState({
            price: this.props.price * this.state.count
        })
    }

    render() {
        return (
            <div className='basket__item'>
                <div className="basket__card">
                    <div className="basket__card_title">{this.props.name}</div>
                    <div onClick={this.props.info} className='basket__card_img' style={{background: `url('./img/${this.props.img}.jpg') no-repeat 50% / cover`}}>
                        <img src={`./img/${this.props.img}.jpg`} />
                    </div>
                    <div className='basket__price'>
                        <div className='basket__price_result'>{this.state.price}$</div>
                        <div className='basket__price_count'>
                            <button className='basket__price_number' onClick={() => this.minusCount()}>-</button>
                            <div className='basket__price_quantity'>{this.state.count}</div>
                            <button className='basket__price_number' onClick={() => this.plusCount()}>+</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Order.defaultProps = {
    basket: [
        { count: 1, name: 'пицца', img: '1', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore in itaque harum minima unde dolores repellendus. Saepe, unde, fugit id in illo, quo omnis minus veniam eos cumque ex nesciunt eius voluptatum expedita vitae? Libero quis voluptatibus commodi accusamus aliquid laboriosam, dolorem ipsa magni provident vero. Vitae voluptates architecto ratione.', price: 13, composition: ['Mozzarella', 'Bacon', 'Ham'], acute: 1},
        { count: 1, name: 'суп', img: '2', description: 'Lorem ipsum dolor sit amet consectetur provident vero. Vitae voluptates architecto ratione.', price: 16, composition: ['Bacon', 'Ham', 'Sausages'], acute: 3 },
        { count: 1, name: 'каша', img: '3', description: 'adipisicing elit. Inventod in illo, quo omnis minus veniam eos cumque ex nesciunt eius voluptatum expedita vitae?', price: 112, composition: ['Mozzarella', 'Bacon', 'Ham', 'Chicken Faillet'], acute: 2 },
        { count: 1, name: 'пиво', img: '4', description: 'tatum expedita vitae? Libero quis voluptatibus commodi accusamus aliquid laboriosam, dolorem ipsa  tatum expedita vitae? Libero quis voluptatibus commodi accusamus aliquid laboriosam, dolorem ipsa Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore in itaque harum minima unde dolores repellendus. Saepe, unde, fugit id in illo, quo omnis minus veniam eos cumque ex nesciunt eius volupmagni provident vero. Vitae voluptates architecto ratione.', price: 41, composition: ['Pizza Base', 'Bacon', 'Ham', 'Chicken Faillet', 'Sausages'], acute: 0 },
        { count: 1, name: 'пицца', img: '1', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore in itaque harum minima unde dolores repellendus. Saepe, unde, fugit id in illo, quo omnis minus veniam eos cumque ex nesciunt eius voluptatum expedita vitae? Libero quis voluptatibus commodi accusamus aliquid laboriosam, dolorem ipsa magni provident vero. Vitae voluptates architecto ratione.', price: 13, composition: ['Mozzarella', 'Bacon', 'Ham'], acute: 1},
        { count: 1, name: 'суп', img: '2', description: 'Lorem ipsum dolor sit amet consectetur provident vero. Vitae voluptates architecto ratione.', price: 16, composition: ['Bacon', 'Ham', 'Sausages'], acute: 3 },
        { count: 1, name: 'каша', img: '3', description: 'adipisicing elit. Inventod in illo, quo omnis minus veniam eos cumque ex nesciunt eius voluptatum expedita vitae?', price: 112, composition: ['Mozzarella', 'Bacon', 'Ham', 'Chicken Faillet'], acute: 2 },
        { count: 1, name: 'пиво', img: '4', description: 'tatum expedita vitae? Libero quis voluptatibus commodi accusamus aliquid laboriosam, dolorem ipsa  tatum expedita vitae? Libero quis voluptatibus commodi accusamus aliquid laboriosam, dolorem ipsa Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore in itaque harum minima unde dolores repellendus. Saepe, unde, fugit id in illo, quo omnis minus veniam eos cumque ex nesciunt eius volupmagni provident vero. Vitae voluptates architecto ratione.', price: 41, composition: ['Pizza Base', 'Bacon', 'Ham', 'Chicken Faillet', 'Sausages'], acute: 0 }
    ]
};

