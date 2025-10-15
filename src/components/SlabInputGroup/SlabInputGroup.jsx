import { useState, useEffect } from "react";

export default function SlabInputGroup({ frequency, type, values = {}, onChange }) {
  const [localValues, setLocalValues] = useState({});

  useEffect(() => {
    setLocalValues(values || {});
  }, [values]);

  const handleChange = (key, value) => {
    const updated = { ...localValues, [key]: value };
    setLocalValues(updated);
    onChange(key, value);
  };

  const getLabels = () => {
    if (frequency === "monthly" && type === "slab") {
      return [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December",
      ];
    }
    if (frequency === "quarterly" && type === "slab") {
      return ["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"];
    }
    if (frequency === "half-yearly" && type === "slab") {
      return ["First Half", "Second Half"];
    }
    if (frequency === "annually" && type === "slab") {
      return ["Yearly"];
    }
    return [];
  };

  const labels = getLabels();
  if (!labels.length) return null;

  const splitIndex =
    frequency === "monthly" ? 6 :
    frequency === "quarterly" ? 2 :
    frequency === "half-yearly" ? 1 :
    1;

  return (
    <div className="mt-3 offset-sm-3">
      <div className="text-size text-spacing fw-semibold">Leave count</div>
      <div className="row mb-2">
        {labels.slice(0, splitIndex).map((label, index) => (
          <div className="col-sm-2 mb-2" key={index}>
            <label className="form-label text-size text-spacing">{label}</label>
            <input
              type="number"
              className="form-control input-focus"
              placeholder={`Enter ${label}`}
              value={localValues[label] || ""}
              onChange={(e) => handleChange(label, e.target.value)}
            />
          </div>
        ))}
      </div>

      {labels.length > splitIndex && (
        <div className="row">
          {labels.slice(splitIndex).map((label, index) => (
            <div className="col-sm-2 mb-2" key={index + splitIndex}>
              <label className="form-label">{label}</label>
              <input
                type="number"
                className="form-control input-focus"
                placeholder={`Enter ${label}`}
                value={localValues[label] || ""}
                onChange={(e) => handleChange(label, e.target.value)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
