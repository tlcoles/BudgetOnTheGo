import React from "react";
import GeneralButton from "../components/GeneralButton";
import HeadingH1Component from "../components/Heading";
import InputField from "../components/InputField";
import { UPDATE_USER } from "../utils/mutations";

const SettingsPage = () => {
  const [username, setUsername] = React.useState("username");
  const [password, setPassword] = React.useState("password");
  const [email, setEmail] = React.useState("email");

  const [updateUser] = useMutation(UPDATE_USER);

  const update = async () => {
    const { data } = await updateUser({
      variables: { username, email, password },
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

  const heading = "Account Information";

  return (
    <div>
      <HeadingH1Component heading={heading} />
      <InputField
        label={"Username "}
        name={"username"}
        value={username}
        type={"text"}
        placeholder={"Username"}
        setValue={setUsername}
      />
      <InputField
        label={"Email"}
        value={email}
        name={"email"}
        type={"email"}
        placeholder={"Email"}
        setValue={setEmail}
      />
      <InputField
        label={"Password"}
        value={password}
        name={"password"}
        type={"password"}
        placeholder={"Password"}
        setValue={setPassword}
      />
      <GeneralButton buttonTitle={"Apply"} handleClick={Settings} />
    </div>
  );
};

export default SettingsPage;
