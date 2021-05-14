import React from 'react'
import './Circle.css'
import Loader from './Loader'

const Circle = ({ status }) => {
    return (
        <>
        {status === "completed" &&
            <div id="circle-completed">

            </div>
        }
        {status === "empty" &&
            <div id="circle-empty">

            </div>
        }
        {status === "current" &&
            <div id="circle-current">
                <Loader />
            </div>
        }
        </>
    )
}

export default Circle
