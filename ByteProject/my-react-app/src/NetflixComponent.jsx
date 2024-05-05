import React from 'react';

class NetflixComponent extends React.Component {
    render() {
      return (
        <div className="container-fluid">
          <div className="row">
  
            {/* Main content */}
            <div className="col">
              <h1>Netflix Stock Information</h1>
              <div className="placeholder-graph mb-3 p-2">
                {/* Placeholder for the stock graph */}
                <p className="text-center">Netflix stock graph goes here</p>
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
  
  export default NetflixComponent;