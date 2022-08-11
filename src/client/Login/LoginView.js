import React, { useEffect, useState } from "react";
import BackgroundImage from "../../assets/background1.jpeg";

const LoginView = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;
  const [confirmPassword, setConfirmPassword] = useState("");

  const [pulse, setPulse] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      console.log(user);
    }
  };

  useEffect(() => {
    if (
      name &&
      email &&
      password &&
      confirmPassword &&
      password.length >= 8 &&
      confirmPassword === password
    ) {
      setPulse(true);
    } else {
      setPulse(false);
    }
  }, [name, email, password, confirmPassword]);

  console.log(pulse);
  return <div>hi</div>;
};

export default LoginView;
