export type Service = {
  slug: string;
  name: string;
  shortName: string;
  title: string;
  description: string;
  intro: string;
  items: string[];
  keywords: string[];
  relatedBlogs: string[];
};

export const services: Service[] = [
  {
    slug: "microsoft-365-azure-security",
    name: "Microsoft 365 & Azure Security",
    shortName: "M365 & Azure Security",
    title: "Microsoft 365 & Azure Security Consulting",
    description: "Practical Microsoft 365 and Azure security consulting for identity, cloud governance, Defender, Conditional Access and security posture improvement.",
    intro: "Strengthen your Microsoft cloud environment with a practical security review focused on the controls that reduce real business risk.",
    items: ["Microsoft 365 security assessment", "Azure security posture review", "Microsoft Entra ID and IAM", "Conditional Access and MFA", "Azure Policy and governance", "Microsoft Defender for Cloud", "Microsoft Secure Score", "Security remediation roadmap"],
    keywords: ["Microsoft 365 security", "Azure security", "Entra ID security", "Conditional Access", "Defender for Cloud", "Microsoft security consulting"],
    relatedBlogs: ["microsoft-365-security-checklist-business", "secure-microsoft-entra-id-smb", "azure-security-uplift-ai-ready-business", "why-cybersecurity-matters-business-leaders"],
  },
  {
    slug: "sharepoint-security-optimisation",
    name: "SharePoint Security & Optimisation",
    shortName: "SharePoint Security",
    title: "SharePoint Security & Optimisation Consulting",
    description: "SharePoint security consulting covering permissions, external sharing, information architecture, search and Copilot readiness.",
    intro: "Make SharePoint easier to secure, manage and search by improving permissions, information architecture and content governance.",
    items: ["SharePoint permissions review", "External sharing assessment", "Sites and libraries review", "Information architecture", "Metadata and search optimisation", "Access and ownership review", "Copilot readiness", "SharePoint security roadmap"],
    keywords: ["SharePoint security", "SharePoint permissions", "SharePoint optimisation", "SharePoint Copilot readiness", "Microsoft 365 information architecture"],
    relatedBlogs: ["sharepoint-permissions-security-problems", "microsoft-copilot-security-readiness", "microsoft-365-security-checklist-business"],
  },
  {
    slug: "microsoft-purview-information-protection",
    name: "Microsoft Purview & Information Protection",
    shortName: "Purview & Information Protection",
    title: "Microsoft Purview & Information Protection Consulting",
    description: "Microsoft Purview consulting for data loss prevention, sensitivity labels, information protection, auditing and practical data governance.",
    intro: "Protect sensitive business information with practical Microsoft Purview controls that balance security, compliance and day-to-day productivity.",
    items: ["Microsoft Purview assessment", "Sensitivity Labels", "Data Loss Prevention", "Sensitive information types", "Audit and activity review", "Information protection", "Data governance", "DLP rollout and tuning"],
    keywords: ["Microsoft Purview", "Purview DLP", "Data Loss Prevention", "Sensitivity Labels", "information protection"],
    relatedBlogs: ["microsoft-purview-dlp-starting-guide", "microsoft-copilot-security-readiness", "microsoft-365-security-checklist-business"],
  },
  {
    slug: "endpoint-intune-security",
    name: "Endpoint & Intune Security",
    shortName: "Endpoint & Intune Security",
    title: "Microsoft Intune & Endpoint Security Consulting",
    description: "Microsoft Intune and endpoint security consulting covering device compliance, security baselines, Defender for Endpoint and Conditional Access.",
    intro: "Create a consistent endpoint security foundation with practical Intune configuration, compliance and Microsoft Defender controls.",
    items: ["Microsoft Intune assessment", "Device inventory and onboarding", "Security baselines", "Compliance policies", "Defender for Endpoint", "Attack surface reduction", "Conditional Access integration", "Endpoint security roadmap"],
    keywords: ["Microsoft Intune security", "endpoint security", "Intune security baseline", "Defender for Endpoint", "device compliance"],
    relatedBlogs: ["intune-security-baseline-business", "microsoft-365-security-checklist-business", "secure-microsoft-entra-id-smb"],
  },
  {
    slug: "microsoft-ai-copilot-security",
    name: "Microsoft AI & Copilot Security",
    shortName: "AI & Copilot Security",
    title: "Microsoft AI & Copilot Security Consulting",
    description: "Secure Microsoft Copilot, Copilot Studio and AI adoption with practical controls for identity, data access, governance and AI agents.",
    intro: "Prepare your organisation for Microsoft Copilot and AI agents by securing the identity, data and governance foundations they depend on.",
    items: ["Microsoft Copilot security review", "Copilot readiness assessment", "Copilot Studio governance", "AI agent security", "Data access and permissions", "AI governance", "SharePoint and Copilot security", "AI security roadmap"],
    keywords: ["Microsoft Copilot security", "Copilot readiness", "Copilot Studio security", "AI agent security", "Microsoft AI security"],
    relatedBlogs: ["microsoft-copilot-security-readiness", "ai-agents-cybersecurity-business-risk", "azure-security-uplift-ai-ready-business", "sharepoint-permissions-security-problems"],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
