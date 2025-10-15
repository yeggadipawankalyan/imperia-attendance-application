import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

/**
 * SemiDonutGauge
 *
 * Renders a semicircle (180° → 0°) donut chart (gauge style) using recharts.
 *
 * Props:
 * - data (required): array of { name?: string, value: number, color: string }
 *    The values do not need to sum to 100; the pie will render proportionally.
 * - width (optional): chart width in px (default: 250)
 * - height (optional): chart height in px (default: 140)
 * - cx (optional): x center of pie (default: width * 0.44)
 * - cy (optional): y center of pie (default: height * 0.78)
 * - innerRadius (optional): inner radius of donut (default: 70)
 * - outerRadius (optional): outer radius of donut (default: 110)
 * - showPercent (optional): show percentage badge for the first (or picked) segment (default: true)
 * - percentIndex (optional): index of segment to show percent for (default: 1 if exists else 0)
 *
 * Example chartData:
 * const chartData = [
 *   { name: 'medico', value: 25, color: '#FFE4CC' },
 *   { name: 'general', value: 25, color: '#FFAB75' },
 *   { name: 'iit', value: 50, color: '#2453FF' }
 * ];
 */

export default function SemiDonutGauge({
  data = [],
  width = 250,
  height = 140,
  cx,
  cy,
  innerRadius = 70,
  outerRadius = 110,
  showPercent = true,
  percentIndex = 1, // choose which slice to show % for (1 in your example)
}) {
  // sensible defaults for center if not passed
  const computedCx = cx ?? Math.round(width * 0.44);
  const computedCy = cy ?? Math.round(height * 0.78);

  // compute percentage for given index relative to sum
  const total = data.reduce((s, d) => s + (Number(d.value) || 0), 0) || 1;
  const pctIndex = Math.min(Math.max(0, percentIndex), Math.max(0, data.length - 1));
  const pctValue = Math.round(((data[pctIndex]?.value || 0) / total) * 100);

  // Position for the percentage badge (place it near the arc at right top quadrant)
  // We'll compute a point on the outer circle at around 45° (converted to radians).
  // Because the pie is drawn from 180 -> 0 deg, the right-top arc corresponds to ~45 deg.
  const angleDeg = 45; // degrees on semicircle from left->right
  const angleRad = (Math.PI * angleDeg) / 180;
  const badgeRadius = (innerRadius + outerRadius) / 2; // position mid of thickness
  const badgeX = computedCx + (badgeRadius * Math.cos(angleRad));
  const badgeY = computedCy - (badgeRadius * Math.sin(angleRad)); // '-' because canvas y grows down

  // small styles used for badge and container
  const containerStyle = { width, height, position: 'relative', display: 'inline-block' };
  const badgeStyle = {
    position: 'absolute',
    left: badgeX - 28, // center the badge (approx)
    top: badgeY - 18,
    width: 52,
    height: 36,
    borderRadius: 18,
    background: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 6px 12px rgba(0,0,0,0.12)',
    fontWeight: 600,
    fontSize: 14,
    color: '#111827',
    pointerEvents: 'none',
  };

  // optional pale ring behind badge (outer highlight)
  const ringStyle = {
    position: 'absolute',
    left: badgeX - 32,
    top: badgeY - 22,
    width: 64,
    height: 44,
    borderRadius: 999,
    background: 'rgba(36,83,255,0.06)', // slight blue halo like reference
    pointerEvents: 'none',
  };

  return (
    <div style={containerStyle}>
      <PieChart width={width} height={height}>
        <Pie
          data={data}
          cx={computedCx}
          cy={computedCy}
          startAngle={180}
          endAngle={0}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          paddingAngle={0}
          dataKey="value"
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>

      {showPercent && data.length > 0 && (
        <>
          <div style={ringStyle} />
          <div style={badgeStyle}>{pctValue}%</div>
        </>
      )}
    </div>
  );
}
