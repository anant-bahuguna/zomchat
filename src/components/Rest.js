import React from "react";
import UsersSidebar from './UsersSidebar'
import ChatSection from './ChatSection'
const Rest = () => {
    return (
        <div className="flex-1 flex overflow-y-hidden">
            <UsersSidebar />
            <ChatSection />
        </div>
    );
};

export default Rest;
