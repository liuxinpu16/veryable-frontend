import group_logo from "../icons/group.svg";

function Navbar() {
  return (
    <div className="Navbar">
      <img className={"group_icon"} src={group_logo} alt="group_icon" />
      USERS
    </div>
  );
}

export default Navbar;
