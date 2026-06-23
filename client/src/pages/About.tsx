import { Link } from 'wouter';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/**
 * About Us Page - Heritage Minimalism
 * Design: Firm background, mission/vision/values, UK legal standards emphasis
 */

export default function About() {
  const values = [
    {
      title: 'Integrity',
      description: 'We uphold the highest ethical standards in all our dealings, maintaining absolute confidentiality and professional conduct.',
    },
    {
      title: 'Excellence',
      description: 'We deliver exceptional legal solutions through meticulous preparation, strategic thinking, and expert advocacy.',
    },
    {
      title: 'Client Focus',
      description: 'We prioritise our clients interests, providing personalised attention and tailored solutions to their unique legal challenges.',
    },
    {
      title: 'Expertise',
      description: 'Our team comprises specialists with deep knowledge and proven track records across multiple legal disciplines.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-primary text-primary-foreground">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">About Trust Legal Corporate</h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl">
            A leading UK law firm with nearly four decades of excellence, trusted by corporations, families, and individuals for complex legal matters.
          </p>
        </div>
      </section>

      {/* Firm History */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">Our Story</h2>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                Trust Legal Corporate was established in 1985 by a group of distinguished solicitors with a shared vision: to create a law firm that would combine traditional legal excellence with innovative problem-solving. Over nearly four decades, we have grown from a boutique practice to a respected firm with a national reputation.
              </p>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                Our growth has been built on a foundation of integrity, expertise, and an unwavering commitment to client service. We have successfully handled thousands of cases, from high-stakes corporate transactions to sensitive family matters, always maintaining the highest standards of professionalism and confidentiality.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Today, Trust Legal Corporate stands as a testament to the enduring value of principled legal practice. We continue to attract the finest legal talent and maintain our position as a trusted advisor to clients across the United Kingdom.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-lg p-8 border border-border">
              <div className="space-y-8">
                <div>
                  <p className="text-sm text-accent font-semibold uppercase tracking-wider mb-2">Founded</p>
                  <p className="text-3xl font-serif font-bold text-primary">1985</p>
                </div>
                <div>
                  <p className="text-sm text-accent font-semibold uppercase tracking-wider mb-2">Offices</p>
                  <p className="text-3xl font-serif font-bold text-primary">3</p>
                  <p className="text-sm text-foreground/60 mt-1">London, Manchester, Birmingham</p>
                </div>
                <div>
                  <p className="text-sm text-accent font-semibold uppercase tracking-wider mb-2">Team Size</p>
                  <p className="text-3xl font-serif font-bold text-primary">50+</p>
                  <p className="text-sm text-foreground/60 mt-1">Experienced legal professionals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg border border-border shadow-subtle">
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-foreground/80 leading-relaxed">
                To provide exceptional legal services that deliver measurable results, combining strategic insight with meticulous execution. We are committed to understanding our clients objectives and providing tailored solutions that advance their interests with absolute integrity and professionalism.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-border shadow-subtle">
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-foreground/80 leading-relaxed">
                To be recognised as the most trusted legal partner for discerning clients who demand excellence. We aspire to set the standard for legal practice in the UK through our commitment to innovation, expertise, and unwavering ethical principles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Our Core Values</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              These principles guide every decision we make and every action we take.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle size={24} className="text-accent mt-1" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-primary mb-2">{value.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UK Legal Standards */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-8 text-center">UK Legal Standards & Regulation</h2>
            <div className="bg-white p-8 rounded-lg border border-border shadow-subtle">
              <p className="text-foreground/80 mb-4 leading-relaxed">
                Trust Legal Corporate is authorised and regulated by the Solicitors Regulation Authority (SRA), the independent regulatory body for solicitors in England and Wales. This regulation ensures that our firm meets the highest standards of professional conduct, client protection, and ethical practice.
              </p>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                Our commitment to UK legal standards extends beyond regulatory compliance. We adhere to the Solicitors Regulation Authority Code of Conduct for Solicitors, which requires us to act with integrity, maintain client confidentiality, avoid conflicts of interest, and provide competent legal services.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                We maintain professional indemnity insurance and participate in the Solicitors Compensation Fund, providing additional protection for our clients. Our practice is regularly reviewed to ensure compliance with all applicable regulations and best practices in the legal profession.
              </p>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-foreground/60">
                  <strong>SRA Registration:</strong> Firm Reference Number 123456 | <strong>Office Address:</strong> 125 Old Broad Street, London, EC2N 1AR
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
            Contact our team to discuss how we can assist with your legal needs.
          </p>
          <Link href="/contact">
            <a className="inline-flex items-center px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-sm hover:bg-opacity-90 transition-all duration-200 transform hover:scale-102">
              Get in Touch
              <ArrowRight size={18} className="ml-2" />
            </a>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
