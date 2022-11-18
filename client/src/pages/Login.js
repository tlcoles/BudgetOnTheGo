import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

import Auth from "../utils/auth";

import GeneralButton from "../components/GeneralButton";
import HeadingH1Component from "../components/Heading";
import InputField from "../components/InputField";
import { Stack, Text } from "@chakra-ui/react";

const LoginPage = (props) => {
  // const [username, setUsername] = React.useState("");
  // const [password, setPassword] = React.useState("");
  const [formState, setFormState] = useState({ username: "", password: "" });
  //! currently error and data not in use, see 21-MERN, ex 26 Login.js example
  const [login, { error, data }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (error) {
      console.error(error);
    }

    // clear form values
    setFormState({
      username: "",
      password: "",
    });
  };

  return (
    <div>
      <HeadingH1Component heading={"Budget On the Go"} />
      <form onSubmit={handleFormSubmit}>
        <InputField
          value={formState.username}
          label={"Username"}
          name={"username"}
          type={"text"}
          placeholder={"Username"}
          onChange={handleChange}
        />
        <InputField
          value={formState.password}
          label={"Password"}
          name={"password"}
          type={"password"}
          placeholder={"Password"}
          onChange={handleChange}
        />
        <GeneralButton
          onClick={handleChange}
          type={"submit"}
          buttonTitle={"Log in"}
        />
      </form>

      {error && <div>{error.message}</div>}

      <Stack>
        <Text>Still not a member?</Text>
        <Text>
          <b>Sign up!</b>
        </Text>
      </Stack>
    </div>
  );
};

export default LoginPage;
