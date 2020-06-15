const appApi = "http://localhost:4000/api/v1";

export const createUser = async (data) => {
  const res = await fetch(`${appApi}/auth/register`, {
    method: "Post",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await res.json();
};

export const loginUser = async (credentials) => {
  const res = await fetch(`${appApi}/auth/login`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(credentials),
  });
  return await res.json();
};

export const logoutUser = async () => {
  return fetch(`${appApi}/auth/logout`, {
    method: "DELETE",
    credentials: "include",
  });
};

// module.exports = {
//   createUser,
//   loginUser,
//   logoutUser,
// };
