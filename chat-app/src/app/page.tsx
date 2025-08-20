"use client";

import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      认证通过
      <UserButton />
    </>
  );
}