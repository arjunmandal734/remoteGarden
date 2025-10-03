import { usePricingData } from "../context/PricingContext";
import SubscriptionSection from "../components/pricing/SubscriptionSection";
import WhyChoosePlanSection from "../components/pricing/WhyChoosePlan";



export default function Pricing() {
  const { plans, loading } = usePricingData();

  if (loading) return <p className="text-center py-10">Loading plans...</p>;

  return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-green-200 px-6 py-10">
        <SubscriptionSection />
        <WhyChoosePlanSection />
        
      </div>
  );
}
