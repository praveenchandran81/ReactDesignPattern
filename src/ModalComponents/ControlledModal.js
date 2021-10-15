 
import styled from "styled-components";

const ModalBackground = styled.div`
  position: fixed;
  z-index:1;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: rgba(0, 0, 0, 0.1);
`;

const ModalBody = styled.div`
  background: white;
  width: 50%;
  margin: 10% auto;
  padding: 20px;
`;

export const ControlledModal = ({shouldShowModal,onRequestClose, children }) => {
   

  return (
 
        shouldShowModal?
        <ModalBackground onClick={() => onRequestClose(false)}>
          <ModalBody onClick={e=>e.stopPropagation()}>
            <button onClick={() => onRequestClose(false)}>Hide Modal</button>
            {children}
          </ModalBody>
        </ModalBackground>:null
  )
   
   
 
}
