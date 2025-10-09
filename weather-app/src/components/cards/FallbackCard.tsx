import { ErrorCard } from "./subcards/ErrorCard";
import { LoadingCard } from "./subcards/LoadingCard";

export const FallbackCard = ({ loading }: { loading: boolean }) =>
  loading ? <LoadingCard /> : <ErrorCard />;
