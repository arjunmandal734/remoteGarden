import Pricing from "../PageParts/Pricing";
import { PricingProvider } from "../context/PricingContext";

export default function PricingPage() {
  return (
    <PricingProvider>
      <Pricing />
    </PricingProvider>
  );
}
