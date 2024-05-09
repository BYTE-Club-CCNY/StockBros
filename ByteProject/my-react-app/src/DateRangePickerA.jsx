import React, { useState } from 'react';
import axios from 'axios';
import Plot from 'react-plotly.js';

function DateRangePickerA() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [plotData, setPlotData] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/plotA', { start_date: startDate, end_date: endDate });
      setPlotData(response.data);
    } catch (error) {
      console.error('Error fetching plot data:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Start Date:
          <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)}min="1998-01-01" max="2023-12-31" />
        </label>
        <label>
          End Date:
          <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} min="1998-01-01" max="2023-12-31" />
        </label>
        <button type="submit">Generate Plot</button>
      </form>
      {plotData && <Plot data={plotData.data} layout={plotData.layout} />}
    </div>
  );
}

export default DateRangePickerA;