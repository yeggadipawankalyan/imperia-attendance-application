
import './dashboardCharts.scss';
import { MdOutlineInfo } from 'react-icons/md';
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
import TermCard from './TermCard';
import { PiArrowsInSimple } from 'react-icons/pi';



// Reusable BarChart Component
const TermPaymentChart = ({ data, title }) => {

const chartData = [
  { term: "Term 1", paid: 30000, unpaid: 28764.25, amount: 58764, paisa: "25" },
  { term: "Term 2", paid: 40000, unpaid: 20000, amount: 60000 , paisa: "50" },
  { term: "Term 3", paid: 30000, unpaid: 15000.5, amount: 45000 , paisa: "75" },
  { term: "Term 4", paid: 28000, unpaid: 20000.75, amount: 48000, paisa: "00" },
];

  return (
    <div className=" barChart">
        <h5 className='mb-3'>{title} <MdOutlineInfo /></h5>
        <div className='d-flex justify-content-start gap-2 mb-3'>
            {chartData.map((item, index) => (
                <TermCard key={index} term={item.term} amount={item.amount} paisa={item.paisa} />
            ))}
        </div>
        <ResponsiveContainer width="100%" height="69%">
        <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="term" />
            <YAxis tickFormatter={(value) => `${value}%`} />
            <Tooltip formatter={(value) => `${value}%`} />
            <Legend
            verticalAlign="top"
            align="right"
            iconType="circle" // Make legend indicators circular
            wrapperStyle={{ top: -10 }} // Adjust position if needed
            />
            <Bar
            dataKey="paid"
            fill="#3A4DE9"
            barSize={12}
            radius={[20, 20, 0, 0]}
            name="Paid"
            />
            <Bar
            dataKey="unpaid"
            fill="#F7985E"
            barSize={12}
            radius={[20, 20, 0, 0]}
            name="Unpaid"
            />
        </BarChart>
        </ResponsiveContainer>
    </div>
  );
};

export default TermPaymentChart;