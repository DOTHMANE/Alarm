import React from "react";
import {ContactsList} from "../App";
import ContactCp from "./ContactCp";
import {Alert} from "react-bootstrap";

const ContactList: React.FC<ContactsList> =  ({contacts}) => {
    return (
        <div >
            {contacts.length >0 ?
                contacts.map(contact => {
                return (
                    <ContactCp key={contact.id} contact={contact}/>
                )})
                :
                <Alert className="m-3" variant="danger">
                    Contact list is empty
                </Alert>
            }
        </div>
    )
}

export default ContactList