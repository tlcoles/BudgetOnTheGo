import React from "react";
import GeneralButton from "../components/GeneralButton";
import HeadingH1Component from "../components/Heading";
import InputField from "../components/InputField";

const SettingsPage = () => {
  const [username, setUsername] = React.useState("username");
  const [password, setPassword] = React.useState("password");
  const [email, setEmail] = React.useState("email");

  const Settings = () => {
    console.log(username, email, password);
    // in here we're not gonna clg the values bu actually make request to the api to log us in
  };

  const heading = "Account Information";

  return (
    <div>
      <HeadingH1Component heading={heading} />
      <InputField
        label={"Username "}
        value={username}
        type={"text"}
        placeholder={"Username"}
        setValue={setUsername}
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
      <GeneralButton buttonTitle={"Apply"} handleClick={Settings} />
    </div>
  );
};

export default SettingsPage;
