import { faCheck, faClose, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import axios from "axios";

const tiers = [
  {
    name: "Bronze",

    features: [
      "Basic Access",
      "Limited Support",
      
    ],
    buttonText: "Current Plan",
    buttonStyle: "bg-gray-500 text-white",
    isCurrent: true,
  },
  {
    name: "Silver",
    price: "$10/mo",
    requirement: "1 Referral",
    features: [
      "Everything in Bronze",
      "Priority Support",
      "5 Projects",
      "Team Collaboration",
    ],
    buttonText: "Upgrade",
    buttonStyle: "bg-blue-600 text-white",
    isCurrent: false,
  },
  {
    name: "Gold",
    price: "$20/mo",
    requirements: {
      upgradeSilver: true,
      referrals: 5,
    },
    features: [
      "Everything in Silver",
      "24/7 Support",
      "Unlimited Projects",
      "Advanced Analytics",
    ],
    buttonText: "Upgrade",
    buttonStyle: "bg-yellow-500 text-white",
    isCurrent: false,
  },
];

const referrals = 3; // Example referral count

const UpgradeTiers = () => {
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleUpgrade = async () => {
    setLoading(true);
    setMessage("");
    setError("");

    try {
      const token = localStorage.getItem("token");
      const response = await axios.patch(
        "https://uootes.onrender.com/api/v1/profile/referrals",
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMessage(response.data.message);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "An error occurred while upgrading the account."
      );
    } finally {
      setLoading(false);
    }
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + tiers.length) % tiers.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % tiers.length);
  };

  const tier = tiers[current];

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Upgrade Your Plan</h1>
        {message && <p className="text-green-500 text-center mb-4">{message}</p>}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <div className="flex items-center justify-center gap-8">
          <button onClick={handlePrev} className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
            <FaAngleLeft className="text-3xl" />
          </button>

          <div className="w-full max-w-sm bg-gray-800 rounded-lg shadow-lg p-8 transition-transform transform hover:scale-105">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-2">{tier.name}</h2>
              <div className="text-5xl font-extrabold text-yellow-400 mb-4">
                <FontAwesomeIcon icon={faTrophy} />
              </div>
              <p className="text-2xl font-semibold mb-6">{tier.price}</p>
            </div>

            {tier.requirement && (
              <div className="mb-6">
                <h3 className="font-semibold text-lg mb-2">Requirement:</h3>
                <div className="bg-gray-700 p-3 rounded-lg text-center">
                  <p className="font-bold text-xl">{tier.requirement}</p>
                </div>
              </div>
            )}

            {tier.requirements && (
              <div className="mb-6">
                <h3 className="font-semibold text-lg mb-2">Requirements:</h3>
                <div className="bg-gray-700 p-4 rounded-lg space-y-3">
                  <div className="flex items-center justify-between text-md">
                    <span>Upgrade Silver account</span>
                    <FontAwesomeIcon icon={tier.requirements.upgradeSilver ? faCheck : faClose} className={tier.requirements.upgradeSilver ? "text-green-500" : "text-red-500"} />
                  </div>
                  <div className="flex items-center justify-between text-md">
                    <span>{referrals}/{tier.requirements.referrals} Direct Referrals</span>
                    <FontAwesomeIcon icon={referrals >= tier.requirements.referrals ? faCheck : faClose} className={referrals >= tier.requirements.referrals ? "text-green-500" : "text-red-500"} />
                  </div>
                </div>
              </div>
            )}

            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-2">Features:</h3>
              <ul className="space-y-2">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faCheck} className="text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={handleUpgrade}
              className={`w-full py-3 text-lg font-bold rounded-lg transition-colors ${tier.buttonStyle} ${tier.isCurrent || loading ? 'cursor-not-allowed opacity-50' : 'hover:opacity-90'}`}
              disabled={tier.isCurrent || loading}
            >
              {loading ? "Upgrading..." : tier.buttonText}
            </button>
          </div>

          <button onClick={handleNext} className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
            <FaAngleRight className="text-3xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpgradeTiers;
