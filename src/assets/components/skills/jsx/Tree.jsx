import React from "react";

import { crossIconSvg } from "../js/svg";
import { TreeSkills } from "../js/tree";

export default class Tree extends React.Component {
    state = {
        isLoadTreeSkills: false,
        canvas: React.createRef(),
        treeContent: React.createRef(),
        tree: false,
    };

    componentDidMount = () => {
        this.setState({
            isLoadTreeSkills: true,
            tree: new TreeSkills({
                canvas: this.state.canvas.current,
                ctx: this.state.canvas.current.getContext("2d"),
                canvasWidth: this.state.treeContent.current.offsetWidth,
                canvasHeight: this.state.treeContent.current.offsetHeight,
            }),
        });
    };

    render() {
        const { skill, showTree } = this.props;

        if (this.state.isLoadTreeSkills) {
            this.state.tree.init(skill);
        }
        return (
            <div className="tree">
                <div className="tree__inner">
                    <div onClick={showTree} className="tree__close">
                        {crossIconSvg}
                    </div>

                    <div ref={this.state.treeContent} className="tree__content">
                        <canvas ref={this.state.canvas} className="canvas"></canvas>
                    </div>
                </div>
            </div>
        );
    }
}

// {skill.branches.map((item, index) => (
//     <div key={index}>{item.name}</div>
// ))}
