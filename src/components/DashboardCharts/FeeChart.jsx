import React, { useState } from 'react';
import './dashboardCharts.scss';
import MyButton from '../../components/Button/Button';
import { MdOutlineInfo } from 'react-icons/md';
import { FaLongArrowAltUp } from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from 'recharts';

// Reusable LineChart Component
const FeeChart = ({ data, title, activePeriod, onPeriodChange }) => {

  return (
    <div
      className="lineChart">
      <div className="chart-content">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5>{title} <MdOutlineInfo /></h5>
          <div className="buttonsGrid d-flex gap-2">
            <MyButton
              active={activePeriod === '1M'}
              onClick={() => onPeriodChange('1M')}
            >
              1M
            </MyButton>
            <MyButton
              active={activePeriod === '3M'}
              onClick={() => onPeriodChange('3M')}
            >
              3M
            </MyButton>
            <MyButton
              active={activePeriod === '6M'}
              onClick={() => onPeriodChange('6M')}
            >
              6M
            </MyButton>
            <MyButton
              active={activePeriod === '1Y'}
              onClick={() => onPeriodChange('1Y')}
            >
              1Y
            </MyButton>
          </div>
        </div>
        <hr className='px-0'/>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5>
            21,250 <FaLongArrowAltUp className='IconColor' />
            <small className='feesAmountText'>Total - Fees collected</small>
          </h5>
          <p>
            <span className='feesAmoutPercent'>23 %</span>
            <small className='feesAmountText'>vs last month</small>
          </p>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="70%">
        <LineChart data={data[activePeriod]}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="month"
            tick={{ fill: '#19213D', fontSize: 14, fontWeight: '400' }}
          />
          <YAxis
            className="text-dark"
            tickFormatter={(value) => `₹ ${Math.round(value / 1_000_000)}M`}
            tick={{ fill: '#19213D', fontSize: 14 }}
          />
          <Tooltip formatter={(value) => `₹ ${Math.round(value / 1_000_000)}M`} />
          <Line
            strokeWidth={3}
            type="monotone"
            dataKey="fees"
            stroke="#314CFF"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FeeChart;