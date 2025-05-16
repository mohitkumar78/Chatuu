import React, { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./component/Auth/ProtectedRoutes";

const Home = lazy(() => import("./Pages/Home"));
const Login = lazy(() => import("./Pages/Login"));
const Chat = lazy(() => import("./Pages/Chat"));
const Group = lazy(() => import("./Pages/Group"));
let user = false;
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoutes user={user} />}>
          <Route path="/" element={<Home></Home>}></Route>

          <Route path="/chat/:chatId" element={<Chat />}></Route>
          <Route path="/group" element={<Group />}></Route>
        </Route>
        <Route
          path="/login"
          element={
            <ProtectedRoutes user={!user} redirect="/">
              <Login />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
