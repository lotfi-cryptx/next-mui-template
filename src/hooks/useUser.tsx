import { useQuery } from "@tanstack/react-query";
import delay from "@/hooks/delay";

export default function useUser() {

  const { data, error, status } = useQuery({
    queryKey: ["users", "me"],
    queryFn: () => delay(500).then(() => { return "data" }),
  })

  return {
    status: status,
    data: data,
    error: error,
  }

}