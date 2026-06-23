import { Link } from 'wouter';
import { ArrowRight, TrendingUp } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/**
 * Case Results Page - Heritage Minimalism
 * Design: Anonymous but realistic case studies emphasizing discretion and professionalism
 */

export default function CaseResults() {
  const cases = [
    {
      title: 'Complex Corporate Acquisition',
      category: 'Corporate Law',
      outcome: 'Successfully negotiated and completed a £45 million acquisition, navigating complex regulatory requirements and shareholder approvals.',
      details: 'Our team provided comprehensive legal support throughout the transaction, including due diligence, contract negotiation, and regulatory compliance. The deal was completed on schedule and within budget, with all parties satisfied with the outcome.',
      result: '£45M Transaction Completed',
    },
    {
      title: 'High-Value Divorce Settlement',
      category: 'Family Law',
      outcome: 'Secured a favourable financial settlement for our client in a complex divorce involving substantial assets and international property holdings.',
      details: 'We provided strategic advice on asset division, negotiated with opposing counsel, and represented our client throughout the proceedings. The settlement protected our clients interests while achieving an amicable resolution.',
      result: 'Favourable Settlement Achieved',
    },
    {
      title: 'Immigration Visa Success',
      category: 'Immigration Law',
      outcome: 'Successfully obtained a Tier 2 visa for a skilled professional, overcoming initial visa refusal and complex compliance issues.',
      details: 'Our immigration specialists prepared a comprehensive visa application, addressing all concerns raised by the Home Office. The application was approved on the first appeal, enabling our client to commence employment.',
      result: 'Visa Approved on Appeal',
    },
    {
      title: 'Criminal Defence - Not Guilty Verdict',
      category: 'Criminal Defence',
      outcome: 'Achieved a not guilty verdict in a serious criminal matter, demonstrating the importance of thorough preparation and expert advocacy.',
      details: 'Our defence team conducted meticulous preparation, challenged prosecution evidence, and provided robust courtroom advocacy. The jury returned a not guilty verdict, vindicating our clients position.',
      result: 'Not Guilty Verdict',
    },
    {
      title: 'Employment Tribunal Victory',
      category: 'Employment Law',
      outcome: 'Successfully defended an employer in an unfair dismissal claim, securing a complete dismissal of the case.',
      details: 'We prepared a comprehensive defence, gathered evidence, and represented the employer throughout tribunal proceedings. The tribunal found in favour of our client, dismissing all claims.',
      result: 'Claims Dismissed',
    },
    {
      title: 'Commercial Property Development',
      category: 'Property & Real Estate',
      outcome: 'Advised on a complex commercial property development project, securing planning permission and completing all legal documentation.',
      details: 'Our property specialists navigated planning requirements, negotiated with local authorities, and completed all legal documentation. The project proceeded to completion on schedule.',
      result: 'Project Completed Successfully',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-primary text-primary-foreground">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Case Results</h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl">
            Representative case studies demonstrating our expertise and commitment to achieving exceptional outcomes for our clients. All cases are presented anonymously to protect client confidentiality.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cases.map((caseItem, index) => (
              <div
                key={index}
                className="border border-border rounded-lg p-8 shadow-subtle hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <TrendingUp size={24} className="text-accent" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">{caseItem.category}</p>
                    <h3 className="text-xl font-serif font-bold text-primary">{caseItem.title}</h3>
                  </div>
                </div>

                <p className="text-foreground/80 mb-4 leading-relaxed">{caseItem.outcome}</p>

                <p className="text-foreground/70 text-sm mb-6 leading-relaxed">{caseItem.details}</p>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-semibold text-primary">{caseItem.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Confidentiality Statement */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-8 text-center">Discretion & Confidentiality</h2>
            <div className="bg-white p-8 rounded-lg border border-border shadow-subtle">
              <p className="text-foreground/80 mb-4 leading-relaxed">
                We take client confidentiality with the utmost seriousness. All case studies presented on this page have been anonymised to protect client privacy. We do not disclose client information without explicit written consent, in accordance with our professional obligations and the Solicitors Regulation Authority Code of Conduct.
              </p>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                The cases presented represent the types of matters we handle and the outcomes we have achieved. They demonstrate our expertise across our practice areas and our commitment to delivering results.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                If you would like to discuss a specific matter or request references from previous clients, we are happy to do so in a confidential setting. We can provide detailed information about our experience and track record while maintaining the privacy of our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-6">
            Let Us Help With Your Legal Matter
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
            Contact us to discuss how our expertise can deliver results for your situation.
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
