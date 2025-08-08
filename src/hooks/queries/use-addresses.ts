import { useQuery } from "@tanstack/react-query";

import { getAddresses } from "@/actions/get-addresses";
import { shippingAddressTable } from "@/db/schema";

export const getAddressesQueryKey = () => ["addresses"] as const;

export function useAddresses(params?: {
  initialData?: (typeof shippingAddressTable.$inferSelect)[];
}) {
  return useQuery({
    queryKey: getAddressesQueryKey(),
    queryFn: async () => getAddresses(),
    initialData: params?.initialData,
  });
}
