import React from "react";

const UserImage = () => {
    return (
        <img
            src={require("../assets/dp1.jpg")}
            alt="avatar"
            className="w-10 h-10 rounded-full"
        />
    );
};

export default UserImage;
