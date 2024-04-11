import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ChildrenList from "./components/pages/developer/children-list/ChildrenList";
import ParentList from "./components/pages/developer/parent/ParentList";
import { StoreProvider } from "./store/storeContext";
import Settings from "./components/pages/developer/settings/Settings";
import Departments from "./components/pages/developer/settings/department/Departments";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <StoreProvider>
          <Router>
            <Routes>
              <Route path={`*`} element={<h1>404 Error</h1>} />
              <Route path={`/children`} element={<ChildrenList />} />
              <Route path={`/parent`} element={<ParentList />} />
              <Route path={`/settings`} element={<Settings />} />
              <Route path={`/settings/departments`} element={<Departments />} />
            </Routes>
          </Router>
        </StoreProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
