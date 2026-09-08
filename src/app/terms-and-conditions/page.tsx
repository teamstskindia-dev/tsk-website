import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms & Conditions | TSK India Technology",
  description: "Terms and Conditions for TSK India Technology.",
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms & Conditions">
      <p className="text-sm leading-relaxed text-text-muted sm:text-base">
        We request you to carefully read the Terms &amp; Conditions
        mentioned on our website before using our services. By accessing or
        continuing to use the TSK India Technology website, you acknowledge
        and agree to comply with these terms. If you do not agree with any
        part of these Terms &amp; Conditions, you are advised not to use
        this website.
      </p>

      <LegalSection number="1" title="Copyright &amp; Intellectual Property">
        <p>
          TSK India Technology owns all copyright and intellectual property
          rights on this website. All content, logos, images, and materials
          are the exclusive property of TSK India Technology. By accessing or
          continuing to use the TSK India Technology website, you agree to
          respect all copyright and intellectual property rights.
        </p>
      </LegalSection>

      <LegalSection number="2" title="Use of Information">
        <p>
          TSK India Technology collects user information solely to improve its
          services and provide a better experience. We use the information
          to understand user preferences and enhance the quality and
          relevance of our content and offerings.
        </p>
      </LegalSection>

      <LegalSection number="3" title="Limitation of Liability">
        <p>
          TSK India Technology shall not be held liable for any direct,
          indirect, incidental, or consequential damages arising from the
          use of this website or its content. All information is provided
          on an &lsquo;as-is&rsquo; basis, and we make no warranties
          regarding its accuracy or completeness.
        </p>
      </LegalSection>

      <LegalSection number="4" title="Information Submitted by Users">
        <p>
          Any information submitted by users through this website may be
          used by TSK India Technology to contact you regarding our services.
          We use cookies and similar technologies to enhance your experience
          and gather information about how you interact with our site.
        </p>
      </LegalSection>

      <LegalSection number="5" title="Third-Party Links">
        <p>
          This website may contain links to third-party websites. TSK India
          Technology is not responsible for the content, privacy policies, or
          practices of any third-party websites. We encourage you to review
          the terms and privacy policies of any external sites you visit.
        </p>
      </LegalSection>

      <LegalSection number="6" title="Project Disclaimer">
        <p>
          All project details, images, renderings, specifications, and
          amenities shown on this website are artistic impressions and
          subject to change without prior notice. The actual product may
          differ from what is depicted. Please verify all details
          independently before making any purchase decision.
        </p>
      </LegalSection>

      <LegalSection number="7" title="Governing Law">
        <p>
          These Terms and Conditions shall be governed by and construed in
          accordance with the laws of India. Any disputes arising out of or
          in connection with these terms shall be subject to the exclusive
          jurisdiction of the courts in Meerut, Uttar Pradesh.
        </p>
      </LegalSection>

      <LegalSection number="8" title="Contact Us">
        <p>
          For any queries or concerns regarding these Terms and Conditions,
          please contact us at:
        </p>
        <Link
          href="/#contact"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-105 hover:bg-indigo/90"
        >
          Go to Contact Us
        </Link>
      </LegalSection>
    </LegalPage>
  );
}
