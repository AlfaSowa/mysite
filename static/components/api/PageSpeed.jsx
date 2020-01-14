import React from 'react'

const URL = 'https://alfa-sowa.me/'
const API_CALL = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${URL}`;

export default class PageSpeed extends React.Component {

    state = {
        lightHouse: false,
        performance: null
    }

    getPageSpeed = async () => {

        const res = await fetch(API_CALL)
            .then(response => response .json())
            .then(result => result)
            .catch(err => console.log(err))

        this.setState({
            lightHouse: res.lighthouseResult,
            performance: res.lighthouseResult.categories.performance
        })
    }


    componentDidMount = () => {
        this.getPageSpeed()
    }

    render() {
        const {lightHouse,performance} = this.state
        return (
            lightHouse !== false 
                ? <LightHouse
                    performance={performance}
                /> 
                : null
        )
    }
}

function LightHouse(props) {
    return (
        <div className="pagespeed container">
            <div>{`${props.performance.title} ${props.performance.score}`}</div>
            <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate excepturi sapiente cum voluptatum nostrum! Perspiciatis voluptatem assumenda excepturi repellat facere ea reprehenderit error et obcaecati voluptates eius quidem vel accusantium expedita, ab quo laudantium ullam tenetur provident. Nam culpa placeat obcaecati soluta, doloribus quas magni unde explicabo error. Nulla ullam quibusdam ea. Reiciendis rerum perferendis cupiditate. Incidunt enim beatae, nihil error esse neque? Animi omnis dolore iure a sequi soluta praesentium quaerat laudantium quos assumenda ratione quo ullam vitae id, unde molestiae libero temporibus magni, aspernatur fuga, dignissimos autem error ea blanditiis. Eveniet nihil soluta dolores ipsum aliquam porro consequatur.</div>
        </div> 
    )
}