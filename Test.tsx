
type StatsCardProps = {
  value: string;
  label: string;
  image: string;
};

const StatsCard = ({ value, label, image }: StatsCardProps) => {
  return (
    <div className="relative w-full">
      {/* Background Frame Image */}
      <img 
        src={image} 
        alt="Card Frame" 
        className="w-full h-auto"
      />
      
      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
        <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-400 mb-2">
          {value}
        </div>
        <div className="text-sm md:text-base lg:text-lg text-amber-300/80 font-light">
          {label}
        </div>
      </div>
    </div>
  );
};

export default function Test() {
  const statsCards = [
    {
      value: "15",
      label: "Total Order",
      image: "/test.png"
    },
    {
      value: "28",
      label: "Completed",
      image: "/test.png"
    },
    {
      value: "3",
      label: "Pending",
      image: "/test.png"
    },
    {
      value: "$2,450",
      label: "Revenue",
      image: "/test.png"
    },
    {
      value: "156",
      label: "Customers",
      image: "/test.png"
    },
    {
      value: "4.8",
      label: "Rating",
      image: "/test.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Dashboard Statistics
          </h1>
          <p className="text-slate-400 text-lg">
            Beautiful stats cards with custom frame design
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {statsCards.map((card, index) => (
            <StatsCard key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
}