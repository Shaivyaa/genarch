// import { Instagram, Facebook, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-transparent border-t border-gray-200 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Icons */}
          <div className="flex items-center space-x-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-600 transition-colors"
              aria-label="Instagram"
            >
              {/* <Instagram size={20} /> */}
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-600 transition-colors"
              aria-label="Facebook"
            >
              {/* <Facebook size={20} /> */}
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-600 transition-colors"
              aria-label="LinkedIn"
            >
              {/* <Linkedin size={20} /> */}
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-600 transition-colors"
              aria-label="Twitter"
            >
              {/* <Twitter size={20} /> */}
            </a>
          </div>

          {/* Copyright Text */}
          <div className="text-center">
            <p className="text-sm text-black">
              © {new Date().getFullYear()} Genarch. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
