import React from 'react';

class NvidiaComponent extends React.Component {
    render() {
      return (
        <div className="container-fluid">
          <div className="row">
  
            {/* Main content */}
            <div className="col">
              <h1>Nvidia Stock Information</h1>
              <div className="placeholder-graph mb-3 p-2">
                {/* Placeholder for the stock graph */}
                <p className="text-center">Nvidia stock graph goes here</p>
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
    }
  }
  
  export default NvidiaComponent;
  