import React from "react";
import { connect } from "react-redux";
import { fetchUsers } from "./customer/customerActions";

function UserContainer(props) {
  useEffect(() => {
    props.fetchUsers();
  }, []);
  return props.userData.loading ? (
    <h2>Loading....</h2>
  ) : props.userData.error ? (
    <h2>{props.userData.error}</h2>
  ) : (
    <div>
      <h2>User</h2>
      <div>
        {props.userData.users.map((user) => (
          <p key={user.id}>{user.first_name}</p>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.customer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapDispatchToProps, mapStateToProps)(UserContainer);
