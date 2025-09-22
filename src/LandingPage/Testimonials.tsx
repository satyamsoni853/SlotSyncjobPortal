import React from 'react';
import { Avatar } from '@mantine/core';

// Swiper components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Icons for quotes and ratings
import { IconQuote, IconStarFilled } from '@tabler/icons-react';

// Sample avatars (replace with your actual image imports)
import avatar1 from '../JobPortalResources/avatar1.png';
import avatar2 from '../JobPortalResources/avatar2.png';
import avatar3 from '../JobPortalResources/avatar.png';
import avatar4 from '../JobPortalResources/avatar.png';

// --- Testimonials Data ---
const testimonials = [
  {
    quote: "This platform is a game-changer for developers. I found my dream job as a Senior Backend Engineer within two weeks. The quality of listings is unmatched.",
    avatar: avatar1,
    name: 'Sarah Johnson',
    title: 'Backend Engineer @ TechCorp',
  },
  {
    quote: "As a UI/UX designer, finding a role that matched my creative vision was tough. This site's filtering and detailed job descriptions made it incredibly easy. Highly recommended!",
    avatar: avatar2,
    name: 'Michael Chen',
    title: 'Lead UI/UX Designer @ Innovate Inc.',
  },
  {
    quote: "The resume builder and profile analytics are fantastic features. I got actionable feedback and landed three interviews in the first week. An essential tool for any IT professional.",
    avatar: avatar3,
    name: 'Priya Patel',
    title: 'Cloud Solutions Architect',
  },
  {
    quote: "I'm now working at a startup I'm passionate about.",
    avatar: avatar4,
    name: 'David Lee',
    title: 'Mobile Developer @ Appify',
  },
];

function Testimonials() {
  return (
    <section className="bg-gray-900 text-white py-16 sm:py-20 relative overflow-hidden">
      
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            What <span className="text-cyan-400">Our Users</span> Say
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            Hear from developers and tech professionals who have found success on our platform.
          </p>
        </div>

        {/* Testimonials Slider */}
        <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16 items-stretch" // Stretches the slides to be equal height
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="h-auto">
                {/* CARD: h-full ensures the card fills the stretched slide */}
                <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 h-[28rem] flex flex-col 
                              transition-all duration-300
                              shadow-[0px_0px_15px_rgba(255,255,255,0.05)]
                              hover:shadow-[0px_0px_25px_rgba(56,189,248,0.3)]
                              hover:-translate-y-2">
                  
                  {/* Top part of the card (will grow to fill space) */}
                  <div className="flex-grow">
                    <IconQuote size={40} className="text-cyan-400 mb-4" />
                    <p className="text-gray-300 italic text-lg">"{testimonial.quote}"</p>
                  </div>
                
                {/* Bottom part of the card (fixed height) */}
                <div className="mt-6 flex-shrink-0">
                  <div className="flex items-center">
                    <Avatar src={testimonial.avatar} alt={testimonial.name} radius="xl" size="lg" />
                    <div className="ml-4">
                      <p className="font-bold text-white">{testimonial.name}</p>
                      <p className="text-sm text-gray-400">{testimonial.title}</p>
                    </div>
                  </div>
                   <div className="flex mt-4 text-yellow-400">
                      <IconStarFilled size={20} />
                      <IconStarFilled size={20} />
                      <IconStarFilled size={20} />
                      <IconStarFilled size={20} />
                      <IconStarFilled size={20} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;