import { Hero } from '@/components/sections/Hero';
import { AppsWebsites } from '@/components/sections/AppsWebsites';
import { Planning } from '@/components/sections/Planning';
import { DesignSystemSection } from '@/components/sections/DesignSystemSection';
import { StudioMarketing } from '@/components/sections/StudioMarketing';
import { About } from '@/components/sections/About';
import { BlogSection } from '@/components/sections/BlogSection';
import { Connect } from '@/components/sections/Connect';
import { HomeViewer } from '@/components/home/HomeViewer';

/** Home — 8 sections matching PAGES array from mockup V35 (line 18).
 *  HomeViewer handles scroll physics: one section visible at a time,
 *  wheel/touch/keyboard navigation, exit/enter animations, dots, scroll indicator.
 *  Each section re-mounts on transition, re-firing stg() waterfall. */
export default function HomePage() {
  return (
    <HomeViewer
      sections={[
        <Hero key="hero" />,
        <AppsWebsites key="apps" />,
        <Planning key="planning" />,
        <DesignSystemSection key="ds" />,
        <StudioMarketing key="studio" />,
        <About key="about" />,
        <BlogSection key="blog" />,
        <Connect key="connect" />,
      ]}
    />
  );
}
