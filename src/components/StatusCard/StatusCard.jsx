import React from 'react'
import styles from './StatusCard.module.css';

const StatusCard = ({ title, amount, textAlign = 'start' }) => {
  const alignmentClass = {
    start: 'text-start',
    center: 'text-center',
    end: 'text-end',
  }[textAlign] || 'text-start';

  return (
    <div className="col-12 col-md-3 mb-3">
      <div className={`d-flex justify-content-between align-items-center p-3 ${styles.card}`}>
        <div className={`w-100 ${alignmentClass}`}>
          <div className="text-muted small">{title}</div>
          <div className="fw-bold fs-4">{amount.toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
}

export default StatusCard
