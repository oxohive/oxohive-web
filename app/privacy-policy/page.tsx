import type { Metadata } from "next";
import { privacyPolicy, site } from "@/lib/content";
import LegalPage from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: `${privacyPolicy.title} — ${site.name}`,
  description: privacyPolicy.description,
  alternates: { canonical: `/${privacyPolicy.slug}` },
  openGraph: {
    title: `${privacyPolicy.title} — ${site.name}`,
    description: privacyPolicy.description,
    url: `${site.url}/${privacyPolicy.slug}`,
    siteName: site.name,
    type: "article",
  },
};

export default function PrivacyPolicyPage() {
  return <LegalPage doc={privacyPolicy} />;
}
