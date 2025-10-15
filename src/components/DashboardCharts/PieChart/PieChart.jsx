import React from 'react';
import {
  ResponsiveContainer,
  PieChart as RechartsPieChart,
  Pie,
  Tooltip,
  Legend,
  Cell,
} from 'recharts';

/**
 * PieChart
 *
 * Props:
 * - data (required): array of objects for chart segments
 * - dataKey (optional): string key for value in data (default: 'value')
 * - nameKey (optional): string key for name in data (default: 'name')
 * - series (optional): array of series configs in render order
 *     each series item: { key: string, label: string, color: string }
 * - height (optional): number px for container height (default: 240)
 * - margin (optional): recharts margin object
 * - tooltipStyle (optional): object to style tooltip container
 */

const defaultSeries = [
  { key: 'medico', label: 'Medico', color: '#FF9C5A' },
  { key: 'general', label: 'General', color: '#FCA5A5' },
  { key: 'iit', label: 'IIT', color: '#2453FF' },
];

export default function PieChart({
  data = [],
  dataKey = 'value',
  nameKey = 'name',
  series = defaultSeries,
  height = 240,
  margin = { top: 20, right: 10, left: 10, bottom: 10 },
  tooltipStyle = {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
}) {
  return (
    <div style={{ flex: 1, minWidth: 0, height: '100%', minHeight: 0 }}>
      <ResponsiveContainer width="100%" height={height}>
        <RechartsPieChart margin={margin}>
          {/* Tooltip */}
          <Tooltip contentStyle={tooltipStyle} />

          {/* Legend at top */}
          <Legend
            layout="vertical"
            verticalAlign="middle"
            align="right"
            iconType="circle"
            formatter={(value, entry, index) => {
                const s = series.find((x) => x.key === value);
                return (
                <span style={{ fontSize: '14px', color: '#333', marginLeft: '8px' }}>
                    {s?.label || value}
                </span>
                );
            }}
            wrapperStyle={{ padding: '15px' }}
            itemStyle={{ marginBottom: '35px' }}  // Controls gap between legend items
           />


          {/* Pie segments */}
          <Pie
            data={data}
            dataKey={dataKey}
            nameKey={nameKey}
            innerRadius="50%"
            outerRadius="80%"
            fill="#8884d8"
            label={({ name, percent }) =>
              `${name}: ${(percent * 100).toFixed(0)}%`
            }

          >
            {data.map((entry, index) => {
              const s = series.find((s) => s.key === entry.key);
              return (
                <Cell key={`cell-${index}`} fill={s?.color || '#8884d8'} />
              );
            })}
          </Pie>
        </RechartsPieChart>
      </ResponsiveContainer>
    </div>
  );
}
