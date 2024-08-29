import React from 'react'
import Message from './Message.jsx'
import useGetMessages from '../../hooks/useGetMessages.js'
import MessageSkeleton from '../skeletons/MessageSkeleton.jsx';


const Messages = () => {
  const {messages, loading} = useGetMessages();
  console.log("messages",messages);
  
  return (
    <div className="px-4 flex-1 scrollbar-none  overflow-y-scroll">
      {loading && [...Array(3)].map((_,idx) => <MessageSkeleton key={idx} />)}
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