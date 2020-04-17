import React from "react";

import { crossIconSvg } from "../js/svg";

export default class Tree extends React.Component {
    render() {
        const { skill, showTree } = this.props;
        return (
            <div className="tree">
                <div className="tree__inner">
                    <div onClick={showTree} className="tree__close">
                        {crossIconSvg}
                    </div>

                    <div className="tree__content">
                        {skill.branches.map((item, index) => (
                            <div key={index}>{item.name}</div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}
