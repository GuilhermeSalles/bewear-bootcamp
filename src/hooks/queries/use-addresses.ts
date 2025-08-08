import { useQuery } from "@tanstack/react-query";

import { getAddresses } from "@/actions/get-addresses";

export const getAddressesQueryKey = () => ["addresses"] as const;

export function useAddresses() {
  return useQuery({
    queryKey: getAddressesQueryKey(),
    queryFn: async () => getAddresses(),
  });
}
