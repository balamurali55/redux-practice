import React from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchData } from "./Action/Action";

const Users = ({ isloading, user, fetchData, haserror, error }) => {
  const handleClick = () => {
    return fetchData();
  };
  return (
    <>
      <Button onClick={handleClick}>Get Data</Button>
      <h1>{isloading && "Loading..."}</h1>
      <h1>{haserror && error}</h1>
      <div>
        {user.map((value) => (
          <h2 key={value.id}>{value.name}</h2>
        ))}
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    isloading: state.isloading,
    user: state.user,
    haserror: state.haserror,
    error: state.error,
  };
};

const dispatchStateProps = (dispatch) => {
  return {
    fetchData: () => dispatch(fetchData()),
  };
};

export default connect(mapStateToProps, dispatchStateProps)(Users);
