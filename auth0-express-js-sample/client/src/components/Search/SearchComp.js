import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Autocomplete from "./AutoComplete";
import CountriesList from "../../data/countries-list.json";
// import DesertList from "../../data/001.json";
import DesertList from "../../data/all_in_one.json";
import "./Search.scss";

const SearchComp = () => {
    const [country, setcountry] = useState("");
    return (
        <>
            <div className="row">
                <div className="col text-center">
                    <h2>חפש קורס</h2>
                    <div className="d-flex justify-content-center mb-3">
                        <div className="search-bar-container">
                            <Autocomplete
                                data={DesertList}
                                onSelect={country => setcountry(country)}
                            />

                            <FontAwesomeIcon
                                icon="search"
                                className="search-bar-icon"
                            />
                        </div>
                    </div>

                    {country && (
                        <pre className="textAuto">
                            {JSON.stringify(country, 0, 2)}
                        </pre>
                    )}
                </div>
            </div>
        </>
    );
};

export default SearchComp;
