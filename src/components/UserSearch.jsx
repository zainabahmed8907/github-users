import React, { useContext } from "react";
import { useState } from "react";
import { AlertContext } from "../context/alert/AlertContext";
import { GithubContext } from "../context/github/GithubContext";
import Alert from "./layout/Alert";

const UserSearch = () => {
  const [text, setText] = useState("");
  const { users, searchUsers, clearUsers } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);
  const handleChange = (e) => {
    setText(e.target.value);
    console.log(text);
  };
  //search users
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Field can't be empty", "Error");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 mb-8 gap-8 ">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                name="search"
                id="search_field"
                className="w-full pr-40 bg-gray-200 input input-lg p-2 text-black rounded-lg"
                placeholder="Search"
                value={text}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none rounded-md w-36 btn btn-lg p-2 bg-slate-800 text-sky-500"
              >
                GO
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button className="btn btn-ghost btn-lg" onClick={clearUsers}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
