import { useState } from 'react';
import { ArrowRight, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { toast } from 'sonner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/**
 * Contact Page - Heritage Minimalism
 * Design: Professional contact form, office details, hours, and map placeholder
 */

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success('Thank you for your enquiry. We will be in touch shortly.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-primary text-primary-foreground">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Contact Us</h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl">
            Get in touch with our team to discuss your legal needs. We provide confidential consultations tailored to your situation.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-serif font-bold text-primary mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      placeholder="+44 (0)20 7183 8900"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    >
                      <option value="">Select a practice area</option>
                      <option value="corporate">Corporate Law</option>
                      <option value="family">Family Law</option>
                      <option value="immigration">Immigration Law</option>
                      <option value="criminal">Criminal Defence</option>
                      <option value="employment">Employment Law</option>
                      <option value="property">Property & Real Estate</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                    placeholder="Please describe your legal matter..."
                  ></textarea>
                </div>

                <div className="bg-background p-4 rounded-sm border border-border">
                  <p className="text-xs text-foreground/60">
                    <strong>Confidentiality:</strong> All information provided in this form is treated with the utmost confidentiality and will only be used to respond to your enquiry.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-sm hover:bg-opacity-90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <ArrowRight size={18} />}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-serif font-bold text-primary mb-6">Contact Information</h3>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <Phone size={24} className="text-accent mt-1" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Phone</p>
                      <a href="tel:+13182619350" className="text-accent hover:text-primary transition-colors">
                       +13182619350
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <Mail size={24} className="text-accent mt-1" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Email</p>
                      <a href="mailto:trustledal@trustcorperate.online" className="text-accent hover:text-primary transition-colors">
                        trustledal@trustcorperate.online
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <MapPin size={24} className="text-accent mt-1" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground/70 text-sm">
                      85 Newmarket Road<br />
                      Hawthorpe, PE10 4JB<br />
                      United Kingdom
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <Clock size={24} className="text-accent mt-1" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Business Hours</p>
                      <p className="text-foreground/70 text-sm">
                        Monday - Friday: 09:00 - 18:00<br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Offices */}
              <div className="border-t border-border pt-8">
                <h4 className="font-serif font-bold text-primary mb-4">Other Offices</h4>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-semibold text-foreground">Manchester</p>
                    <p className="text-foreground/70">45 King Street, Manchester, M2 4LY</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Birmingham</p>
                    <p className="text-foreground/70">78 Colmore Row, Birmingham, B3 2BJ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container">
          <h2 className="text-3xl font-serif font-bold text-primary mb-8 text-center">Find Us</h2>
          <div className="bg-white rounded-lg overflow-hidden border border-border shadow-subtle h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin size={48} className="text-accent mx-auto mb-4 opacity-50" />
              <p className="text-foreground/60">Interactive map would be displayed here</p>
              <p className="text-foreground/40 text-sm mt-2">125 Old Broad Street, London, EC2N 1AR</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-primary mb-8 text-center">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <div className="border border-border rounded-lg p-6">
                <h3 className="font-serif font-bold text-primary mb-2">How quickly will I hear back?</h3>
                <p className="text-foreground/70 text-sm">
                  We aim to respond to all enquiries within 24 hours during business hours. For urgent matters, please call our office directly.
                </p>
              </div>

              <div className="border border-border rounded-lg p-6">
                <h3 className="font-serif font-bold text-primary mb-2">Do you offer free initial consultations?</h3>
                <p className="text-foreground/70 text-sm">
                  We offer confidential initial consultations to discuss your legal needs. Please contact us to arrange a suitable time.
                </p>
              </div>

              <div className="border border-border rounded-lg p-6">
                <h3 className="font-serif font-bold text-primary mb-2">How is client information protected?</h3>
                <p className="text-foreground/70 text-sm">
                  We maintain strict confidentiality in accordance with the Solicitors Regulation Authority Code of Conduct. All client information is securely stored and protected.
                </p>
              </div>

              <div className="border border-border rounded-lg p-6">
                <h3 className="font-serif font-bold text-primary mb-2">Can you represent me in court?</h3>
                <p className="text-foreground/70 text-sm">
                  Yes, our solicitors are qualified to provide representation in court proceedings. We will advise you on the best approach for your matter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
