import React from "react";
import Conversation from "./Conversation";
import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  console.log("Conversation", conversations);

  return (
    <div className="py-2 flex flex-col scrollbar-none  overflow-y-scroll">
      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation.id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={idx === conversations.length -1}
        />
      ))}

      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  );
};

export default Conversations;

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
