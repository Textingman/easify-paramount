import { siteConfig } from '@/config/site';

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section style={{backgroundColor: '#f2f4f6'}} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900">About {siteConfig.brandName}</h1>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <div className="text-lg text-gray-700 space-y-4">
            <p>
              {siteConfig.brandName} was founded on the principle that every investor deserves personalized, strategic guidance to help them achieve their financial goals. We believe in building long-term advisory relationships based on trust, transparency, and a deep understanding of each client's unique situation.
            </p>
            <p>
              Our team of experienced investment advisors brings decades of combined expertise in portfolio management, financial planning, and wealth preservation. We work with individuals, families, and businesses to develop customized investment strategies that align with their values and objectives.
            </p>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Our Investment Philosophy</h2>
          <div className="text-lg text-gray-700 space-y-4">
            <p>
              We believe in a disciplined, long-term approach to investing that focuses on sustainable wealth building rather than short-term gains. Our investment philosophy is built on several core principles:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Personalized strategy development based on individual goals and risk tolerance</li>
              <li>Diversification across asset classes to manage risk</li>
              <li>Continuous portfolio monitoring and strategic rebalancing</li>
              <li>Tax-efficient investment strategies</li>
              <li>Transparent communication and regular reporting</li>
              <li>Long-term partnership and ongoing guidance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Our Commitment to You</h2>
          <div className="text-lg text-gray-700 space-y-4">
            <p>
              At {siteConfig.brandName}, we are committed to providing exceptional investment advisory services that put your interests first. We take the time to understand your financial situation, goals, and concerns, and we work collaboratively with you to develop strategies that support your long-term success.
            </p>
            <p>
              Our advisory relationship is built on open communication, regular portfolio reviews, and proactive guidance. We're here to help you navigate market volatility, life changes, and evolving financial needs with confidence and clarity.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Who We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">High-Net-Worth Individuals & Families</h3>
              <p className="text-gray-600">
                Comprehensive investment advisory services for individuals seeking personalized portfolio management and wealth preservation strategies.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Business Owners & Entrepreneurs</h3>
              <p className="text-gray-600">
                Strategic investment guidance during critical phases of business growth and wealth accumulation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Retirement-Focused Investors</h3>
              <p className="text-gray-600">
                Income-focused portfolio strategies and long-term financial planning for sustainable retirement wealth.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Real Estate Investors</h3>
              <p className="text-gray-600">
                Portfolio diversification and integrated wealth management that balances real estate with broader investment objectives.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Professionals & Executives</h3>
              <p className="text-gray-600">
                Strategic guidance for managing equity compensation, retirement planning, and wealth accumulation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Multi-Generational Families</h3>
              <p className="text-gray-600">
                Estate planning coordination and wealth transfer strategies to preserve family wealth across generations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
