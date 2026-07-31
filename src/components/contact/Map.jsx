import Image from 'next/image';
import Link from 'next/link';

function Map() {
  return (
    <div className="w-full bg-[#FFFFFF] px-4 md:px-10 lg:px-20 pt-10 pb-10 lg:pt-12 lg:pb-20">
      <div className="max-w-[1400px] w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Left - Map */}
          <div
            className="relative rounded-2xl overflow-hidden min-h-[400px] lg:min-h-[450px] shadow-lg"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            {/* Google Maps Embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.2032510888175!2d76.3001405745085!3d10.000063173034741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d040e8df339%3A0x93389efe618e598f!2sMetafab!5e0!3m2!1sen!2sin!4v1777453171057!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
              title="Metafab Location"
            />

          </div>

          {/* Right - CTA Banner */}
          <div
            className="relative rounded-2xl overflow-hidden min-h-[400px] lg:min-h-[450px] flex flex-col items-start justify-start text-left text-white shadow-lg"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            {/* Background Image */}
            <Image
              src="/contactimgg.svg"
              alt="Office space"
              fill
              className="object-cover"
            />
            {/* Dark Overlay */}

            {/* Content */}
            <div className="relative z-10 px-8 flex flex-col items-start justify-start pl-4 pt-8">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight leading-tight">
                LET&apos;S BUILD YOUR<br />
                <span className="text-[#FFD900]">NEXT SPACE</span>
              </h2>
              <p className="text-sm md:text-base text-white/90 font-medium mb-8 max-w-[380px] text-left">
                Innovative design, Quality craftsmanship, Timeless comfort.
              </p>
              <Link
                href="/contact"
                className="bg-[#FFD900] hover:bg-[#F0C800] text-black font-semibold py-3 px-7 rounded-xl transition-all duration-300 flex items-center gap-2 text-sm hover:scale-105"
              >
                Get Consultation
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Map;
