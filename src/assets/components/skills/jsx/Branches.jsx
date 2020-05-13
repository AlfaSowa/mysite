import React from "react";

export default class Branches extends React.Component {
    render() {
        const { item, showTree } = this.props;
        return (
            <div className="skills__content">
                <div className="skills__model">
                    {item.tree.map((skill, index) => (
                        <div className="skills__branch" key={index}>
                            {skill.name}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
