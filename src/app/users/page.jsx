const Users = async () => {
  const users = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  ).then((response) => response.json());

  await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate a delay

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default Users;
