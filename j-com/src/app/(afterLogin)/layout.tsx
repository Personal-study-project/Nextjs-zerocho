import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export default function AfterLoginLayout({children} : Props) {
    return (
        <div>
            애프터로그인레이아웃
            {children}
        </div>
    );
}