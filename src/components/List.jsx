import UserCard from "./Card";
function List() {
  const data = require("../users.json");
  const cards = data.map((user) => {
    return <UserCard {...user} key={user.id} />;
  });
  return cards;
}
export default List;
