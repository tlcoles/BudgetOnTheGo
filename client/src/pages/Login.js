import React from "react";
import GeneralButton from "../components/GeneralButton";
import HeadingH1Component from "../components/Heading";
import InputField from "../components/InputField";
import { Stack, Text } from "@chakra-ui/react";

const LoginPage = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const login = () => {
    console.log(username, password);
    // in here we're not gonna clg the values bu actually make request to the api to log us in
  };

  const heading = "Budget On The Go";

  return (
    <div>
      <HeadingH1Component heading={heading} />
      <InputField
        label={"Username"}
        value={username}
        type={"text"}
        placeholder={"Username"}
        setValue={setUsername}
      />
      <InputField
        label={"Password"}
        value={password}
        type={"password"}
        placeholder={"Password"}
        setValue={setPassword}
      />
      <GeneralButton buttonTitle={"Log in"} handleClick={login} />
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
