import React from "react";
import Alert from "../components/layout/Alert";
import { PaginatedItems, UserList } from "../components/UserList";
import UserSearch from "../components/UserSearch";
const Home = () => {
  return (
    <div>
      <UserSearch />
      <Alert />
      <PaginatedItems itemsPerPage={10} />
    </div>
  );
};

export default Home;
