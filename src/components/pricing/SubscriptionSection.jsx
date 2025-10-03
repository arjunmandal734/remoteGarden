import PricingCard from "./PricingCard";
import { usePricingData } from "../../context/PricingContext";

export default function SubscriptionSection() {
    const { plans, loading } = usePricingData();
  return (
    <div className="pt-10 px-6">
      <h1 className="text-3xl font-bold text-green-800 text-center mb-8">
        Choose Your Plan
      </h1>
      <div className="flex flex-wrap justify-center gap-6">
        {plans.map((plan) => (
          <PricingCard key={plan.id} {...plan} />
        ))}
      </div>
    </div>
  );
}
