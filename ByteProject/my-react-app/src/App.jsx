import MainContent from './MainContent';
import VerticalNav from './VerticalNav';

const App = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <MainContent />
        <VerticalNav />
      </div>
    </div>
  );
};

export default App;