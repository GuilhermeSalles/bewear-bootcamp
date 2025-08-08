import { useMutation } from "@tanstack/react-query";

import { createAddress } from "@/actions/create-address";
import { CreateAddressInput } from "@/actions/create-address/schema";

export const getCreateAddressMutationKey = () => ["create-address"] as const;

export function useCreateAddress() {
  return useMutation({
    mutationKey: getCreateAddressMutationKey(),
    mutationFn: async (data: CreateAddressInput) => {
      return createAddress(data);
    },
  });
}
