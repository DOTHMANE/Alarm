import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NotificationList from "./components/NotificationList";

export interface Notifications{
    notifications: Notification["notification"][]
}

export interface Notification {
    notification:{
        id: number
        "time": string,
        "type": string,
        "name": string,
        "description"?:string,
        "Address": string,
        contacts: Contact["contact"][]
    }
}

export interface Contact {
    contact: {
        id: number
        "name": string,
        "phone": string,
        "status": string
        "rank": number
    }
}

export interface ContactsList {
    contacts: Contact["contact"][]
}

function App() {
    const [notifications] = useState<Notifications["notifications"]>([
        {
            "id":1,
            "time": "11:09:32 AM",
            "type": "Phone-In-Alarm",
            "name": "MR Kensington",
            "Address": "Mechau Street 32",
            "contacts": [
                {
                    "id":1,
                    "name": "Melkobs Oppie See A",
                    "phone": "+278346738392",
                    "status": "available",
                    "rank": 0
                },
                {
                    "id":2,
                    "name": "Melkobs Oppie See B",
                    "phone": "+278346738392",
                    "status": "operating",
                    "rank": 1
                },
                {
                    "id":3,
                    "name": "Melkobs Oppie See C",
                    "phone": "+278346738392",
                    "status": "available",
                    "rank": 0
                },
                {
                    "id":4,
                    "name": "Melkobs Oppie See D",
                    "phone": "+278346738392",
                    "status": "busy",
                    "rank": 2
                },
                {
                    "id":5,
                    "name": "Melkobs Oppie See E",
                    "phone": "+278346738392",
                    "status": "busy",
                    "rank": 2
                }
            ]
        },
        {
            "id":2,
            "time": "11:09:32 AM",
            "type": "Phone-In-Alarm",
            "name": "MR Kensington",
            "Address": "Mechau Street 32",
            "description":" Some details could be found here",
            "contacts": [
                {
                    "id":1,
                    "name": "Melkobs Oppie See",
                    "phone": "+278346738392",
                    "status": "available",
                    "rank": 0
                }
            ]
        },
        {
            "id":3,
            "time": "11:09:32 AM",
            "type": "Multi-Zone",
            "name": "MR Kensington",
            "Address": "Mechau Street 32",
            "contacts": [
                {
                    "id":1,
                    "name": "Melkobs Oppie See",
                    "phone": "+278346738392",
                    "status": "available",
                    "rank": 0
                }
            ]
        },
        {
            "id":4,
            "time": "11:09:32 AM",
            "type": "Multi-Zone",
            "name": "MR Kensington",
            "Address": "Mechau Street 32",
            "contacts": [
                {
                    "id":1,
                    "name": "Melkobs Oppie See",
                    "phone": "+278346738392",
                    "status": "available",
                    "rank": 0
                }
            ]
        },
        {
            "id":5,
            "time": "11:09:32 AM",
            "type": "Multi-Zone",
            "name": "MR Kensington",
            "Address": "Mechau Street 32",
            "contacts": []
        }
    ])
  return (
    <div className="App">
            <NotificationList notifications={notifications} />
    </div>
  );
}

export default App;
