import { useState } from "react";

function FavoriteColorSelector() {
  const colors = ["Red", "Blue", "Green", "Yellow", "Pink"];

  const [selectColor, setColor] =
    useState();
    // localStorage.getItem("favoriteColor") || ""

  const handleColorChange = (e) => {
    e.preventDefault();
    const color = e.target.value;
    setColor(color);
    // localStorage.setItem("favoriteColor", color);
  };

  return (
    <>
      <label style={{ margin: "10px", fontSize: "20px" }}>
        Favorite Color Selector
      </label>
      <select onChange={handleColorChange} value={selectColor}>
        <option value=""> Select Color</option>

        {colors.map((color) => (
          <option key={color} value={color}>
            {color}
          </option>
        ))}
      </select>

      <div>
        {selectColor ? (
          <div
            style={{
              backgroundColor: selectColor.toLowerCase(),
              padding: "20px",
              fontSize: "20px",
              width: "30%",
              border: "1px solid",
              borderRadius: "5px",
              marginTop: "10px",
              textAlign: "center",
            }}
          >
            {selectColor}
          </div>
        ) : (
          <p style={{ margin: "10px" }}>Please select your favorite color</p>
        )}
      </div>
    </>
  );
}
export default FavoriteColorSelector;
