import React from 'react';
import { MapPin } from 'lucide-react';

const Footer = () => (
  <footer className="bg-gray-900 text-white py-8">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <div className="flex items-center justify-center space-x-4 mb-4">
        <MapPin className="w-4 h-4" />
        <span>Chicago, IL</span>
      </div>
      <div className="text-gray-400 text-sm">
        Made By Kai!
      </div>
    </div>
  </footer>
);

export default Footer;