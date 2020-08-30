import React from "react";
import UserImage from "./UserImage";

const UserListItem = ({ selected }) => {
    return (
        <li className={`text-gray-500 px-2 py-2 hover:text-gray-200 hover:bg-gray-900 ${selected && 'bg-gray-750 rounded'}`}>
            <a href="#" className="flex items-center">
                <div>
                    <UserImage />
                </div>
                <div class="text-sm ml-3">
                    <p class="text-gray-200 leading-none">Jonathan Reinink</p>
                    <p class="text-gray-600">Aug 18</p>
                </div>
            </a>
        </li>
    );
};

export default UserListItem;
