import Image from "next/image";

const ProductsBanner = ({ product }) => {
  if (!product) return null;

  return (
    <section className="w-full bg-white font-inter">
      <div className="w-full bg-white pt-24 pb-8 px-4 md:px-10 lg:px-20 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="max-w-[1400px] w-full flex gap-10">
          <div className="hidden lg:flex w-[5%] items-stretch gap-2 py-4 self-stretch justify-center pr-6"></div>
          <div className="w-full mx-auto flex flex-col items-start text-left w-[95%]">
            <h1
              className="text-[12vw] sm:text-[12vw] md:text-[100px] lg:text-[130px] font-semibold leading-none tracking-tighter mb-4 md:mb-6"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <span className="text-[#071F07]">OUR </span>
              <span className="text-[#6E864A]">PRODUCTS</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-10 lg:px-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="flex flex-col gap-6">
            <div className="bg-[#A9BC89] rounded-sm aspect-[4/5] flex items-center justify-center relative overflow-hidden group">
              <Image 
                src={product.image} 
                alt={product.name} 
                width={600} 
                height={750}
                className="w-[85%] h-auto object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            
            <div className="flex gap-4">
              <div className="w-24 h-24 md:w-32 md:h-32 border border-[#071F07] p-2 flex items-center justify-center bg-white cursor-pointer hover:bg-gray-50 transition-colors">
                <Image src={product.image} alt="Thumb 1" width={100} height={100} className="w-full h-full object-contain" />
              </div>
            </div>
          </div>

          <div className="flex flex-col pt-4">
            <div className="inline-block px-3 py-1 bg-[#6E864A] text-white text-[10px] md:text-xs font-medium rounded w-fit mb-6 uppercase tracking-wider">
              {product.category}
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-medium text-[#071F07] leading-[0.9] mb-8 tracking-tighter uppercase">
              {product.name}
            </h1>
{/* 
            <div className="text-gray-600 text-sm md:text-base leading-relaxed mb-8 max-w-lg">
              
            </div> */}

            <div className="text-2xl md:text-3xl font-heading font-medium text-[#071F07] mb-10">
              {product.price}
            </div>

            <div className="space-y-6">
              <h3 className="text-lg md:text-xl font-heading font-medium text-[#071F07] border-b border-gray-100 pb-2">
                PRODUCT DETAILS
              </h3>
              <div className="text-gray-600 text-sm md:text-base whitespace-pre-line">
                {product.description}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-10 lg:px-20 pb-24">
        <div className="pt-16 border-t border-gray-100">
          <h2 className="text-3xl md:text-4xl font-heading font-medium text-[#071F07] mb-8 uppercase">
            PRODUCT DESCRIPTION
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-full lg:max-w-[90%]">
            {product.details}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductsBanner;
