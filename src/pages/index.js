import Banner from "@/components/layout/Banner";
import Header from "@/components/layout/Header";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div>
        <Header />
        <Banner/>
      </div>
    </>
  );
}
