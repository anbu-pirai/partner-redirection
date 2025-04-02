import React from 'react';
import { ExternalLink, Menu, X, Plane } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="flex items-center gap-2 text-2xl font-bold text-blue-800 hover:text-blue-900 transition-colors duration-200">
                <Plane className="w-8 h-8 -rotate-45" />
                <div className="flex flex-col leading-none">
                  <span className="text-2xl">Lazada</span>
                  <span className="text-sm text-blue-600">Airlines</span>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#" className="text-gray-600 hover:text-blue-800 transition-colors duration-200">Features</a>
              <a href="#" className="text-gray-600 hover:text-blue-800 transition-colors duration-200">Pricing</a>
              <a href="#" className="text-gray-600 hover:text-blue-800 transition-colors duration-200">About</a>
              <a 
  href="https://uat.kliaekspres.com/?partnerId=77&key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImNvbXBhbnlOYW1lIjoiVXJsIERlbW8xIiwiZGF0ZSI6IjIxMDAtMTItMzFUMTM6MTE6MjYuMzEyWiJ9LCJpYXQiOjE3NDI5NzAyNTB9.dw2xWLpphdpVyQSDA1t9O8AElgMldPzmxZdeOQjxw1k" 
  className="text-gray-600 hover:text-blue-800 transition-colors duration-200"
  target="_blank"
  rel="noopener noreferrer"
>
  Buy
</a>
            </nav>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 text-gray-600 hover:text-blue-800 transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4">
              <div className="flex flex-col gap-4">
                <a href="#" className="text-gray-600 hover:text-blue-800 transition-colors duration-200">Features</a>
                <a href="#" className="text-gray-600 hover:text-blue-800 transition-colors duration-200">Pricing</a>
                <a href="#" className="text-gray-600 hover:text-blue-800 transition-colors duration-200">About</a>
                <a 
  href="https://uat.kliaekspres.com/?partnerId=77&key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImNvbXBhbnlOYW1lIjoiVXJsIERlbW8xIiwiZGF0ZSI6IjIxMDAtMTItMzFUMTM6MTE6MjYuMzEyWiJ9LCJpYXQiOjE3NDI5NzAyNTB9.dw2xWLpphdpVyQSDA1t9O8AElgMldPzmxZdeOQjxw1k" 
  className="text-gray-600 hover:text-blue-800 transition-colors duration-200"
  target="_blank"
  rel="noopener noreferrer"
>
  Buy
</a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content with padding-top to account for fixed header */}
      <main className="pt-16">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid lg:grid-cols-2 gap-12 items-center">
          {/* Right Column - Image */}
          <div className="relative">
            <img
              src="https://img.freepik.com/free-vector/organic-flat-people-business-training-illustration_23-2148902090.jpg?t=st=1743598939~exp=1743602539~hmac=8284d6edbadeea941b8263edddb8f11a51f4748e7981e4746489b4bf566c9834&w=1380"
              alt="Business partnership and growth concept"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;