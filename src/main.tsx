import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PersonalDiaryApp from "./components/PersonalDiaryApp";
import DiaryDetails from "./components/DiaryDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <PersonalDiaryApp />,
  },
  {
    path: "/DiaryDetails/:entryId",
    element: <DiaryDetails />,
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
