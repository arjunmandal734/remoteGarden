export async function fetchPricingPlans() {
  return [
    {
      id: "basic",
      name: "Basic",
      price: "Free",
      features: ["Manual watering", "Plant status", "Limited support", "fertilizing", "growth", "support"],
    },
    {
      id: "pro",
      name: "Pro",
      price: "$9/month",
      features: ["Remote watering", "AI growth tracking", "Priority support", "fertilizing", "growth", "support"],
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "Custom",
      features: ["Multi-garden", "Team access", "Dedicated manager", "fertilizing", "growth", "support"],
    },
  ];
}