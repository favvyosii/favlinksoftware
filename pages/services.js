import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Footer from '../components/Footer';

const ServicesPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Services />
      </div>
      <Footer />
    </>
  );
};

export default ServicesPage;
