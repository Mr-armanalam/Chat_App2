import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";

const Home = () => {
  return (
    <div className="flex w-full lg:mx-12 overflow-auto h-full flex-col sm:flex-row sm:h-[450px] md:h-[550px] rounded-lg sm:overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
    {/* <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 "> */}
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;
