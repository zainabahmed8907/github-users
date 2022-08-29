import axios from "axios";
import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";
export const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    loading: false,
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);

  const searchUsers = async (text) => {
    setLoading();
    const params = new URLSearchParams({
      q: text,
    });
    const response = await axios.get(`${GITHUB_URL}/search/users?${params}`);
    const { items } = response.data;
    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };
  const getUser = async (login) => {
    setLoading();

    const response = await axios.get(`${GITHUB_URL}/users/${login}`);
    console.log("single suer data", response);
    if (response.status === 404) {
      window.location = "/notfound";
    } else {
      const data = response.data;
      dispatch({
        type: "GET_USER",
        payload: data,
      });
    }
  };

  const setLoading = () => {
    dispatch({
      type: "SET_LOADING",
    });
  };
  const clearUsers = () => {
    dispatch({
      type: "CLEAR_USERS",
    });
  };
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        user: state.user,
        searchUsers,
        clearUsers,
        getUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
export default GithubProvider;
