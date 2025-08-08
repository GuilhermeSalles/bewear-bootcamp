import { z } from "zod";

export const getAddressesSchema = z.object({});

export type GetAddressesInput = z.infer<typeof getAddressesSchema>;
