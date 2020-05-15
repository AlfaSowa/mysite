import React from "react";
import Block from "./Block.jsx";

import works from "../json/works.json";

//const { MongoClient } = require('mongodb');

//const URL = 'mongodb+srv://alexSowa:<pass>@cluster0-rbuw9.mongodb.net/alfasowa'
//const TEST_URL = 'mongodb://http://localhost:8181/works'

export default class Works extends React.Component {
    state = {
        works: [],
        worksRef: [],
        getWorksRef: (el) => {
            this.state.worksRef.push(el);
        },
    };

    // getWorks = async () => {
    //     try {
    //         const client = await new MongoClient(URL, {
    //             useNewUrlParser: true,
    //         });

    //         console.log(client);

    //         client.connect((err) => {
    //             const worksItem = client.db("alfasowa").collection("works");
    //             console.log(worksItem);
    //             client.close();
    //         });
    //     } catch (e) {
    //         console.log(e);
    //     }
    // };

    componentDidMount = () => {
        //this.getWorks()

        const blocks = [];

        for (let i = 0; i < 25; i++) {
            works[i] ? blocks.push(works[i]) : blocks.push(i);
        }

        this.setState({
            works: blocks,
        });
    };

    showInfo = (e, item) => {
        const target = e.target;

        this.state.worksRef.forEach((el) => {
            el.parentElement.classList.contains("works__item--active")
                ? el.parentElement.classList.remove("works__item--active")
                : null;
        });
        target.parentElement.classList.add("works__item--active");

        this.props.workDetails(item);
    };

    render() {
        const { works } = this.state;
        return (
            <ul className="works__list">
                {works !== []
                    ? works.map((item, index) => (
                          <Block setRef={this.state.getWorksRef} key={index} index={index} item={item} showInfo={this.showInfo} />
                      ))
                    : null}
            </ul>
        );
    }
}
