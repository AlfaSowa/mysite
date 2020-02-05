import React from 'react'

import tree from '../../json/tree.json'

export default class Skills extends React.Component {

    state = {
        item: false
    }

    showSkill = (e, item) => {
        this.setState({
            item: item
        })
    }

    render(){
        return(
            <React.Fragment>
                <ul className="skills__list">
                    {tree.map((item, index) => (
                        <li key={index} className="skills__item">
                            <div onClick={(e) => this.showSkill(e, item)} className="skills__box">{item.name}</div>
                        </li>
                    ))}
                </ul>

                <SkillInfo item={this.state.item} />
            </React.Fragment>
        )
    }
}

class SkillInfo extends Skills {
    render() {
        const { item } = this.props
        return(
            <div className="skills__inner">
                <div className="skills__header">
                    <div className="skills__header_name">{item.name}</div>

                    <div className="skills__header_perks">
                        <ul>
                            <li>перк номер один</li>
                            <li>перк номер два длинное имя</li>
                            <li>перк номер три очень длинное имя</li>
                        </ul>
                    </div>
                </div>

                <div className="skills__content"></div>
            </div> 
        )
    }
}