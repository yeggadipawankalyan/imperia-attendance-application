import { useState } from "react";
import DataTable from "../../../../components/Table/DataTable";
import MyButton from "../../../../components/Button/Button";
import { Modal, Form } from "react-bootstrap";
import BackButton from "../../../../components/BackButton/BackButton";

const initialPeriods = [
  { id: 1, name: "Period 1", start: "10:00 AM", end: "11:00 AM", isBreak: false },
  { id: 2, name: "Period 2", start: "11:00 AM", end: "12:00 PM", isBreak: false },
  { id: 3, name: "Period 3", start: "12:00 PM", end: "01:00 PM", isBreak: false },
  { id: 4, name: "Lunch", start: "01:00 PM", end: "02:00 PM", isBreak: true },
  { id: 5, name: "Period 4", start: "02:00 PM", end: "03:00 PM", isBreak: false },
  { id: 6, name: "Period 5", start: "03:00 PM", end: "04:00 PM", isBreak: false },
];

const hourOptions = Array.from({ length: 12 }, (_, i) => String(i+1).padStart(2, '0'));
const minuteOptions = Array.from({ length: 12 }, (_, i) => String(i*5).padStart(2, '0'));
const ampmOptions = [ 'AM', 'PM' ];

function parseTime(str) {
  if (!str) return { hour: "10", minute: "00", ampm: "AM" };
  const [time, ampm] = str.split(' ');
  const [hour, minute] = time.split(':');
  return { hour: hour.padStart(2, '0'), minute, ampm };
}

