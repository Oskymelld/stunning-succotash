import { RouterProvider } from "react-router";
import { router } from "./routes";

export default function App() {
  return (
    <div className="dark min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground" style={{ position: "relative" }}>
      <RouterProvider router={router} />
    </div>
  );
}
