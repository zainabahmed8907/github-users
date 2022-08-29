import React from "react";
import { Link } from "react-router-dom";
const UserItem = ({ user }) => {
  return (
    <div className="card shadow-lg compact side bg-sky-500/100 rounded-md">
      <div className="flex items-center space-x-4 card-body">
        <div className="avatar p-2">
          <div className="rounded-full shadow w-14 h-14">
            <img
              src={user.avatar_url}
              alt="profile"
              className="rounded-full shadow"
            />
          </div>
        </div>

        <div>
          <h2 className="card-title text-slate-300 font-semibold">
            {user.login}
          </h2>
          <Link to={`users/${user.login}`}>
            <p className="text-white-500/80"> View Profile</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
