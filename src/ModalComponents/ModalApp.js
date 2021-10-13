import { LargeListItemPerson } from "../ListAndListItems/people/LargeListItemPerson"
import { people } from "../ListAndListItems/people/people"
import { Modal } from "./Modal"

export const ModalApp=()=>{

    return(
        <Modal>
            <LargeListItemPerson people={people[0]}></LargeListItemPerson>
        </Modal>
    )
}