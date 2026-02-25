const testimonials = [
  {
    name: "Sarah Chen",
    role: "Sennior Developer",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
    content: "CodeFlow has transformed the way our team collaborates on code. The real-time editing and seamless integration with our existing tools have significantly boosted our productivity and code quality."
  },
  {
    name: "Marcus Rodriguez",
    role: "Tech Lead",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
    content: "The intuitive interface and powerful features of CodeFlow have made it an essential part of our development workflow. It's like having a virtual coding partner that helps us write better code faster."
  },
  {
    name: "Emily Watson",
    role: "CTO",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200",
    content: "CodeFlow's collaborative coding environment has revolutionized how our teams work together. The ability to see changes in real-time and communicate directly within the code has improved our efficiency and fostered a stronger sense of teamwork."
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-12 lg:gap-16">
          {/* LEFT SIDE - HEADER */}
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              What developers are saying about CodeFlow
            </h2>
            <p className="text-gray-400 text-xl sm:text-lg max-w-2xl mx-auto">
              Everything you need to build, test and deploy applications with AI-powered development tools.
            </p>
          </div>
        </div>

        RIGHT SIDE - TESTIMONIALS 
        <div className="lg:w-1/2 w-full">
          <div>
            {testimonials.map((testimonial, key) => (
              <div
              key={key}
              className="bg-slate-900/50 p-4 backdrop-blur-sm border border-slate-800 rounded-xl sm:rounded-2xl">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="shrink-0">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      "
                    </div>
                  </div>
                  <div>

                  </div>
                </div>
              </div>
            ))}
          </div> 
        </div>
      </div>
    </section>
  );
}
