import Link from "next/link";
import React from "react";
import Image from "next/image";
import { isAuthenticated } from "@/lib/actions/auth.actions";
import { redirect } from "next/navigation";

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  // to check if user is authenticated
  const isUserAuthenticated = await isAuthenticated();

  if (!isUserAuthenticated) {
    redirect("/sign-in");
  }

  return (
    <div className="root-layout">
      <nav>
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="MockMate Logo" width={38} height={32} />
          <h2 className="text-primary-100">AI Interview Platform</h2>
        </Link>
      </nav>

      {children}
    </div>
  );
};

export default RootLayout;
