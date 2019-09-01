import React from 'react'

export default class Home extends React.Component {
    render() {
        return (
            <div className='frontpage'>
                <div className='offer'>
                    <h2>Предложение дня</h2>
                    <div className='offer__inner grid'>
                        <div className='grid__item'>
                            <a href="#" className='card'>1123123</a>
                        </div>
                        <div className='grid__item'>
                            <a href="#" className='card'>123123</a>
                        </div>
                        <div className='grid__item'>
                            <a href="#" className='card'>1231</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}