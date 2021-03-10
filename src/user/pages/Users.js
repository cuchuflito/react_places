import React, { useEffect, useState, Fragment } from "react";

import ErrorModal from "../../shared/components/UIElements";

export const Users = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [loadedUsers, setLoadedUsers] = useState();

  useState(() => {
    // send request
  }, []);

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Fragment>
      <ErrorModal error={error} onClear={errorHandler} />
      {!isLoading && <div className="center"></div>}
    </Fragment>
  );
};
