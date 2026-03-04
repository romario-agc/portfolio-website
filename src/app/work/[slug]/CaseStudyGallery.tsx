'use client';

import { PROJECT_SVGS } from '@/components/ui/ProjectSVG/ProjectSVG';
import { GalleryViewer } from './GalleryViewer';

interface Props {
  slug: string;
  color: string;
}

export function CaseStudyGallery({ slug, color }: Props) {
  const SVGComponent = PROJECT_SVGS[slug];

  const items = [1, 2, 3, 4, 5].map((n, i) => ({
    label: `Screenshot ${n}`,
    gradient: `linear-gradient(${135 + i * 30}deg, color-mix(in srgb, ${color} ${i === 0 ? 7 : 4}%, transparent), var(--bg-alt))`,
    svg: i === 0 && SVGComponent ? <SVGComponent color={color} /> : undefined,
  }));

  return <GalleryViewer items={items} />;
}
