import { JetBrains_Mono, Inter, Cookie } from "next/font/google";

export const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "600"],
    variable: "--font-inter",
});

export const jetbrains = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-jetbrains",
});

export const cookie = Cookie({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-cookie",
});
