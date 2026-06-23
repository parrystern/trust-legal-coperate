import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/**
 * Our Team Page - Heritage Minimalism
 * Design: Professional UK solicitor profiles with credentials and specialisms
 */

export default function Team() {
  const team = [
    {
      name: 'Michael Richardson',
      title: 'Senior Partner, Head of Corporate Law',
      credentials: 'LLB (Hons), Solicitor (20+ years)',
      specialisms: ['M&A', 'Corporate Governance', 'Commercial Transactions'],
      bio: 'Michael leads our corporate practice with extensive experience in high-value transactions and complex corporate restructuring. He has advised FTSE-listed companies and private equity firms on major acquisitions and strategic matters.',
    },
    {
      name: 'Sarah Thompson',
      title: 'Partner, Head of Family Law',
      credentials: 'LLB (Hons), Solicitor (18 years)',
      specialisms: ['Divorce', 'Child Custody', 'Financial Settlements'],
      bio: 'Sarah specialises in sensitive family matters, combining legal expertise with compassionate client care. She has successfully resolved complex disputes involving significant assets and custody arrangements.',
    },
    {
      name: 'James Chen',
      title: 'Partner, Head of Immigration Law',
      credentials: 'LLM Immigration Law, Solicitor (15 years)',
      specialisms: ['Visa Applications', 'Settlement', 'Compliance'],
      bio: 'James brings specialist expertise in UK immigration law, guiding individuals and businesses through complex visa procedures. He stays current with evolving immigration regulations to ensure successful outcomes.',
    },
    {
      name: 'Victoria Patel',
      title: 'Senior Associate, Criminal Defence',
      credentials: 'LLB (Hons), Solicitor (12 years)',
      specialisms: ['Serious Crime', 'Regulatory Defence', 'Appeals'],
      bio: 'Victoria provides robust representation in serious criminal matters, with a track record of successful defences in complex cases. She is known for meticulous preparation and strategic advocacy.',
    },
    {
      name: 'David Morrison',
      title: 'Senior Associate, Employment Law',
      credentials: 'LLB (Hons), Solicitor (10 years)',
      specialisms: ['Employment Contracts', 'Disputes', 'Tribunal Representation'],
      bio: 'David advises both employers and employees on employment matters, ensuring compliance with legislation while protecting clients interests. He has represented clients in numerous tribunal proceedings.',
    },
    {
      name: 'Emma Wilson',
      title: 'Senior Associate, Property & Real Estate',
      credentials: 'LLB (Hons), Solicitor (11 years)',
      specialisms: ['Conveyancing', 'Commercial Property', 'Development Law'],
      bio: 'Emma specialises in residential and commercial property transactions, with expertise in complex development matters. She ensures smooth transactions and protects clients property interests.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-primary text-primary-foreground">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Team</h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl">
            Meet the experienced solicitors and legal professionals who deliver exceptional results for our clients.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white border border-border rounded-lg overflow-hidden shadow-subtle hover:shadow-lg transition-all duration-300 group"
              >
                {/* Profile Image */}
                <div className="h-64 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center overflow-hidden">
                  <img
                    src={[
                      'https://d2xsxph8kpxj0f.cloudfront.net/310519663780728476/EixtmCmLmWxQSimg8dSnpn/team-member-1-cEoRrx5zx4rSZyX3GwqnWj.webp',
                      'https://d2xsxph8kpxj0f.cloudfront.net/310519663780728476/EixtmCmLmWxQSimg8dSnpn/team-member-2-2KM99Nwrvy7cCg9rNsNERA.webp',
                      'https://d2xsxph8kpxj0f.cloudfront.net/310519663780728476/EixtmCmLmWxQSimg8dSnpn/team-member-3-JR4QEjT2pBX43zGUoXAhqN.webp',
                      'https://d2xsxph8kpxj0f.cloudfront.net/310519663780728476/EixtmCmLmWxQSimg8dSnpn/team-member-4-MKhvtEvSuEPepqDvvrL6nB.webp',
                      'https://d2xsxph8kpxj0f.cloudfront.net/310519663780728476/EixtmCmLmWxQSimg8dSnpn/team-member-5-avkZMjJKWmvgRjdbxJbZEH.webp',
                      'https://d2xsxph8kpxj0f.cloudfront.net/310519663780728476/EixtmCmLmWxQSimg8dSnpn/team-member-6-gixQ7qFgSjDmKbSFyXXDou.webp',
                    ][index]}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Profile Info */}
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-primary mb-1">{member.name}</h3>
                  <p className="text-accent font-semibold text-sm mb-3">{member.title}</p>
                  <p className="text-foreground/60 text-xs mb-4">{member.credentials}</p>

                  <p className="text-foreground/70 text-sm leading-relaxed mb-4">{member.bio}</p>

                  <div className="mb-4">
                    <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Specialisms</p>
                    <div className="flex flex-wrap gap-2">
                      {member.specialisms.map((spec, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-primary/5 text-primary text-xs font-medium rounded border border-primary/20"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link href="/contact">
                    <a className="inline-flex items-center text-accent font-semibold text-sm hover:gap-2 transition-all duration-200">
                      Contact
                      <ArrowRight size={14} className="ml-1" />
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Culture */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-8 text-center">Our Team Culture</h2>
            <div className="bg-white p-8 rounded-lg border border-border shadow-subtle">
              <p className="text-foreground/80 mb-4 leading-relaxed">
                Our team is composed of highly qualified solicitors and legal professionals who share a commitment to excellence and client service. We invest in continuous professional development, ensuring our team remains at the forefront of legal practice.
              </p>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                We foster a collaborative environment where expertise is shared and best practices are developed. Our team members work across practice areas, bringing diverse perspectives to complex legal challenges.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Beyond legal expertise, our team is known for professionalism, integrity, and a genuine commitment to understanding and serving our clients needs. We believe that exceptional legal service is built on strong relationships and a deep understanding of our clients objectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-6">
            Work With Our Experienced Team
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
            Contact us to discuss your legal needs with one of our specialists.
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
