import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | TSK India Technology",
  description: "Privacy Policy for TSK India Technology.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p className="text-sm leading-relaxed text-text-muted sm:text-base">
        TSK India Technology values your trust and is committed to protecting
        your personal information. This policy describes how we collect and
        manage your data to ensure a secure user experience.
      </p>

      <LegalSection number="1" title="Policy Governance">
        <p>
          TSK India Technology values your trust and is committed to protecting
          your personal information. We collect and manage your data to
          ensure a secure user experience, adhering to all applicable data
          protection laws and regulations.
        </p>
      </LegalSection>

      <LegalSection number="2" title="Data Collection &amp; Use">
        <p>
          <span className="font-medium text-text-primary">Purpose:</span> We
          at TSK India Technology collect personal information to provide you
          with our services, improve your experience, and to protect your
          operational data.
        </p>
        <p>
          <span className="font-medium text-text-primary">
            Strict Confidentiality:
          </span>{" "}
          TSK India Technology will never provide your personal information to
          third parties without your consent, and will manage your data to
          ensure complete user confidentiality.
        </p>
      </LegalSection>

      <LegalSection number="3" title="Technical Security">
        <p>
          We employ industry-standard technical security measures to protect
          your data. Our systems use advanced encryption and security
          protocols to safeguard your information from unauthorized access,
          alteration, disclosure, or destruction.
        </p>
      </LegalSection>

      <LegalSection number="4" title="Cookie Policy">
        <p>
          Our Cookies Policy uses data to enhance your browsing experience.
          Cookies help us understand user behavior and improve our services.
          You may choose to disable cookies through your browser settings,
          though this may affect certain functionalities.
        </p>
      </LegalSection>

      <LegalSection number="5" title="Opt-Out Rights">
        <p>
          You have the right to opt out of any personal information
          collection at any time. To exercise your opt-out rights, please
          contact us and we will promptly process your request and update
          our records accordingly.
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
