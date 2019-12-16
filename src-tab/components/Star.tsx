import React from 'react';

const Star = (props: { range: number }) => {
    let starArray = []
    let style = {
        "color": "gold"
    }
    let defaultStyle = {
        color: "#bcbcbc",
        margin: "0 3px"
    }
    for (let i = 0; i < 5; i++) {
        if (i < props.range) {
            starArray.push(<span key={i} style={{ ...defaultStyle, ...style }}>★</span>)
        } else {
            starArray.push(<span key={i} style={defaultStyle}>★</span>)
        }
    }
    return (
        <div>
            {starArray}
        </div>
    )
}
export default Star