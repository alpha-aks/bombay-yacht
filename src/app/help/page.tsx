import { HelpCircle, Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function HelpPage() {
  const faqs = [
    {
      question: 'How do I book a yacht?',
      answer: 'You can book a yacht by filling out our inquiry form, calling our booking line, or visiting our office. Our team will assist you in selecting the perfect yacht for your needs.'
    },
    {
      question: 'What is included in the yacht rental?',
      answer: 'Our yacht rentals typically include a professional crew, fuel for standard usage, and basic amenities. Additional services like catering, water sports equipment, and special requests can be arranged for an extra fee.'
    },
    {
      question: 'What is the cancellation policy?',
      answer: 'Cancellations made more than 14 days before the charter date will receive a full refund. Cancellations within 7-14 days will receive a 50% refund. No refunds for cancellations within 7 days of the charter.'
    },
    {
      question: 'Do I need a license to rent a yacht?',
      answer: 'No license is required as our yachts come with professional, licensed captains. However, if you wish to captain the yacht yourself, you will need to provide proof of the necessary certifications.'
    },
    {
      question: 'What should I bring on the yacht?',
      answer: 'We recommend bringing sunscreen, sunglasses, a hat, swimwear, a light jacket, and any personal items you may need. Most other amenities are provided on board.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-6">
            <HelpCircle className="h-8 w-8" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            How Can We Help You?
          </h1>
          <p className="mt-6 text-xl max-w-3xl mx-auto">
            Find answers to common questions or get in touch with our support team.
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white shadow overflow-hidden rounded-lg">
              <details className="group">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer">
                  <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                  <svg
                    className="h-6 w-6 text-gray-400 group-open:rotate-180 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-4 pt-0 text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              </details>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Still have questions?</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Our support team is here to help you with any questions or special requests.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600 mx-auto">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Call Us</h3>
              <p className="mt-2 text-base text-gray-600">+1 (555) 123-4567</p>
              <p className="text-sm text-gray-500">Mon-Fri, 9am-6pm</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600 mx-auto">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Email Us</h3>
              <p className="mt-2 text-base text-gray-600">info@bombayyacht.com</p>
              <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600 mx-auto">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Visit Us</h3>
              <p className="mt-2 text-base text-gray-600">123 Marina Bay</p>
              <p className="text-sm text-gray-500">Mumbai, Maharashtra 400001</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
