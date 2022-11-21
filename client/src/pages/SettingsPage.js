/* eslint-disable indent */
import React from "react";
import GeneralButton from "../components/GeneralButton";
import HeadingH1Component from "../components/Heading";
import { useMutation } from "@apollo/client";
import { UPDATE_USER } from "../utils/mutations";
import InputFieldNotReq from "../components/InputFieldNotReq";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries.js";
// import Auth from "../utils/auth";

const heading = "Account Information";

const SettingsPage = () => {
  const [username, setUsername] = React.useState("");
  //!Keeping commented out code for later use
  // const [password, setPassword] = React.useState("");
  // const [email, setEmail] = React.useState("");

  const [updateUser] = useMutation(UPDATE_USER);

  const update = async () => {
    await updateUser({
      variables: { username, email, password },
    });
  };
  const { data } = useQuery(QUERY_ME);
  const myUsername = data?.me.username || "";

  const handleChange = (event) => {
    const { name, value } = event.target;

    // eslint-disable-next-line default-case
    switch (name) {
      case "username":
        return setUsername(value);
      // case "password":
      //   return setPassword(value);
      // case "email":
      //   return setEmail(value);
    }
  };

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
      {/* <InputFieldNotReq
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
      /> */}
      <GeneralButton buttonTitle={"Apply"} handleClick={update} />
    </div>
  );
};

export default SettingsPage;
