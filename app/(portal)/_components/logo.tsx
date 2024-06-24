import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });


export const Logo = () => {
    return (
        <div className={`bg-neutral-300 text-orange-600 h-full px-3 py-2 text-sm font-semibold ${inter.className}`}>
            <p>Logo</p>
        </div>
    )
}