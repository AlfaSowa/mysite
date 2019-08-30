import React from 'react';
import shortid from 'shortid';

import Weather from './placemodule/Weather.jsx';
import Tickets from './placemodule/Tickets.jsx';
import People from './placemodule/People.jsx';

export default class Place extends React.Component {

    state = {
        placemodule: false,
        title: '',
        toggleWeather: true,
        toggleTickets: true,
        togglePeople: true
    }

    showPlaceModule = (title) => {
        this.setState({
            placemodule: !this.state.placemodule,
            title: title,
        })
    }

    toggleWeather = (e) => {
        this.setState({
            toggleWeather: !this.state.toggleWeather
        })
    }

    toggleTickets = (e) => {
        this.setState({
            toggleTickets: !this.state.toggleTickets
        })
    }

    togglePeople = (e) => {
        this.setState({
            togglePeople: !this.state.togglePeople
        })
    }

    render() {
        return (
            <div className='place'>
                <div className='place__description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam magnam molestiae soluta dolores repudiandae quasi odio dignissimos ea laborum molestias laboriosam unde obcaecati assumenda pariatur distinctio id voluptatem aperiam iure, harum similique! Ullam provident beatae saepe libero architecto laboriosam iste rerum sit repudiandae, hic aperiam tempora omnis, quam explicabo? Asperiores, earum, molestias maiores laudantium enim ipsa blanditiis corrupti placeat laborum sed nihil accusantium aperiam tempore beatae officiis inventore. At a asperiores tempore, dicta aspernatur sint. Debitis eius vero fugiat nemo, architecto laboriosam enim et, nam ad qui esse! Totam repudiandae consequuntur ea dolore natus pariatur at magnam dolorum magni quod.</div>
                <div className='place__sidebar'>
                    <div className='place__sidebar_item'>
                        <div className={`place__sidebar_toggler ${this.state.toggleWeather ? 'place__sidebar_toggler--active' : ''}`} onClick={this.toggleWeather}>weather</div>
                        <div className={`place__sidebar_toggler ${this.state.toggleTickets ? 'place__sidebar_toggler--active' : ''}`} onClick={this.toggleTickets}>tickets</div>
                        <div className={`place__sidebar_toggler ${this.state.togglePeople ? 'place__sidebar_toggler--active' : ''}`} onClick={this.togglePeople}>people</div>
                    </div>
                    <div className='place__sidebar_item'>
                        {this.state.toggleWeather ? <Weather showMore={this.showPlaceModule} /> : null}
                        {this.state.toggleTickets ? <Tickets showMore={this.showPlaceModule} /> : null}
                        {this.state.togglePeople ? <People showMore={this.showPlaceModule} /> : null}
                    </div>
                </div>
                {this.state.placemodule 
                    ? <PlacePopup 
                        title={this.state.title}  
                        close={this.showPlaceModule}/> 
                    : null}
            </div>
        )
    }
}

class PlacePopup extends Place {

    targetEvent = (e) => {
        e.target.dataset.placePopup ? this.props.close() : null
    }

    render() {
        return (
            <div data-place-popup onClick={this.targetEvent} className='place__popup'>
                <div className='place__popup_inner'>
                    <div className='place__popup_header'>
                        <div className='place__popup_title'>{this.props.title}</div>
                        <div onClick={this.props.close} className='place__popup_close'></div>
                    </div>
                    <div>{this.props.weather}</div>
                    <div>{this.props.graduse}</div>
                </div>
            </div>
        )
    }
}
