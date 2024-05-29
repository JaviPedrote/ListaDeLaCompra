import { useState } from "react";
import Fuse from "fuse.js";
import { useTranslation } from "react-i18next";

const SearchBar = ({ list }) => {
  const [searchProduct, setSearchProduct] = useState("");
  const options = {
    keys: ["name"],
    threshold: 0.2,
  };
  const { t } = useTranslation();
  const fuse = new Fuse(list, options);
  const results = fuse.search(searchProduct);

  return (
    <>
      <div className="search-toolbar">
        <input
          type="text"
          placeholder={t("products.searchProduct")}
          value={searchProduct}
          onChange={(e) => setSearchProduct(e.target.value)}
          id="searchProduct"
        />
      </div>
      <div className="filtered-list">
        <ul>
          {results.map((result) => (
            <li key={result.item.id}>{result.item.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SearchBar;
