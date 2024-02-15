import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "@/layouts/RootLayout";
import { Projects, Home, NotFound } from "@/pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="projects" element={<Projects />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  ),
  {
    basename: import.meta.env.DEV ? "/" : "/karimsherief/",
  }
);
export default function App() {
  return <RouterProvider router={router} />;
}
