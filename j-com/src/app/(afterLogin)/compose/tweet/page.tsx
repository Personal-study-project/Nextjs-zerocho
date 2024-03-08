"use client";

import Home from "@/app/(afterLogin)/home/page";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();
    router.replace('tweet');
    return (
        <Home />
    )
}
