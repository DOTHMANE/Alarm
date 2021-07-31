import React from "react";
import {Notifications} from "../App";
import NotificationCp from "./NotificationCp";

const NotificationList: React.FC<Notifications> =  ({notifications}) => {
    return (
        <div className="notification-list">
            {notifications.map(notification => {
                return (
                    <NotificationCp key={notification.id} notification={notification}/>
                )
            })}
        </div>
    )
}

export default NotificationList