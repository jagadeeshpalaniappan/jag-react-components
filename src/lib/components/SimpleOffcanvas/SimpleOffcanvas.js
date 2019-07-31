import React from "react";

import "simple-offcanvas-css/dist/main.min.css";

const SimpleOffCanvasSide = props => {
    let openOrClose = props.open ? "left-open" : "left-close";
    if (props.position === "right") {
        openOrClose = props.open ? "right-open" : "right-close";
    }
    return <div className={`simple-offcanvas-side ${openOrClose}`}>{props.children}</div>;
};

const SimpleOffCanvasMain = props => {
    let openLeft = props.openLeft ? "left-open" : "left-close";
    let openRight = props.openRight ? "right-open" : "right-close";
    return <div className={`simple-offcanvas-main ${openLeft} ${openRight}`}>{props.children}</div>;
};

export {
    SimpleOffCanvasSide,
    SimpleOffCanvasMain,
};

