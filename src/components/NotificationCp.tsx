import React, {useState} from "react";
import {Notification} from "../App";
import {Button, Collapse, Alert} from "react-bootstrap";
import ContactList from "./ContactList";
import RankedList from "./RankedList";


const NotificationCp: React.FC<Notification> = ({notification}) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="notification">
            <div className="notification-head" onClick={() => setOpen(!open)} aria-controls="collapse-box"
                 aria-expanded={open}>
                <div className="notification-info">
                    <span className="bg-light">  {notification.time}</span>
                    <span className="bg-dark text-white"> {notification.type}</span>
                    <span className="text-white"> {notification.Address}</span>
                </div>
                <div className="notification-actions">
                    <Button className="button" variant="danger" onClick={(e) => e.stopPropagation()}>
                        Cancel
                    </Button>
                    <Button className="button" variant="success" onClick={(e) => e.stopPropagation()}>
                        Dispatch
                    </Button>
                </div>
            </div>

            <Collapse in={open}>
                <div id="collapse-box" className="notification-body">
                    <div className="notification-body-data bg-secondary">
                        <Alert className="m-3" variant="primary">
                            Client: {notification.name}
                        </Alert>
                        <div>
                            <ContactList contacts={notification.contacts}/>
                        </div>
                    </div>
                    <div className="notification-body-data bg-dark">
                        {"description" in notification ?
                            <p className="text-white m-3">{notification.description}</p>
                            :
                            <Alert className="m-3" variant="secondary">
                                No information available
                            </Alert>
                        }
                    </div>
                    <div className="notification-body-data bg-secondary">
                        <div>
                            <RankedList contacts={notification.contacts}/>
                        </div>
                    </div>
                </div>
            </Collapse>
        </div>
    )

}

export default NotificationCp