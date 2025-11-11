import { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Shopping");
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);

  const categories = ["Shopping", "Returns", "Account"];

  const faqData = {
    Shopping: [
      {
        q: "How can I track my order?",
        a: "You can track your order by logging into your account and visiting the 'Orders' section. You'll find real-time tracking information for all your purchases.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept credit cards, debit cards, PayPal, and Silk Road Tokens. All payments are processed securely.",
      },
      {
        q: "Do you offer international shipping?",
        a: "Yes, we ship worldwide! Shipping costs and delivery times vary by location.",
      },
      {
        q: "What are Silk Road Tokens?",
        a: "Silk Road Tokens are our platform's digital currency. You can earn them through purchases and use them for discounts and exclusive items.",
      },
      {
        q: "Can I cancel my order?",
        a: "Yes, you can cancel your order within 24 hours of purchase. After that, the order enters processing and cannot be cancelled.",
      },
      {
        q: "How do I use a promo code?",
        a: "Enter your promo code at checkout in the designated field before completing your purchase.",
      },
    ],
    Returns: [
      {
        q: "What is your return policy?",
        a: "We offer a 30-day return policy for most items. Products must be unused and in their original packaging.",
      },
      {
        q: "How do I initiate a return?",
        a: "Go to your order history, select the item you want to return, and click 'Request Return'. Follow the instructions provided.",
      },
      {
        q: "When will I receive my refund?",
        a: "Refunds are processed within 5-7 business days after we receive your returned item.",
      },
      {
        q: "Do I have to pay for return shipping?",
        a: "Return shipping is free for defective items. For other returns, standard shipping fees apply.",
      },
      {
        q: "Can I exchange an item?",
        a: "Yes, you can request an exchange through the same return process. Select 'Exchange' instead of 'Refund'.",
      },
      {
        q: "Are there any non-returnable items?",
        a: "Yes, digital products, gift cards, and personalized items cannot be returned.",
      },
    ],
    Account: [
      {
        q: "How do the membership tiers work?",
        a: "We have three tiers: Wanderer, Adventurer, and Lorekeeper. Each tier offers increasing benefits based on your Silk Road Coins balance.",
      },
      {
        q: "How do I create an account?",
        a: "Click 'Sign Up' in the top right corner, enter your email and create a password. You'll receive a confirmation email to activate your account.",
      },
      {
        q: "I forgot my password. What do I do?",
        a: "Click 'Forgot Password' on the login page. Enter your email and we'll send you instructions to reset your password.",
      },
      {
        q: "How do I update my account information?",
        a: "Log in to your account, go to 'Settings', and you can update your email, password, and personal information.",
      },
      {
        q: "How can I contact support?",
        a: "You can reach our support team through the Contact page, email support@silkroad.com, or use the live chat feature.",
      },
      {
        q: "Can I delete my account?",
        a: "Yes, go to Account Settings and select 'Delete Account'. Note that this action is permanent and cannot be undone.",
      },
    ],
  };

  useEffect(() => {
    gsap.fromTo(
      "h1",
      { opacity: 0, y: -30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
      }
    );

    gsap.fromTo(
      "h2",
      { opacity: 0, y: -20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power2.out",
      }
    );

    gsap.fromTo(
      ".search-box",
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        delay: 0.4,
        ease: "back.out(1.7)",
      }
    );

    gsap.fromTo(
      ".category-btn",
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.6,
        ease: "power2.out",
      }
    );

    gsap.fromTo(
      ".faq-item",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.8,
        ease: "power2.out",
      }
    );
  }, []);

  // Reset expanded question when category changes
  useEffect(() => {
    setExpandedQuestion(null);

    // Re-animate FAQ items when category changes
    gsap.fromTo(
      ".faq-item",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      }
    );
  }, [activeCategory]);

  const currentFAQs = faqData[activeCategory as keyof typeof faqData];

  return (
    <div className="min-h-screen bg-[#001117] pt-28 pb-12 relative overflow-hidden" 
      style={{ backgroundImage: 'url("/faq/FAQ.webp")', backgroundSize: "100% 100%", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
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

        .chalk-input input {
          position: relative;
          z-index: 2;
          background: transparent;
          border: none;
          outline: none;
          color: #d1d5db;
          width: 100%;
          padding: 16px 20px;
          font-family: inherit;
          font-size: 16px;
        }

        .chalk-input input::placeholder {
          color: #6b7280;
        }

        .chalk-input:focus-within::before {
          filter: blur(1px) brightness(1.3) contrast(160%);
          transition: all 0.3s ease-in-out;
        }

        .chalk-button {
          position: relative;
          background: transparent;
          border-radius: 6px;
          overflow: hidden;
          border: 2px solid #9F854B;
          cursor: pointer;
          transition: all 0.3s;
        }

        .chalk-button::before {
          content: "";
          position: absolute;
          top: 2px;
          left: 2px;
          right: 2px;
          bottom: 2px;
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

        .chalk-button.active {
          background: #B59652;
        }

        .chalk-button:hover {
          background: rgba(181, 150, 82, 0.3);
        }

        .chalk-button.active span {
          color: #001117;
        }

        .chalk-button span {
          position: relative;
          z-index: 2;
          display: block;
          padding: 12px 24px;
          color: #B59652;
          font-weight: 600;
          font-size: 15px;
        }

        .chalk-button:hover::before {
          filter: blur(1px) brightness(1.3) contrast(160%);
        }

        .faq-question-box {
          position: relative;
          background: transparent;
          border-radius: 6px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s;
        }

        .faq-question-box::before {
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

        .faq-question-box:hover::before {
          filter: blur(1px) brightness(1.3) contrast(160%);
        }

        .faq-question-content {
          position: relative;
          z-index: 2;
          padding: 18px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .search-icon {
          position: absolute;
          left: 20px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 3;
          color: #6b7280;
        }

        .chalk-input.with-icon input {
          padding-left: 50px;
        }
      `}</style>

      {/* Floating Decorative Icons */}
      {/* <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute top-12 left-8 md:left-12 w-10 h-10 md:w-14 md:h-14 text-yellow-500/10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
          />
        </svg>

        <svg
          className="absolute top-8 right-8 md:right-16 w-12 h-12 md:w-16 md:h-16 text-yellow-500/10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 3v1m0 16v1m8-9h1M3 12H2m16.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"
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
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>

        <svg
          className="absolute bottom-20 right-12 w-8 h-8 text-yellow-500/10"
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

        <div className="absolute top-1/4 left-1/3 text-yellow-500/10 text-2xl">
          △
        </div>
        <div className="absolute top-1/2 right-1/4 text-yellow-500/10 text-xl rotate-45">
          ✦
        </div>
      </div> */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-10 md:mb-26 ">
          <span className="gradient-text">FAQ's</span>
        </h1>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center mb-8 md:mb-10 text-[#B59652]">
          Need a Help?
        </h2>

        {/* Search Box */}
        <div className="search-box mb-10 max-w-4xl mx-auto">
          <div className="chalk-input with-icon">
            <svg
              className="search-icon w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search"
            />
          </div>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <div
              key={category}
              className={`chalk-button category-btn ${activeCategory === category ? "active" : ""}`}
              onClick={() => setActiveCategory(category)}
            >
              <span>{category}</span>
            </div>
          ))}
        </div>

        {/* FAQ Questions */}
        <div className="space-y-5">
          {currentFAQs
            .filter(
              (item) =>
                searchQuery.trim() === "" ||
                item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.a.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((item, index) => (
              <div
                key={index}
                className="faq-question-box faq-item"
                onClick={() =>
                  setExpandedQuestion(expandedQuestion === index ? null : index)
                }
              >
                <div className="faq-question-content">
                  <span className="text-[#B59652] text-base md:text-lg">
                    {item.q}
                  </span>
                  <img
                    src="/faq/faq.svg"
                    alt="right arrow"
                    className={`transition-transform duration-300 ${
                      expandedQuestion === index
                        ? "rotate-[-90deg]"
                        : "rotate-90"
                    }`}
                  />
                </div>
                {expandedQuestion === index && (
                  <div className="relative z-10 px-6 pb-5 text-gray-400 text-sm md:text-base">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
