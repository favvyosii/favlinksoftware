import Navbar from '../components/Navbar';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';

const PortfolioPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Portfolio />
      </div>
      <Footer />
    </>
  );
};

export default PortfolioPage;
