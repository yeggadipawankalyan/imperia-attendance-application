// GenderCard.jsx
import React, { useMemo } from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from 'recharts';
import './GenderStack.css'// ensure this file contains the CSS below

export default function GenderCard({
  data = [],
  colors = { male: '#2F6BFF', female: '#F4A261' },
  height = 300,
  barSize = 14,            // slightly thicker bars
  barCategoryGap = 16,     // spacing between rows
  yAxisWidth = 80,
}) {
  // prepare data with absolute values and find max for scaling
  const processed = useMemo(() => {
    const processedData = data.map((d) => {
      const female = +d.female || 0;
      const male = +d.male || 0;
      const total = female + male;
      return {
        ...d,
        label: d.class ?? d.name ?? d.day ?? '',
        female,
        male,
        total,
        percentFemale: female,
        percentMale: male,
      };
    });

    // Find the maximum total value for scaling
    const maxTotal = Math.max(...processedData.map(d => d.total));
    
    // Scale all values to percentages based on the maximum
    return processedData.map((d) => ({
      ...d,
      percentFemale: Number(((d.female / maxTotal) * 100).toFixed(2)),
      percentMale: Number(((d.male / maxTotal) * 100).toFixed(2)),
    }));
  }, [data]);

  const tooltipFormatter = (value, name, props) => {
    // value is scaled percentage; find underlying absolute counts
    const payload = props.payload || {};
    if (name === 'Female') return `${payload.female} (${Math.round(payload.percentFemale)}%)`;
    if (name === 'Male') return `${payload.male} (${Math.round(payload.percentMale)}%)`;
    return value;
  };

  return (
    <div className="card card-surface">
      <div className="card-body">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <h6 className="mb-0">Gender <span className="info-dot" /></h6>
          <div className="d-flex align-items-center">
            <div className="me-3 d-flex align-items-center">
              <span className="legend-dot me-2" style={{ background: colors.male }} />
              <small className="text-muted">Male</small>
            </div>
            <div className="d-flex align-items-center">
              <span className="legend-dot me-2" style={{ background: colors.female }} />
              <small className="text-muted">Female</small>
            </div>
          </div>
        </div>

        <div style={{ width: '100%', height }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              layout="vertical"
              data={processed}
              margin={{ top: 6, right: 16, left: 0, bottom: 6 }}
              barSize={barSize}
              barCategoryGap={`${barCategoryGap}px`}
            >
              {/* vertical dashed grid lines */}
              <CartesianGrid vertical={true} horizontal={false} stroke="#E5E7EB" strokeDasharray="4 8" />

              {/* percent x-axis */}
              <XAxis
                type="number"
                domain={[0, 100]}
                ticks={[0, 25, 50, 75, 100]}
                tickFormatter={(v) => `${v}%`}
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#6B7280', fontSize: 12 }}
              />

              {/* category y-axis */}
              <YAxis
                dataKey="label"
                type="category"
                width={yAxisWidth}
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#374151', fontSize: 13 }}
                tickMargin={0}
              />

              <Tooltip
                formatter={tooltipFormatter}
                cursor={{ fill: 'rgba(0,0,0,0.03)' }}
                contentStyle={{
                  background: '#fff',
                  border: '1px solid #E5E7EB',
                  borderRadius: 8,
                  boxShadow: '0 6px 18px rgba(15, 23, 42, 0.06)',
                  fontSize: 13,
                }}
                wrapperStyle={{ outline: 'none' }}
              />

              {/* female left segment (so appears on left) */}
              <Bar dataKey="percentFemale" name="Female" stackId="a" isAnimationActive={false} radius={[8, 0, 0, 8]}>
                {processed.map((entry, i) => (
                  <Cell key={`f-${i}`} fill={colors.female} />
                ))}
              </Bar>

              {/* male right segment */}
              <Bar dataKey="percentMale" name="Male" stackId="a" isAnimationActive={false} radius={[0, 8, 8, 0]}>
                {processed.map((entry, i) => (
                  <Cell key={`m-${i}`} fill={colors.male} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
