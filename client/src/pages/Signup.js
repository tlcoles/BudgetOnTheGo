import React from "react";
import GeneralButton from "../components/GeneralButton";
import HeadingH1Component from "../components/Heading";
import InputField from "../components/InputField";
import { Container } from "@chakra-ui/react";

const SignUpPage = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [budget, setBudget] = React.useState("");
  const [email, setEmail] = React.useState("");

  const SignUp = () => {
    console.log(username, budget, email, password);
    // in here we're not gonna clg the values bu actually make request to the api to log us in
  };

  return (
    <div>
      <HeadingH1Component />
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
      <GeneralButton buttonTitle={"Sign up"} handleClick={SignUp} />
      <Container>Already a member?</Container>
      <Container>
        <b>Log in</b> instead
      </Container>
    </div>
  );
};

export default SignUpPage;
