import { useState } from "react";
import showmore from "../icons/expand_more.svg";
import showless from "../icons/expand_less.svg";
import moment from "moment";
import Logo from "./Logo";
function UserCard(props) {
  const {
    firstName,
    lastName,
    role,
    email,
    street,
    city,
    state,
    zip,
    phone,
    createdAt,
    lastLoggedIn
  } = props;
  const [expand, setExpand] = useState(false);
  function dateTimeConverter(date) {
    return moment(date).utc().format("M/D/YY HH:MM:SS A");
  }
  function phoneNumberConverter(phone) {
    return (
      "(" +
      phone.slice(0, 3) +
      ")" +
      phone.slice(3, 6) +
      "-" +
      phone.slice(6, 10)
    );
  }

  return (
    <div className="userCard">
      <div className="userCardTitle">
        <Logo role={role} className="userCardPhoto" />
        <div className="userCardInfo">
          <div className="userCardName">{`${firstName} ${lastName}`}</div>
          <div className="userCardRole">{role}</div>
          <div className="userCardemail">{email}</div>
        </div>

        <img
          className="userCardButton"
          src={expand ? showless : showmore}
          alt="more"
          onClick={() => setExpand(!expand)}
        />
      </div>
      {expand ? (
        <div className="userCardDetail">
          <div>
            <p className="userDetailHeader">Address</p>
            <p className="userDetailItem">{`${street}, ${city}, ${state} ${zip}`}</p>
          </div>
          <div>
            <p className="userDetailHeader">Phone</p>
            <p className="userDetailItem">{phoneNumberConverter(phone)}</p>
          </div>
          <div>
            <p className="userDetailHeader">Created At</p>
            <p className="userDetailItem">
              {dateTimeConverter(new Date(createdAt))}
            </p>
          </div>
          <div>
            <p className="userDetailHeader">Last Logged In</p>
            <p className="userDetailItem">
              {dateTimeConverter(new Date(lastLoggedIn))}
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default UserCard;
