import React from "react";
import {Contact} from "../App";
import {Button} from "react-bootstrap";


const ContactCp: React.FC<Contact> =  ({contact}) => {
    return (
        <div className="contact">
            <div className="contact-info">
                <span>{contact.name}</span>
                <span>{contact.phone}</span>
            </div>
            <div className="contact-action">
                <Button className="button" variant="success">
                    Call
                </Button>
            </div>
        </div>
    )
}

export default ContactCp