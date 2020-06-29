import React from "react";
import { Block, EmptyBlock } from "./Block.jsx";
import works from "../json/blocks.json";

export default class Blocks extends React.Component {
    state = {
        isShowDetails: false,
        item: false,
        blocks: [],
    };

    showDetails = (item) => {
        this.setState({
            isShowDetails: !this.state.isShowDetails,
            item: item,
        });
    };

    getBlocks = () => {
        const blocks = [];
        for (let i = 0; i < 25; i++) {
            if (works[i]) {
                works[i].index = i;
                blocks.push(works[i]);
            } else {
                blocks.push(i);
            }
        }
        this.setState({
            blocks: blocks,
        });
    };

    prevBlock = (item) => {
        if (this.state.blocks[item.index - 1] && this.state.blocks[item.index - 1].hasOwnProperty("index")) {
            this.setState({
                item: this.state.blocks[item.index - 1],
            });
        }
    };

    nextBlock = (item) => {
        if (this.state.blocks[item.index + 1] && this.state.blocks[item.index + 1].hasOwnProperty("index")) {
            this.setState({
                item: this.state.blocks[item.index + 1],
            });
        }
    };

    componentDidMount = () => {
        this.getBlocks();
    };

    render() {
        const { blocks } = this.state;
        return (
            <React.Fragment>
                <ul className="works__list">
                    {blocks.map((item, index) =>
                        item.id ? (
                            <Block key={index} item={item} index={index} showDetails={this.showDetails} />
                        ) : (
                            <EmptyBlock key={index} index={index} />
                        )
                    )}
                </ul>

                {this.state.isShowDetails ? (
                    <BlockDetails
                        prevBlock={this.prevBlock}
                        nextBlock={this.nextBlock}
                        item={this.state.item}
                        showDetails={this.showDetails}
                        blocks={blocks}
                    />
                ) : null}
            </React.Fragment>
        );
    }
}

class BlockDetails extends React.Component {
    render() {
        const { item, blocks, showDetails, prevBlock, nextBlock } = this.props;
        return (
            <div className="details">
                {blocks[item.index - 1] && blocks[item.index - 1].hasOwnProperty("index") ? (
                    <button className="details__arrow details__prev" onClick={() => prevBlock(item)}>
                        PREV
                    </button>
                ) : null}

                <div className="details__inner">
                    <div className="details__header">
                        <div className="details__title">{item.title}</div>
                        <div className="details__close" onClick={() => showDetails()}>
                            <svg>
                                <use xlinkHref="#cross"></use>
                            </svg>
                        </div>
                    </div>

                    <div className="details__content">
                        <div className="details__description">{item.description.full}</div>

                        <div className="details__text">
                            {item.content.map((item, index) => (
                                <p key={index}>{item.paragraph}</p>
                            ))}
                        </div>
                    </div>
                </div>

                {blocks[item.index + 1] && blocks[item.index + 1].hasOwnProperty("index") ? (
                    <button className="details__arrow details__next" onClick={() => nextBlock(item)}>
                        NEXT
                    </button>
                ) : null}
            </div>
        );
    }
}
