import React from 'react';
import { Avatar } from '@mantine/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { IconQuote, IconStarFilled } from '@tabler/icons-react';
import avatar1 from '../JobPortalResources/avatar1.png';
import avatar2 from '../JobPortalResources/avatar2.png';
import avatar3 from '../JobPortalResources/avatar.png';
import avatar4 from '../JobPortalResources/avatar.png';

const testimonials = [
  {
    quote:
      'This platform is a game-changer for developers. I found my dream job as a Senior Backend Engineer within two weeks. The quality of listings is unmatched.',
    avatar: avatar1,
    name: 'Sarah Johnson',
    title: 'Backend Engineer @ TechCorp',
  },
  {
    quote:
      "As a UI/UX designer, finding a role that matched my creative vision was tough. This site's filtering and detailed job descriptions made it incredibly easy. Highly recommended!",
    avatar: avatar2,
    name: 'Michael Chen',
    title: 'Lead UI/UX Designer @ Innovate Inc.',
  },
  {
    quote:
      'The resume builder and profile analytics are fantastic features. I got actionable feedback and landed three interviews in the first week. An essential tool for any IT professional.',
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
    <section className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-16 sm:py-20 relative overflow-hidden transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            What <span className="text-faded-jade-600 dark:text-faded-jade-400">Our Users</span> Say
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Hear from developers and tech professionals who have found success on our platform.
          </p>
        </div>

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
          className="pb-16 items-stretch"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="h-auto">
              <div className="bg-faded-jade-50/90 dark:bg-gray-900 p-8 rounded-xl border border-faded-jade-200/70 dark:border-gray-700 h-[28rem] flex flex-col transition-all duration-300 shadow-[0px_15px_35px_rgba(19,121,111,0.12)] dark:shadow-[0px_0px_30px_rgba(255,255,255,0.05)] hover:shadow-[0px_0px_25px_rgba(56,189,248,0.3)] hover:-translate-y-2">
                <div className="flex-grow">
                  <IconQuote size={40} className="text-faded-jade-500 mb-4" />
                  <p className="text-gray-700 dark:text-gray-300 italic text-lg">"{testimonial.quote}"</p>
                </div>

                <div className="mt-6 flex-shrink-0">
                  <div className="flex items-center">
                    <Avatar src={testimonial.avatar} alt={testimonial.name} radius="xl" size="lg" />
                    <div className="ml-4">
                      <p className="font-bold text-faded-jade-700 dark:text-white">{testimonial.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.title}</p>
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
