import React, { SFC } from "react";
import styles from "./Comp.scss";

const Comp: SFC<{}> = () => (
    <div className={styles.CompClass}>
        Styled
    </div>
);

export { Comp };
