import axios from "axios";

// export async function fetchPricingPlans() {
//   return [
//     {
//       plan: "Sprout",
//       image: "/ilastrations/plan3.png",
//       title: "🌱Sprout Plan Features",
//       price: 0,
//       label: "Free forever",
//       imageUrl: "./images/plan1p.png",
//       slogan: "Start your green journey.",
//       features: [
//         "Weekly photos of plants",
//         "Remote watering(via app)",
//         "Basic fertilizing",
//         "Unlimited plant slots",
//         "Basic plant health status",
//         "Community support access",
//         "Growth timeline with animations",
//         "Daily care reminders",
//         "Growth tracking",
//       ],
//       benefits: [
//         "Get a fresh snapshot of your plant every week to track subtle changes and celebrate growth milestones.",
//         "Hydrate your plant from anywhere with a single tap — perfect for busy days or long-distance care.",
//         "Provide essential nutrients with simple, guided fertilizing options tailored to your plant’s needs.",
//         "Add as many plants as you like — no limits, no restrictions, just pure green freedom.",
//         "View simple indicators of your plant’s well-being, including hydration, light exposure, and growth rate.",
//         "Connect with fellow growers, ask questions, and share your journey in a friendly, plant-loving space.",
//         "Watch your plant’s progress unfold through a visual timeline with smooth, delightful animations.",
//         "Stay on track with gentle nudges to water, fertilize, and check in on your plant’s health.",
//         "Monitor how your plant evolves over time with basic insights into size, posture, and vitality.",
//       ],
//     },
//     {
//       plan: "Bloom",
//       image: "/ilastrations/plan2.png",
//       title: "🌸 Bloom Plan Features",
//       price: 79,
//       label: "Most Popular",
//       imageUrl: "./images/plan2p.png",
//       slogan: "Grow smarter. Care from anywhere.",
//       features: [
//         "Daily photos of plants",
//         "Remote watering (via app)",
//         "Remote fertilizing(via app",
//         "garden atmosphere details",
//         "AI-powered growth tracking",
//         "Custom plant nicknames",
//         "Priority support",
//         "Eco impact stats (CO₂ offset, water saved)",
//         "Seasonal care tips based on plant type",
//         "Growth timeline with animations",
//         "Eco impact stats",
//       ],
//       benefits: [
//         "Capture your plant’s journey every day — perfect for spotting changes and building a visual diary.",
//         "Instantly water your plant from anywhere, with smart scheduling and feedback built into the app.",
//         "Deliver nutrients remotely with guided timing and organic options — no mess, just growth.",
//         "View real-time data on humidity, temperature, and light to understand your plant’s environment.",
//         "Let our AI detect growth patterns, posture shifts, and health signals to guide your care decisions.",
//         "Personalize your garden with fun, meaningful names that reflect your plant’s personality.",
//         "Get faster help and expert guidance whenever you need it — your garden deserves attention.",
//         "See how your care contributes to the planet with real-time impact metrics.",
//         "Receive tailored advice for each season, matched to your plant’s species and growth cycle.",
//         "Enjoy a dynamic visual journey of your plant’s development, updated daily.",
//         "Track your environmental contribution through water savings, carbon offset, and more.",
//       ],
//     },
//     {
//       plan: "Thrive",
//       image: "/ilastrations/plan1.png",
//       title: "🌳 Thrive Plan Features",
//       price: 249,
//       label: "For serious growers",
//       imageUrl: "./images/plan3p.png",
//       slogan: "Thrive with remote planting and real impact.",
//       features: [
//         "All Bloom features",
//         "Live stream of your plant",
//         "real-world plant delivery",
//         "Adjust light exposure",
//         "Advanced growth analytics (charts, insights)",
//         "Eco impact dashboard (personal + global stats)",
//         "Custom garden themes (light/dark/nature)",
//         "Plant health alerts via push/email",
//         "Early access to new features",
//         "Dedicated gardener for your plant",
//         "Organic fertilizing",
//         "Detailed growth analytics",
//       ],
//       benefits: [
//         "Everything from Bloom, plus advanced tools for serious growers and eco champions.",
//         "Watch your plant in real time — see it sway, stretch, and bloom from anywhere in the world.",
//         "Receive fresh produce or flowers from your plant, delivered to your doorstep.",
//         "Control smart grow lights remotely to optimize your plant’s photosynthesis and mood.",
//         "Dive deep into data with interactive charts showing hydration, growth rate, and health trends.",
//         "View your personal impact and see how the GreenScope community is helping the planet.",
//         "Personalize your dashboard with calming themes that reflect your mood and style.",
//         "Get notified instantly if your plant needs attention — hydration, light, or fertilizing.",
//         "Be the first to try new tools, experiments, and premium upgrades before anyone else.",
//         "A real human expert monitors your plant and offers personalized care suggestions.",
//         "Choose eco-friendly, plant-safe fertilizers delivered or activated remotely.",
//         "Explore every aspect of your plant’s development with precision insights and visual storytelling.",
//       ],
//     },
//   ];
// }

const path = "/api/v1/subscription";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}${path}`,
});

export const fetchAllSubscriptionsData = async () => {
  try {
    //return await fetchPricingPlans();

    const cached = sessionStorage.getItem("pricingPlans");
    if (cached) {
      return JSON.parse(cached); // convert string back to array
    }
    const response = await api.get("/allplansinfo");
    if (response.data.data) {
      sessionStorage.setItem(
        "pricingPlans",
        JSON.stringify(response.data.data)
      );
      return response.data.data;
    }
  } catch (error) {
    console.error("Pricing API error:", error);
  }
};
