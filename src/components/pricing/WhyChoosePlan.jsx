import PlanBenefitsCard from "../cards/PlanBenefitsCard";

export default function WhyChoosePlanSection() {
  return (
    <div className="px-6 py-10 bg-gradient-to-br from-green-50 via-green-100 to-green-200">
      <h2 className="text-3xl font-bold text-green-800 text-center mb-10">
        Why Choose a Plan?
      </h2>

      <PlanBenefitsCard
        image="/assets/free.png"
        title="Free Plan"
        description="Perfect for beginners who want to monitor and care for their plants manually."
        benefits={[
          "Unlimited plant care access",
          "Manual watering system",
          "Basic fertilizing support",
          "Weekly plant photos",
          "Basic diagnostics",
          "Simple monitoring panel",
        ]}
      />

      <PlanBenefitsCard
        image="/assets/pro.png"
        title="Pro Plan"
        description="Ideal for plant lovers who want smarter insights and automated care."
        benefits={[
          "Includes all Free Plan features",
          "Daily plant photos",
          "New growth notifications",
          "Organic fertilizer recommendations",
          "Advanced diagnostics",
          "AI-powered care suggestions",
        ]}
      />

      <PlanBenefitsCard
        image="/assets/premium.png"
        title="Premium Plan"
        description="Coming soon: full automation, live streaming, and real-world plant delivery."
        benefits={[
          "Includes all Pro Plan features",
          "Live stream of your plants",
          "Harvest tracking (vegetables, fruits, flowers)",
          "Home delivery of plant produce",
          "Priority support",
          "Smart garden dashboard",
        ]}
      />
    </div>
  );
}
