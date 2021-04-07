import React from "react";

const AutoCompleteItem = ({
    courseName,
    courseNumber,
    departmentName,
    onSelectItem,
    isHighlighted
    // name,
    // capital,
    // region,
    // flag,

    // TODO- 1) add lowerCase search for only english 
    // TODO- 2) add different color for each depertment (3 first numbers- the badge on the right).
    // maybe using courseNumber.split('.')[0] to check dep number and attech depName and color accordingly

}) => {
    return (
        <li
            className={`list-group-item ${
                isHighlighted ? "active highlighted" : ""
            }`}
            onClick={onSelectItem}
        >
            <div className="row" >
                <div className="col">
                    <p className="mb-0 font-weight-bold line-height-1" dir='auto'>
                        {courseName}{" "}
                        {/* <img src={flag} alt="" style={{ width: "30px" }} /> */}
                    </p>
                    <p className="mb-0 badge badge-primary float-left">{courseNumber}</p>
                    <p className="badge badge-primary float-right"> {departmentName="במחלקה ללימודי מדבר"} </p>
                    {/* <p className="mb-0 ml-2 badge badge-secondary">{capital}</p> */}
                </div>
            </div>
        </li>
    );
};

export default AutoCompleteItem;