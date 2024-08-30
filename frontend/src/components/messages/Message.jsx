import React from "react";
import {useAuthContext} from '../../context/AuthContext'
import useConversation from "../../zustand/useConversation";
import { extractTime } from "../../utils/extractTime";

const Message = ({message}) => {
  const {authUser} = useAuthContext();
  const {selectedConversation} = useConversation();
  const fromMe = message.sender === authUser._id;
  const formattedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? 'chat-end' : 'chat-start'
  const profilePic = fromMe ? authUser.profilePic: selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? 'bg-blue-500' : "";

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePic} alt="Tailwind css chat bubble component" />
        </div>
      </div>
      <div className={`chat-bubble text-white pb-2 ${bubbleBgColor}`}>
        {message.content}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {formattedTime}
      </div>
    </div>
  );
};

export default Message;

//starter code 

// const Message = () => {
//   return (
//     <div className="chat chat-end">
//       <div className="chat-image avatar">
//         <div className="w-10 rounded-full">
//           <img
//             src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
//             alt="Tailwind css chat bubble component"
//           />
//         </div>
//       </div>
//       <div className="chat-bubble text-white bg-blue-500 ">
//         Hi! what is upp?
//       </div>
//       <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
//         12:46
//       </div>
//     </div>
//   );
// };
