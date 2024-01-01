const useUser = async (user) => {
  const res = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  const data = res.json();
  return { username: data?.username };
};

export default useUser;
