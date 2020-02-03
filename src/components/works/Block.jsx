import React from 'react'

export default class Block extends React.Component {

    state = {
        isActive: false
    }

    render(){
        const { item, setRef, index, showInfo } = this.props
        const getClassDifficulty = (number) => number == "A" ? "low" : number == "B" ? "mid" : "high"

        return(
            <li className='works__item'>
                <div onClick={item.title ? e => showInfo(e, item) : null} ref={setRef} className={`works__item_content ${item.title ? 'works__item_content--active' : ''}`}>{index}</div>

                <div className='works__item_dropdown'>
                    <div className="works__item_dropdown-title">
                        <span>{item.title ? item.title : item}</span>
                    </div>
                    <div className="works__item_dropdown-content">
                        <p>{item.description ? item.description : ''}</p>
                        <div className={`works__item_dropdown-dif works__item_dropdown-dif--${item.difficulty ? getClassDifficulty(item.difficulty) : null}`}></div>
                    </div>
                </div>
            </li>
        )
    }
}
