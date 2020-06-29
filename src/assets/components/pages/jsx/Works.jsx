import React from "react";
import { WorkDetails } from "./WorkDetails.jsx";
import works from "../../blocks/json/blocks.json";

export class Works extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="board__content">
                    <div className="product__list">
                        {works.map((item, index) => (
                            <WorkDetails key={index} item={item} />
                        ))}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
