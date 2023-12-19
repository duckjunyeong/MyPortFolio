import React from "react";
import { PageHeaderWrapper } from "./styles.jsx";

const Profile = ({ profileRef }) => {
  return (
    <PageHeaderWrapper ref={profileRef} r>
      <div>
        <div>Profile</div>
      </div>
    </PageHeaderWrapper>
  );
};

export default Profile;
