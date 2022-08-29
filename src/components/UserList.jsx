import React, { useEffect, useContext, useState } from "react";
import ReactPaginate from "react-paginate";
import { GithubContext } from "../context/github/GithubContext";
import Spinner from "./layout/Spinner";
import UserItem from "./UserItem";

export const UserList = ({ currentItems }) => {
  const { users, loading, searchUsers } = useContext(GithubContext);
  useEffect(() => {
    searchUsers();
  }, []);

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => {
          return (
            <div key={user.id}>
              <UserItem user={user} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return <Spinner />;
  }
};

export const PaginatedItems = ({ itemsPerPage }) => {
  const { users } = useContext(GithubContext);

  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(users.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(users.length / itemsPerPage));
  }, [users]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % users.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <>
      <UserList currentItems={currentItems} />
      <ReactPaginate
        className="pagination"
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
};
