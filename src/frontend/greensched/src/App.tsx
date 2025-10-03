import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RequireAuth} from "./auth/RequireAuth";
import UnauthenticatedLayout from "./layouts/UnauthenticatedLayout";
import DashboardPage from "./app-components/DashboardPage";
import AuthenticatedLayout from "./layouts/AuthenticatedLayout";
import { LoginForm } from "./components/login-form";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout non autenticato */}
        <Route element={<UnauthenticatedLayout />}>
          <Route
            path="/login"
            element={
                <LoginForm />
            }
          />
        </Route>

        {/* Layout autenticato */}
        <Route element={<AuthenticatedLayout />}>
          <Route
            path="/dashboard/*"
            element={
              <RequireAuth>
                <DashboardPage />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
