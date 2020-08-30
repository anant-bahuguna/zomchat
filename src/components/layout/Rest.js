import React from "react";
import LeftSidebar from './LeftSidebar'
import ChatSection from './ChatSection'
const Rest = () => {
    return (
        <div className="flex-1 flex overflow-y-hidden">
            {/* Icon Sidebar */}
            <LeftSidebar />
            <div className=" flex-1 flex justify-between">
            <ChatSection />
            {/* Right Sidebar */}
            </div>
        </div>
    );
};

export default Rest;
