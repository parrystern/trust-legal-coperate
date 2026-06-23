import { Link } from 'wouter';
import { ArrowRight, Briefcase, Heart, Plane, Gavel, Users, Home } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/**
 * Practice Areas Page - Heritage Minimalism
 * Design: Detailed descriptions of six practice areas with professional icons
 */

export default function PracticeAreas() {
  const areas = [
    {
      icon: Briefcase,
      title: 'Corporate Law',
      description: 'We advise on mergers and acquisitions, corporate governance, shareholder disputes, and complex commercial transactions. Our team has extensive experience guiding businesses through high-value deals and strategic restructuring.',
      services: ['M&A', 'Corporate Governance', 'Shareholder Disputes', 'Commercial Contracts', 'Joint Ventures'],
    },
    {
      icon: Heart,
      title: 'Family Law',
      description: 'Our family law specialists handle divorce, child custody arrangements, inheritance disputes, and sensitive family matters with discretion and compassion. We prioritise amicable resolutions while protecting our clients interests.',
      services: ['Divorce & Separation', 'Child Custody', 'Financial Settlements', 'Inheritance Disputes', 'Prenuptial Agreements'],
    },
    {
      icon: Plane,
      title: 'Immigration Law',
      description: 'We provide expert guidance on UK visa applications, settlement procedures, and immigration compliance. Our team stays current with evolving immigration regulations to ensure successful outcomes for individuals and businesses.',
      services: ['Visa Applications', 'Settlement & Citizenship', 'Work Permits', 'Family Visas', 'Immigration Compliance'],
    },
    {
      icon: Gavel,
      title: 'Criminal Defence',
      description: 'We provide robust representation in serious criminal and regulatory matters. Our experienced advocates have successfully defended clients in complex cases, ensuring their rights are protected throughout the legal process.',
      services: ['Serious Crime Defence', 'Regulatory Matters', 'Appeals', 'Fraud Defence', 'White Collar Crime'],
    },
    {
      icon: Users,
      title: 'Employment Law',
      description: 'We advise employers and employees on employment contracts, disputes, redundancy, and workplace issues. Our expertise ensures compliance with employment legislation while protecting our clients commercial interests.',
      services: ['Employment Contracts', 'Dispute Resolution', 'Redundancy', 'Discrimination Claims', 'Tribunal Representation'],
    },
    {
      icon: Home,
      title: 'Property & Real Estate',
      description: 'Our property specialists handle residential and commercial transactions, landlord-tenant disputes, and real estate development matters. We ensure smooth transactions and protect your property interests.',
      services: ['Conveyancing', 'Commercial Property', 'Landlord-Tenant Disputes', 'Development Law', 'Property Litigation'],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-primary text-primary-foreground">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Practice Areas</h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl">
            Comprehensive legal expertise across six core practice areas, each staffed by specialists with deep knowledge and proven results.
          </p>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {areas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div
                  key={index}
                  className="border-t-2 border-accent pt-8"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <Icon size={24} className="text-accent flex-shrink-0" />
                    <h2 className="text-2xl font-serif font-bold text-primary">{area.title}</h2>
                  </div>

                  <p className="text-foreground/80 mb-6 leading-relaxed">{area.description}</p>

                  <div className="mb-6">
                    <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-3">Key Services</p>
                    <div className="flex flex-wrap gap-2">
                      {area.services.map((service, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-primary text-xs font-medium"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link href="/contact">
                    <a className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors">
                      Learn More
                      <ArrowRight size={16} className="ml-2" />
                    </a>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Why Choose Our Practice Areas</h2>
            <p className="text-foreground/70">
              Each practice area is led by specialists with extensive experience and a track record of delivering exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-lg font-serif font-bold text-primary mb-3">Specialist Expertise</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Deep knowledge of relevant legislation and case law, combined with years of practice experience.
              </p>
            </div>
            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-lg font-serif font-bold text-primary mb-3">Proven Results</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Thousands of successful cases across all practice areas, delivering measurable outcomes for our clients.
              </p>
            </div>
            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-lg font-serif font-bold text-primary mb-3">Strategic Approach</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Legal expertise combined with strategic thinking to develop tailored solutions for your specific needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-6">
            Discuss Your Legal Matter
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
            Contact us to speak with a specialist in your area of need. We provide confidential consultations tailored to your situation.
          </p>
          <Link href="/contact">
            <a className="inline-flex items-center px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-sm hover:bg-opacity-90 transition-all duration-200 transform hover:scale-102">
              Schedule Consultation
              <ArrowRight size={18} className="ml-2" />
            </a>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
