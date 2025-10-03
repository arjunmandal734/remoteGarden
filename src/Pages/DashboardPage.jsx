import Dashboard from "../PageParts/Dashboard";
import { DashboardProvider } from "../context/DashboardContext";

export default function PricingPage() {
  return (
    <DashboardProvider>
      <Dashboard />
    </DashboardProvider>
  );
}