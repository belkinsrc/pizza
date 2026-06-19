import App from "../App";
import { MainPage } from "@/pages/main";
import { AccountPage } from "@/pages/account";
import { RouteObject } from "react-router";

const routes: RouteObject[] = [
  {
    Component: App,
    children: [
      { index: true, Component: MainPage },
      { path: "account", Component: AccountPage },
    ],
  },
];

export default routes;
