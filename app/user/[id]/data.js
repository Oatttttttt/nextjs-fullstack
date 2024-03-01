export async function getData(id) {
  const res = await fetch(`http://localhost:3000/user/${id}/api`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
