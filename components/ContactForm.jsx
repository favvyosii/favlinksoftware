import { useState } from 'react';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false); // New state for loading

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show the preloader

    try {
      // Send the form data to your API route
      await axios.post('/api/send-message', formData);
      setSubmitted(true);
      toast.success('Message sent successfully!');
    } catch (error) {
      console.error('Error submitting the form', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setLoading(false); // Hide the preloader when done
    }
  };

  return (
    <div className="p-6 md:p-12 lg:p-16 bg-gray-800 text-white max-w-3xl mx-auto">
      <Toaster position="top-right" reverseOrder={false} />
      <h2 className="text-2xl lg:text-4xl font-bold mb-6 text-center">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="name" className="block text-sm lg:text-lg font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-full p-2 lg:p-3 border border-gray-500 rounded text-black"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm lg:text-lg font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full p-2 lg:p-3 border border-gray-500 rounded text-black"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm lg:text-lg font-medium mb-2">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows="4"
            className="w-full p-2 lg:p-3 border border-gray-500 rounded text-black"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full lg:w-auto px-4 py-2 lg:px-6 lg:py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all"
          disabled={loading} // Disable button during loading
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {submitted && <p className="text-green-500 mt-6 text-center">Message sent successfully!</p>}

      {/* Preloader */}
      {loading && (
        <div className="loader-container mt-6 text-center">
          <div className="loader"></div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
