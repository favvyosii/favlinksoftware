import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Testimonial from '../components/Testimonial';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import CustomHr from '@/components/CustomHr';
const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <CustomHr/> */}
      <Services />
      <CustomHr/>
      <Portfolio />
      <CustomHr/>
      <Testimonial />
      <CustomHr/>
      <ContactForm />
      <Footer />
    </>
  );
};

export default HomePage;
