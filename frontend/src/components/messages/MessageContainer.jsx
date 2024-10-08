import React, { useEffect, useState } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import {TiMessage} from "react-icons/ti"
import useConversation from "../../zustand/useConversation";
import { useAuthContext } from "../../context/AuthContext";
import { IoReturnUpBackOutline } from "react-icons/io5";
import { useClickContext } from "../../context/clickContext";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const {setClicked} = useClickContext();

  const handleback = () => {
    setClicked(false);
    setSelectedConversation(null);
    // TODO: Navigate back to the chat list page or other appropriate page.
  }

  useEffect(() => {
    // cleanup function (unmounts)
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);
  return (
    <div className="md:min-w-[450px] w-full max-[425px]:w-full max-h-full flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="bg-slate-500 px-4 py-2 flex items-center  mb-2">
            <IoReturnUpBackOutline className="text-white font-extrabold cursor-pointer" onClick={handleback} />
            <span className="label-text px-2">To:</span>{" "}
            <span className="text-gray-900 font-bold">{selectedConversation.fullName}</span>
          </div>

          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  const {authUser} = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2 ">
        <p>Welcome ❤️ {authUser.fullName} 🙂</p>
        <p>Select a chat to start messaging</p>
        <TiMessage className='text-3xl md:text-6xl text-center' />
      </div>
    </div>
  )
}


//starter code
// const MessageContainer = () => {
//   const [NochatSelected, setNoChatSelected] = useState(true);
//   return (
//     <div className="md:min-w-[450px] flex flex-col">
//       {NochatSelected ? (
//         <NoChatSelected />
//       ) : (
//         <>
//           {/* Header */}
//           <div className="bg-slate-500 px-4 py-2  mb-2">
//             <span className="label-text">To:</span>{" "}
//             <span className="text-gray-900 font-bold">John doec</span>
//           </div>

//           <Messages />
//           <MessageInput />
//         </>
//       )}
//     </div>
//   );
// };