import React from "react";

export class WorkDetails extends React.Component {
    render() {
        const { item } = this.props;
        return (
            <div className="product">
                <div className="product__inner">
                    <div className="product__title">{item.title}</div>
                    <div className="product__content">
                        <div>{item.description}</div>
                        <div>{item.repo}</div>
                    </div>
                </div>
            </div>
        );
    }
}
