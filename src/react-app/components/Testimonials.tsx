import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

const testimonials = [
  {
    quote: "Meu LinkedIn ganhou outra vida. As fotos parecem de estúdio real.",
    author: "Mariana, Advogada"
  },
  {
    quote: "Consegui padronizar o time inteiro sem logística de estúdio.",
    author: "Camila, RH"
  },
  {
    quote: "Transformaram selfies em retratos editoriais. Muito acima do esperado.",
    author: "Rafael, Designer"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">O que dizem nossos clientes</h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">Depoimentos reais de profissionais que transformaram sua presença digital.</p>
        </div>
        
        <Swiper
          modules={[Pagination, Autoplay]}
          loop={true}
          autoHeight={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
          }}
          className="depo-swiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="glass rounded-xl p-4 sm:p-6 max-w-xl mx-auto">
                <p className="text-base sm:text-lg">"{testimonial.quote}"</p>
                <div className="mt-4 text-sm text-gray-400">— {testimonial.author}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
}
