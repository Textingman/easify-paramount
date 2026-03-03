import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/site';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-100 text-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Strategic Investment Advisory & Portfolio Management
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-600">
                Personalized investment guidance, ongoing portfolio oversight, and strategic financial counsel designed to help you build sustainable wealth with confidence.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
              >
                Schedule a Consultation
              </Link>
            </div>
            <div className="relative h-[400px] lg:h-[500px]">
              <Image
                src="/Invesment_Picture.webp"
                alt="Investment Advisory Services"
                fill
                className="object-cover rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">What We Do</h2>
          <div className="max-w-4xl mx-auto text-lg text-gray-700 space-y-4">
            <p>
              We partner with clients as their trusted investment advisors, providing continuous guidance on portfolio strategy, asset allocation, and wealth management decisions. Our consulting services focus on building clarity around your financial objectives, developing disciplined investment strategies, and supporting informed decision-making throughout your wealth-building journey.
            </p>
            <p>
              Whether you're planning for retirement, managing business capital, or building generational wealth, our team provides clear, unbiased investment guidance tailored to your unique situation and long-term goals.
            </p>
          </div>
        </div>
      </section>

      {/* Investment Advisory Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Our Investment Advisory Services</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Our investment advisory services are designed to deliver clarity, control, and confidence in every financial decision.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3">Investment Strategy & Advisory</h3>
              <p className="text-gray-600">
                Personalized investment counsel and ongoing portfolio guidance aligned with your financial objectives, risk tolerance, and time horizon.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-3">Portfolio Construction & Risk Management</h3>
              <p className="text-gray-600">
                Expert guidance on asset allocation, diversification strategies, and continuous risk assessment to protect and grow your wealth.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-semibold mb-3">Portfolio Optimization & Rebalancing</h3>
              <p className="text-gray-600">
                Ongoing advisory support to optimize portfolio performance, manage tax efficiency, and ensure your investments remain aligned with your goals.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold mb-3">Comprehensive Wealth Advisory</h3>
              <p className="text-gray-600">
                Long-term advisory partnership focused on wealth preservation, estate planning coordination, and multi-generational wealth transfer strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Work With {siteConfig.brandName}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-l-4 border-black pl-6">
              <h3 className="text-xl font-semibold mb-3">Personalized Investment Guidance</h3>
              <p className="text-gray-600">
                One-on-one advisory relationship tailored to your unique financial situation, goals, and values. We take the time to understand what matters most to you.
              </p>
            </div>
            <div className="border-l-4 border-black pl-6">
              <h3 className="text-xl font-semibold mb-3">Ongoing Portfolio Oversight</h3>
              <p className="text-gray-600">
                Continuous monitoring, strategic adjustments, and proactive guidance to keep your portfolio aligned with changing market conditions and your evolving needs.
              </p>
            </div>
            <div className="border-l-4 border-black pl-6">
              <h3 className="text-xl font-semibold mb-3">Transparent Communication</h3>
              <p className="text-gray-600">
                Regular portfolio reviews, clear explanations of investment decisions, and straightforward reporting so you always understand where you stand.
              </p>
            </div>
            <div className="border-l-4 border-black pl-6">
              <h3 className="text-xl font-semibold mb-3">Long-Term Advisory Partnership</h3>
              <p className="text-gray-600">
                We're with you through all market cycles and life changes, providing steady guidance and strategic counsel as your trusted investment advisor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{backgroundColor: '#f2f4f6'}} className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Ready to Start Your Investment Advisory Partnership?</h2>
          <p className="text-xl mb-8 text-gray-600">
            Contact us today to schedule a consultation and take the first step toward strategic, disciplined wealth management.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Schedule Your Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
