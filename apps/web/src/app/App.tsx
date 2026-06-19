import { Outlet } from "react-router";

const App = () => {
  return (
    <>
      <h1>Pizza Web</h1>
      <h2>Current Page:</h2>
      <br />
      <Outlet />
    </>
  );
};

export default App;
