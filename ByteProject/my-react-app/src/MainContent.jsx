import './index.css';

const MainContent = () => {
  return (
    <div className="col">
      <h1>HTML Example</h1>
      <div className="placeholder-graph mb-3 p-2">
        <p className="text-center">Stock graph goes here</p>
      </div>
      <div className="p-2" style={{ border: "1px solid #000" }}>
        <h2>Top News</h2>
        {/* News items will be populated here */}
      </div>
    </div>
  );
};

export default MainContent;