import React from 'react';
import regeneratorRuntime from "regenerator-runtime";

import axios from 'axios'

import TabsComponent from '../../tabs/TabsComponent.jsx';
import SearchPlace from './SearchPlace.jsx';



const BASE_URL = 'https://maps.googleapis.com/maps/api/'
const API_KEY = 'AIzaSyBovw29x8PcZQ9a7jY3zb9_zlB2MeUpZUk'

export default class FrontPage extends React.Component {

    state = {
        name: undefined
    }

    gettingPlace = async (e) => {
        e.preventDefault()
        const place = e.target.elements.search.value

        const api_url = await 
            fetch(`${BASE_URL}place/findplacefromtext/json?input=${place}&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=${API_KEY}`, {
                headers: {
                    'accept': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            })

        const info = await api_url.json()
        console.log(info)
    }

    render() {
        return (
            <div className='frontpage'>
                <div className={this.state.name !==undefined ? 'search search__mini' : 'search'}>
                    <SearchPlace getPlace={this.gettingPlace} />
                </div>
                
                {this.state.name !== undefined
                    ? <TabsComponent />
                    : null
                }
            </div>
        )
    }
}
