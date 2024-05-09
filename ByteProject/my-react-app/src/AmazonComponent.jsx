import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Plot from 'react-plotly.js';
import DateRangePickerA from './DateRangePickerA'; // Import the DateRangePicker component

const AmazonComponent = () => {
  const [plotData, setPlotData] = useState(null);
  const [error, setError] = useState(null);

  // useEffect hook to fetch plot data initially
  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array to run only once on component mount

  // Function to fetch plot data from the Flask backend
  const fetchData = async (startDate, endDate) => {
    try {
      // Adjust the Axios request URL to point to the Flask backend
      const response = await axios.post('http://localhost:5000/plotA', { start_date: startDate, end_date: endDate });
      setPlotData(response.data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">

        {/* Main content */}
        <div className="col">
          <h1>Amazon Stock Information</h1>
          <div className="AppB">
            <DateRangePickerA fetchData={fetchData} /> {/* Pass fetchData function as prop */}
            {error && <div>Error: {error}</div>}
            {plotData && <Plot data={plotData.data} layout={plotData.layout} />}
          </div>
          <div className="p-2" style={{ border: '1px solid #000' }}>
            {/* Placeholder for the top news section */}
            <h2>Top News</h2>
            {/* News items will be populated here */}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AmazonComponent;
