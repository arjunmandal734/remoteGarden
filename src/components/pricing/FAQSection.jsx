import { useState } from "react";

const faqs = [
  {
    question: "Can I cancel my subscription anytime?",
    answer: `Yes! You can cancel your plan by contacting us directly. Please note that cancellations must be
       requested before the 20th day of your current paid plan. Once confirmed, your subscription will
        be switched to the Free Plan, and your payment will be refunded within 7 days.`,
  },
  {
    question: "Do I need any hardware to use GreenScope?",
    answer: `No hardware is required. GreenScope enables remote watering, fertilizing, and other plant care tasks—all
       triggered effortlessly with a few taps on your mobile phone. GreenScope works remotely using satellite
        and sensor data to monitor your plants.`,
  },
  {
    question: "What’s the difference between Bloom and Thrive plan?",
    answer: `Bloom offers smart remote care with daily plant photos, watering and fertilizing via app, atmosphere insights, and
   AI-powered growth tracking—perfect for personal garden lovers. Thrive includes everything in Bloom, plus live streaming,
    delivery of your plant or its produce (like flowers or fruits) at any stage of growth, light adjustment, advanced growth
     analytics, and a dedicated gardener, making it ideal for those who want deeper connection, richer insights, and hands-free
      premium care.`,
  },
  {
    question: "Is there a free trial?",
    answer: `No, we don’t offer a free trial for paid plans. However, our Free Plan is available forever—giving you access to essential
       features at no cost, with no time limit.`,
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-green-700 text-center mb-6">
        🌿 Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-green-300 rounded-xl p-4 shadow-sm hover:shadow-md transition"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full text-left flex justify-between items-center font-semibold text-green-800"
            >
              {faq.question}
              <span className="text-green-500">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <p className="mt-3 text-sm text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
