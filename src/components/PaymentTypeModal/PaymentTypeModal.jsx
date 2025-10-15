import React from 'react';
import { Modal } from 'react-bootstrap';
import { BsCreditCard2Front, BsBank, BsCurrencyRupee } from 'react-icons/bs';
import styles from './PaymentTypeModal.module.css';

const PaymentTypeModal = ({ show, handleClose }) => {
  const methods = [
    {
      icon: BsCreditCard2Front,
      title: 'Credit/Debit Card',
      desc: 'Pay Using Credit Or Debit Card',
    },
    {
      icon: BsBank,
      title: 'Bank Transfer',
      desc: 'Pay Directly From Your Bank Account',
    },
    {
      icon: BsCurrencyRupee,
      title: 'Cash Payment',
      desc: 'Pay Offline in Cash',
    },
  ];

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Select Payment Method</Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-0">
        {methods.map(({ icon: Icon, title, desc }, index) => (
          <div className={styles.modalCard} key={index}>
            <Icon className={styles.icon} />
            <div>
              <div className={styles.cardTitle}>{title}</div>
              <p className={styles.cardText}>{desc}</p>
            </div>
            <div className="ms-auto me-4 fs-4">&gt;</div>
          </div>
        ))}
      </Modal.Body>
    </Modal>
  );
};

export default PaymentTypeModal;

