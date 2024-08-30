import React, { useEffect, useRef } from 'react'
import Message from './Message.jsx'
import useGetMessages from '../../hooks/useGetMessages.js'
import MessageSkeleton from '../skeletons/MessageSkeleton.jsx';
import useListenMessage from '../../hooks/useListenMessage.js';


const Messages = () => {
  const {messages, loading} = useGetMessages();
  useListenMessage();
  const lastMessageRef = useRef();
  useEffect(() => {
   setTimeout(() => {
     lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
   }, 100);
  },[messages])
  
  return (
    <div className="px-4 flex-1 scrollbar-none  overflow-y-scroll">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message.id}
          ref={lastMessageRef}
          >
            <Message message={message} />
          </div>
        ))}

      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

      {!loading && messages.length === 0 && (
        <p className="text-center">Send a message to start the conversation</p>
      )}
    </div>
  );
}

export default Messages


//starter code

// const Messages = () => {
//   return (
//     <div className="px-4 flex-1 scrollbar-none  overflow-y-scroll">
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//     </div>
//   );
// };