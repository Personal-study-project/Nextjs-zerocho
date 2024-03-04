import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export default async function HomeLayout({children} : Props) {
    return (
        <div>
            홈레이아웃
            {children}
        </div>
    );
}