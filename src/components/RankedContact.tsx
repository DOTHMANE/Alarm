import React from "react";
import {Contact} from "../App";


const RankedContact: React.FC<Contact> =  ({contact}) => {
    return (
        <div className="ranked-contact">
            <img alt="" className={"rounded-circle bg-light dot " + contact.status}/>

            <span className={"rounded-5 bg-light " + contact.status}>
                 P{contact.id + " - " + contact.status}
            </span>
        </div>
    )
}

export default RankedContact