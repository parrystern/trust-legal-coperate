import { Link } from 'wouter';
import { ArrowRight, Shield, Users, Award, FileText } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/**
 * Home Page - Heritage Minimalism
 * Design: Premium hero with London office background, practice area highlights, testimonials
 * Features: Smooth scroll animations, professional imagery, clear CTAs
 */

export default function Home() {
  const practiceAreas = [
    {
      icon: Shield,
      title: 'Corporate Law',
      description: 'Mergers, acquisitions, corporate governance, and commercial transactions.',
    },
    {
      icon: Users,
      title: 'Family Law',
      description: 'Divorce, child custody, inheritance disputes, and family matters.',
    },
    {
      icon: FileText,
      title: 'Immigration Law',
      description: 'UK visa applications, settlement, and immigration compliance.',
    },
    {
      icon: Award,
      title: 'Criminal Defence',
      description: 'Expert representation in serious criminal and regulatory matters.',
    },
  ];

  const testimonials = [
    {
      quote: 'Trust Legal Corporate provided exceptional guidance through a complex corporate restructuring. Their expertise and professionalism were invaluable.',
      author: 'James Richardson',
      title: 'CEO, Richardson & Associates',
    },
    {
      quote: 'The team handled our family matter with utmost discretion and sensitivity. We felt supported throughout the entire process.',
      author: 'Sarah Mitchell',
      title: 'Private Client',
    },
    {
      quote: 'Outstanding legal representation. They secured a favourable outcome in our immigration case with thorough preparation and expert advocacy.',
      author: 'Amit Patel',
      title: 'Business Owner',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}\n      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden mt-8">
        {/* Background Image with Overlay */}\n        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663780728476/EixtmCmLmWxQSimg8dSnpn/hero-background-MPhxmF5BWQ5ZTbwTjA64uH.webp)',
          }}
        >
          {/* Gradient Overlay */}\n          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/70 to-primary/60"></div>
        </div>

        {/* Hero Content */}\n        <div className="container relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary-foreground mb-6 leading-tight">
              Trusted Legal Expertise Across the United Kingdom
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Decades of excellence in corporate, family, immigration, criminal defence, employment, and property law. We deliver results with absolute discretion and professionalism.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <a className="inline-flex items-center justify-center px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-sm hover:bg-opacity-90 transition-all duration-200 transform hover:scale-102">
                  Book Consultation
                  <ArrowRight size={18} className="ml-2" />
                </a>
              </Link>
              <Link href="/practice-areas">
                <a className="inline-flex items-center justify-center px-8 py-3 bg-primary-foreground/20 text-primary-foreground font-semibold rounded-sm hover:bg-primary-foreground/30 transition-all duration-200 border border-primary-foreground/30">
                  View Services
                  <ArrowRight size={18} className="ml-2" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Overview - Editorial Layout */}
      <section className="py-20 md:py-32 bg-white border-b border-border">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            <div className="md:col-span-2">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight">
                Established Excellence in UK Legal Practice
              </h2>
              <p className="text-foreground/80 mb-6 leading-relaxed text-lg">
                Since 1985, Trust Legal Corporate has served as counsel to corporations, families, and individuals navigating complex legal challenges. Our practice is built on a foundation of integrity, expertise, and an unwavering commitment to client confidentiality.
              </p>
              <div className="border-l-4 border-accent pl-6 mb-8">
                <p className="text-foreground/70 italic leading-relaxed">
                  We combine traditional legal excellence with strategic innovation, delivering results that reflect our clients' highest expectations.
                </p>
              </div>
              <Link href="/about">
                <a className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors">
                  Our Story & Values
                  <ArrowRight size={18} className="ml-2" />
                </a>
              </Link>
            </div>
            <div className="space-y-8">
              <div className="border-b border-border pb-6">
                <p className="text-5xl font-serif font-bold text-primary mb-2">38</p>
                <p className="text-sm uppercase tracking-wider text-foreground/60 font-semibold">Years of Practice</p>
              </div>
              <div className="border-b border-border pb-6">
                <p className="text-5xl font-serif font-bold text-primary mb-2">500+</p>
                <p className="text-sm uppercase tracking-wider text-foreground/60 font-semibold">Cases Resolved</p>
              </div>
              <div>
                <p className="text-5xl font-serif font-bold text-primary mb-2">50+</p>
                <p className="text-sm uppercase tracking-wider text-foreground/60 font-semibold">Legal Professionals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas - Editorial Grid */}
      <section className="py-20 md:py-32 bg-background border-b border-border">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 leading-tight">
              Six Core Practice Areas
            </h2>
            <p className="text-foreground/70 max-w-2xl text-lg">
              Specialist teams across corporate, family, immigration, criminal defence, employment, and property law. Each led by experienced practitioners with proven track records.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {practiceAreas.slice(0, 3).map((area, index) => {
              const Icon = area.icon;
              return (
                <div key={index} className="border-t-2 border-accent pt-6">
                  <div className="flex items-start gap-3 mb-4">
                    <Icon size={20} className="text-accent flex-shrink-0 mt-1" />
                    <h3 className="text-lg font-serif font-bold text-primary">{area.title}</h3>
                  </div>
                  <p className="text-foreground/70 text-sm leading-relaxed">{area.description}</p>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {practiceAreas.slice(3, 6).map((area, index) => {
              const Icon = area.icon;
              return (
                <div key={index + 3} className="border-t-2 border-accent pt-6">
                  <div className="flex items-start gap-3 mb-4">
                    <Icon size={20} className="text-accent flex-shrink-0 mt-1" />
                    <h3 className="text-lg font-serif font-bold text-primary">{area.title}</h3>
                  </div>
                  <p className="text-foreground/70 text-sm leading-relaxed">{area.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Link href="/practice-areas">
              <a className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-sm hover:bg-opacity-90 transition-all duration-200">
                Detailed Practice Descriptions
                <ArrowRight size={18} className="ml-2" />
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}\n      <section
        className="py-20 md:py-32 bg-cover bg-center relative"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663780728476/EixtmCmLmWxQSimg8dSnpn/success-pattern-gEmsN2FXdT5ZTbwTjA64uH.webp)',
        }}
      >
        {/* Overlay */}\n        <div className="absolute inset-0 bg-white/95"></div>

        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Client Testimonials
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              What our clients say about working with Trust Legal Corporate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg border border-border shadow-subtle"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary">★</span>
                  ))}
                </div>
                <p className="text-foreground/80 italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-primary">{testimonial.author}</p>
                  <p className="text-sm text-foreground/60">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary border-t border-accent/20">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-6">
            Ready to Discuss Your Legal Needs?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
            Our team is prepared to provide expert guidance and strategic solutions tailored to your specific situation.
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
