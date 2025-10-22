type StatsCardProps = {
  value: string;
  label: string;
  image: string;
};

const StatsCard = ({ value, label, image }: StatsCardProps) => {
  return (
    <div className="relative max-w-full w-65">
      {/* Background Frame Image */}
      <img 
        src={image} 
        alt="Card Frame" 
        className="w-full h-auto"
      />
      
      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
        <div className="text-lg md:text-2xl lg:text-3xl font-bold text-[#9F854B] mb-2">
          {value}
        </div>
        <div className="text-sm md:text-base lg:text-lg text-[#9F854B] font-light">
          {label}
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
