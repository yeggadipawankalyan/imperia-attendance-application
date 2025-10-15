import React from 'react';

const SubjectCard = ({ subject, lessons, topics, hours, onViewMore }) => {
  return (
    <div className="card rounded-4 shadow-sm text-center h-100">
      <div className="card-header bg-light border-bottom-0 rounded-top-4 brinavv-color fw-semibold">
        {subject}
      </div>
      <div className="card-body py-3 px-3 text-start">
        <div className="d-flex justify-content-between mb-2">
          <span className="brinavv-color">Lessons</span>
          <span>{lessons}</span>
        </div>
        <div className="d-flex justify-content-between mb-2">
          <span className="brinavv-color">Topics</span>
          <span>{topics}</span>
        </div>
        <div className="d-flex justify-content-between mb-3">
          <span className="brinavv-color">Hrs Required</span>
          <span>{hours}</span>
        </div>
        <div className="text-end">
          <button onClick={onViewMore} className="btn btn-link text-primary text-decoration-none small p-0">
            View more &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubjectCard;
