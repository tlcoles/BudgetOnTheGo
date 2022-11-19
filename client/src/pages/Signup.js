import React from "react";
import GeneralButton from "../components/GeneralButton";
import HeadingH1Component from "../components/Heading";
import InputField from "../components/InputField";
import { Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const SignupPage = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [budget, setBudget] = React.useState("");
  const [email, setEmail] = React.useState("");

  const Signup = () => {
    console.log(username, budget, email, password);
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
        label={"Budget"}
        value={budget}
        type={"number"}
        placeholder={"0.00"}
        setValue={setBudget}
      />
      <InputField
        label={"Email"}
        value={email}
        type={"email"}
        placeholder={"Email"}
        setValue={setEmail}
      />
      <InputField
        label={"Password"}
        value={password}
        type={"password"}
        placeholder={"Password"}
        setValue={setPassword}
      />
      <GeneralButton buttonTitle={"Sign up"} handleClick={Signup} />
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
