import React from "react";
import { Button } from "@chakra-ui/react";

const GeneralButton = (props) => {
  console.log(props);
  return (
    <Button
      colorScheme="blue"
      backgroundColor={"button"}
      color={"primary"}
      minWidth="10%"
      my={2}
      onClick={props.handleClick}
    >
      {props.buttonTitle}
    </Button>
  );
};

// import GeneralButton from "./components/GeneralButton";

// const App = () => {
//   const handleLogin = (event) => {
//     console.log("loginClicked");
//     console.log(event.target);
//   };
//   return (
//     <ChakraProvider theme={budgetTheme}>
//       <Home name="BudgetOnTheGo user" />
//       <div>
//         <GeneralButton buttonTitle="Log in" handleClick={handleLogin} />
//       </div>
//       <div>
//         <GeneralButton buttonTitle="Sign up" handleClick={handleSignUp} />
//       </div>
//       <div>
//         <GeneralButton buttonTitle="Submit" handleClick={handleSubmit} />
//       </div>
//       <div>
//         <GeneralButton buttonTitle="Apply" handleClick={handleApply} />
//       </div>
//     </ChakraProvider>
//   );
// };

export default GeneralButton;
