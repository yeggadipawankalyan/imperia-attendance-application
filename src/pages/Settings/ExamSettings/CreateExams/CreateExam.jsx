import React, { useState } from 'react';
import DataTable from '../../../../components/Table/DataTable';
import MyButton from '../../../../components/Button/Button';
import DynamicFormModal from '../../../../components/Modals/ClassModal/DynamicFormModal';
import BackButton from '../../../../components/BackButton/BackButton';
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";


const CreateExam = () => {
  const [showModal, setShowModal] = useState(false);
  const [editingData, setEditingData] = useState(null);
  const [examData, setExamData] = useState([
    { _id: '1', examName: 'Math Final Exam', isActive: true },
    { _id: '2', examName: 'Science Midterm', isActive: false },
    { _id: '3', examName: 'History Quiz', isActive: true },
  ]);

  const handleAddClick = () => {
    setEditingData(null);
    setShowModal(true);
  };

  const handleEdit = (row) => {
    setEditingData(row);
    setShowModal(true);
  };

  const handleFormSubmit = (formData) => {
    if (editingData) {
      setExamData(prev =>
        prev.map(item =>
          item._id === editingData._id ? { ...item, ...formData } : item
        )
      );
    } else {
      setExamData(prev => [
        ...prev,
        { ...formData, _id: Date.now().toString() },
      ]);
    }
    setShowModal(false);
  };

  const handleDelete = (row) => {
    if (window.confirm(`Delete exam "${row.examName}"?`)) {
      setExamData(prev => prev.filter(item => item._id !== row._id));
    }
  };

  const columns = [
    {
      label: 'Exam',
      key: 'examName',
    },
  ];

  const handleActions = (row) => (
    <div className="d-flex gap-2">
      <FaRegEdit
        style={{ cursor: "pointer" }}
        onClick={() => handleEdit(row)}
        title="Edit"
        className="icon-size"
      />
      <RiDeleteBinLine
        style={{ cursor: "pointer" }}
        onClick={() => handleDelete(row)}
        title="Delete"
        className="icon-size"
      />
    </div>
  );

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between mb-2">
        <div className="d-flex align-items-center gap-3">
          <BackButton text="" path="/settings/exam-settings" />
          <h2 className="mb-0 brinavv-color heading">Create Exam</h2>
        </div>
      </div>

      <div className="d-flex justify-content-end mb-2">
        <MyButton active={true} onClick={handleAddClick}>
          Add Exam
        </MyButton>
      </div>

      <DataTable
        columns={columns}
        data={examData}
        actions={handleActions}
      />

      <DynamicFormModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        onSubmit={handleFormSubmit}
        title={editingData ? "Edit Exam" : "Add Exam"}
        submitLabel={editingData ? "Update Exam" : "Add Exam"}
        initialData={editingData}
        fields={[
          {
            name: "examName",
            label: "Name of the Exam",
            type: "text",
            placeholder: "Enter exam name",
            required: true,
          },
          {
            name: "isActive",
            label: "Is Active",
            type: "checkbox",
          },
        ]}
      />
    </div>
  );
};

export default CreateExam;
