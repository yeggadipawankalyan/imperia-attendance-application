// Dashboard.jsx
import React, { useState } from 'react';
import './Dashboard.css';
import TabSwitcher from '../../../../components/TabSwitcher/TabSwitcher';
import GenderCard from '../../../../components/GenderStack/GenderStackedBar';
import StackedBarChart from '../../../../components/DashboardCharts/StackedBarChart/StackedBarChart';
import SemiDonutGauge from '../../../../components/SemiDonutGauge/SemiDonutGauge';

const TopStat = ({ value, label }) => (
  <div className="top-stat me-2">
    <div className="top-stat-value">{value}</div>
    <div className="top-stat-label">{label}</div>
  </div>
);

export default function Administration() {
  const [activeTab, setActiveTab] = useState('admissions');
  

  // Updated gender data with random values that don't all add up to 100%
  const genderData = [
    { name: 'class 1', male: 24, female: 36 },
    { name: 'class 2', male: 35, female: 15 },
    { name: 'class 3', male: 32, female: 28 },
    { name: 'class 4', male: 48, female: 12 },
    { name: 'class 5', male: 28, female: 12 },
    { name: 'class 6', male: 30, female: 20 },
    { name: 'class 7', male: 21, female: 9 },
    { name: 'class 8', male: 24, female: 16 },
    { name: 'class 9', male: 18, female: 12 },
    { name: 'class 10', male: 20, female: 10 },
  ];

  // Updated stacked data to match the image values
  const stackedData = [
    { class: 'Class 1', medico: 1000, general: 500, iit: 500 },
    { class: 'Class 2', medico: 1000, general: 2000, iit: 500 },
    { class: 'Class 3', medico: 500, general: 500, iit: 500 },
    { class: 'Class 4', medico: 2000, general: 1000, iit: 1500 },
    { class: 'Class 5', medico: 1000, general: 1000, iit: 2000 },
    { class: 'Class 6', medico: 500, general: 500, iit: 1500 },
    { class: 'Class 7', medico: 1000, general: 1000, iit: 2000 },
    { class: 'Class 8', medico: 1000, general: 500, iit: 1500 },
    { class: 'Class 9', medico: 1000, general: 1000, iit: 2000 },
    { class: 'Class 10', medico: 500, general: 500, iit: 1500 },
  ];

  const chartData = [
    { name: 'medico', value: 25, color: '#FBD9BF' },
    { name: 'general', value: 25, color: '#FF9C5A' },
    { name: 'iit', value: 50, color: '#2453FF' },
  ];

  const stats = [
    { value: 50, label: 'Class 1' },
    { value: 50, label: 'Class 2' },
    { value: 30, label: 'Class 3' },
    { value: 10, label: 'Class 4' },
    { value: 10, label: 'Class 5' },
    { value: 10, label: 'Class 6' },
    { value: 10, label: 'Class 7' },
    { value: 10, label: 'Class 8' },
    { value: 10, label: 'Class 9' },
    { value: 10, label: 'Class 10' },
  ];

  const tabs = [
    { label: 'Admissions', value: 'admissions' },
    { label: 'Enquiries', value: 'enquiries' },
  ];

  return (
    <div className="container-fluid dashboard-root p-3">
      {/* top pill tabs (TabSwitcher) */}
      <div className="row mb-3">
        <div className="col-12 border-bottom pb-2">
          <TabSwitcher tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
        </div>
      </div>

      {/* top stats row */}
      <div className="row mb-3">
        <div className="col-12">
          <div className="d-flex align-items-center top-stats-scroll">
            {stats.map((s, i) => (
              <TopStat key={i} value={s.value} label={s.label} />
            ))}
          </div>
        </div>
      </div>

      {/* FULL-WIDTH Overall Admissions card — occupies one full row */}
      <div className="row mb-3">
        <div className="col-12">
          <div className="card card-surface mb-0">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <h5 className="card-title mb-0">
                  Overall Admissions <span className="info-dot" />
                </h5>
                <div style={{ width: 160 }}>
                  <select className="form-select form-select-sm rounded-pill px-3">
                    <option>Weekly</option>
                    <option>Monthly</option>
                  </select>
                </div>
              </div>

              {/* Legend for Overall Admissions */}
              {/* <div className="d-flex align-items-center mb-3">
                <span className="legend-dot me-2" style={{ background: '#2453FF' }}></span>
                <small className="text-muted me-3">IIT</small>
                <span className="legend-dot me-2" style={{ background: '#FCA5A5' }}></span>
                <small className="text-muted me-3">General</small>
                <span className="legend-dot me-2" style={{ background: '#FF9C5A' }}></span>
                <small className="text-muted">Medico</small>
              </div> */}

              <div style={{ width: '100%', height: 240 }}>
                <StackedBarChart
                  data={stackedData}
                  xKey="class"
                  height={240}
                  barSize={24}
                  barGap={0}
                  series={[
                    { key: 'medico', label: 'Medico', color: '#FF9C5A', radius: [0, 0, 0, 0] },
                    { key: 'general', label: 'General', color: '#FCA5A5', radius: [0, 0, 0, 0] },
                    { key: 'iit', label: 'IIT', color: '#2453FF', radius: [6, 6, 0, 0] },
                  ]}
                  margin={{ top: 10, right: 16, left: 8, bottom: 8 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* main grid below the full-width card */}
      <div className="row gx-3 gy-3">
        {/* Gender section */}
        <div className="col-lg-8">
          <GenderCard
            data={genderData}
            height={300}
            colors={{ male: '#2F6BFF', female: '#F4A261' }}
            showPercent={true}
          />
        </div>

        {/* Growth Rate section */}
        <div className="col-lg-4">
          <div className="card card-surface mb-3">
            <div className="card-body">
              <div className="d-flex align-items-start justify-content-between mb-3">
                <h6 className="mb-0">Growth Rate <span className="info-dot" /></h6>
                <a href="#!" className="small text-primary">View report</a>
              </div>
              
              <div className="mb-3">
                <small className="text-muted">From 2024-2025</small>
              </div>

              {/* Growth Rate Cards */}
              <div className="d-flex justify-content-between mb-3">
                {[
                  { label: 'IIT', color: '#FF9C5A' },
                  { label: 'Medico', color: '#FF6B35' },
                  { label: 'General', color: '#2453FF' }
                ].map((item, idx) => (
                  <div key={idx} className="growth-rate-card-new">
                    <div className="growth-rate-line" style={{ backgroundColor: item.color }}></div>
                    <div className="growth-rate-content">
                      <div className="growth-rate-label">{item.label}</div>
                      <div className="growth-rate-value">181</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="d-flex justify-content-center mb-3">
                <SemiDonutGauge
                  data={chartData}
                  width={220}
                  height={140}
                  innerRadius={60}
                  outerRadius={92}
                  showPercent={true}
                  percentIndex={2}
                />
              </div>

              <div className="kpi-list mt-2">
                {[
                  { 
                    label: 'IIT', 
                    town: 'Town name', 
                    code: 'G-2564',
                    amount: '₹ 35,000/-', 
                    allocated: 'Allocated',
                    trend: 'up',
                    color: 'green'
                  },
                  { 
                    label: 'Medico', 
                    town: 'Town name', 
                    code: 'G-2564',
                    amount: '₹ 35,000/-', 
                    allocated: 'Allocated',
                    trend: 'up',
                    color: 'red'
                  },
                  { 
                    label: 'General', 
                    town: 'Town name', 
                    code: 'G-2564',
                    amount: '₹ 35,000/-', 
                    allocated: 'Allocated',
                    trend: 'up',
                    color: 'green'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="kpi-row-detailed">
                    <div className="kpi-left">
                      <div className="kpi-label">{item.label}</div>
                      <div className="kpi-town">{item.town}</div>
                      <div className="kpi-code">{item.code}</div>
                    </div>
                    <div className="kpi-center">
                      <div className={`mini-trend-chart ${item.color}`}>
                        <svg width="60" height="20" viewBox="0 0 60 20">
                          <defs>
                            <linearGradient id={`gradient-${item.color}`} x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor={item.color === 'green' ? '#10b981' : '#ef4444'} stopOpacity="0.3"/>
                              <stop offset="100%" stopColor={item.color === 'green' ? '#10b981' : '#ef4444'} stopOpacity="0.1"/>
                            </linearGradient>
                          </defs>
                          <path 
                            d="M2,15 L8,12 L14,8 L20,10 L26,6 L32,9 L38,5 L44,7 L50,4 L56,6 L58,3" 
                            fill="none" 
                            stroke={item.color === 'green' ? '#10b981' : '#ef4444'} 
                            strokeWidth="1.5"
                          />
                          <path 
                            d="M2,15 L8,12 L14,8 L20,10 L26,6 L32,9 L38,5 L44,7 L50,4 L56,6 L58,3 L58,20 L2,20 Z" 
                            fill={`url(#gradient-${item.color})`}
                          />
                          <line x1="2" y1="15" x2="58" y2="15" stroke="#e5e7eb" strokeWidth="0.5" strokeDasharray="2,2"/>
                        </svg>
                      </div>
                    </div>
                    <div className="kpi-right">
                      <div className="kpi-amount-container">
                        <span className="kpi-amount">{item.amount}</span>
                        <span className="kpi-arrow">▲</span>
                      </div>
                      <div className="kpi-allocated">{item.allocated}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
