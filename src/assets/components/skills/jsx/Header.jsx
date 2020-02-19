import React from 'react'

export default class SkillHeader extends React.Component {
    render() {
        const { item } = this.props
        return (
            <div className="skills__header">
                <div className="skills__title">{item.name}</div>

                {item.perks ?
                    <ul className="skills__perks">
                        {item.perks.map((perk, index) => (
                            <li className="skills__perks-item" key={index}>{perk.name}</li>
                        ))}
                    </ul>
                    : null
                }
            </div>
        )
    }
}