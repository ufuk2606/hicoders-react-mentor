import React from "react";
const SelectZone = ({ setZone, countries }) => {
  return (
    <div className="content-container">
      {/* select goes here  */}
      <h2
        style={{
          backgroundColor: "blue",
          color: "white",
          padding:"20px 100px",
          borderRadius: "50px",
        }}
      >
        World Clock
      </h2>
      <select
        data-testid="select-element"
        onChange={(e) => {
          setZone(e.target.value);
        }}
        style={{
          width: "200px",
          height: "70px",
          border: "1px black solid",
          backgroundColor: "white",
          borderRadius: "5px",
        }}
      >
        {countries.map((country) => (
          <option value={country.zone}>
            {country.capital}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectZone;
