import { usePricingData } from "../hooks/usePricingData.js";
import SubscriptionSection from "../components/pricing/SubscriptionSection.jsx";
import WhyChoosePlanSection from "../components/pricing/WhyChoosePlan.jsx";
import FAQSection from "../components/pricing/FAQSection.jsx";
import PlantStoryMode from "../components/pricing/PlantStoryMode.jsx";
import MostAttracts from "../components/pricing/MostAttracts.jsx";




export default function Pricing() {
  const { plans, loading } = usePricingData();
  
  if (loading) return <p className="text-center py-10">Loading plans...</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-green-200 px-6 py-15">
      <SubscriptionSection plans={plans} />

      <MostAttracts />

      <WhyChoosePlanSection plans={plans} />

      <FAQSection />


      <PlantStoryMode />
    </div>
  );
}
