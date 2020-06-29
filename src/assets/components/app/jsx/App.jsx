import React from "react";

//header
import { HeaderInfo } from "../../header/jsx/Header.jsx";
//content
import { Main } from "../../pages/jsx/Main.jsx";
import { Theme } from "../../header/jsx/Theme.jsx";

export default class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <header className="header container">
                    <div className="header__inner">
                        <HeaderInfo />

                        <Theme />
                    </div>
                </header>

                <main className="board">
                    <div className="board__inner container">
                        <Main />
                    </div>
                </main>
            </React.Fragment>
        );
    }
}
