import MyButton from "../../components/Button/Button";
import "./driverForm.scss";
import { useState } from "react";
import DatePicker from "react-datepicker";
// import { FiCalendar } from "react-icons/fi";
import "react-datepicker/dist/react-datepicker.css";
import CustomDateInput from "../../components/CustomDateInput/CustomDateInput";

// ✅ Custom Date Input Component
// const CustomDateInput = forwardRef(({ value, onClick, placeholder }, ref) => (
//   <div style={{ position: "relative" }}>
//     <input
//       type="text"
//       className="form-control"
//       onClick={onClick}
//       ref={ref}
//       value={value}
//       placeholder={placeholder}
//       readOnly
//       style={{ paddingRight: "2.5rem" }}
//     />
//     <FiCalendar
//       style={{
//         position: "absolute",
//         right: "10px",
//         fontSize: "1.4rem",
//         top: "50%",
//         transform: "translateY(-50%)",
//         color: "#555",
//         pointerEvents: "none",
//       }}
//     />
//   </div>
// ));



export default function DriverForm() {
const [dob, setDob] = useState(null);
const [licenseIssueDate, setLicenseIssueDate] = useState(null);
const [licenseExpiryDate, setLicenseExpiryDate] = useState(null);
const [licenseType, setLicenseType] = useState('');
const [vehicle, setVehicle] = useState('');
const [route, setRoute] = useState('');


const licenseOptions = ['Select', 'License Type 1', 'License Type 2'];
const vehicleOptions = ['Select', 'Vehicle 1', 'Vehicle 2'];
const routeOptions = ['Select', 'Route 1', 'Route 2'];

  return (
    <>
        <div className="driverForm container-fluid">
            <h3 className="brinavv-color">Add Driver Form</h3>
            <div className="driverFormContainer d-flex flex-column gap-3">
                {/* Personal details */}
                <div className="personalDetails">
                    <div className="row align-items-start">
                      <div className="col-12 col-lg-3">
                        <h5 className="formCitle">Personal Details</h5>
                        <p className="titleCaption">Must fill the Employee Details correctly</p>
                      </div>
                      <div className="col-12 col-lg-6">
                        <div className="row">
                          <div className="col-12 col-lg-6 mb-2">
                            <label htmlFor="driverName" className="labelTitle">Driver Name</label>
                            <input
                                type="text"
                                className="form-control shadow-none"
                                placeholder="Enter"
                            />
                          </div>
                          <div className="col-12 col-lg-6 mb-2">
                            <label htmlFor="driverName" className="labelTitle">Bus Name / Code</label>
                            <input
                                type="text"
                                className="form-control  shadow-none "
                                placeholder="Enter"
                            />
                          </div>
                          <div className="col-12 col-lg-6">
                            <label htmlFor="dob" className="labelTitle">Date of Birth *</label>
                            <DatePicker
                              id="dob"
                              selected={dob}
                              onChange={(date) => setDob(date)}
                              placeholderText="Enter"
                              customInput={<CustomDateInput />}
                            />
                          </div>

                          <div className="col-12 col-lg-6 mb-2">
                            {/* <label htmlFor="driverName" className="labelTitle">Driver Name</label>
                            <input
                                type="text"
                                className="form-control  shadow-none "
                                placeholder="Enter"
                            /> */}
                          </div>
                          <div className="col-12 col-lg-6 mb-2">
                            <label htmlFor="driverName" className="labelTitle">Contact Number</label>
                            <input
                                type="text"
                                className="form-control  shadow-none "
                                placeholder="Enter"
                            />
                          </div>
                          <div className="col-12 col-lg-6 mb-2">
                            <label htmlFor="driverName" className="labelTitle">Alternate Contact Number</label>
                            <input
                                type="text"
                                className="form-control  shadow-none "
                                placeholder="Enter"
                            />
                          </div>
                          <div className="col-12 col-lg-6 mb-2">
                            <label htmlFor="driverName" className="labelTitle">Email Id</label>
                            <input
                                type="text"
                                className="form-control  shadow-none "
                                placeholder="Enter"
                            />
                          </div>
                          <div className="col-12 col-lg-6 mb-2">
                            <label htmlFor="driverName" className="labelTitle">Alternate Email Id</label>
                            <input
                                type="text"
                                className="form-control  shadow-none "
                                placeholder="Enter"
                            />
                          </div>
                          <div className="col-12 col-lg-6 mb-2">
                            <label htmlFor="driverName" className="labelTitle">Address</label>
                            <input
                                type="text"
                                className="form-control  shadow-none "
                                placeholder="Enter"
                            />
                          </div>
                          <div className="col-12 col-lg-6">
                            {/* <label htmlFor="driverName" className="labelTitle">Driver Name</label>
                            <input
                                type="text"
                                className="form-control  shadow-none "
                                placeholder="Enter"
                            /> */}
                          </div>
                          <div className="col-12 col-lg-6">
                            <label htmlFor="driverName" className="labelTitle">Emergency Contact Number</label>
                            <input
                                type="text"
                                className="form-control  shadow-none "
                                placeholder="Enter"
                            />
                          </div>
                          <div className="col-12 col-lg-6">
                            <label htmlFor="driverName" className="labelTitle">Number</label>
                            <input
                                type="text"
                                className="form-control  shadow-none "
                                placeholder="Enter"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                </div>

                {/* License & Compliance */}
                <div className="personalDetails">
                    <div className="row align-items-start">
                      <div className="col-12 col-lg-3">
                        <h5 className="formCitle">License & Compliance</h5>
                        <p className="titleCaption">Must fill the Employee Details correctly</p>
                      </div>
                      <div className="col-12 col-lg-6">
                        <div className="row">
                          <div className="col-12 col-lg-6 mb-2">
                            <label htmlFor="driverName" className="labelTitle">License Number</label>
                            <input
                                type="text"
                                className="form-control shadow-none "
                                placeholder="Enter"
                            />
                          </div>
                          <div className="col-12 col-lg-6 mb-2">
                            <label htmlFor="LicenseType" className="labelTitle">License Type</label>
                            <select
                                className="form-select"
                                value={licenseType}
                                onChange={(e) => setLicenseType(e.target.value)}
                            >
                                {licenseOptions.map((option, idx) => (
                                    <option key={idx} value={option === 'Select' ? '' : option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                          </div>
                          <div className="col-12 col-lg-6">
                            <label htmlFor="licenseIssueDate" className="labelTitle">License Issue Date</label>
                            <DatePicker
                              id="licenseIssueDate"
                              selected={licenseIssueDate}
                              onChange={(date) => SetLicenseIssueDate(date)}
                              placeholderText="Enter"
                              customInput={<CustomDateInput />}
                            />
                          </div>
                          <div className="col-12 col-lg-6">
                            <label htmlFor="licenseExpiryDate" className="labelTitle">License Expiry Date</label>
                            <DatePicker
                              id="licenseExpiryDate"
                              selected={licenseExpiryDate}
                              onChange={(date) => SetLicenseExpiryDate(date)}
                              placeholderText="Enter"
                              customInput={<CustomDateInput />}
                            />
                          </div>
                          <div className="col-12 col-lg-6 mb-2">
                            <label  className="labelTitle">Aadhaar / ID Proof Upload</label>
                            <input
                                type="text"
                                className="form-control shadow-none "
                                placeholder="Enter"
                            />
                          </div>
                          <div className="col-12 col-lg-6 mb-2">
                            <label  className="labelTitle">License Number</label>
                            <input
                                type="text"
                                className="form-control shadow-none "
                                placeholder="Enter"
                            />
                          </div>
                          <div className="col-12 col-lg-6 mb-2">
                            <label  className="labelTitle">Police Verifcation Certification Upload</label>
                            <input
                                type="text"
                                className="form-control shadow-none "
                                placeholder="Enter"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                </div>

                {/* Assignment  */}
                <div className="personalDetails">
                    <div className="row align-items-start">
                      <div className="col-12 col-lg-3">
                        <h5 className="formCitle">Assignment</h5>
                        <p className="titleCaption">Must fill the Employee Details correctly</p>
                      </div>
                      <div className="col-12 col-lg-6">
                        <div className="row">
                          <div className="col-12 col-lg-6 mb-2">
                            <label htmlFor="LicenseType" className="labelTitle">Assigned Vehicle</label>
                            <select
                                className="form-select"
                                value={licenseType}
                                onChange={(e) => setLicenseType(e.target.value)}
                            >
                                {vehicleOptions.map((option, idx) => (
                                    <option key={idx} value={option === 'Select' ? '' : option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                          </div>
                          <div className="col-12 col-lg-6 mb-2">
                            <label htmlFor="LicenseType" className="labelTitle">Assigned Route</label>
                            <select
                                className="form-select"
                                value={licenseType}
                                onChange={(e) => setLicenseType(e.target.value)}
                            >
                                {routeOptions.map((option, idx) => (
                                    <option key={idx} value={option === 'Select' ? '' : option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
                {/* additional Information */}
                <div className="personalDetails">
                    <div className="row align-items-start">
                      <div className="col-12 col-lg-3">
                        <h5 className="formCitle">Additional Information</h5>
                        <p className="titleCaption">Must fill the Employee Details correctly</p>
                      </div>
                      <div className="col-12 col-lg-6">
                        <div className="row">
                          <div className="col-12 col-lg-6 mb-2">
                            <label className="labelTitle">Year of Experience</label>
                            <input
                                type="text"
                                className="form-control shadow-none "
                                placeholder="Enter"
                            />
                          </div>
                          <div className="col-12 mb-2">
                            <label className="labelTitle">Remarks</label>
                            <textarea 
                              name="textarea"
                              className="form-control shadow-none"
                              placeholder="Enter"
                              rows="3"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
                {/* Button */}
                <div className="driverFormButton d-flex justify-content-start gap-3">
                    <MyButton
                      className="btn btn-secondary">
                      Clear All
                    </MyButton>
                     <MyButton 
                      active={true}
                      >Save & Proceed
                      </MyButton>  
                </div>
            </div>
        </div>
    </>
  );
}
