import React from 'react'
import MyButton from '../../../../../components/Button/Button';
import DataTable from '../../../../../components/Table/DataTable';

const columns = [
    { label: 'S.No.', key: 'sno' },
    { label: 'Subjects', key: 'subject' },
    { label: 'Max. Internal points', key: 'maxInternal' },
    { label: 'Obtained Internal marks', key: 'obtainedInternal' },
    { label: 'Max. External marks', key: 'maxExternal' },
    { label: 'Obtained External Marks', key: 'obtainedExternal' },
    { label: 'Total marks scored', key: 'totalMarks' },
    { label: 'Grades', key: 'grade' },
    { label: 'Max. Grade points', key: 'maxGradePoints' },
    { label: 'CGPA', key: 'cgpa' },
];

const data = [
    {
        sno: 1, subject: "Telugu", maxInternal: 20, obtainedInternal: 18, maxExternal: 80,
        obtainedExternal: 70, totalMarks: 88, grade: "A", maxGradePoints: 10, cgpa: 9.0
    },
    {
        sno: 2, subject: "Hindi", maxInternal: 20, obtainedInternal: 18, maxExternal: 80,
        obtainedExternal: 70, totalMarks: 88, grade: "A", maxGradePoints: 10, cgpa: 9.0
    },
    {
        sno: 3, subject: "English", maxInternal: 20, obtainedInternal: 18, maxExternal: 80,
        obtainedExternal: 70, totalMarks: 88, grade: "A", maxGradePoints: 10, cgpa: 9.0
    },
    {
        sno: 4, subject: "Maths", maxInternal: 20, obtainedInternal: 18, maxExternal: 80,
        obtainedExternal: 70, totalMarks: 88, grade: "A", maxGradePoints: 10, cgpa: 9.0
    },
    {
        sno: 5, subject: "EVS", maxInternal: 20, obtainedInternal: 18, maxExternal: 80,
        obtainedExternal: 70, totalMarks: 88, grade: "A", maxGradePoints: 10, cgpa: 9.0
    },
    {
        sno: 6, subject: "Social", maxInternal: 20, obtainedInternal: 18, maxExternal: 80,
        obtainedExternal: 70, totalMarks: 88, grade: "A", maxGradePoints: 10, cgpa: 9.0
    },
    {
        sno: "TOTAL", subject: "", maxInternal: 120, obtainedInternal: "NA", maxExternal: 480,
        obtainedExternal: "NA", totalMarks: 600, grade: "NA", maxGradePoints: 10, cgpa: "NA"
    }
];

const StudentResult = () => {
    return (
        <div>
            <h3 className="text-center brinavv-color my-2">Formative Assessment 1</h3>
            <div className="d-flex justify-content-end gap-2">
                <MyButton onClick={() => console.log('Print clicked')} variant="maroon">
                    Print
                </MyButton>
                <MyButton onClick={() => console.log('Download clicked')} variant="maroon">
                    Download
                </MyButton>
            </div>
            <div style={{ lineHeight: '1' }}>
                <p><span className='brinavv-color fw-normal'>Admission. No: </span> <span>1002</span></p>
                <p><span className='brinavv-color fw-normal'>Name: </span> <span>Rahul Raj</span></p>
                <p><span className='brinavv-color fw-normal'>Stream: </span> <span>General</span></p>
                <p><span className='brinavv-color fw-normal'>Section: </span> <span>B</span></p>
                <p><span className='brinavv-color fw-normal'>Roll. No: </span> <span>24</span></p>
            </div>
            <p><span className='brinavv-color fw-medium'>Exam: </span><span className='text-muted fw-medium'>Formative Assessment 1</span></p>

            {/* DataTable */}
            <DataTable columns={columns} data={data} pagination={false} />

            <div style={{ lineHeight: '1' }}>
                <p><span className='brinavv-color fw-normal'>Class Rank: </span> <span>23</span></p>
                <p><span className='brinavv-color fw-normal'>Branch Rank: </span> <span>122</span></p>
                <p><span className='brinavv-color fw-normal'>Remarks: </span> <span>Need to improve</span></p>
            </div>

            <div className='d-flex justify-content-between align-items-center mt-5'>
                <p className='fw-medium'>Parent Sign</p>
                <p className='fw-medium'>Principal Sign</p>
            </div>

        </div>
    )
}

export default StudentResult
