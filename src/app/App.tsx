import { Link } from "react-router-dom";

import { AppRouter } from "./providers/router";

import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProviders";

import "./styles/index.scss";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Toggle</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>
      <AppRouter />
    </div>
  );
};

export default App;
