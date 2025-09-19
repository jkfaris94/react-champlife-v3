// axios not needed for dev. data is imported
// import axios from "axios";
import champlifeData from "../data/champlifeData.json"; // Direct import
import { useEffect, useState, useMemo } from "react";
import { useNavigate, useParams } from "react-router";

const useFunction = () => {
  // Initialize with actual data instead of empty arrays
  const [reviewData, setReviewData] = useState([]);
  const [awardData, setAwardData] = useState([]);
  const [classesData, setClassesData] = useState([]);
  const [achievementData, setAchievementData] = useState([]);
  const [featureData, setFeatureData] = useState([]);
  const [personalTrainingData, setPersonalTrainingData] = useState([]);
  const [trainersData, setTrainersData] = useState([]);
  const [priceDataMonthly, setPriceDataMonthly] = useState([]);
  const [priceDataYearly, setPriceDataYearly] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const initializeData = async () => {
      try {
        setLoading(true);
        setError("");
        
        // Data is already imported - just process it
        const data = champlifeData.champlife;
        
        setReviewData(Array.isArray(data?.review) ? data.review : []);
        setAwardData(Array.isArray(data?.awards) ? data.awards : []);
        setClassesData(Array.isArray(data?.classes) ? data.classes : []);
        setAchievementData(Array.isArray(data?.achievement) ? data.achievement : []);
        setFeatureData(Array.isArray(data?.features) ? data.features : []);
        setPersonalTrainingData(Array.isArray(data?.personalTraining) ? data.personalTraining : []);
        setTrainersData(Array.isArray(data?.trainers) ? data.trainers : []);
        setPriceDataMonthly(Array.isArray(data?.pricing?.[0]?.monthly) ? data.pricing[0].monthly : []);
        setPriceDataYearly(Array.isArray(data?.pricing?.[0]?.yearly) ? data.pricing[0].yearly : []);
        
      } catch (error) {
        console.error("Error processing Champlife data:", error);
        setError("Failed to process data");
      } finally {
        setLoading(false);
      }
    };

    initializeData();
  }, []);

  // Rest of your hook remains the same...
  const filterData = useMemo(() => 
    classesData.filter(item => [201, 401, 501].includes(item.id)),
    [classesData]
  );

  const filterDetailsData = useMemo(() => 
    classesData.find(item => item.id === parseInt(id)),
    [classesData, id]
  );

  // Navigation handlers
  const handleHomePage = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate("/");
  };

  // ... other handlers (same as before)

  return {
    reviewData,
    awardData,
    classesData,
    achievementData,
    featureData,
    personalTrainingData,
    trainersData,
    priceDataMonthly,
    priceDataYearly,
    filterData,
    filterDetailsData,
    loading,
    error,
    handleHomePage,
    // ... other handlers
  };
};

export default useFunction;