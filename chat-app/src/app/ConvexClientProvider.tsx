"use client";

import { Authenticated, AuthLoading, ConvexReactClient, Unauthenticated } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ReactNode } from "react";
import { ClerkProvider, SignInButton, useAuth } from '@clerk/nextjs'
import LoadingLogo from "@/components/shared/LoadingLogo";

if (!process.env.NEXT_PUBLIC_CONVEX_URL) {
  throw new Error('Missing NEXT_PUBLIC_CONVEX_URL in your .env file')
}

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

  export function ConvexClientProvider({ children }: { children: ReactNode }) {
    return (
      <ClerkProvider>
        <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
          {/* 认证通过 */}
          <Authenticated>{children}</Authenticated>

          {/* 认证中 */}
          <AuthLoading> <LoadingLogo /> </AuthLoading>

          {/* 未认证 */}
          <Unauthenticated>
            未认证
            <SignInButton />
          </Unauthenticated>
        </ConvexProviderWithClerk>
      </ClerkProvider>
    )
  }