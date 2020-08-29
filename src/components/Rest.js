import React from "react";
import UsersSidebar from './UsersSidebar'
import ChatSection from './ChatSection'
const Rest = () => {
    return (
        <div className="flex-1 flex overflow-y-hidden">
            {/* Icon Sidebar */}
            <UsersSidebar />
            <div className=" flex-1 flex justify-between">
            <ChatSection />
            {/* Right Sidebar */}
            </div>
        </div>
    );
};

export default Rest;
