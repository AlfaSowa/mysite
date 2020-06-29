import React from "react";

export class Block extends React.Component {
    render() {
        const { item, index, showDetails } = this.props;

        return (
            <li className="works__item">
                <div className="works__box works__box--active" onClick={() => showDetails(item)}>
                    {index}
                </div>

                <div className="works__dropdown">
                    <div className="works__dropdown-title">{item.title}</div>
                    <div className="works__dropdown-content">{item.description.short}</div>
                </div>
            </li>
        );
    }
}

export class EmptyBlock extends React.Component {
    render() {
        const { index } = this.props;
        return (
            <li className="works__item">
                <div className="works__box">{index}</div>
            </li>
        );
    }
}
