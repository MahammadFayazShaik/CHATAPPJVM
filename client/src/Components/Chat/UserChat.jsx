import { Stack } from "react-bootstrap";
import { useFetchRecipientUser } from "../../hooks/useFetchRecipient";
import avatar from "../../assets/avatar.svg";
import { useContext } from "react";
import { ChatContext } from "../../Context/ChatContext";



const today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1; // Months start at 0!
let dd = today.getDate();


const UserChat =({chat , user})=>{
    const {recipientUser} = useFetchRecipientUser(chat , user);
    const {onlineUsers} = useContext(ChatContext);


    const isOnline =  onlineUsers?.some((user)=> user?.userId === recipientUser?._id);
    

    return (
    <Stack direction="horizontal" gap = {3} className = "user-card align-items-center p-2 justify-content-between" role = "button">
        <div className="d-flex">
            <div className="me-2">
                <img src ={avatar} height = "35px"/>
            </div>
            <div className="text-content">
                <div className="name">{recipientUser?.name}</div>
                <div className="text"> Message</div>
                <div className="date">{`${mm}/${dd}/${yyyy}`}</div>

            </div>
        </div>
        <div className="d-flex flex-column align-items-end">
            <div className="date">{`${mm}/${dd}/${yyyy}`}</div>
            <div className="this-user-notification"></div>
            <span className={isOnline?"user-online":""}></span>
        </div>

    </Stack>
    );
};

export default UserChat;