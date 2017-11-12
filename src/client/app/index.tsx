import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import Panel from "./Panel";

declare const module: any;

const render = () => {
    ReactDOM.render(
        <AppContainer>
            <Panel text="Hello"/>
        </AppContainer>,
        document.getElementById("root"),
    );
};

render();

if (module.hot) {
    module.hot.accept();
}
