import PlanBenefitsCard from "./PlanBenefitsCard";
import { motion } from "framer-motion";

export default function WhyChoosePlanSection({plans}) {


  return (
    <div className="px-6 py-12 bg-gradient-to-br from-green-50 via-green-100 to-green-200">
      <h2 className="text-3xl font-bold text-green-800 text-center mb-12">
        🌿 Why Choose a Plan?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <PlanBenefitsCard
              imageUrl={plan.image}
              plan={plan.title}
              slogan={plan.slogan}
              benefits={plan.benefits}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
