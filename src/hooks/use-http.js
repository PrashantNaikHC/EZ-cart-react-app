import { useReducer } from "react";

function httpReducer(state, action) {
  if (state === "SEND") {
    return {
      status: "pending",
      data: null,
      error: null,
    };
  }
  if (state === "SUCCESS") {
    return {
      status: "completed",
      data: action.data,
      error: null,
    };
  }
  if (state === "ERROR") {
    return {
      status: "completed",
      data: null,
      error: action.errorMessage,
    };
  }
  return state;
}

function useHttp(apiRequest, startWithPendingState = false) {
  const [httpStatus, dispatch] = useReducer(httpReducer, {
    status: startWithPendingState ? "pending" : null,
    data: null,
    error: null,
  });

  const sendRequest = useCallback(
    async (apiInputParams) => {
      dispatch({ type: "SEND" });
      try {
        const result = await apiRequest(apiInputParams);
        dispatch({ type: "SUCCESS", data: result });
      } catch (error) {
        dispatch({
          type: "SUCCESS",
          errorMessage: error.message || "Something went wrong!",
        });
      }
    },
    [apiRequest]
  );

  return {
    sendRequest,
    ...httpStatus,
  };
}

export default useHttp;
