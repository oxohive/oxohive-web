import type { Metadata } from "next";
import { termsOfService, site } from "@/lib/content";
import LegalPage from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: `${termsOfService.title} — ${site.name}`,
  description: termsOfService.description,
  alternates: { canonical: `/${termsOfService.slug}` },
  openGraph: {
    title: `${termsOfService.title} — ${site.name}`,
    description: termsOfService.description,
    url: `${site.url}/${termsOfService.slug}`,
    siteName: site.name,
    type: "article",
  },
};

export default function TermsPage() {
  return <LegalPage doc={termsOfService} />;
}
