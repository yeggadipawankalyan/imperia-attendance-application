import React, { useState } from "react";
import BackButton from "../../../../../components/BackButton/BackButton";
import ChipsSwitcher from "../../../../../components/ChipsSwitcher/ChipsSwitcher";
import MyButton from "../../../../../components/Button/Button";
import CustomCheckbox from "../../../../../components/CustomCheckBox/CustomCheckBox";

export default function CreatePayrollCategory() {
  const [categoryType, setCategoryType] = useState("earnings");
  const [valueType, setValueType] = useState("fixed");
  const [formula, setFormula] = useState("");
  const [validationMessage, setValidationMessage] = useState("");
  const [activeTab, setActiveTab] = useState("categories");

  // Example categories for formula variables
  const categoriesList = [
    { name: "Basic Salary", code: "BASIC", type: "earning" },
    { name: "HRA", code: "HRA", type: "earning" },
    { name: "DA", code: "DA", type: "earning" },
    { name: "PF", code: "PF", type: "deduction" },
    { name: "Professional Tax", code: "PT", type: "deduction" },
  ];

  const formulaTabs = [
    { label: "Categories", value: "categories" },
    { label: "How to Create Formula", value: "guide" },
  ];

  // Basic formula validation
  function validateFormula() {
    try {
      if (!formula.trim()) {
        setValidationMessage("⚠️ Formula cannot be empty.");
        return;
      }

      // Allowed variables and operators
      const allowedVars = ["BASIC", "HRA", "DA", "PF"];
      const allowedOps = ["+", "-", "*", "/", ">", "<", "=", "(", ")", ","];

      // Check invalid characters
      const cleaned = formula.replace(/\s+/g, "");
      const regex = /^[A-Za-z0-9+\-*/><=(),. ]+$/;
      if (!regex.test(cleaned)) {
        setValidationMessage("❌ Invalid characters in formula.");
        return;
      }

      // Check for allowed variables
      const tokens = formula.match(/[A-Za-z]+/g) || [];
      for (let token of tokens) {
        if (
          !allowedVars.includes(token.toUpperCase()) &&
          token.toUpperCase() !== "IF"
        ) {
          setValidationMessage(`❌ Unknown variable: ${token}`);
          return;
        }
      }

      setValidationMessage("✅ Formula is valid!");
    } catch (err) {
      setValidationMessage("❌ Error validating formula.");
    }
  }

  return (
    <>
      <div className="d-flex gap-3 mb-3">
        <BackButton
          iconPosition="left"
          path="/settings/hr-settings/payroll-management/payroll-category"
          className="bg-white shadow-lg"
        />
        <h2 className="brinavv-color heading underline-heading">
          Create category
        </h2>
      </div>

      {/* Category Name */}
      <div className="mb-3 row">
        <label className="col-sm-3 col-form-label text-size text-spacing">
          Category Name
        </label>
        <div className="col-sm-5">
          <input
            type="text"
            className="form-control input-focus w-50"
            placeholder="Enter category name"
          />
        </div>
      </div>

      {/* Category Code */}
      <div className="mb-3 row">
        <label className="col-sm-3 col-form-label text-size text-spacing">
          Category Code
        </label>
        <div className="col-sm-5">
          <input
            type="text"
            className="form-control input-focus w-50"
            placeholder="Enter category code"
          />
        </div>
      </div>

      {/* Category Type */}
      <div className="mb-3 row">
        <div className="col-sm-3 text-size text-spacing">Category Type</div>
        <div className="col-sm-5">
          <div className="d-flex gap-5">
            <div className="form-check">
              <input
                className="form-check-input input-focus"
                type="radio"
                name="categoryType"
                value="earnings"
                checked={categoryType === "earnings"}
                onChange={(e) => setCategoryType(e.target.value)}
              />
              <label className="form-check-label text-size text-spacing text-nowrap">
                Earnings
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input input-focus"
                type="radio"
                name="categoryType"
                value="deductions"
                checked={categoryType === "deductions"}
                onChange={(e) => setCategoryType(e.target.value)}
              />
              <label className="form-check-label text-size text-spacing text-nowrap">
                Deductions
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Category Value Type */}
      <div className="mb-3 row">
        <div className="col-sm-3 text-size text-spacing">
          Category Value Type
        </div>
        <div className="col-sm-5">
          <div className="d-flex gap-5">
            <div className="form-check">
              <input
                className="form-check-input input-focus"
                type="radio"
                name="valueType"
                value="fixed"
                checked={valueType === "fixed"}
                onChange={(e) => setValueType(e.target.value)}
              />
              <label className="form-check-label text-size text-spacing text-nowrap">
                Fixed Amount
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input input-focus"
                type="radio"
                name="valueType"
                value="formula"
                checked={valueType === "formula"}
                onChange={(e) => setValueType(e.target.value)}
              />
              <label className="form-check-label text-size text-spacing text-nowrap">
                Custom Formula
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Conditional Rendering */}
      {valueType === "fixed" ? (
        <div className="mb-3 row">
          <label className="col-sm-3 col-form-label text-size text-spacing">
            Enter Fixed Amount
          </label>
          <div className="col-sm-5">
            <input
              type="number"
              className="form-control input-focus w-50"
              placeholder="Enter amount"
            />
          </div>
        </div>
      ) : (
        <div className="row">
          {/* Left Side - Formula Input */}
          <div className="col-sm-6">
            <label className="form-label text-size text-spacing">
              Enter Custom Formula
            </label>
            <textarea
              className="form-control input-focus "
              rows="4"
              placeholder="e.g., IF(BASIC > 30000, BASIC*0.2, BASIC*0.1)"
              value={formula}
              onChange={(e) => setFormula(e.target.value)}
            ></textarea>
            <div className="d-flex justify-content-end mt-2">
              <MyButton active={true} onClick={validateFormula}>
                Validate
              </MyButton>
            </div>
            {validationMessage && (
              <div className="mt-2 text-size text-spacing">
                {validationMessage}
              </div>
            )}
          </div>

          {/* Right Side - Tabs */}
          <div className="col-sm-6">
            <ChipsSwitcher
              tabs={formulaTabs}
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />

            <div
              className="tab-content border p-3 text-size text-spacing rounded-3 mt-2 overflow-y-auto"
              style={{ height: "200px" }}
            >
              {activeTab === "categories" ? (
                <div>
                  <h6>Earnings</h6>
                  <ul>
                    {categoriesList
                      .filter((cat) => cat.type === "earning")
                      .map((cat) => (
                        <li key={cat.code}>
                          {cat.name} ({cat.code})
                        </li>
                      ))}
                  </ul>

                  <h6 className="mt-3">Deductions</h6>
                  <ul>
                    {categoriesList
                      .filter((cat) => cat.type === "deduction")
                      .map((cat) => (
                        <li key={cat.code}>
                          {cat.name} ({cat.code})
                        </li>
                      ))}
                  </ul>
                </div>
              ) : (
                <div>
                  <h6>How to Create Formulas</h6>
                  <p>
                    <strong>Select Method:</strong> Fixed, Percentage, or
                    Formula.
                  </p>
                  <p>
                    <strong>Use Variables:</strong> Basic, DA, HRA, PF.
                  </p>
                  <p>
                    <strong>Allowed Operators:</strong> +, -, *, /, &gt;, &lt;,
                    =.
                  </p>
                  <p>
                    <strong>Conditional:</strong> Use IF(condition, true,
                    false).
                  </p>
                  <p>
                    <strong>Example:</strong> IF(BASIC &gt; 30000, BASIC*0.2,
                    BASIC*0.1)
                  </p>
                  <h6>💡 Tips</h6>
                  <ul>
                    <li>Use decimals for percentages (20% = 0.20).</li>
                    <li>
                      You can click buttons in the wizard to build formulas
                      easily.
                    </li>
                    <li>Always check preview before saving.</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      <div className="mb-3 row">
        <div className="col-sm-3 text-size text-spacing">
          Calculate based on actual working days
        </div>
        <div className="col-sm-5">
          <CustomCheckbox />
        </div>
      </div>
    </>
  );
}
