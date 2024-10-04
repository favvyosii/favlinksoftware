import Navbar from '../components/Navbar';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <ContactForm />
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
