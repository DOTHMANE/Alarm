import React from "react";
import {ContactsList} from "../App";
import {Alert} from "react-bootstrap";
import RankedContact from "./RankedContact";

const RankedList: React.FC<ContactsList> = ({contacts}) => {

    const sortList = contacts.sort((a, b) => {
        return a.rank - b.rank;
    })

    if (contacts.length > 0) {
        return (
            <div>
                <h2 className="m-3 text-light">
                    P{contacts[0].id + " "} is the closest responder.
                </h2>
                <div className="p-3">
                    {sortList.map(contact => {
                        return (
                            <RankedContact key={contact.id} contact={contact}/>
                        )
                    })}
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <Alert className="m-3" variant="danger">
                    Contact list is empty
                </Alert>
            </div>
        )
    }

}

export default RankedList