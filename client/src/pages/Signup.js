/* eslint-disable indent */
import React from "react";
import GeneralButton from "../components/GeneralButton";
import HeadingH1Component from "../components/Heading";
import InputField from "../components/InputField";
import { Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const SignupPage = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [budget, setBudget] = React.useState("");
  const [email, setEmail] = React.useState("");

  const [createUser] = useMutation(ADD_USER);

  const signup = async () => {
    console.log(username, budget, email, password);
    const { data } = await createUser({
      variables: { username, budget: parseInt(budget), email, password },
    });

    Auth.login(data.addUser.token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    // eslint-disable-next-line default-case
    switch (name) {
      case "username":
        return setUsername(value);

      case "email":
        return setEmail(value);
      case "budget":
        return setBudget(value);
      case "password":
        return setPassword(value);
    }
  };

  const heading = "Budget On The Go";

  return (
    <div>
      <HeadingH1Component heading={heading} />
      <InputField
        label={"username"}
        name={"username"}
        value={username}
        type={"text"}
        placeholder={"username"}
        onChange={handleChange}
      />
      <InputField
        label={"Budget"}
        value={budget}
        name={"budget"}
        type={"number"}
        placeholder={"0.00"}
        onChange={handleChange}
      />
      <InputField
        label={"Email"}
        value={email}
        name={"email"}
        type={"email"}
        placeholder={"Email"}
        onChange={handleChange}
      />
      <InputField
        label={"Password"}
        value={password}
        name={"password"}
        type={"password"}
        placeholder={"Password"}
        onChange={handleChange}
      />
      <GeneralButton buttonTitle={"Sign up"} handleClick={signup} />
      <Stack>
        <Text>Already a member?</Text>
        <Text>
          <Link to="/login">
            <b>Log in {}</b>
          </Link>
          instead
        </Text>
      </Stack>
    </div>
  );
};

export default SignupPage;
