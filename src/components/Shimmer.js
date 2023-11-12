import { useShimmer } from "../utils/CustomHooks/useShimmer";

const Shimmer = () => {
  const { homeVideoShimmer } = useShimmer();
  return homeVideoShimmer;
};

export default Shimmer;
