/* eslint-disable indent */
import React from "react";
import GeneralButton from "../components/GeneralButton";
import HeadingH1Component from "../components/Heading";
// import InputField from "../components/InputField";
import { useMutation } from "@apollo/client";
import { UPDATE_USER } from "../utils/mutations";
import InputFieldNotReq from "../components/InputFieldNotReq";
// import Auth from "../utils/auth";

const SettingsPage = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");

  const [updateUser] = useMutation(UPDATE_USER);

  const update = async () => {
    await updateUser({
      variables: { username, email, password },
    });
    // Auth.login(data.addUser.token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    // eslint-disable-next-line default-case
    switch (name) {
      case "username":
        return setUsername(value);
      case "password":
        return setPassword(value);
      case "email":
        return setEmail(value);
    }
  };

  const heading = "Account Information";

  return (
    <div>
      <HeadingH1Component heading={heading} />
      <InputFieldNotReq
        label={"Username"}
        value={username}
        name={"username"}
        type={"text"}
        placeholder={"Username"}
        onChange={handleChange}
      />
      <InputFieldNotReq
        label={"Email"}
        value={email}
        name={"email"}
        type={"email"}
        placeholder={"Email"}
        onChange={handleChange}
      />
      <InputFieldNotReq
        label={"Password"}
        value={password}
        name={"password"}
        type={"password"}
        placeholder={"Password"}
        onChange={handleChange}
      />
      <GeneralButton buttonTitle={"Apply"} handleClick={update} />
    </div>
  );
};

export default SettingsPage;
