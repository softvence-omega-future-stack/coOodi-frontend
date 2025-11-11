import { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedButton from "../components/button/AnimatedButton";

gsap.registerPlugin(ScrollTrigger);

type StatsCardProps = {
  value: string;
  label: string;
  image: string;
  icon?: React.ReactNode;
};

const StatsCard = ({ value, label, image, icon }: StatsCardProps) => {
  return (
    <div
      className="relative w-full stats-card"
      style={{ aspectRatio: "1 / 1" }}
    >
      {/* Background Frame Image */}
      <img
        src={image}
        alt="Card Frame"
        className="absolute inset-0 w-full h-full object-contain"
      />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 md:p-8">
        {icon && <div className="mb-3 md:mb-4">{icon}</div>}
        <div className="text-xl md:text-2xl lg:text-3xl font-bold text-[#B59652] mb-1">
          {value}
        </div>
        {label && (
          <div className="text-sm md:text-base text-[#B59652] font-light text-center">
            {label}
          </div>
        )}
      </div>
    </div>
  );
};

export default function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    orderIssue: false,
    accountTiers: false,
    websiteBug: false,
    generalQuestions: false,
    orderId: "",
    description: "",
    file: null as File | null,
  });

  useEffect(() => {
    gsap.fromTo(
      "h1, h2",
      { opacity: 0, y: -30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
      }
    );

    gsap.fromTo(
      ".form-section",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        delay: 0.3,
      }
    );

    gsap.fromTo(
      ".stats-card",
      { opacity: 0, y: 60, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
        delay: 0.6,
      }
    );
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, type } = e.target;
    const value =
      type === "checkbox"
        ? (e.target as HTMLInputElement).checked
        : e.target.value;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({
        ...prev,
        file: e.target.files![0],
      }));
    }
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-[#001117] pt-28 pb-12 relative overflow-hidden"
      style={{ backgroundImage: 'url("/contact/Contact.webp")', backgroundSize: "100% 100%", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
    >
      <style>{`
        @keyframes chalkFlicker {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 0.9; }
        }

        .chalk-input {
          position: relative;
          background: transparent;
          border-radius: 6px;
          overflow: hidden;
        }

        .chalk-input::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border: 3px solid #9F854B;
          border-radius: 6px;
          opacity: 0.8;
          mix-blend-mode: screen;
          filter: blur(0.8px) brightness(1.2) contrast(150%);
          mask-image: url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='4' seed='5'/%3E%3CfeDisplacementMap in='SourceGraphic' scale='5'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          -webkit-mask-image: url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='4' seed='5'/%3E%3CfeDisplacementMap in='SourceGraphic' scale='5'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          mask-mode: alpha;
          -webkit-mask-mode: alpha;
          pointer-events: none;
          animation: chalkFlicker 3s ease-in-out infinite;
        }

        .chalk-input input,
        .chalk-input textarea {
          position: relative;
          z-index: 2;
          background: transparent;
          border: none;
          outline: none;
          color: #d1d5db;
          width: 100%;
          padding: 12px 16px;
          font-family: inherit;
        }

        .chalk-input input::placeholder,
        .chalk-input textarea::placeholder {
          color: #6b7280;
        }

        .chalk-input:focus-within::before {
          filter: blur(1px) brightness(1.3) contrast(160%);
          transition: all 0.3s ease-in-out;
        }

        .chalk-button {
          position: relative;
          background: #8B2E2E;
          border-radius: 25px;
          overflow: hidden;
          border: 2px solid #9F854B;
        }

        .chalk-button::before {
          content: "";
          position: absolute;
          top: 2px;
          left: 2px;
          right: 2px;
          bottom: 2px;
          border-radius: 23px;
          opacity: 0.8;
          mix-blend-mode: screen;
          filter: blur(0.8px) brightness(1.2) contrast(150%);
          mask-image: url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='4' seed='5'/%3E%3CfeDisplacementMap in='SourceGraphic' scale='5'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          -webkit-mask-image: url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='4' seed='5'/%3E%3CfeDisplacementMap in='SourceGraphic' scale='5'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          mask-mode: alpha;
          -webkit-mask-mode: alpha;
          pointer-events: none;
        }

        .chalk-button button {
          position: relative;
          z-index: 2;
          background: transparent;
          border: none;
          outline: none;
          cursor: pointer;
        }

        .chalk-button:hover::before {
          filter: blur(1px) brightness(1.3) contrast(160%);
          transition: all 0.3s ease-in-out;
        }

        .chalk-checkbox {
          position: relative;
          width: 20px;
          height: 20px;
          background: transparent;
          border-radius: 4px;
          overflow: hidden;
          flex-shrink: 0;
        }

        .chalk-checkbox::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          // border: 2px solid #9F854B;
          border-radius: 4px;
          opacity: 0.8;
          mix-blend-mode: screen;
          filter: blur(0.8px) brightness(1.2) contrast(150%);
          mask-image: url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='4' seed='5'/%3E%3CfeDisplacementMap in='SourceGraphic' scale='5'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          -webkit-mask-image: url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='4' seed='5'/%3E%3CfeDisplacementMap in='SourceGraphic' scale='5'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          mask-mode: alpha;
          -webkit-mask-mode: alpha;
          pointer-events: none;
          animation: chalkFlicker 3s ease-in-out infinite;
        }

        .chalk-checkbox input {
          position: absolute;
          opacity: 0;
          cursor: pointer;
        }

        .chalk-checkbox .checkmark {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #C9A961;
          font-size: 14px;
          z-index: 2;
          opacity: 0;
          transition: opacity 0.2s;
        }

        .chalk-checkbox input:checked ~ .checkmark {
          opacity: 1;
        }

        .file-upload-area {
          position: relative;
          background: transparent;
          border-radius: 6px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s;
        }

        .file-upload-area::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border: 3px dashed #9F854B;
          border-radius: 6px;
          opacity: 0.8;
          mix-blend-mode: screen;
          filter: blur(0.8px) brightness(1.2) contrast(150%);
          mask-image: url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='4' seed='5'/%3E%3CfeDisplacementMap in='SourceGraphic' scale='5'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          -webkit-mask-image: url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='4' seed='5'/%3E%3CfeDisplacementMap in='SourceGraphic' scale='5'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          mask-mode: alpha;
          -webkit-mask-mode: alpha;
          pointer-events: none;
          animation: chalkFlicker 3s ease-in-out infinite;
        }

        .file-upload-area:hover::before {
          filter: blur(1px) brightness(1.3) contrast(160%);
        }
      `}</style>

      {/* Floating Decorative Icons */}
      {/* <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute top-12 left-8 md:left-12 w-8 h-8 md:w-12 md:h-12 text-yellow-500/10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="8" strokeWidth="2" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>

        <svg
          className="absolute top-8 right-8 md:right-16 w-10 h-10 md:w-14 md:h-14 text-yellow-500/10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16 12a4 4 0 11-8 0 4 4 0 018 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
          />
        </svg>

        <svg
          className="absolute top-1/3 right-12 w-8 h-8 text-yellow-500/10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>

        <svg
          className="absolute bottom-1/3 left-8 w-10 h-10 text-yellow-500/10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4v16m8-8H4"
          />
        </svg>

        <svg
          className="absolute bottom-1/4 right-16 w-12 h-12 text-yellow-500/10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>

        <div className="absolute top-1/4 left-1/4 text-yellow-500/10 text-xl">
          △
        </div>
      </div> */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-10 lg:mb-26 ">
          <span className="gradient-text">Contact</span>
        </h1>

        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-center mb-8 md:mb-12">
          <span className="text-[#B59652]">Need a Help?</span>
        </h2>

        {/* Form */}
        <div className="space-y-6">
          {/* Email */}
          <div className="form-section">
            <label className="block text-sm text-amber-400/80 mb-2">
              Email:
            </label>
            <div className="chalk-input">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder=""
              />
            </div>
          </div>

          {/* Subject of Interest */}
          <div className="form-section">
            <label className="block text-sm text-amber-400/80 mb-3">
              Subject of interest:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="chalk-checkbox">
                  <input
                    type="checkbox"
                    name="orderIssue"
                    checked={formData.orderIssue}
                    onChange={handleChange}
                  />
                  <span className="checkmark">✓</span>
                </div>
                <span className="text-sm text-gray-400 group-hover:text-amber-400 transition-colors">
                  Order Issue
                </span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="chalk-checkbox">
                  <input
                    type="checkbox"
                    name="accountTiers"
                    checked={formData.accountTiers}
                    onChange={handleChange}
                  />
                  <span className="checkmark">✓</span>
                </div>
                <span className="text-sm text-gray-400 group-hover:text-amber-400 transition-colors">
                  Account/Tiers
                </span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="chalk-checkbox">
                  <input
                    type="checkbox"
                    name="websiteBug"
                    checked={formData.websiteBug}
                    onChange={handleChange}
                  />
                  <span className="checkmark">✓</span>
                </div>
                <span className="text-sm text-gray-400 group-hover:text-amber-400 transition-colors">
                  Website Bug
                </span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="chalk-checkbox">
                  <input
                    type="checkbox"
                    name="generalQuestions"
                    checked={formData.generalQuestions}
                    onChange={handleChange}
                  />
                  <span className="checkmark">✓</span>
                </div>
                <span className="text-sm text-gray-400 group-hover:text-amber-400 transition-colors">
                  General Questions
                </span>
              </label>
            </div>
          </div>

          {/* Order ID */}
          <div className="form-section">
            <label className="block text-sm text-amber-400/80 mb-2">
              Enter Order ID:
            </label>
            <div className="chalk-input">
              <input
                type="text"
                name="orderId"
                value={formData.orderId}
                onChange={handleChange}
                placeholder=""
              />
            </div>
          </div>

          {/* Description */}
          <div className="form-section">
            <label className="block text-sm text-amber-400/80 mb-2">
              Perks (Describe the problem)
            </label>
            <div className="chalk-input">
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={5}
                placeholder=""
              />
            </div>
          </div>

          {/* File Upload */}
          <div className="form-section">
            <label className="block text-sm text-amber-400/80 mb-2">
              Attach File:
            </label>
            <label className="file-upload-area block">
              <input
                type="file"
                onChange={handleFileChange}
                className="hidden"
              />
              <div className="relative z-10 p-6 text-center">
                <svg
                  className="w-8 h-8 mx-auto mb-2 text-amber-500/60"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                <p className="text-sm text-gray-400">
                  {formData.file
                    ? formData.file.name
                    : "Click to upload or drag & drop file (Maximum file size 20 MB)"}
                </p>
              </div>
            </label>
          </div>

          {/* Submit Button */}
          <div className="form-section flex justify-center pt-4">
            <div className="">
              <AnimatedButton text="SUBMIT TICKET" onClick={handleSubmit} />
            </div>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mt-16 md:mt-20 max-w-5xl mx-auto">
          <StatsCard
            value="24-48h"
            label="Response Time"
            image="/test.png"
            icon={
              <svg
                className="w-12 h-12 md:w-14 md:h-14 text-[#B59652]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            }
          />

          <StatsCard
            value="FAQ"
            label=""
            image="/test.png"
            icon={
              <svg
                className="w-12 h-12 md:w-14 md:h-14 text-[#B59652]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            }
          />

          <StatsCard
            value="COMMUNITY"
            label=""
            image="/test.png"
            icon={
              <svg
                className="w-12 h-12 md:w-14 md:h-14 text-[#B59652]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            }
          />
        </div>
      </div>
    </div>
  );
}
