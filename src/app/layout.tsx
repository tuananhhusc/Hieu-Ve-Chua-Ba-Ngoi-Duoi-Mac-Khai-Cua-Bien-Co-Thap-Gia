import type { Metadata } from "next";
import { Playfair_Display, Source_Serif_4, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import ReadingProgress from "@/components/ReadingProgress";
import ThemeToggle from "@/components/ThemeToggle";

const playfairDisplay = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-body",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hiểu Về Chúa Ba Ngôi Dưới Mặc Khải Của Biến Cố Thập Giá",
  description:
    "Báo cáo nghiên cứu chuyên sâu về mầu nhiệm Thiên Chúa Ba Ngôi được mặc khải qua biến cố Thập Giá, khảo sát nền tảng Kinh Thánh, thần học hệ thống, giáo huấn Huấn Quyền, và nghệ thuật thánh.",
  openGraph: {
    title: "Hiểu Về Chúa Ba Ngôi Dưới Mặc Khải Của Biến Cố Thập Giá",
    description:
      "Báo cáo nghiên cứu chuyên sâu về mầu nhiệm Thiên Chúa Ba Ngôi qua biến cố Thập Giá",
    type: "article",
    locale: "vi_VN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${playfairDisplay.variable} ${sourceSerif.variable} ${inter.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ReadingProgress />
          {children}
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
