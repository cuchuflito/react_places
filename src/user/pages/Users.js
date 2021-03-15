import React, { useEffect, useState, Fragment } from "react";
import { useHttpClient } from "../../shared/hooks/http-hook";
import {
  ErrorModal,
  LoadingSpinner,
  Avatar,
} from "../../shared/components/UIElements";
import UserList from "../components/UserList";
const URL = "http://192.168.1.2:9000/api/users";

export const Users = () => {
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState();
  const [loadedUsers, setLoadedUsers] = useState();

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    // send request
    console.log("before");
    const getUsers = async () => {
      try {
        const responseData = await sendRequest(URL);
        console.log(responseData);
        setLoadedUsers(responseData.users);
      } catch (err) {}
    };
    getUsers();
  }, []);

  // const errorHandler = () => {
  //   clearError(null);
  // };

  return (
    <Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedUsers && <UserList users={loadedUsers} />}
    </Fragment>
  );
};

export default Users;
