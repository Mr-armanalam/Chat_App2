import { FaSearch } from "react-icons/fa";
import React, { useState } from "react";
import useConversation from "../../zustand/useConversation";

import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState("")
  const {setSelectedConversation} = useConversation();
  const {conversations} = useGetConversations();

  const handleSearch = (e) => {
    e.preventDefault();
    if(!search) return;
    if(search.length < 3) {
      return toast.error("Search term should be at least 3 characters long");
    }

    const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()))

    if(conversation) {
      setSelectedConversation(conversation);
      setSearch("")
    }else {
      toast.error("No such user found !");
    }
    
  };
  return (
    <form onSubmit={handleSearch} className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered rounded-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="btn btn-circle bg-sky-500 text-white">
        <FaSearch />
      </button>
    </form>
  );
};

export default SearchInput;

//STARTER CODE
// const SearchInput = () => {
//   return (
//     <form className="flex items-center gap-2">
//       <input
//         type="text"
//         placeholder="Search"
//         className="input input-bordered rounded-full"
//       />
//       <button
//         type="submit"
//         className="btn btn-circle bg-sky-500 text-white"
//       >
//         <FaSearch />
//       </button>
//     </form>
//   );
// };

// export default SearchInput;