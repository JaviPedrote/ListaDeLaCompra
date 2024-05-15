import i18n from "i18next";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { t } = useTranslation();
  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <select onChange={changeLanguage}>
      <option value="es">{t("Spanish")}</option>
      <option value="en">{t("English")}</option>
    </select>
  );
};

export default LanguageSelector;
