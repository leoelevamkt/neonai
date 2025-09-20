import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import LazyImage from './LazyImage';

const caseImages = [
  {
    src: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=600&q=75",
    alt: "Chefe de cozinha"
  },
  {
    src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=75",
    alt: "Produtora de conteúdo"
  },
  {
    src: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=600&q=75",
    alt: "Arquiteta"
  },
  {
    src: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=600&q=75",
    alt: "Desenvolvedor"
  },
  {
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=75",
    alt: "Executivo"
  },
  {
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=75",
    alt: "Médica"
  }
];

export default function Cases() {
  return (
    <section id="cases" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">Galeria de Ensaios</h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">Profissões diferentes, um padrão: retratos com estética de estúdio.</p>
        </div>

        <Swiper
          modules={[Autoplay, EffectCoverflow]}
          effect="coverflow"
          coverflowEffect={{
            rotate: 10,
            stretch: 0,
            depth: 140,
            modifier: 1.1,
            slideShadows: true,
          }}
          loop={true}
          speed={700}
          centeredSlides={true}
          slidesPerView={1.2}
          spaceBetween={24}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={false}
          navigation={false}
          scrollbar={false}
          breakpoints={{
            640: {
              slidesPerView: 1.6,
            },
            768: {
              slidesPerView: 2.2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="cases-swiper"
        >
          {caseImages.map((image, index) => (
            <SwiperSlide key={index} className="w-64 md:w-80 lg:w-96">
              <LazyImage 
                className="rounded-xl shadow-neon w-full h-auto aspect-[3/4]" 
                src={image.src} 
                alt={image.alt} 
                loading={index < 3 ? "eager" : "lazy"}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        
        
        
      </div>
    </section>
  );
}
