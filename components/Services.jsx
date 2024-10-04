import { FaCode, FaMobileAlt, FaCloud, FaLock } from 'react-icons/fa';

const servicesData = [
  {
    title: 'Web Development',
    description: 'We build responsive, scalable web applications that meet your business needs.',
    icon: <FaCode size={40} className="text-blue-500" />,
  },
  {
    title: 'Mobile Development',
    description: 'Get top-notch mobile apps with a focus on performance and user experience.',
    icon: <FaMobileAlt size={40} className="text-green-500" />,
  },
  {
    title: 'Cloud Solutions',
    description: 'Leverage the power of cloud computing with our expert cloud solutions.',
    icon: <FaCloud size={40} className="text-purple-500" />,
  },
  {
    title: 'Cybersecurity',
    description: 'Ensure the safety and security of your digital assets with our security services.',
    icon: <FaLock size={40} className="text-red-500" />,
  },
];

const Services = () => {
  return (
    <section className="bg-gray-900 text-white  py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
        Services
        </h2>
        <p className="text-lg md:text-xl mb-12">
          We offer a range of high-quality software consulting services designed to help your business grow.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
            >
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-black	">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
