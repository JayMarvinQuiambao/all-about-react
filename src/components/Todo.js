import React from 'react'

function Todo() {
    const checkBoxFlex = {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "aliceblue"
    }

    return (
        <div style={checkBoxFlex}>
            <div><input type="checkbox" /> Studying</div>
            <div><input type="checkbox" /> Gaming</div>
            <div><input type="checkbox" /> Trading</div>
        </div>
    )
}

export default Todo
