import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Plot from 'react-plotly.js';
import DateRangePickerC from './DateRangePickerC'; // Import the DateRangePicker component

const MetaComponent = () => {
  const [plotData, setPlotData] = useState(null);
  const [newsData, setNewsData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async (startDate, endDate) => {
    try {
      const response = await axios.post('http://localhost:5000/plotC', { start_date: startDate, end_date: endDate });
      setPlotData(response.data);
    } catch (error) {
      setError(error.message);
    }
  };

  const fetchNews = async (startDate, endDate) => {
    try {
      const response = await axios.post('http://localhost:5000/api/meta', {start_date: startDate, end_date: endDate});
      setNewsData(response.data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">

        {/* Main content */}
        <div className="col">
          <h1>Meta Stock Information</h1>
          <div className="AppB">
            <DateRangePickerC fetchData={fetchData} fetchNews={fetchNews} /> {/* Pass fetchData and fetchNews functions as props */}
            {error && <div>Error: {error}</div>}
            {plotData && <Plot data={plotData.data} layout={plotData.layout} />}
          </div>
          <div className="p-2" style={{ border: '1px solid #000' }}>
            <h2>Meta related News From this Date Range</h2>
            <ul>
              {newsData.map((item, index) => (
                <li key={index}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MetaComponent;
