import React from 'react'

let blocks = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

export default class Works extends React.Component {

    state = {
        works: [],
        worksRef: [],
        getWorksRef: el => {
            this.state.worksRef.push(el)
        }
    }

    componentDidMount = () => {
        blocks.map((item, index) => {
            this.props.activeBlocks[index] ? blocks.splice(index, 1, this.props.activeBlocks[index]) : null
        })

        this.setState({
            works: blocks
        })
    }

    showInfo = (e,number) => {
        const target = e.target
        this.state.worksRef.forEach(el => {
            el.parentElement.classList.contains('works__item--active') ? el.parentElement.classList.remove('works__item--active') : null
        })
        target.parentElement.classList.add('works__item--active')

        this.props.workDetails(number)
    }

    render(){
        return(
            <div className="works">
                <ul className="works__list">
                    {blocks.map((item,index) => (
                        <Block setRef={this.state.getWorksRef} key={index} item={item} showInfo={this.showInfo}/>
                    ))}
                </ul>
            </div>
        )
    }
}

class Block extends Works {

    state = {
        isActive: false
    }

    render(){
        const { item, setRef } = this.props
        return(
            <li onClick={item.name ? e => this.props.showInfo(e, item.content) : null} className='works__item'>
                <div ref={item.name ? setRef : null} className={`works__item_content ${item.name ? 'works__item_content--active' : ''}`}>{item.name ? item.name : item}</div>
                {item.content 
                    ? <div className='works__item_dropdown'>
                        <span>{item.content.title}</span>
                        <p>{item.content.txt}</p>
                    </div>
                    : null
                }
            </li>
        )
    }
}

//{this.getItems(this.props.blocks)}

Works.defaultProps = {
    activeBlocks: [
        {
            name: '1',
            content: {
                title: 'alfa-sowa.me',
                txt: '111'
            }
        },
        {
            name: '2',
            content: {
                title: 'qwe',
                txt: '12312 123 131 23'
            }
        },
        {
            name: '3',
            content: {
                title: ' 23r2r fwefwd wqdwe',
                txt: 'qw  12 d dqwe 212'
            }
        },
        {
            name: '4',
            content: {
                title: 'qw eq d qwd 12e 12e12',
                txt: ' wer wer w 23 23 3232'
            }
        },
        {
            name: '5',
            content: {
                title: 'alfa-sowa.me',
                txt: 'qweqweqweqe'
            }
        },
        {
            name: '6',
            content: {
                title: 'alfa-sowa.me',
                txt: 'qweqweqweqe'
            }
        },
        {
            name: '7',
            content: {
                title: 'alfa-sowa.me',
                txt: 'qweqweqweqe'
            }
        }
    ]
}