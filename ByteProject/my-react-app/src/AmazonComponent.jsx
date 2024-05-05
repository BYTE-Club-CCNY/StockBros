import React from 'react';

class AmazonComponent extends React.Component {
    render() {
      const { selectedCompany } = this.props;
      return (
        <div className="container-fluid">
          <div className="row">
  
            {/* Main content */}
            <div className="col">
              <h1>Amazon Stock Information</h1>
              <div className="placeholder-graph mb-3 p-2">
                {/* Placeholder for the stock graph */}
                <p className="text-center">Amazon stock graph goes here</p>
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
  
  export default AmazonComponent;