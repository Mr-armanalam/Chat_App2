import React from 'react'
import Conversation from './Conversation'

const Conversations = () => {
  return (
    <div className="py-2 flex flex-col scrollbar-none  overflow-y-scroll">
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
    </div>
  );
}

export default Conversations

//starter code
// const Conversations = () => {
//   return (
//     <div className="py-2 flex flex-col scrollbar-none  overflow-y-scroll">
//       <Conversation />
//       <Conversation />
//       <Conversation />
//       <Conversation />
//       <Conversation />
//       <Conversation />
//       <Conversation />
//     </div>
//   );
// };
