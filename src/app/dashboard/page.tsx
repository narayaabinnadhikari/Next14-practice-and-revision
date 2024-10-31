import React from 'react'
import LineChart from './line-chart'

function BarChart() {
  return (
    <div>Bar Chart</div>
  )
}

export default function Dashboard() {
  return (
    <div>
        <h1>DASHBOARD.</h1>
        <LineChart />
        <BarChart />
    </div>
  )
}
