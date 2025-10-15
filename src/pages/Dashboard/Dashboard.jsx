import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MyButton from '../../components/Button/Button';
import './dashboard.scss';
import { BsArrowUp } from 'react-icons/bs';
import { LuCalendar } from 'react-icons/lu';
import { MdOutlineInfo } from 'react-icons/md';
import { FaEye } from "react-icons/fa";
import { CiSaveDown2 } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import FeeChart from '../../components/DashboardCharts/FeeChart';
import TermPaymentChart from '../../components/DashboardCharts/TermPaymentChart';
import TabSwitcher from '../../components/TabSwitcher/TabSwitcher';
import TermCard from '../../components/DashboardCharts/TermCard';
import ProgressChart from '../../components/DashboardCharts/ProgressPiechart/ProgressChart';
import PaymentRow from '../../components/DashboardCharts/PaymentRow/PaymentRow';
import MonthRow from '../../components/DashboardCharts/MonthRow/MonthRow';
import StackedBarChart from '../../components/DashboardCharts/StackedBarChart/StackedBarChart';
import PieChart from '../../components/DashboardCharts/PieChart/PieChart';
import DataTable from '../../components/Table/DataTable';
import SearchInput from '../../components/SearchInput/SearchInput';

export default function Dashboard() {
  const [activePeriod, setActivePeriod] = useState('1Y');
  const [activeTab, setActiveTab] = useState('Over All Dashboard');
  const [tableData, setTableData] = useState([]);
  const [columnsData, setColumns] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [visibleColumns, setVisibleColumns] = useState([]);
  const navigate = useNavigate();

  const tabs = [
    { label: 'Over All Dashboard', value: 'Over All Dashboard' },
    { label: 'Today', value: 'Today' }
  ];

  const cardData = [
    { title: 'Total Amount', value: 453, description: 'Total Amount', timeAgo: '21 Days AGO' },
    { title: 'Paid', value: 422, description: 'Total Paid', timeAgo: '21 Days AGO' },
    { title: 'Pending', value: 31, description: 'Total Pending', timeAgo: '21 Days AGO' },
    { title: 'Refunds', value: 6, description: 'Total Refunds', timeAgo: '21 Days AGO' },
  ];

  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const lineChartData = {
    '1M': [{ month: 'Sep', fees: 2800000 }],
    '3M': [
      { month: 'Jul', fees: 4000000 },
      { month: 'Aug', fees: 3500000 },
      { month: 'Sep', fees: 2800000 },
    ],
    '6M': [
      { month: 'Apr', fees: 2200000 },
      { month: 'May', fees: 3000000 },
      { month: 'Jun', fees: 4890000 },
      { month: 'Jul', fees: 4000000 },
      { month: 'Aug', fees: 3500000 },
      { month: 'Sep', fees: 2800000 },
    ],
    '1Y': [
      { month: 'Jan', fees: 1500000 },
      { month: 'Feb', fees: 2000000 },
      { month: 'Mar', fees: 1800000 },
      { month: 'Apr', fees: 2200000 },
      { month: 'May', fees: 3000000 },
      { month: 'Jun', fees: 4890000 },
      { month: 'Jul', fees: 4000000 },
      { month: 'Aug', fees: 3500000 },
      { month: 'Sep', fees: 2800000 },
      { month: 'Oct', fees: 2700000 },
      { month: 'Nov', fees: 2700000 },
      { month: 'Dec', fees: 2700000 },
    ],
  };

  const barChartData = [
    { term: 'TERM 1', paid: 70, unpaid: 30 },
    { term: 'TERM 2', paid: 80, unpaid: 20 },
    { term: 'TERM 3', paid: 60, unpaid: 40 },
    { term: 'TERM 4', paid: 90, unpaid: 10 },
  ];

  const chartData = [
    { term: "Online", paid: 30000, unpaid: 28764.25, amount: 58764, paisa: "25" },
    { term: "Cash", paid: 40000, unpaid: 20000, amount: 60000 , paisa: "50" },
    { term: "UPI", paid: 30000, unpaid: 15000.5, amount: 45000 , paisa: "75" },
    { term: "Other Payments", paid: 28000, unpaid: 20000.75, amount: 48000, paisa: "00" },
  ];

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

  const pieData = [
    { key: 'medico', name: 'Medico', value: 400 },
    { key: 'general', name: 'General', value: 300 },
    { key: 'iit', name: 'IIT', value: 300 },
  ];

  const mockClassData = [
    {
      _id: "1",
      idNo: "ST001",
      name: "Suryansh Singh",
      class: "10th Grade",
      stream: "Science",
      amount: "₹25,000",
      operation: "View | Edit",
    },
    {
      _id: "2",
      idNo: "ST002",
      name: "Ananya Sharma",
      class: "12th Grade",
      stream: "Commerce",
      amount: "₹30,000",
      operation: "View | Edit",
    },
    {
      _id: "3",
      idNo: "ST003",
      name: "Rohan Kumar",
      class: "11th Grade",
      stream: "Arts",
      amount: "₹20,000",
      operation: "View | Edit",
    },
    {
      _id: "4",
      idNo: "ST004",
      name: "Priya Verma",
      class: "10th Grade",
      stream: "Science",
      amount: "₹28,500",
      operation: "View | Edit",
    },
    {
      _id: "5",
      idNo: "ST005",
      name: "Amit Joshi",
      class: "12th Grade",
      stream: "Commerce",
      amount: "₹32,000",
      // operation: "View | Edit",
    },
  ];

  const columns = [
    { label: "Id.No", key: "idNo" },
    { label: "Name", key: "name" },
    { label: "class", key: "class" },
    { label: "Stream", key: "stream" },
    { label: "Amount", key: "amount" },
    // { label: "Operation", key: "operation" }
  ];

  useEffect(() => {
    setColumns(columns);
    setVisibleColumns(columns.map((col) => col.key));
    setTableData(mockClassData);
  }, []);

  const filteredColumns = columns.filter((col) =>
    visibleColumns.includes(col.key)
  );

  const handleTabChange = (value) => {
    setActiveTab(value);
  };

  const handlePeriodChange = (period) => {
    setActivePeriod(period);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleView = (row) => {
    alert(`Viewing: ${row.name}'s achievement`);
    navigate("/students/achievements/view");
  };

  const handleActions = (row) => (
    <div className="d-flex gap-2">
      <IoEyeOutline 
        style={{ cursor: "pointer" }}
        title="View"
        className="icon-size"
      />
      <CiSaveDown2
        style={{ cursor: "pointer" }}
        title="View"
        className="icon-size"
      />
    </div>
  );

  const filteredData = tableData.filter((student) => {
    const matchesSearch = Object.values(student)
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesYear = selectedYear ? student.year === selectedYear : true;
    return matchesSearch && matchesYear;
  });

  return (
    <div className="dashboard py-3 d-flex flex-column gap-4">
      <div className="d-flex justify-content-start align-items-center gap-3">
        <TabSwitcher tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />
      </div>

      {activeTab === 'Over All Dashboard' && (
        <div>
          <div className="cardGrid row">
            {cardData.map((card, index) => (
              <div className="col-12 col-md-6 col-lg-3" key={index}>
                <div className="dashboardCard">
                  <h6 className="text">{card.title}</h6>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="text">
                      <span className="percentageCount">
                        <BsArrowUp className="arrow-icon" /> <span className="text-dark">15%</span>
                      </span>
                      <br />
                      <small className="time-text">{card.timeAgo}</small>
                    </div>
                    <div className="text">
                      <h6>{card.value}</h6>
                      <small className="text-muted">{card.description}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row justify-content-end align-items-end py-4">
            <div className="col-6 col-lg-3 d-flex justify-content-end">
              <MyButton
                className="btn d-flex align-items-center gap-2"
                style={{ boxShadow: '4px 4px 4px 0 rgba(0, 0, 0, 0.25)' }}
              >
                <LuCalendar /> {today}
              </MyButton>
            </div>
          </div>

          <div className="mainCharts d-flex flex-column gap-4">
            <div className="row d-flex ">
              <div className="col-lg-8 d-flex flex-column gap-4">
                <FeeChart
                  data={lineChartData}
                  title="Fees"
                  activePeriod={activePeriod}
                  onPeriodChange={handlePeriodChange}
                />
                <TermPaymentChart
                  data={barChartData}
                  title="Terms Payment"
                />
              </div>

              <div className="col-lg-4">
                <div className='row d-flex justify-content-start mb-3'>
                  {chartData.map((item, index) => (
                    <div className="col-lg-6 mb-2" key={index}>
                      <TermCard term={item.term} amount={item.amount} paisa={item.paisa} />
                    </div>
                  ))}
                </div>

                <div className="row">
                  <div className="payment-summary d-flex flex-column gap-3">
                    <div className='custom-border'>
                      <div className="header">
                        <h3>Payment Summary</h3>
                        <a href="#">View report</a>
                      </div>
                      <p className="date-range">From 1-31 March, 2025</p>

                      <div className="summary-card d-flex flex-column align-items-center">
                        <ProgressChart percentage={50} />
                      </div>

                      <div className="rows px-2">
                        <PaymentRow label="Payment" value="₹18,19,999" paisa="34" change="+23%" color="#FFD1A7" />
                        <hr />
                        <PaymentRow label="Pending" value="₹181" paisa="34" change="+23%" color="#FF9E69"/>
                        <hr />
                        <PaymentRow label="Paid" value="₹181" paisa="34" change="+23%" color="#2B4DED" />
                      </div>
                    </div>

                    <div className="month-cards">
                      <MonthRow label="Previous Month" date="March 1, 2022" amount="₹58,764" paisa="25" status="Paid" />
                      <MonthRow label="Current Month" date="April 1, 2022" amount="₹58,764" paisa="34" status="Unpaid" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-8">
                <div style={{ padding: '16px', border: "1px solid #D1D5DB", backgroundColor: '#FFFFFF', borderRadius: '8px', boxShadow: '6px 6px 30px 0px rgba(0, 0, 0, 0.20)' }}>
                  <h5>Overall Classes <MdOutlineInfo /></h5>
                  <hr />
                  <StackedBarChart
                    data={stackedData}
                    xKey="class"
                    height={300}
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

              <div className="col-lg-4">
                <div style={{ padding: '16px', border: "1px solid #D1D5DB", backgroundColor: '#FFFFFF', borderRadius: '8px', boxShadow: '6px 6px 30px 0px rgba(0, 0, 0, 0.20)' }}>
                  <h5>Overall Classes <MdOutlineInfo /></h5>
                  <hr />
                  <PieChart data={pieData} height={300} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'Today' && (
        <div>
          <div className="cardGrid row">
            {cardData.map((card, index) => (
              <div className="col-12 col-md-6 col-lg-3" key={index}>
                <div className="dashboardCard">
                  <h6 className="text">{card.title}</h6>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="text">
                      <span className="percentageCount">
                        <BsArrowUp className="arrow-icon" /> <span className="text-dark">15%</span>
                      </span>
                      <br />
                      <small className="time-text">{card.timeAgo}</small>
                    </div>
                    <div className="text">
                      <h6>{card.value}</h6>
                      <small className="text-muted">{card.description}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row justify-content-end align-items-end py-4">
            <div className="col-6 col-lg-3 d-flex justify-content-end ">
              <MyButton
                className="btn d-flex align-items-center gap-2"
                style={{ boxShadow: '4px 4px 4px 0 rgba(0, 0, 0, 0.25)' }}
              >
                <LuCalendar /> {today}
              </MyButton>
            </div>
          </div>

          <div className="mainCharts d-flex flex-column gap-4">
            <div className="row d-flex ">
              <div className="col-lg-8 d-flex flex-column gap-4">
                <FeeChart
                  data={lineChartData}
                  title="Fees"
                  activePeriod={activePeriod}
                  onPeriodChange={handlePeriodChange}
                />
              </div>

              <div className="col-lg-4">
                <div className='row d-flex justify-content-start mb-3'>
                  {chartData.map((item, index) => (
                    <div className="col-lg-6 mb-2" key={index}>
                      <TermCard term={item.term} amount={item.amount} paisa={item.paisa} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-8">
                <div style={{ padding: '16px', border: "1px solid #D1D5DB", backgroundColor: '#FFFFFF', borderRadius: '8px', boxShadow: '6px 6px 30px 0px rgba(0, 0, 0, 0.20)' }}>
                  <h5>Overall Classes <MdOutlineInfo /></h5>
                  <hr />
                  <StackedBarChart
                    data={stackedData}
                    xKey="class"
                    height={300}
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

              <div className="col-lg-4">
                <div style={{ padding: '16px', border: "1px solid #D1D5DB", backgroundColor: '#FFFFFF', borderRadius: '8px', boxShadow: '6px 6px 30px 0px rgba(0, 0, 0, 0.20)' }}>
                  <h5>Overall Classes <MdOutlineInfo /></h5>
                  <hr />
                  <PieChart data={pieData} height={300} />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="p-3" style={{ padding: '16px', border: "1px solid #D1D5DB", backgroundColor: '#FFFFFF', borderRadius: '8px', boxShadow: '6px 6px 30px 0px rgba(0, 0, 0, 0.20)' }}>
                  <div className='row d-flex justify-content-between'>
                    <div className="col-3">
                      <h5 className='d-flex flex-row align-items-center'>Transaction History <MdOutlineInfo /></h5>
                    </div>
                    <div className="col-4 d-flex gap-3">
                      <SearchInput value={searchTerm} onChange={handleSearchChange} placeholder="Search..." />
                      <a href="#">ViewReport</a>
                    </div>
                  </div>
                  <hr />
                  <div className="col-12">
                    <DataTable
                      columns={filteredColumns}
                      data={filteredData}
                      actions={handleActions}
                      rowsPerPage={10}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
