// import { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { Menu, X, Code2 } from 'lucide-react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navItems = [
//     { name: 'Home', path: '/' },
//     { name: 'About', path: '/about' },
//     { name: 'Services', path: '/services' },
//     // { name: 'Products', path: '/products' },
//     { name: 'Contact', path: '/contact' },
//   ];

//   return (
//     <motion.nav
//   initial={{ y: -100 }}
//   animate={{ y: 0 }}
//   className={`w-full transition-all duration-300 ${
//     scrolled ? 'bg-navy shadow-lg' : 'bg-white/ backdrop-blur-sm'
//   }`}
// >

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//       <Link to="/" className="flex items-center space-x-2">
//   <div className="flex-shrink-0">
//     <img
//       src="/Assets/logo/logo.jpg"
//       alt="Nexora Logo"
//       className="h-16 w-16 "
//     />
//   </div>
// </Link>



//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8 ">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.path}
//                 className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
//                   location.pathname === item.path
//                     ? 'text-nexora-blue'
//                     : 'text-gray-700 hover:text-nexora-blue'
//                 }`}
//               >
//                 {item.name}
//                 {location.pathname === item.path && (
//                   <motion.div
//                     layoutId="activeTab"
//                     className="absolute bottom-0 left-0 right-0 h-0.5 bg-nexora-blue"
//                   />
//                 )}
//               </Link>
//             ))}
//             <Link
//               to="/contact"
//               className="bg-nexora-blue text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors duration-200"
//             >
//               Get Started
//             </Link>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-700 hover:text-nexora-blue"
//             >
//               {isOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         <motion.div
//           initial={false}
//           animate={{ height: isOpen ? 'auto' : 0 }}
//           className="md:hidden overflow-hidden"
//         >
//           <div className="py-4 space-y-2">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.path}
//                 onClick={() => setIsOpen(false)}
//                 className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
//                   location.pathname === item.path
//                     ? 'text-nexora-blue bg-blue-50'
//                     : 'text-gray-700 hover:text-nexora-blue hover:bg-gray-50'
//                 }`}
//               >
//                 {item.name}
//               </Link>
//             ))}
//             <Link
//               to="/contact"
//               onClick={() => setIsOpen(false)}
//               className="block w-full text-center bg-nexora-blue text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors duration-200 mt-4"
//             >
//               Get Started
//             </Link>
//           </div>
//         </motion.div>
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;









import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`w-full z-50 fixed top-0 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/70 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/Assets/logo/logo.jpg"
            alt="Nexora Logo"
            className="h-12 w-12 rounded-full object-cover"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm font-medium transition-colors duration-300 ${
                location.pathname === item.path
                  ? 'text-nexora-blue border-b-2 border-nexora-blue pb-1'
                  : 'text-gray-700 hover:text-nexora-blue'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="bg-nexora-blue text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-600 transition"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          className="md:hidden px-6 pb-4"
        >
          <div className="flex flex-col gap-3 mt-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block text-base font-medium px-3 py-2 rounded ${
                  location.pathname === item.path
                    ? 'text-nexora-blue bg-blue-50'
                    : 'text-gray-700 hover:text-nexora-blue hover:bg-gray-100'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="bg-nexora-blue text-white text-center px-4 py-2 rounded-full font-medium mt-3"
            >
              Get Started
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;







