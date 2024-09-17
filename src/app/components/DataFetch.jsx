async function getData() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/todos"
  ).then((response) => response.json());

  console.log("api called");

  return res;
}
const DataFetch = async () => {
    const data = await getData();

  return (
    <ul>
      {data.slice(0, 6).map((user) => (
        <li key={user.id}>{user.title}</li>
      ))}
    </ul>
  );
};

export default DataFetch;
