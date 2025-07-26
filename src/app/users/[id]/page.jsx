const UserProfile = async ({ params }) => {
  const { id } = params;

  const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await data.json();

  if (!user) return <div>No user found</div>;

  return (
    <div>
      <p>Name: {user?.name}</p>
      <p>Email: {user?.email}</p>
      <p>Phone: {user?.phone}</p>
    </div>
  );
};

export default UserProfile;
