import Hero from "@/components/Hero";
import TableOfContents from "@/components/TableOfContents";
import CrossDivider from "@/components/CrossDivider";
import BackToTop from "@/components/BackToTop";
import Bibliography from "@/components/Bibliography";

import SectionDanNhap from "@/components/sections/SectionDanNhap";
import SectionKinhThanh from "@/components/sections/SectionKinhThanh";
import SectionThanHoc from "@/components/sections/SectionThanHoc";
import SectionHuanQuyen from "@/components/sections/SectionHuanQuyen";
import SectionNgheThuatThanh from "@/components/sections/SectionNgheThuatThanh";
import SectionYNghiaThucTien from "@/components/sections/SectionYNghiaThucTien";
import SectionKetLuan from "@/components/sections/SectionKetLuan";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-parchment)] text-[var(--color-foreground)] selection:bg-[var(--color-crimson)] selection:text-white pb-24">
      <Hero />

      <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 mt-12 relative lg:flex lg:gap-12">
        {/* Left Sidebar Table of Contents (Sticky on Desktop) */}
        <div className="lg:w-72 shrink-0">
          <TableOfContents />
        </div>

        {/* Right Main Content Area */}
        <div className="flex-1 lg:max-w-[800px] xl:max-w-[900px] prose-content min-w-0 max-w-full">
          <SectionDanNhap />
          <CrossDivider />

          <SectionKinhThanh />
          <CrossDivider />

          <SectionThanHoc />
          <CrossDivider />

          <SectionHuanQuyen />
          <CrossDivider />

          <SectionNgheThuatThanh />
          <CrossDivider />

          <SectionYNghiaThucTien />
          <CrossDivider />

          <SectionKetLuan />
          <CrossDivider />

          <section id="nguon-trich-dan" className="scroll-mt-24 mt-16 pt-8 border-t-2 border-[var(--color-gold-muted)]">
            <h2 className="!border-none !mb-6">Nguồn Trích Dẫn</h2>
            <Bibliography />
          </section>
        </div>
      </main>

      <BackToTop />
    </div>
  );
}
