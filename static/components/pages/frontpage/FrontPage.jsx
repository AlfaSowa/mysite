import React from 'react';
import regeneratorRuntime from "regenerator-runtime";

import TabsComponent from '../../tabs/TabsComponent.jsx';
import SearchPlace from './SearchPlace.jsx';
import FrontPageDescription from './FrontPageDescription.jsx';

const API_KEY = '267157c446ce43c027b2866f93bd8d6e'

export default class FrontPage extends React.Component {
    state = {
        regestration: false,
        name: undefined,
        description: undefined,
        image: undefined
    }

    gettingPlace = async (e) => {
        e.preventDefault()

        const place = e.target.elements.search.value

        const api_url = await 
            fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${place}&api_key=${API_KEY}&format=json`)

        const info = await api_url.json()

        console.log(this.state.name)

        this.setState({
            name: info.artist.name,
            description: info.artist.bio.content,
            image: info.artist.image[3]['#text'],
        })
    }

    render() {
        return (
            <div className='fp'>
                <div className='fp__content'>
                    <div className={this.state.name !==undefined ? 'search search__mini' : 'search'}>
                        <SearchPlace getPlace={this.gettingPlace} />
                    </div>
                    {this.state.name !== undefined
                        ? <TabsComponent 
                            name={this.state.name} 
                            description={this.state.description}
                            image={this.state.image}
                        />
                        : <FrontPageDescription />
                    }
                </div>
            </div>
        )
    }
}