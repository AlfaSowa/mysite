import React from "react";

const dateBorn = new Date("May 16, 1989 14:00:00").getTime();
const dateNow = new Date();
//если true год високосный
const isLeap = new Date(dateNow.getFullYear(), 1, 29).getMonth() == 1;
const startCicle =
    dateNow.getTime() < new Date(dateNow.getFullYear(), 4, 16).getTime()
        ? new Date(dateNow.getFullYear() - 1, 4, 16).getTime()
        : new Date(dateNow.getFullYear(), 4, 16).getTime();
const currenDay = dateNow.getTime();
const diff = Math.ceil((currenDay - startCicle) / 8.64e7);
const daysInYear = () => {
    return isLeap ? (diff / 366) * 100 : (diff / 365) * 100;
};

const result = Math.floor((currenDay - dateBorn) / 3.154e10);
const count = daysInYear().toFixed();

export class HeaderInfo extends React.Component {
    render() {
        return (
            <div className="header__item header__info">
                <div className="header__info-item mission">
                    <div className="mission__icon">
                        <svg className="mission__icon-svg">
                            <use xlinkHref="#mission"></use>
                        </svg>
                    </div>

                    <div className="mission__text">
                        mission: <b>searching for a job</b>
                    </div>
                </div>

                <div className="header__info-item level">
                    <div className="level__icon">
                        <svg className="level__icon-svg">
                            <use xlinkHref="#level"></use>
                        </svg>
                    </div>
                    <div className="level__line">
                        <span>lv.{result}</span>
                        <div className="level__line-count" style={{ transform: `translateX(${count}%)` }}></div>
                    </div>
                </div>

                <div className="header__info-item credits">
                    <div className="credits__icon">
                        <svg className="credits__icon-svg">
                            <use xlinkHref="#credits"></use>
                        </svg>
                    </div>
                    <div className="credits__line">45 000</div>
                </div>
            </div>
        );
    }
}
