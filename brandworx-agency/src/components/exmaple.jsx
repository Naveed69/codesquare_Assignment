import React from "react";
import { Button } from "@/components/ui/button";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function BrandworxPage() {
  return (
    <div className="bg-gradient-to-br from-purple-800 to-red-700 text-white min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-opacity-10 backdrop-blur-md">
        <div className="text-lg font-bold">Brandworx</div>
        <ul className="flex space-x-6 text-sm">
          <li className="text-yellow-400">Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Contact Us</li>
        </ul>
        <Button variant="outline" className="border-yellow-400 text-yellow-400">
          Contact Us
        </Button>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-4 relative">
        <h1 className="text-5xl font-semibold">
          Amazing Digital Creations With
          <span className="text-yellow-400"> Brandworx Agency</span>
        </h1>
        <p className="mt-4 text-sm text-gray-200">
          Help You To Build Digital Solutions That Is Modern, User-Friendly,
          Good SEO, And Clean Design
        </p>
        <Button className="mt-6 px-6 py-2 bg-white text-black rounded-full">
          Get Started
        </Button>
        <div className="flex space-x-4 mt-6 text-white">
          <FaInstagram />
          <FaLinkedin />
          <FaTwitter />
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-black py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Agency That Can Help You Grow Your Business Digitally
          </h2>
          <p className="text-gray-400">
            Work in the digital world includes web design, digital marketing,
            branding & strategy, etc.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-800 to-purple-900 py-20 px-8 text-center">
        <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
        <p className="text-gray-300 max-w-xl mx-auto">
          Whether you need a fresh website, help with digital marketing, or a
          complete brand overhaul — Brandworx is here to elevate your business
          digitally.
        </p>
      </section>
    </div>
  );
}
