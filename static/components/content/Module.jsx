import React from 'react'
import shortid from 'shortid';

export default class Module extends React.Component {

    render() {
        return (
            <div className="module">
                <h2 className="module__title">{this.props.title}</h2>
                <p className="module__description">{this.props.content}</p>

                {this.props.sub
                    ? this.props.sub.map(item =>
                        <SubModule key={shortid.generate()} submodule={item} />
                    ) : null
                }
            </div>
        )
    }
}


class SubModule extends Module {

    state ={
        showContent: true
    }

    render() {
        return (
            <div className="module__sub">
                <div onClick={() => this.showContent()} className="module__sub_title">{this.props.submodule.Title}</div>
                <div className="module__sub_content">{this.props.submodule.Content}</div>
            </div>
        )
    }
}