import { useEffect } from "react";
import { useDispatch } from "react-redux";
import MainMenu from "./components/views/MainMenu/MainMenu";
import NavBar from "./components/views/NavBar/NavBar";
import { fetchTables } from './redux/tableRedux';

function App() {
  const dispatch = useDispatch();

  useEffect(() => fetchTables(dispatch), []);

  return (
    <main>
      <NavBar />
      <MainMenu/>
    </main>
  );
}

export default App;
