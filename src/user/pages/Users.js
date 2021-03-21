import React, { useEffect, useState, Fragment } from "react";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { ErrorModal, LoadingSpinner } from "../../shared/components/UIElements";
import UserList from "../components/UserList";

export const Users = () => {
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState();
  const [loadedUsers, setLoadedUsers] = useState();

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    // send request
    //console.log("before");
    const getUsers = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/users`
        );
        //console.log(responseData);
        setLoadedUsers(responseData.users);
      } catch (err) {}
    };
    getUsers();
  }, [sendRequest]);

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