export default function ManageClassTimings() {
  const [periods, setPeriods] = useState(initialPeriods);
  const [showModal, setShowModal] = useState(false);
  const [editingPeriod, setEditingPeriod] = useState(null);
  const [form, setForm] = useState({
    name: '',
    startHour: '10',
    startMinute: '00',
    startAMPM: 'AM',
    endHour: '10',
    endMinute: '00',
    endAMPM: 'AM',
    isBreak: false,
  });

  // Add state for the top input boxes
  const [topInputs, setTopInputs] = useState({
    startHour: '10',
    startMinute: '00',
    startAMPM: 'AM',
    endHour: '10',
    endMinute: '00',
    endAMPM: 'AM',
    numPeriods: '',
    eachPeriod: '',
    lunch: '',
  });

  const handleTopInputChange = (e) => {
    const { name, value } = e.target;
    setTopInputs((prev) => ({ ...prev, [name]: value }));
  };

  const columns = [
    { label: "Name", key: "name" },
    { label: "Start time", key: "start" },
    { label: "End time", key: "end" },
  ];

  const openModal = (period = null) => {
    if (period) {
      const s = parseTime(period.start);
      const e = parseTime(period.end);
      setForm({
        name: period.name,
        startHour: s.hour,
        startMinute: s.minute,
        startAMPM: s.ampm,
        endHour: e.hour,
        endMinute: e.minute,
        endAMPM: e.ampm,
        isBreak: period.isBreak || false,
      });
      setEditingPeriod(period);
    } else {
      setForm({
        name: '',
        startHour: '10',
        startMinute: '00',
        startAMPM: 'AM',
        endHour: '10',
        endMinute: '00',
        endAMPM: 'AM',
        isBreak: false,
      });
      setEditingPeriod(null);
    }
    setShowModal(true);
  };

  const handleEdit = (row) => openModal(row);
  const handleDelete = (id) => setPeriods(periods.filter((p) => p.id !== id));
  const handleActions = (row) => (
    <>
      <span style={{ color: "brown", cursor: "pointer", marginRight: 8 }} onClick={() => handleEdit(row)}>Edit</span>
      /
      <span style={{ color: "brown", cursor: "pointer", marginLeft: 8 }} onClick={() => handleDelete(row.id)}>Delete</span>
    </>
  );

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleModalSubmit = (e) => {
    e.preventDefault();
    const start = `${form.startHour}:${form.startMinute} ${form.startAMPM}`;
    const end = `${form.endHour}:${form.endMinute} ${form.endAMPM}`;
    const periodData = {
      name: form.name,
      start,
      end,
      isBreak: form.isBreak || false,
    };
    if (editingPeriod) {
      setPeriods(periods.map((p) => (p.id === editingPeriod.id ? { ...p, ...periodData } : p)));
    } else {
      setPeriods([
        ...periods,
        { ...periodData, id: Date.now() },
      ]);
    }
    setShowModal(false);
    setEditingPeriod(null);
  };

  return (
    <div>
      {/* <h2 className="mb-2 brinavv-color underline-heading heading">Manage class timings</h2> */}
      <div className="d-flex gap-3">
      <BackButton iconPosition="left" path="/settings/academics/manage-time-table" className="bg-white shadow-lg"/>
      <h2 className="brinavv-color heading underline-heading">
        Manage class timings
      </h2>
    </div>
      {/* Top input boxes row */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 32,
          marginBottom: 24,
          alignItems: 'center',
          paddingLeft: 8,
          paddingRight: 8,
        }}
      >
        {/* Start Time */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ minWidth: 80, fontWeight: 500 }}>Start Time</span>
          <select name="startHour" value={topInputs.startHour} onChange={handleTopInputChange} style={{ width: 60, fontSize: 16, height: 36, borderRadius: 6, border: '1px solid #ccc' }}>
            {hourOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
          </select>
          <span>:</span>
          <select name="startMinute" value={topInputs.startMinute} onChange={handleTopInputChange} style={{ width: 60, fontSize: 16, height: 36, borderRadius: 6, border: '1px solid #ccc' }}>
            {minuteOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
          </select>
          <select name="startAMPM" value={topInputs.startAMPM} onChange={handleTopInputChange} style={{ width: 70, fontSize: 16, height: 36, marginLeft: 4, borderRadius: 6, border: '1px solid #ccc' }}>
            {ampmOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
          </select>
        </div>
        {/* End Time */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ minWidth: 70, fontWeight: 500 }}>End Time</span>
          <select name="endHour" value={topInputs.endHour} onChange={handleTopInputChange} style={{ width: 60, fontSize: 16, height: 36, borderRadius: 6, border: '1px solid #ccc' }}>
            {hourOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
          </select>
          <span>:</span>
          <select name="endMinute" value={topInputs.endMinute} onChange={handleTopInputChange} style={{ width: 60, fontSize: 16, height: 36, borderRadius: 6, border: '1px solid #ccc' }}>
            {minuteOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
          </select>
          <select name="endAMPM" value={topInputs.endAMPM} onChange={handleTopInputChange} style={{ width: 70, fontSize: 16, height: 36, marginLeft: 4, borderRadius: 6, border: '1px solid #ccc' }}>
            {ampmOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
          </select>
        </div>
        <br />
        {/* No of Periods */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ minWidth: 100, fontWeight: 500 }}>No of Periods</span>
          <input
            type="number"
            name="numPeriods"
            value={topInputs.numPeriods}
            onChange={handleTopInputChange}
            placeholder="No of Periods"
            style={{ width: 130, height: 36, fontSize: 16, paddingLeft: 8, borderRadius: 6, border: '1px solid #ccc' }}
          />
        </div>
        {/* Each Period */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ minWidth: 90, fontWeight: 500 }}>Each Period</span>
          <input
            type="text"
            name="eachPeriod"
            value={topInputs.eachPeriod}
            onChange={handleTopInputChange}
            placeholder="Each Period"
            style={{ width: 120, height: 36, fontSize: 16, paddingLeft: 8, borderRadius: 6, border: '1px solid #ccc' }}
          />
        </div>
        {/* Lunch */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ minWidth: 60, fontWeight: 500 }}>Lunch</span>
          <input
            type="text"
            name="lunch"
            value={topInputs.lunch}
            onChange={handleTopInputChange}
            placeholder="Lunch"
            style={{ width: 120, height: 36, fontSize: 16, paddingLeft: 8, borderRadius: 6, border: '1px solid #ccc' }}
          />
        </div>
      </div>
      {/* <div className="d-flex justify-content-end mb-2">
        <MyButton active={true} onClick={() => openModal()}>
          Add New Class Timing
        </MyButton>
      </div> */}
       {/* <div className="mb-3">
        <span>Class timing set name: <b>Timetable</b> <span style={{ color: "brown", cursor: "pointer" }}>Edit</span></span>
      </div> */}
      <DataTable
        columns={columns}
        data={periods}
        actions={handleActions}
      />
      <Modal show={showModal} onHide={() => setShowModal(false)} centered contentClassName="rounded-4 overflow-hidden">
        <Form onSubmit={handleModalSubmit}>
          <Modal.Header closeButton className="primary-bg-color border-0 bb">
            <Modal.Title className="heading brinavv-color">
              {editingPeriod ? "Edit Class Timing For Timetable" : "Add New Class Timing For Timetable"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3 d-flex align-items-center">
              <Form.Label className="text-nowrap text w-25 mb-0">Name</Form.Label>
              <div className="w-75">
                <Form.Control
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Period 1"
                />
              </div>
            </Form.Group>
            <Form.Group className="mb-3 d-flex align-items-center">
              <Form.Label className="text-nowrap text w-25 mb-0">Start Time</Form.Label>
              <div className="w-75" style={{ display: "flex", gap: 12, alignItems: "center", minWidth: 250 }}>
                <Form.Select name="startHour" value={form.startHour} onChange={handleChange} required style={{ width: 80, fontSize: 16, height: 48 }}>
                  {hourOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </Form.Select>
                <span style={{ fontSize: 20 }}>: </span>
                <Form.Select name="startMinute" value={form.startMinute} onChange={handleChange} required style={{ width: 80, fontSize: 16, height: 48 }}>
                  {minuteOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </Form.Select>
                <Form.Select name="startAMPM" value={form.startAMPM} onChange={handleChange} required style={{ width: 90, fontSize: 16, height: 48, marginLeft: 8 }}>
                  {ampmOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </Form.Select>
              </div>
            </Form.Group>
            <Form.Group className="mb-3 d-flex align-items-center">
              <Form.Label className="text-nowrap text w-25 mb-0">End Time</Form.Label>
              <div className="w-75" style={{ display: "flex", gap: 12, alignItems: "center", minWidth: 250 }}>
                <Form.Select name="endHour" value={form.endHour} onChange={handleChange} required style={{ width: 80, fontSize: 16, height: 48 }}>
                  {hourOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </Form.Select>
                <span style={{ fontSize: 20 }}>: </span>
                <Form.Select name="endMinute" value={form.endMinute} onChange={handleChange} required style={{ width: 80, fontSize: 16, height: 48 }}>
                  {minuteOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </Form.Select>
                <Form.Select name="endAMPM" value={form.endAMPM} onChange={handleChange} required style={{ width: 90, fontSize: 16, height: 48, marginLeft: 8 }}>
                  {ampmOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </Form.Select>
              </div>
            </Form.Group>
            <Form.Group className="mb-3 d-flex align-items-center">
              <Form.Label className="text-nowrap text w-25 mb-0">Is a break</Form.Label>
              <input
                type="checkbox"
                name="isBreak"
                checked={form.isBreak}
                onChange={handleChange}
                style={{
                  boxShadow: 'none',
                  outline: 'none',
                  border: '1.5px solid #bdbdbd',
                  background: 'none',
                  width: 18,
                  height: 18,
                  marginLeft: 0,
                  accentColor: 'blue',
                  cursor: 'pointer'
                }}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer className="bt">
            <MyButton active={true} type="submit">
              {editingPeriod ? "Update" : "Submit"}
            </MyButton>
          </Modal.Footer>
        </Form>
      </Modal>
      <div className="mt-4">
        <MyButton active={true} style={{ width: "100%", background: "#800000" }}>Update</MyButton>
      </div>
    </div>
  );
}