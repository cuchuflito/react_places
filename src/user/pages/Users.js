import React, { useEffect, useState, Fragment } from "react";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { ErrorModal, LoadingSpinner } from "../../shared/components/UIElements";

const URL = 'https://jsonplaceholder.typicode.com/posts'

export const Users = () => {
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState();
  const [loadedUsers, setLoadedUsers] = useState();

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useState(async () => {
    // send request
    console.log('before')
    try {
      const responseData = await sendRequest(URL);
      setLoadedUsers(responseData.users);
    } catch (err) {}
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
      {/* {!isLoading && loadedUsers && <UserList items={loadedUsers} />} */}
    </Fragment>
  );
};

export default Users;
