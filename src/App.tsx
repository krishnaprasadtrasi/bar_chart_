import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";
import chroma from "chroma-js"; // Import chroma-js for color manipulation

// Data
const data = [
  { label: "2023", T1: 92, T2: 29, T3: 93, T4: 90 },
  { label: "2025", T1: 88, T2: 85, T3: 97, T4: 87 },
  { label: "2026", T1: 82, T2: 25, T3: 57, T4: 17 },
];

const threshold = 60;

// Define the base colors for each bar
const colors = {
  T1: "#1E3A8A", // Dark Blue
  T2: "#16A34A", // Dark Green
  T3: "#F59E0B", // Dark Yellow
  T4: "#D97706", // Dark Orange
};

// Helper function to lighten color using chroma.js
const lightenColor = (color, percent) => {
  return chroma(color).brighten(percent).hex(); // Lighten the color by the given percentage
};

const CustomBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="label" />
        <YAxis />
        <Tooltip />
        <Legend />

        {/* Bar for T1 */}
        <Bar dataKey="T1">
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={
                entry.T1 < threshold ? lightenColor(colors.T1, 2) : colors.T1
              }
            />
          ))}
        </Bar>

        {/* Bar for T2 */}
        <Bar dataKey="T2">
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={
                entry.T2 < threshold ? lightenColor(colors.T2, 2) : colors.T2
              }
            />
          ))}
        </Bar>

        {/* Bar for T3 */}
        <Bar dataKey="T3">
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={
                entry.T3 < threshold ? lightenColor(colors.T3, 2) : colors.T3
              }
            />
          ))}
        </Bar>

        {/* Bar for T4 */}
        <Bar dataKey="T4">
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={
                entry.T4 < threshold ? lightenColor(colors.T4, 2) : colors.T4
              }
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CustomBarChart;
