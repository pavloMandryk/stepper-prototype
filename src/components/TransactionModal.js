import React, { useState } from 'react'
import { GU, Modal, useViewport } from '@commonsswarm/ui'
import styled from 'styled-components'
import StepGraph from './StepGraph'
import Arrows from './Arrows'

const TransactionModal = ({ visible }) => {
  const [stepper, setStepper] = useState(0)
  const { width } = useViewport()

  return (
    <Modal
      closeButton={false}
      padding={7 * GU}
      visible={visible}
      width={Math.min(150 * GU, width - 40)}
    >
      <ModalWrapper>
      {stepper === 0 && 
      <>
        <StepGraph status="empty" bottomText="Signing..." />
        <Arrows active={false} />
        <StepGraph status="empty" bottomText="Mining..." />
        <Arrows active={false}/>
        <StepGraph  status="empty" bottomText="Completed"  />
      </>}
      {stepper === 1 && 
      <>
        <StepGraph status="current" bottomText="Signing..." />
        <Arrows active={true}/>
        <StepGraph status="empty" bottomText="Mining..." />
        <Arrows active={false}/>
        <StepGraph  status="empty" bottomText="Completed"  />
      </>}
      {stepper === 2 && 
      <>
        <StepGraph status="completed" bottomText="Signing..." />
        <Arrows active={false}/>
        <StepGraph status="current" bottomText="Mining..." />
        <Arrows active={true}/>
        <StepGraph  status="empty" bottomText="Completed"  />
      </>}
      {stepper === 3 && 
      <>
        <StepGraph status="completed" bottomText="Signing..." />
        <Arrows active={false}/>
        <StepGraph status="completed" bottomText="Mining..." />
        <Arrows active={false}/>
        <StepGraph  status="current" bottomText="Completed"  />
      </>}
      {stepper === 4 && 
      <>
        <StepGraph status="completed" bottomText="Signing..." />
        <Arrows active={false}/>
        <StepGraph status="completed" bottomText="Mining..." />
        <Arrows active={false}/>
        <StepGraph  status="completed" bottomText="Completed"  />
      </>}
      </ModalWrapper>
      <Button onClick={() => {
          setStepper(stepper + 1)
      }}>next</Button>
    </Modal>
  )
}

const ModalWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

`
const Button = styled.button`
    display: flex;
    margin: auto;
    justify-content: center;
    margin-top: 20px;

`




export default TransactionModal