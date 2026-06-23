import { Link } from 'wouter';

/**
 * Footer Component - Heritage Minimalism
 * Features: Contact information, navigation links, legal disclaimers
 * Design: Deep navy background with off-white text, subtle gold divider
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      {/* Gold divider */}
      <div className="border-t border-accent/30"></div>

      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Firm Info */}
          <div>
            <h3 className="text-accent font-serif font-bold mb-4">Trust Legal Corporate</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Leading UK law firm specialising in corporate, family, immigration, criminal defence, employment, and property law.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold mb-4 text-accent">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/">
                  <a className="text-primary-foreground/80 hover:text-accent transition-colors">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-primary-foreground/80 hover:text-accent transition-colors">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/practice-areas">
                  <a className="text-primary-foreground/80 hover:text-accent transition-colors">Practice Areas</a>
                </Link>
              </li>
              <li>
                <Link href="/team">
                  <a className="text-primary-foreground/80 hover:text-accent transition-colors">Our Team</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif font-bold mb-4 text-accent">Contact</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="tel:+442071838900" className="hover:text-accent transition-colors">
                  +44 (0)20 7183 8900
                </a>
              </li>
              <li>
                <a href="mailto:trustledal@trustcorperate.online" className="hover:text-accent transition-colors  cursors-pointer">
                  trustledal@trustcorperate.online
                </a>
              </li>
              <li className="pt-2">
                <p className="font-semibold">London Office</p>
                <p>85 Newmarket Road</p>
                <p>Hawthorpe, PE10 4JB</p>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-serif font-bold mb-4 text-accent">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Legal Disclaimer
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-accent/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60">
            <p>&copy; {currentYear} Trust Legal Corporate. All rights reserved.</p>
            <p className="mt-4 md:mt-0">
              Authorised and regulated by the Solicitors Regulation Authority (SRA).
            </p>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-8 pt-8 border-t border-accent/20 text-xs text-primary-foreground/50">
          <p>
            This website is for informational purposes only and does not constitute legal advice. The information contained herein is not intended to create a solicitor-client relationship. Please consult with a qualified legal professional for advice specific to your situation. Trust Legal Corporate is authorised and regulated by the Solicitors Regulation Authority.
          </p>
        </div>
      </div>
    </footer>
  );
}
