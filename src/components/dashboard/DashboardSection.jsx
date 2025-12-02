import PlantOverviewCard from "./PlantOverviewCard";
import WateringControl from "./WateringControl";
import ProgressBadges from "./ProgressBadges";
import HealthCircle from "./HealthCircle";
import ShimmerCard from "./ShimmerCard";
import GardenGrid from "./GardenGrid";
import NotificationsPanel from "./NotificationsPanel";
import SubscriptionStatus from "./SubscriptionStatus";
import CommunityStats from "./CommunityStats";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function DashboardSection() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const plantCards = [
    {
      name: "Fern",
      status: "Healthy",
      lastWatered: "Oct 3",
      stage: "Sprouted",
    },
    {
      name: "Peace Lily",
      status: "Needs Water",
      lastWatered: "Oct 1",
      stage: "Growing",
    },
    {
      name: "Aloe Vera",
      status: "Thriving",
      lastWatered: "Oct 4",
      stage: "Blooming",
    },
  ];

  const healthStatus = {
    Fern: 85,
    PeaceLily: 45,
    AloeVera: 92,
  };

  const badges = [
    "Sprout Starter",
    "Water Warrior",
    "Eco Guardian",
    "Bloom Boss",
  ];

  const gardenBuckets = [
    { name: "Bucket A", status: "Moist" },
    { name: "Bucket B", status: "Dry" },
    { name: "Bucket C", status: "Optimal" },
  ];

  const notifications = [
    "Fern watered successfully 🌿",
    "Peace Lily needs attention 💧",
    "New care suggestion available",
    "You unlocked the Water Warrior badge!",
  ];

  const subscriptionStatus = {
    plan: "Pro",
    renewalDate: "Oct 15, 2025",
  };

  const communityStats = {
    treesPlanted: 12842,
    co2Absorbed: 9640,
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="px-6 py-10 space-y-10"
    >
      {/* Plant Overview */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {loading
          ? [1, 2, 3].map((i) => <ShimmerCard key={i} />)
          : plantCards.map((plant, i) => (
              <PlantOverviewCard key={i} {...plant} />
            ))}
      </motion.div>

      {/* Health Circles */}
      {!loading && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-6 justify-center"
        >
          {Object.entries(healthStatus).map(([name, health], i) => (
            <HealthCircle key={i} health={health} />
          ))}
        </motion.div>
      )}

      {/* Remote Watering + Badges */}
      {!loading && (
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          <WateringControl onWater={() => alert("Watering triggered")} />
          <ProgressBadges badges={badges} />
        </motion.div>
      )}

      {/* Garden Map */}
      {!loading && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <GardenGrid buckets={gardenBuckets} />
        </motion.div>
      )}

      {/* Notifications + Subscription */}
      {!loading && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          <NotificationsPanel notifications={notifications} />
          <SubscriptionStatus {...subscriptionStatus} />
        </motion.div>
      )}

      {/* Community Impact */}
      {!loading && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <CommunityStats {...communityStats} />
        </motion.div>
      )}
    </motion.div>
  );
}
