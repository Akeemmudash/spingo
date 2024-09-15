import React from "react";

const AccountInfo = () => {
  return (
    <div className="account-info-container">
      <div className="account-info">
        <h2>Account Details</h2>
        <form action="">
          <div className="form-group">
            <label htmlFor="first-name">FIRST NAME:</label>
            <input
              type="text"
              id="first-name"
              name="firstName"
              placeholder="First name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="last-name">LAST NAME:</label>
            <input
              type="text"
              id="last-name"
              name="lastName"
              placeholder="Last name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="display-name">DISPLAY NAME:</label>
            <input
              type="text"
              id="display-name"
              name="displayName"
              placeholder="Display name"
              required
            />
            <span className="form-help-text">
              This is how your name will be displayed in the account section and
              in reviews.
            </span>
          </div>
          <div className="form-group">
            <label htmlFor="email">EMAIL:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>
        </form>

        <form action="">
          <h2>Password</h2>
          <div className="form-group">
            <label htmlFor="old-password">OLD PASSWORD:</label>
            <input
              type="password"
              id="old-password"
              name="oldPassword"
              placeholder="Old password"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="new-password">NEW PASSWORD:</label>
            <input
              type="password"
              id="new-password"
              name="newPassword"
              placeholder="New password"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">CONFIRM PASSWORD:</label>
            <input
              type="password"
              id="confirm-password"
              name="confirmPassword"
              placeholder="Confirm password"
              required
            />
          </div>
        </form>

        <button className="save-btn">Save Changes</button>
      </div>
    </div>
  );
};

export default AccountInfo;
