import { Briefcase, Users, Calendar, MapPin, Clock, CheckCircle } from 'lucide-react';

export default function CorporateEventsPage() {
  const features = [
    {
      icon: <Briefcase className="h-8 w-8 text-blue-600" />,
      title: 'Business Meetings',
      description: 'Impress your clients with a unique meeting venue on the water.'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: 'Team Building',
      description: 'Foster teamwork with exciting on-water activities and challenges.'
    },
    {
      icon: <Calendar className="h-8 w-8 text-blue-600" />,
      title: 'Corporate Retreats',
      description: 'Escape the office and inspire your team with a change of scenery.'
    },
    {
      icon: <MapPin className="h-8 w-8 text-blue-600" />,
      title: 'Product Launches',
      description: 'Make a splash with an unforgettable product reveal at sea.'
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: 'Sunset Cruises',
      description: 'Reward your team with a relaxing evening on the water.'
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-blue-600" />,
      title: 'Custom Events',
      description: 'Tailored experiences to meet your specific corporate needs.'
    }
  ];

  const testimonials = [
    {
      quote: "Our annual conference on the yacht was a tremendous success. The team at Bombay Yacht made everything seamless.",
      author: "Sarah Johnson",
      role: "Marketing Director, TechCorp"
    },
    {
      quote: "The perfect setting for our executive retreat. The combination of luxury and professional service was outstanding.",
      author: "Michael Chen",
      role: "CEO, InnovateX"
    },
    {
      quote: "Our clients were thoroughly impressed with the venue. It made our product launch truly memorable.",
      author: "Emily Rodriguez",
      role: "Events Manager, Luxe Brands"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-blue-900/60" />
          <img
            className="w-full h-full object-cover"
            src="/images/corporate-event-hero.jpg"
            alt="Luxury yacht with city skyline"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Corporate Events
          </h1>
          <p className="mt-6 text-xl text-blue-100 max-w-3xl">
            Elevate your next corporate event with our luxury yacht charters. Create unforgettable experiences for your team and clients on the beautiful waters of Mumbai.
          </p>
          <div className="mt-10">
            <a
              href="#inquire-now"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-700 bg-white hover:bg-blue-50"
            >
              Inquire Now
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              The Perfect Venue for Any Corporate Occasion
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Our luxury yachts provide a unique and impressive setting for all your corporate needs.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <div key={index} className="pt-6
                ">
                  <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                        {feature.icon}
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900">{feature.title}</h3>
                      <p className="mt-5 text-base text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              What Our Clients Say
            </h2>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="relative">
                  <svg
                    className="h-12 w-12 text-blue-100"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.016 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.016 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="mt-6 text-gray-600">{testimonial.quote}</p>
                </div>
                <footer className="mt-6">
                  <p className="text-base font-medium text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </footer>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-700 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  <span className="block">Ready to plan your corporate event?</span>
                  <span className="block">Get in touch today.</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-blue-200">
                  Our team will work with you to create a customized experience that meets your corporate objectives and exceeds expectations.
                </p>
                <a
                  href="#inquire-now"
                  className="mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-blue-600 hover:bg-blue-50"
                >
                  Request a Quote
                </a>
              </div>
            </div>
            <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
              <img
                className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                src="/images/corporate-event-cta.jpg"
                alt="Corporate event on a yacht"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
