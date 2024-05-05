import './index.css';

const VerticalNav = () => {
  return (
    <div className="vertical-nav bg-white">
      <div className="py-4 px-3 mb-4">
        <div className="d-flex flex-column align-items-start">
          <a href="#" className="btn btn-link">Home</a>
          <a href="#" className="btn btn-link">Facts</a>
          <a href="#" className="btn btn-link">About Us</a>
          <a href="#" className="btn btn-link">Learn More</a>
        </div>
      </div>
    </div>
  );
};

export default VerticalNav;