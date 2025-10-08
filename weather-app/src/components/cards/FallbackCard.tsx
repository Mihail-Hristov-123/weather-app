import { ErrorCard } from "./subcards/ErrorCard";
import { LoadingCard } from "./subcards/LoadingCard";

export const FallbackCard = ({ loading }: { loading: boolean }) => {
  if (loading) return <LoadingCard />;

  return <ErrorCard />;
};
