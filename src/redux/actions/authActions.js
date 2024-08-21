export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";

const generateToken = () => "some-random-token";

export const login = (username, password) => {
  return (dispatch) => {
    let user;
    if (username === "seller" && password === "123456") {
      user = { username, role: "seller", token: generateToken() };
    } else if (username === "buyer" && password === "123456") {
      user = { username, role: "buyer", token: generateToken() };
    } else {
      alert("Invalid credentials");
      return;
    }

    // Save user data to localStorage
    localStorage.setItem("user", JSON.stringify(user));

    dispatch({ type: LOGIN_SUCCESS, payload: user });
  };
};

export const logout = () => {
  localStorage.removeItem("user");

  return { type: LOGOUT };
};
