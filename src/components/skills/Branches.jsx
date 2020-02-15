import React from 'react'

import { treeIconSvg } from '../../js/svg'

export default class Branches extends React.Component {
    render() {
        const { item, ShowTree } = this.props
        return (
            <div className="skills__content">
                <div className="skills__model">
                    {item.branches.filter(item => item.type == 'main').map((branch, index) => (
                        <div className="skills__branch" key={index}>{branch.name}</div>
                    ))}
                </div>

                <div onClick={ShowTree} className="skills__showtree">
                    <div className="skills__showtree-icon">
                        {treeIconSvg}
                    </div>
                </div>
            </div>
        )
    }
}

