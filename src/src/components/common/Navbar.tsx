import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, X as CloseIcon } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from './Button';
import { AuthModal } from '../auth/AuthModal';
export const Navbar: React.FC = () => {
  const {
    user,
    isAuthenticated
  } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const openAuthModal = () => {
    setShowAuthModal(true);
    setMobileMenuOpen(false);
  };
  return <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm py-3' : 'bg-white py-4'}`}>
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold">DataCrowd</span>
            </Link>
            <div className="hidden md:flex ml-10 space-x-6">
              <Link to="/products" className="text-gray-600 hover:text-black">
                Products
              </Link>
              <Link to="/solutions" className="text-gray-600 hover:text-black">
                Solutions
              </Link>
              <Link to="/resources" className="text-gray-600 hover:text-black">
                Resources
              </Link>
              <Link to="/pricing" className="text-gray-600 hover:text-black">
                Pricing
              </Link>
              <Link to="/docs" className="text-gray-600 hover:text-black">
                Docs
              </Link>
              <Link to="/blog" className="text-gray-600 hover:text-black">
                Blog
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? <>
                <Link to="/explore">
                  <Button variant="secondary">Explore</Button>
                </Link>
                <Link to="/dashboard">
                  <Button variant="primary">Dashboard</Button>
                </Link>
              </> : <>
                <Button variant="secondary" onClick={() => setShowAuthModal(true)}>
                  Book a Demo
                </Button>
                <Button variant="primary" onClick={() => setShowAuthModal(true)}>
                  Get Started
                </Button>
              </>}
          </div>
          <button className="md:hidden text-gray-700 focus:outline-none" onClick={toggleMobileMenu}>
            <MenuIcon size={24} />
          </button>
        </div>
        {/* Mobile menu */}
        <div className={`fixed inset-0 bg-white z-50 md:hidden transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-between items-center p-4 border-b">
            <Link to="/" className="text-xl font-bold">
              DataCrowd
            </Link>
            <button className="text-gray-700 focus:outline-none" onClick={toggleMobileMenu}>
              <CloseIcon size={24} />
            </button>
          </div>
          <div className="p-4 flex flex-col space-y-4">
            <Link to="/products" className="py-2 text-gray-600 hover:text-black" onClick={() => setMobileMenuOpen(false)}>
              Products
            </Link>
            <Link to="/solutions" className="py-2 text-gray-600 hover:text-black" onClick={() => setMobileMenuOpen(false)}>
              Solutions
            </Link>
            <Link to="/resources" className="py-2 text-gray-600 hover:text-black" onClick={() => setMobileMenuOpen(false)}>
              Resources
            </Link>
            <Link to="/pricing" className="py-2 text-gray-600 hover:text-black" onClick={() => setMobileMenuOpen(false)}>
              Pricing
            </Link>
            <Link to="/docs" className="py-2 text-gray-600 hover:text-black" onClick={() => setMobileMenuOpen(false)}>
              Docs
            </Link>
            <Link to="/blog" className="py-2 text-gray-600 hover:text-black" onClick={() => setMobileMenuOpen(false)}>
              Blog
            </Link>
            <div className="pt-4 mt-4 border-t">
              {isAuthenticated ? <>
                  <Link to="/explore" onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="secondary" fullWidth>
                      Explore
                    </Button>
                  </Link>
                  <div className="h-3" />
                  <Link to="/dashboard" onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="primary" fullWidth>
                      Dashboard
                    </Button>
                  </Link>
                </> : <>
                  <Button variant="secondary" fullWidth onClick={openAuthModal}>
                    Book a Demo
                  </Button>
                  <div className="h-3" />
                  <Button variant="primary" fullWidth onClick={openAuthModal}>
                    Get Started
                  </Button>
                </>}
            </div>
          </div>
        </div>
      </nav>
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </>;
};