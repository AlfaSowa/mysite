import React from "react";
import { WorkDetails } from "./WorkDetails.jsx";
import works from "../../works/json/works.json";

export class Works extends React.Component {
    componentDidMount = () => {
        let link = /\/\w*$/gi.exec(location.href);
        this.props.getTitle(link[0]);
    };
    render() {
        return (
            <React.Fragment>
                {/* <div className="board__title">Мои работы</div> */}

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
