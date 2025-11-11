import AnimatedButton from "../button/AnimatedButton";

type TierCardProps = {
  leftImage: string;
  rightImage: string;
  title: string;
  requirement: string;
  duration: string;
  perks: string[];
  buttonText: string;
  index?: number;
};

const TierCard = ({
  leftImage,
  rightImage,
  title,
  requirement,
  duration,
  perks,
  buttonText,
  index = 0,
}: TierCardProps) => {
  return (
    <div
      className={`tier-card relative p-6 md:p-8 lg:p-10 transition-all duration-300 delay-${index} w-full`}
    >
      <div className="w-full flex flex-col md:flex-row items-center md:items-stretch gap-6 md:gap-10 lg:gap-12">
        {/* Left Image */}
        <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 lg:w-52 lg:h-52 overflow-hidden">
          <img
            src={leftImage}
            alt="Tier Left"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Center Content */}
        <div className="flex-1 flex flex-col justify-center w-full h-full ml-0 md:ml-8 lg:ml-12 text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-bold mb-2 md:mb-3">
            <span className="gradient-text">The {title}</span>
          </h3>

          <p className="text-xs md:text-sm text-[#B59652] mb-1">
            Requirement: {requirement}
          </p>
          <p className="text-xs md:text-sm text-[#B59652] mb-3 md:mb-4">
            Duration: {duration}
          </p>

          <ul className="space-y-1 md:space-y-1.5 mb-4 md:mb-5 ml-0 md:ml-2">
            {perks.map((perk, idx) => (
              <li key={idx} className="text-xs md:text-sm text-[#B59652]">
                {idx + 1}. {perk}
              </li>
            ))}
          </ul>

          <AnimatedButton
            text={buttonText}
            className="flex items-center justify-center mx-auto md:mx-0 w-fit"
          />
        </div>

        {/* Right Image */}
        <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 lg:w-52 lg:h-52 overflow-hidden mt-4 md:mt-0">
          <img
            src={rightImage}
            alt="Tier Right"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default TierCard;
