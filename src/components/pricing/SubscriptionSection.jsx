import PricingCard from "./PricingCard";
import { motion } from "framer-motion";

export default function SubscriptionSection({ plans }) {
  // const planList = Array.isArray(plans) ? plans : plans?.data || [];

  return (
    <div className="pt-10 px-6">
      <h1 className="text-3xl font-bold text-green-800 text-center mb-8">
        Choose Your Plan
      </h1>

      <div className="flex flex-wrap justify-center gap-6">
        {/* add the rest map function*/}
        {plans.map((plan, index) => (
          <motion.div
            key={plan.plan}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <PricingCard {...plan} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
