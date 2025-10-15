import { useState, useEffect } from "react";
import CustomCheckbox from "../CustomCheckBox/CustomCheckBox";
import "./SelectionCard.css";
import CustomRadio from "../CustomRadio/CustomRadio";
// import CustomRadio from "../CustomRadio/CustomRadio";

export default function SelectionCard({
  title = "Selection",
  data = [],
  type = "checkbox", // "checkbox" or "radio"
  selected = [],
  onChange = () => {},
  name = "selection",
}) {
  const [selectedItems, setSelectedItems] = useState(selected);

  useEffect(() => {
    onChange(selectedItems);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedItems]);

  const handleSelect = (item) => {
    if (type === "checkbox") {
      if (selectedItems.includes(item)) {
        setSelectedItems(selectedItems.filter((i) => i !== item));
      } else {
        setSelectedItems([...selectedItems, item]);
      }
    } else {
      setSelectedItems([item]);
    }
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedItems(data.map((item) => item.value));
    } else {
      setSelectedItems([]);
    }
  };

  return (
    <div className="card custom-border rounded-3 shadow-sm  mb-3 selection-card-custom-width">
      <div className="d-flex justify-content-between align-items-center py-2 px-2 ">
        <h5 className="mb-0 text-spacing heading">
          {title}({data.length})
        </h5>

        {type === "checkbox" && data.length > 0 && (
          <div className="form-check m-0">
            <CustomCheckbox
              name={`selectAll-${name}`}
              checked={selectedItems.length === data.length}
              onChange={handleSelectAll}
            />
            {/* <label className="form-check-label" htmlFor={`selectAll-${name}`}>
                Select All
              </label> */}
          </div>
        )}
      </div>

      <div className="">
        {/* eslint-disable-next-line no-unused-vars */}
        {data.map((item, index) => (
          <label
            key={item.value}
            className="list-group-item d-flex align-items-center justify-content-between gap-2 py-2 px-2 custom-border border-top "
          >
            <span className="text-size">{item.label}</span>
            {type === "checkbox" ? <CustomCheckbox
              name={name}
              checked={selectedItems.includes(item.value)}
              onChange={() => handleSelect(item.value)}
            /> : <CustomRadio
    key={item.value}
    name={name}
    value={item.value}
    checked={selectedItems.includes(item.value)}
    onChange={() => handleSelect(item.value)}
  />}
          </label>
        ))}
      </div>
    </div>
  );
}
