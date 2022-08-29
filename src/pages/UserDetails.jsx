import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { GithubContext } from "../context/github/GithubContext";
import { FaCodepen, FaStore, FaUser, FaUserFriends } from "react-icons/fa";
import Spinner from "../components/layout/Spinner";
export const UserDetails = () => {
  const { getUser, user, loading } = useContext(GithubContext);

  const params = useParams();
  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;
  useEffect(() => {
    getUser(params.login);
    if (loading) {
      return <Spinner />;
    }
  }, []);

  return (
    <>
      <div className="w-full mx-auto lg:w-10/12 bg-sky-400 p-4">
        <div className="mb-4">
          <Link to="/" className="btn btn-blend">
            Back to Search
          </Link>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8 ">
          <div className="custom-card-image mb-6 md:mb-0">
            <div className="rounded shadow-lg card bg-sky-700">
              <figure>
                <img
                  src={avatar_url}
                  alt=""
                  className="card rounded-full p-4"
                />
              </figure>
              <div className="card-body justify-end shadow-xl">
                <h2 className="card-title font-bold text-white">{name}</h2>
                <p className="flex-grow-0 text-center text-white pb-2">
                  {login}
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="mb-6">
              <h1 className="text-3xl card-title text-black ">
                {name}
                <div className="ml-0 mr-1 badge badge-success">{type}</div>
                {hireable && (
                  <div className="mx-1 badge badge-info">Hireable</div>
                )}
              </h1>
              <p className="text-black">{bio}</p>
              <div className="mt-4 card-actions">
                <a
                  href={html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline text-black"
                >
                  Visit Github Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
