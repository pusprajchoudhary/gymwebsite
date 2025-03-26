import React, { useRef,useState } from "react";
import { motion } from "framer-motion";
import Popup from "./Popup";
const plans = [
  { duration: "1 Month", type: "Basic", price: "₹6500", color: "bg-green-600", features: ["Access to gym", "Basic training plan", "Locker facility", "Cardio equipment", "Limited group classes", "Support via email"] },
  { duration: "1 Month", type: "Premium", price: "₹8000", color: "bg-violet-600", features: ["Access to gym & pool", "Advanced training plan", "Personalized diet plan", "Locker facility", "All group classes", "Support via chat & email"] },
  { duration: "1 Month", type: "Pro", price: "₹10000", color: "bg-red-600", features: ["All premium features", "1-on-1 personal training", "Free supplements", "Priority support", "Body composition analysis", "Exclusive VIP sessions"] },
  { duration: "3 Months", type: "Basic", price: "₹18000", color: "bg-green-600", features: ["Same as 1 Month Basic", "Discounted price", "Extended support", "More flexibility", "Gym access 24/7", "Exclusive fitness workshops"] },
  { duration: "3 Months", type: "Premium", price: "₹22000", color: "bg-violet-600", features: ["Same as 1 Month Premium", "Diet & training revisions", "Extended locker facility", "Priority booking for classes", "Monthly fitness assessments", "Support via call, chat & email"] },
  { duration: "3 Months", type: "Pro", price: "₹28000", color: "bg-red-600", features: ["Same as 1 Month Pro", "Extended VIP benefits", "Private gym hours", "Complimentary wellness checkups", "Access to exclusive trainers", "Customized fitness tracking"] },
  { duration: "7 Months", type: "Basic", price: "₹40000", color: "bg-green-600", features: ["Same as 3 Months Basic", "Bigger discounts", "Long-term planning", "Full-time trainer access", "Nutrition workshops", "Special event invites"] },
  { duration: "7 Months", type: "Premium", price: "₹50000", color: "bg-violet-600", features: ["Same as 3 Months Premium", "Extra classes & training", "Quarterly health evaluations", "Gym merchandise gift", "Personal fitness report", "24/7 customer support"] },
  { duration: "7 Months", type: "Pro", price: "₹65000", color: "bg-red-600", features: ["Same as 3 Months Pro", "Priority entry to events", "Exclusive VIP fitness retreat", "Customized full-body transformation", "24/7 personal coaching", "Lifetime membership discount"] }
];

const PricingSection = () => {
  const scrollRef = useRef(null);
const [open, setOpen] = useState(false);
const [selectedPlan, setSelectedPlan] = useState(null);

const handleOpen = (plan) => {
  setSelectedPlan(plan); 
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
  setSelectedPlan(null);
};
  return (
    <section className="w-full bg-gray-900 text-white py-16 px-6 relative overflow-hidden">
      <h2 className="text-5xl font-extrabold text-center mb-10 animate-bounce">Our Pricing Plans</h2>
      <div ref={scrollRef} className="flex overflow-x-scroll scroll-smooth no-scrollbar gap-8 snap-x snap-mandatory px-12">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className="min-w-[350px] h-[550px] flex flex-col items-center justify-between bg-gray-800 text-white p-8 rounded-2xl shadow-2xl snap-center transform transition-all hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-center">{plan.duration} {plan.type} Plan</h3>
            <p className="text-2xl font-semibold mt-4">{plan.price}</p>
            <ul className="text-gray-300 mt-6 space-y-3 text-lg">
              {plan.features.map((feature, i) => (
                <li key={i}>✔ {feature}</li>
              ))}
            </ul>
            <button
              className={`${plan.color} text-white py-3 px-8 mt-8 text-lg rounded-lg hover:opacity-80 transition-all duration-300`}
              onClick={() => handleOpen(plan)}
            >
              Choose Plan
            </button>
           
          </motion.div>
        ))}
      </div>
      {selectedPlan && (
        <Popup
          open={open}
          handleClose={handleClose}
          plantype={selectedPlan.type}
          duration={selectedPlan.duration}
          price={selectedPlan.price}
        />
      )}
    </section>
  );
};

export default PricingSection;
