"use server";

import { headers } from "next/headers";

import { db } from "@/db";
import { shippingAddressTable } from "@/db/schema";
import { auth } from "@/lib/auth";

import { CreateAddressInput, createAddressSchema } from "./schema";

export async function createAddress(input: CreateAddressInput) {
  const data = createAddressSchema.parse(input);
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session?.user) {
    throw new Error("Unauthorized");
  }
  const address = await db
    .insert(shippingAddressTable)
    .values({
      userId: session.user.id,
      recipientName: data.fullName,
      street: data.address,
      number: data.number,
      complement: data.complement,
      city: data.city,
      state: data.state,
      neighborhood: data.neighborhood,
      zipCode: data.zipCode,
      country: "Brasil",
      phone: data.phone,
      email: data.email,
      cpfOrCnpj: data.cpf,
    })
    .returning();
  return address[0];
}
