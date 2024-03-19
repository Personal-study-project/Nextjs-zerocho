"use client";

import { useEffect } from "react";

export const MSWComponent = () => {
    useEffect(() => {
        if (typeof window !== "undefined") { // 클라이언트 환경일 때
            if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
                require("@/mocks/browser");
            }
        }
    }, []);
    return null;
}