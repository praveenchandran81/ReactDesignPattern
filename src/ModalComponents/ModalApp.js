import { useState } from "react/cjs/react.development";
import { LargeListItemPerson } from "../ListAndListItems/people/LargeListItemPerson";
import { people } from "../ListAndListItems/people/people";
import { ControlledModal } from "./ControlledModal";
import { UncontrolledModal } from "./UncontrolledModal";


export const ModalApp = () => {

    const [showModal,setShowModal]=useState(false);

    const onRequestOpenModal=()=>{

        setShowModal(!showModal);

    }
    return (
    // <UncontrolledModal>
    //     <LargeListItemPerson people={people[0]}></LargeListItemPerson>
    // </UncontrolledModal>
    <>
    <ControlledModal shouldShowModal={showModal} onRequestClose={onRequestOpenModal}>
      <LargeListItemPerson people={people[0]}></LargeListItemPerson>
    </ControlledModal>

    <button onClick={onRequestOpenModal}>
       {showModal?'Hide Modal':'Open Modal'} 
    </button>
    </>
  );
};
