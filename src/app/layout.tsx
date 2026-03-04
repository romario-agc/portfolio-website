import type { Metadata } from 'next';
import { Gilda_Display } from 'next/font/google';

import '@/styles/tokens.css';
import '@/styles/globals.css';
import '@/styles/animations.css';
import '@/styles/grid.css';

import { UIProvider } from '@/components/providers/UIProvider';
import { UCBar } from '@/components/layout/UCBar/UCBar';
import { Nav } from '@/components/layout/Nav/Nav';
import { SubNav } from '@/components/layout/SubNav/SubNav';
import { Sidebar } from '@/components/layout/Sidebar/Sidebar';
import { Footer } from '@/components/layout/Footer/Footer';
import { BackgroundLayers } from '@/components/layout/BackgroundLayers/BackgroundLayers';
import { BackToTop } from '@/components/ui/BackToTop/BackToTop';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs/Breadcrumbs';
import { Onboarding } from '@/components/overlays/Onboarding/Onboarding';
import { CrashReporter } from '@/components/providers/CrashReporter';

const gilda = Gilda_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-gilda',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Romario Coffie — Portfolio',
    template: '%s | Romario Coffie',
  },
  description: 'Product designer & software engineer. Flutter, React, Next.js — shipping apps, design systems, and creative production.',
  metadataBase: new URL('https://romariocoffie.com'),
  openGraph: {
    siteName: 'Romario Coffie',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={gilda.variable}>
      <body>
        <UIProvider>
          {/* Error logging + crash reporting */}
          <CrashReporter />
          {/* Skip to content — a11y */}
          <a href="#main-content" className="skip-to-content">
            Skip to content
          </a>

          {/* Background gradient layers — §3.2 */}
          <BackgroundLayers />

          {/* Fixed chrome — z-index 200–201 */}
          <UCBar />
          <Nav />

          {/* SubNav — fixed at top:88px, z-index 195, shows per route */}
          <SubNav />

          {/* Sidebar — only visible above 1920px */}
          <Sidebar />

          {/* Main content */}
          <main id="main-content" className="main-content">
            <Breadcrumbs />
            {children}
          </main>

          {/* Fixed footer chrome */}
          <Footer />

          {/* Back to top — z-index 198 */}
          <BackToTop />

          {/* Portal root for overlays */}
          <div id="portal-root" />

          {/* Overlays — portaled to #portal-root */}
          <Onboarding />
        </UIProvider>
      </body>
    </html>
  );
}
