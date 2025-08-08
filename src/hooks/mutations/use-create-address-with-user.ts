import { useCreateAddress } from "@/hooks/mutations/use-create-address";

export function useCreateAddressWithUser() {
  return useCreateAddress();
}
