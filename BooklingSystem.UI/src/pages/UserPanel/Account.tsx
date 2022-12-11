import React from "react";

import User from "../../models/User";

export const Account: React.FC<{ user: User | undefined }> = ({ user }) => {
  return (
    <table className="table-auto m-1">
      <thead>
        <tr>
          <td>Your name: {user?.firstName}</td>
        </tr>
        <tr>
          <td>Your lastname: {user?.lastName}</td>
        </tr>
        <tr>
          <td>Your email: {user?.email}</td>
        </tr>
      </thead>
    </table>
  );
};
