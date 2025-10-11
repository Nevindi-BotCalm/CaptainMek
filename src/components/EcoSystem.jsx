import image10 from "../assets/image10.webp";
import image11 from "../assets/image11.webp";
import image12 from "../assets/image12.webp";
import image13 from "../assets/image13.webp";

function EcoSystem() {
  return (
    <div className="relative w-full overflow-hidden mt-[150px] md:mt-[200px] lg:mt-[200px] xl:mt-[550px]">
      {/* Desktop / Laptop */}
      <div className="hidden lg:block relative min-h-[800px] xl:min-h-[900px] pb-12 lg:pb-16">
        <div className="relative w-full max-w-[1920px] mx-auto px-4 xl:px-8">
          {/* Title */}
          <div className="mb-8 xl:mb-12">
            <h2 className="font-halo font-normal text-[56px] xl:text-[70px] 2xl:text-[74px] leading-tight">
              ECOSYSTEM ARSENAL
            </h2>
          </div>

          {/* Image Container - Responsive positioning */}
          <div className="relative w-full h-[600px] xl:h-[700px] 2xl:h-[800px]">
            {/* Card 13 - Left, with jump animation */}
            <img
              src={image13}
              alt="Card 13"
              className="absolute w-[36%] xl:w-[38%] max-w-[720px] h-auto top-[8%] left-0 animate-[jump_0.8s_ease-in-out_infinite]"
            />

            {/* Card 10 - Center Left */}
            <img
              src={image10}
              alt="Card 10"
              className="absolute w-[20%] xl:w-[22%] max-w-[400px] h-auto top-[28%] xl:top-[25%] left-[34%] xl:left-[35%]"
            />

            {/* Card 11 - Center Right */}
            <img
              src={image11}
              alt="Card 11"
              className="absolute w-[23%] xl:w-[25%] max-w-[470px] h-auto top-[2%] xl:top-[0%] left-[51%] xl:left-[52%]"
            />

            {/* Card 12 - Right */}
            <img
              src={image12}
              alt="Card 12"
              className="absolute w-[20%] xl:w-[22%] max-w-[400px] h-auto top-[32%] xl:top-[30%] left-[70%] xl:left-[72%]"
            />
          </div>
        </div>
      </div>

      {/* Tablet Layout (md to lg) */}
      <div className="hidden md:block lg:hidden px-4">
        <h2 className="font-halo text-[48px] md:text-[56px] font-normal leading-tight text-center mb-10 md:mb-12">
          ECOSYSTEM ARSENAL
        </h2>

        <div className="grid grid-cols-2 gap-6 md:gap-8 max-w-[900px] mx-auto">
          <div className="col-span-2 flex justify-center">
            <img
              src={image13}
              alt="Card 13"
              className="w-full max-w-[500px] h-auto object-contain rounded-lg"
            />
          </div>
          <div className="flex justify-center">
            <img
              src={image10}
              alt="Card 10"
              className="w-full max-w-[350px] h-auto object-contain rounded-lg"
            />
          </div>
          <div className="flex justify-center">
            <img
              src={image11}
              alt="Card 11"
              className="w-full max-w-[350px] h-auto object-contain rounded-lg"
            />
          </div>
          <div className="col-span-2 flex justify-center">
            <img
              src={image12}
              alt="Card 12"
              className="w-full max-w-[350px] h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Mobile Layout (below md) */}
      <div className="block md:hidden w-full px-4 py-8">
        <h2 className="font-halo text-[32px] xs:text-[36px] sm:text-[40px] font-normal leading-tight text-center mb-8 sm:mb-10">
          ECOSYSTEM ARSENAL
        </h2>

        <div className="flex flex-col gap-6 sm:gap-8 w-full max-w-[500px] mx-auto">
          {[image13, image10, image11, image12].map((img, idx) => (
            <div key={idx} className="w-full flex justify-center">
              <img
                src={img}
                alt={`Card ${idx + 1}`}
                className="w-[90%] max-w-[420px] h-auto object-contain rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EcoSystem;
