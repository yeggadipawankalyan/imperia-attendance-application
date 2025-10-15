import { useState, useEffect } from "react";
import SlabInputGroup from "../../../../../components/SlabInputGroup/SlabInputGroup";
import MyButton from "../../../../../components/Button/Button";
// import axios from "axios";
import BackButton from "../../../../../components/BackButton/BackButton";

export default function LeaveForm({
  mode = "add",
  initialData = null,
  onSuccess,
}) {
  const [leaveType, setLeaveType] = useState("");
  const [leaveCode, setLeaveCode] = useState("");
  const [creditFrequency, setCreditFrequency] = useState("");
  const [creditValue, setCreditValue] = useState("");
  const [flatLeaveCount, setFlatLeaveCount] = useState("");
  const [slabValues, setSlabValues] = useState({});
  const [leaveBalanceOption, setLeaveBalanceOption] = useState("");
  const [carryForwardCount, setCarryForwardCount] = useState("");
  const [specificCount, setSpecificCount] = useState("");
  const [additionalLeaveOption, setAdditionalLeaveOption] = useState("");
  const [status, setStatus] = useState("active");

  // Slab handler
  const handleSlabChange = (key, value) => {
    setSlabValues((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // Load Initial Data for Edit Mode
  useEffect(() => {
    if (mode === "edit" && initialData) {
      setLeaveType(initialData.leaveType || "");
      setLeaveCode(initialData.leaveCode || "");
      setCreditFrequency(initialData.creditFrequency || "");
      setCreditValue(initialData.creditValue || "");
      setFlatLeaveCount(initialData.flatLeaveCount || "");
      setSlabValues(initialData.slabValues || {});
      setLeaveBalanceOption(initialData.leaveBalanceOption || "");
      setCarryForwardCount(initialData.carryForward?.type || "");
      setSpecificCount(initialData.carryForward?.count || "");
      setAdditionalLeaveOption(initialData.additionalLeaveOption || "");
      setStatus(initialData.status || "active");
    }
  }, [mode, initialData]);

  // Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      leaveType,
      leaveCode,
      creditFrequency,
      creditValue,
      flatLeaveCount: creditValue === "flat" ? flatLeaveCount : null,
      slabValues: creditValue === "slab" ? slabValues : null,
      leaveBalanceOption,
      carryForward:
        leaveBalanceOption === "carryForward"
          ? {
              type: carryForwardCount,
              count: carryForwardCount === "specific" ? specificCount : null,
            }
          : null,
      additionalLeaveOption,
      status,
    };

    try {
      if (mode === "edit") {
        await axios.put(`/api/leaves/${initialData.id}`, payload);
        alert("Leave updated successfully!");
      } else {
        await axios.post("/api/leaves", payload);
        alert("Leave added successfully!");
      }
      if (onSuccess) onSuccess(); // callback for parent to refresh data
    } catch (err) {
      console.error("Error saving leave:", err);
      alert("Something went wrong!");
    }
  };

  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <BackButton
          iconPosition="left"
          path="/settings/hr-settings/leave-management/leaves-groups"
          className="bg-white shadow-lg"
        />
        <h2 className="brinavv-color heading underline-heading">Leave form</h2>
      </div>
      <form onSubmit={handleSubmit}>
        {/* Leave Type */}
        <div className="mb-3 row">
          <label className="col-sm-3 col-form-label text-size text-spacing">
            Leave Type
          </label>
          <div className="col-sm-5">
            <input
              type="text"
              className="form-control input-focus w-50"
              placeholder="Enter leave type"
              value={leaveType}
              onChange={(e) => setLeaveType(e.target.value)}
            />
          </div>
        </div>

        {/* Leave Code */}
        <div className="mb-3 row">
          <label className="col-sm-3 col-form-label text-size text-spacing">
            Leave Code
          </label>
          <div className="col-sm-5">
            <input
              type="text"
              className="form-control input-focus w-50"
              placeholder="Enter leave code"
              value={leaveCode}
              onChange={(e) => setLeaveCode(e.target.value)}
            />
          </div>
        </div>

        {/* Credit Frequency */}
        <div className="mb-3 row">
          <label className="col-sm-3 col-form-label text-size text-spacing">
            Credit Frequency
          </label>
          <div className="col-sm-5">
            <select
              className="form-control input-focus w-50"
              style={{ appearance: "auto" }}
              value={creditFrequency}
              onChange={(e) => setCreditFrequency(e.target.value)}
            >
              <option value="">Select frequency</option>
              <option value="days">Days</option>
              <option value="monthly">Monthly</option>
              <option value="quarterly">Quarterly</option>
              <option value="half-yearly">Half yearly</option>
              <option value="annually">Annually</option>
            </select>
          </div>
        </div>

        {/* Days or Credit Value */}
        {creditFrequency === "days" ? (
          <div className="mb-3 row">
            <label className="col-sm-3 col-form-label text-size text-spacing">
              No. of Days
            </label>
            <div className="col-sm-5">
              <input
                type="number"
                className="form-control input-focus w-50"
                placeholder="Enter no. of days"
                value={flatLeaveCount}
                onChange={(e) => setFlatLeaveCount(e.target.value)}
              />
            </div>
          </div>
        ) : (
          <div className="mb-3 row">
            <label className="col-sm-3 col-form-label text-size text-spacing">
              Credit Value
            </label>
            <div className="col-sm-5">
              <select
                className="form-control input-focus w-50"
                value={creditValue}
                style={{ appearance: "auto" }}
                onChange={(e) => setCreditValue(e.target.value)}
              >
                <option value="">Select type</option>
                <option value="slab">Slab</option>
                <option value="flat">Flat</option>
              </select>
            </div>
          </div>
        )}

        {/* Flat value input */}
        {creditValue === "flat" && (
          <div className="mb-3 row offset-sm-3">
            <label className="col-sm-2 text-nowrap col-form-label text-size text-spacing">
              Leave Count
            </label>
            <div className="col-sm-2">
              <input
                type="number"
                className="form-control input-focus"
                placeholder="Enter leave count"
                value={flatLeaveCount}
                onChange={(e) => setFlatLeaveCount(e.target.value)}
              />
            </div>
          </div>
        )}

        {/* Slab Input */}
        <SlabInputGroup
          frequency={creditFrequency}
          type={creditValue}
          values={slabValues}
          onChange={handleSlabChange}
        />

        {/* Employee leave balance */}
        <div className="my-3 row">
          <div className="col-sm-3 text-size text-spacing">
            Employee leave balance
          </div>
          <div className="col-sm-5">
            <div className="text-size text-spacing">
              Set how to manage employee leave balance during leave reset.
            </div>
            <div className="d-flex gap-5">
              <div className="form-check">
                <input
                  className="form-check-input input-focus"
                  type="radio"
                  name="leaveBalanceOption"
                  checked={leaveBalanceOption === "carryForward"}
                  onChange={() => setLeaveBalanceOption("carryForward")}
                />
                <label className="form-check-label text-size text-spacing">
                  Allow leave carry forward
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input input-focus"
                  type="radio"
                  name="leaveBalanceOption"
                  checked={leaveBalanceOption === "discardBalance"}
                  onChange={() => setLeaveBalanceOption("discardBalance")}
                />
                <label className="form-check-label text-size text-spacing text-nowrap">
                  Discard leave balance
                </label>
              </div>
            </div>

            {leaveBalanceOption === "carryForward" && (
              <>
                <div className="text-size text-spacing mt-2 text-nowrap">
                  Maximum number of leaves that can be carried forward.
                </div>
                <div className="d-flex gap-5">
                  <div className="form-check">
                    <input
                      className="form-check-input input-focus"
                      type="radio"
                      name="carryForwardCount"
                      checked={carryForwardCount === "all"}
                      onChange={() => setCarryForwardCount("all")}
                    />
                    <label className="form-check-label text-size text-spacing text-nowrap">
                      All balance leaves
                    </label>
                  </div>
                  <div className="form-check d-flex gap-2">
                    <input
                      className="form-check-input input-focus"
                      type="radio"
                      name="carryForwardCount"
                      checked={carryForwardCount === "specific"}
                      onChange={() => setCarryForwardCount("specific")}
                    />
                    <label className="form-check-label text-size text-spacing text-nowrap">
                      Specific count
                    </label>
                    {carryForwardCount === "specific" && (
                      <input
                        type="number"
                        className="form-control input-focus ms-2"
                        placeholder="Enter count"
                        style={{ width: "120px" }}
                        value={specificCount}
                        onChange={(e) => setSpecificCount(e.target.value)}
                      />
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Additional Leaves */}
        <div className="mb-3 row">
          <div className="col-sm-3 text-size text-spacing">
            Additional leaves
          </div>
          <div className="col-sm-5">
            <div className="d-flex gap-5">
              <div className="form-check">
                <input
                  className="form-check-input input-focus"
                  type="radio"
                  name="additionalLeaves"
                  checked={additionalLeaveOption === "lop"}
                  onChange={() => setAdditionalLeaveOption("lop")}
                />
                <label className="form-check-label text-size text-spacing text-nowrap">
                  Liable for salary deduction (LOP)
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input input-focus"
                  type="radio"
                  name="additionalLeaves"
                  checked={additionalLeaveOption === "noDeduction"}
                  onChange={() => setAdditionalLeaveOption("noDeduction")}
                />
                <label className="form-check-label text-size text-spacing text-nowrap">
                  No salary deduction
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Status */}
        <div className="mb-3 row">
          <div className="col-sm-3 text-size text-spacing">Status</div>
          <div className="col-sm-5">
            <div className="d-flex gap-5">
              <div className="form-check">
                <input
                  className="form-check-input  input-focus"
                  type="radio"
                  name="status"
                  checked={status === "active"}
                  onChange={() => setStatus("active")}
                />
                <label className="form-check-label text-size text-spacing">
                  Active
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input input-focus"
                  type="radio"
                  name="status"
                  checked={status === "inactive"}
                  onChange={() => setStatus("inactive")}
                />
                <label className="form-check-label text-size text-spacing">
                  Inactive
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="d-flex justify-content-end mb-2">
          <MyButton active={true} type="submit">
            {mode === "edit" ? "Update Leave" : "Add Leave"}
          </MyButton>
        </div>
      </form>
    </>
  );
}
