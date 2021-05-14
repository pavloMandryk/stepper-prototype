import React from 'react'
import './Loader.css'
import styled from 'styled-components'

const Loader = () => {
    return (
        <LoaderWrapper>
            <div class="lds-spinner">
                <div>
                </div>
                <div>
                </div>
                <div>
                </div>
                <div>
                </div>
                <div>
                </div>
                <div>
                </div>
                <div>
                </div>
                <div>
                </div>
                <div>
                </div>
                <div>
                </div>
                <div>
                </div>
                <div>
                </div>
            </div>
        </LoaderWrapper>
    )
}
const LoaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;
`

export default Loader
