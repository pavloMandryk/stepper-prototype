import React from 'react'
import styled from 'styled-components'
import Circle from './Circle'

const StepGraph = ({ bottomText, status }) => {
    return (
        <GraphWrapper>
            <div></div>
            <Circle status={status}/>
            <div>{bottomText}</div>
        </GraphWrapper>
    )  
}

const GraphWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export default StepGraph
