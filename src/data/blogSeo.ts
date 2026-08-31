export type BlogSeo = {
  title: string;
  description: string;
  keywords: string[];
};

export const blogSeo: Record<string, BlogSeo> = {
  "microsoft-365-security-checklist-business": {
    title: "Microsoft 365 Security Checklist: 10 Checks for Businesses",
    description: "Use this practical Microsoft 365 security checklist to review identity, MFA, Conditional Access, devices, email, sharing and data protection.",
    keywords: ["Microsoft 365 security checklist", "Microsoft 365 security", "MFA", "Conditional Access", "Microsoft 365 security assessment"],
  },
  "secure-microsoft-entra-id-smb": {
    title: "How to Secure Microsoft Entra ID for a Small Business",
    description: "Learn how small and mid-sized businesses can secure Microsoft Entra ID with MFA, Conditional Access, privileged access and guest reviews.",
    keywords: ["Microsoft Entra ID security", "Entra ID SMB", "Conditional Access", "MFA", "identity security"],
  },
  "sharepoint-permissions-security-problems": {
    title: "SharePoint Permissions: 7 Security Problems to Check",
    description: "Find seven common SharePoint permission problems, including excessive access, stale guests, sharing links and poor information architecture.",
    keywords: ["SharePoint permissions", "SharePoint security", "SharePoint access review", "SharePoint external sharing", "Copilot readiness"],
  },
  "microsoft-copilot-security-readiness": {
    title: "Microsoft Copilot Security: What to Check Before Adoption",
    description: "Before wider Microsoft Copilot adoption, review SharePoint permissions, sensitive data, identity controls and AI governance.",
    keywords: ["Microsoft Copilot security", "Copilot readiness", "Copilot security assessment", "Microsoft 365 AI security", "AI governance"],
  },
  "intune-security-baseline-business": {
    title: "Microsoft Intune Security Baseline: What to Configure First",
    description: "A practical guide to Microsoft Intune security baselines, device compliance, endpoint protection and Conditional Access for businesses.",
    keywords: ["Microsoft Intune security baseline", "Intune security", "endpoint security", "device compliance", "Defender for Endpoint"],
  },
  "microsoft-purview-dlp-starting-guide": {
    title: "Microsoft Purview DLP: Where Should a Business Start?",
    description: "Learn how to start Microsoft Purview Data Loss Prevention with sensible classification, audit-first testing, exceptions and monitoring.",
    keywords: ["Microsoft Purview DLP", "Data Loss Prevention", "Purview DLP guide", "Sensitivity Labels", "information protection"],
  },
  "azure-security-uplift-ai-ready-business": {
    title: "Azure Security Uplift: A Practical Guide for AI-Ready Businesses",
    description: "A practical Azure security uplift guide covering identity, Azure Policy, Defender for Cloud, networking, secrets, data, monitoring and AI workloads.",
    keywords: ["Azure security", "Azure security assessment", "Azure AI security", "Azure Policy", "Defender for Cloud"],
  },
  "ai-agents-cybersecurity-business-risk": {
    title: "AI Agents and Cybersecurity: Understanding Business Risk",
    description: "Understand how AI agents change cybersecurity risk through identities, permissions, data access, tools, prompt injection, monitoring and governance.",
    keywords: ["AI agents cybersecurity", "AI agent security", "AI governance", "agent identity", "AI cybersecurity risk"],
  },
  "why-cybersecurity-matters-business-leaders": {
    title: "Why Cybersecurity Matters for Every Business: A Leader's Guide",
    description: "A practical cybersecurity guide for business leaders covering identity, data, cloud, endpoints, resilience, monitoring, third parties and AI.",
    keywords: ["cybersecurity for business", "SMB cybersecurity", "cybersecurity business leaders", "cloud security", "cyber resilience"],
  },
};

export function getBlogSeo(slug: string) {
  return blogSeo[slug];
}
