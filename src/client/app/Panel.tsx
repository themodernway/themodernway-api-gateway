import React, { Component } from "react";
import styles from "./Panel.scss";

class Panel extends Component<PanelProps, PanelState> {
    constructor(props: PanelProps) {
        super(props);

        this.state = {
            updated: new Date(),
        };
    }

    public render() {
        const { text } = this.props;
        const { updated } = this.state;

        return (
            <div className={styles.PanelClass}>
                <h1 className={styles.PanelText}>{text}</h1>
                <p>{updated.toLocaleString()}</p>
            </div>
        );
    }
}

interface PanelProps {
    text: string;
}

interface PanelState {
    updated: Date;
}

export default Panel;
