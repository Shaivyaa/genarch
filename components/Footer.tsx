// import { Instagram, Facebook, Linkedin, Twitter } from "lucide-react";

import Image from "next/image";
import instagram from "@/public/images/instagram.png";
import facebook from "@/public/images/facebook.png";
import linkedin from "@/public/images/linkedin.png";


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
              <Image src={instagram} alt="instagram" height={32} width={32} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-600 transition-colors"
              aria-label="Facebook"
            >
              <Image src={facebook} alt="instagram" height={32} width={32} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Image src={linkedin} alt="instagram" height={32} width={32} />
            </a>
            {/* <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-600 transition-colors"
              aria-label="Twitter"
            >
              <Image src={linkedin} alt="instagram" height={32} width={32} />
            </a> */}
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
