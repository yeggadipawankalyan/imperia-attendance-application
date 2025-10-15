import React from 'react';
import {
  ResponsiveContainer,
  BarChart as RechartsBarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  Legend,
} from 'recharts';

/**
 * StackedBarChart
 *
 * Props:
 * - data (required): array of objects for chart rows
 * - xKey (optional): string key for X axis labels (default: 'day')
 * - series (optional): array of series configs in render order (default configured below)
 *     each series item: { key: string, label: string, color: string, radius?: [..] }
 * - height (optional): number px for ResponsiveContainer height (default: 240)
 * - barSize (optional): number for barSize (default: 20)
 * - barGap (optional): number for gap between bars (default: 20)
 * - margin (optional): recharts margin object
 * - gridStroke (optional): color of horizontal grid lines
 * - tooltipStyle (optional): object to style tooltip container
 */

const defaultSeries = [
  { key: 'medico', label: 'Medico', color: '#FF9C5A', radius: [0, 0, 0, 0] },
  { key: 'general', label: 'General', color: '#FCA5A5', radius: [0, 0, 0, 0] },
  { key: 'iit', label: 'IIT', color: '#2453FF', radius: [6, 6, 0, 0] },
];

export default function StackedBarChart({
  data = [],
  xKey = 'day',
  series = defaultSeries,
  height = 240,
  barSize = 20,
  barGap = 20,
  margin = { top: 20, right: 10, left: 10, bottom: 0 },
  gridStroke = '#E5E7EB',
  tooltipStyle = {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
}) {
  // Formatter for Y-axis (1k, 2k, etc.)
  const formatYAxis = (value) => {
    if (value >= 1000) return `${value / 1000}k`;
    return value;
  };

  return (
    <div style={{ flex: 1, minWidth: 0, height: '100%', minHeight: 0 }}>
      <ResponsiveContainer width="100%" height={height}>
        <RechartsBarChart
          data={data}
          barSize={barSize}
          barGap={barGap}
          margin={margin}
        >
          {/* grid lines */}
          <CartesianGrid stroke={gridStroke} vertical={false} />

          {/* X axis (classes) */}
          <XAxis
            dataKey={xKey}
            axisLine={false}
            tickLine={false}
            tick={{
              fill: '#757575',
              fontSize: 11,
              fontFamily: 'Inter, sans-serif',
            }}
            dy={6}
          />

          {/* Y axis with 1k, 2k, 3k... */}
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#6B7280', fontSize: 11 }}
            tickFormatter={formatYAxis}
          />

          {/* Tooltip */}
          <Tooltip contentStyle={tooltipStyle} />

          {/* Legend at top */}
          <Legend
            verticalAlign="top"
            align="right"
            iconType="circle"
            formatter={(value) => {
              const s = series.find((x) => x.key === value);
              return s?.label || value;
            }}
          />

          {/* Stacked bars */}
          {series.map((s) => (
            <Bar
              key={s.key}
              dataKey={s.key}
              stackId="a"
              fill={s.color}
              radius={s.radius}
              name={s.label}
            />
          ))}
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
}
