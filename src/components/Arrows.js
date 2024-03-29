import React from 'react'
import './Arrows.css'

const Arrows = ({ active }) => {
    return (
        <div>
            {active && <div id="arrowAnim">
                <div className="arrowSliding">
                    <div className="arrow"></div>
                </div>
                <div className="arrowSliding delay1">
                    <div className="arrow"></div>
                </div>
                <div className="arrowSliding delay2">
                    <div className="arrow"></div>
                </div>
                <div className="arrowSliding delay3">
                    <div className="arrow"></div>
                </div>
            </div>}
            {!active && <div id="arrowStoped"></div>}
        </div>
    )
}

export default Arrows
