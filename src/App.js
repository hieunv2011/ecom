import logo from "./logo.svg";
import "./App.css";
import { useTranslation } from "react-i18next";

function App() {
  // const { t, i18n } = useTranslation();
  // const changeLanguage = (lng) => {
  //   i18n.changeLanguage(lng);
  // };

  return (
    <div>
      {/* <header className="App-header">
        <select onChange={(e) => changeLanguage(e.target.value)}>
          <option value="en">English</option>
          <option value="vi">Tiếng Việt</option>
          <option value="zh">中文</option>
        </select>
        <h1>{t("welcome")}</h1>
        <p>{t("description")}</p>
        <p>{t("dick")}</p>
      </header> */}
    </div>
  );
}

export default App;
