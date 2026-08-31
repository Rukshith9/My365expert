export type BlogPost = {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    title: "Microsoft 365 Security: 10 Checks Every Business Should Review",
    slug: "microsoft-365-security-checklist-business",
    category: "M365 Security",
    excerpt: "A practical Microsoft 365 security checklist covering identity, Conditional Access, MFA, devices, email and data protection.",
    date: "31 August 2026",
    readTime: "7 min read",
    content: `
## Microsoft 365 security starts with the basics

Microsoft 365 gives organisations a strong security platform, but the default configuration is not a complete security strategy. The most useful first step is to review the controls that protect identities, devices, data and access.

### 1. Review privileged accounts

Start with Global Administrators and other highly privileged roles. Remove accounts that no longer need access, use separate administrator accounts where appropriate, and review standing privilege regularly.

### 2. Check MFA and Conditional Access

MFA should protect users, but the important question is how it is enforced. Review Conditional Access policies for administrators, risky sign-ins, legacy authentication, unmanaged devices and sensitive applications.

### 3. Look for legacy authentication

Older authentication methods can bypass modern controls. Identify applications or protocols that still depend on legacy authentication and plan their removal.

### 4. Review Microsoft Secure Score

Secure Score is useful for identifying improvement opportunities. Treat it as a source of recommendations rather than a target to maximise blindly. Prioritise controls according to your actual business risk.

### 5. Review external sharing

Check SharePoint and OneDrive sharing settings, guest access and anonymous links. External collaboration should be deliberate and appropriate for the information being shared.

### 6. Review device compliance

Microsoft Intune and Conditional Access can work together to restrict access from devices that do not meet your security requirements. Check that compliance policies are actually being enforced.

### 7. Check Defender coverage

Review Microsoft Defender coverage for endpoints, identities, email and cloud resources. Gaps in onboarding can leave important parts of the environment with limited visibility.

### 8. Review data protection

Identify where sensitive information lives and whether Microsoft Purview sensitivity labels, DLP and auditing are appropriate for your organisation.

### 9. Check auditing and alerting

Make sure relevant audit data is available and that security alerts reach someone who can act on them. A control that nobody monitors is difficult to rely on.

### 10. Build a remediation plan

The final step is turning findings into an ordered plan. Fix high-risk identity and access issues first, then address devices, data protection and longer-term governance.

## The goal is not a perfect score

A good Microsoft 365 security review should leave you with a clear understanding of your current risks, what should be fixed first and what can wait. Security improves when controls are practical, understood and maintained.
`,
  },
  {
    title: "How to Secure Microsoft Entra ID for a Small or Mid-Sized Business",
    slug: "secure-microsoft-entra-id-smb",
    category: "Identity & Access",
    excerpt: "Practical ways to strengthen Microsoft Entra ID, privileged access and Conditional Access without creating unnecessary complexity.",
    date: "27 August 2026",
    readTime: "6 min read",
    content: `
## Why Entra ID deserves attention

Identity is one of the most important security boundaries in Microsoft 365 and Azure. If an attacker gains control of an administrator or user account, many other security controls can become less effective.

### Start with privileged access

Review every privileged role and ask a simple question: does this person still need this level of access? Keep administrative access limited and use dedicated administrator accounts where practical.

### Strengthen Conditional Access

Conditional Access should reflect how your business actually works. Useful policies often cover MFA, administrator access, risky sign-ins, device compliance and access from unexpected locations.

Avoid creating dozens of overlapping policies. A smaller set of well-designed policies is usually easier to understand and maintain.

### Remove legacy authentication

Legacy authentication does not provide the same security controls as modern authentication. Identify dependencies and remove them where possible.

### Review guests and external identities

Guest accounts are useful for collaboration, but they should not become permanent access that nobody reviews. Establish ownership and review external users periodically.

### Protect administrator accounts

Administrators should receive stronger controls than ordinary users. Consider phishing-resistant authentication for privileged roles, tighter Conditional Access and Privileged Identity Management where the licensing and operating model make sense.

## Keep identity security practical

For a smaller organisation, the objective is not to reproduce a large enterprise identity architecture. It is to establish sensible controls that protect the accounts most likely to cause significant damage if compromised.
`,
  },
  {
    title: "SharePoint Permissions: 7 Common Security Problems to Look For",
    slug: "sharepoint-permissions-security-problems",
    category: "SharePoint Security",
    excerpt: "Seven SharePoint permission issues that can expose business information, create unnecessary complexity and make Copilot adoption harder.",
    date: "22 August 2026",
    readTime: "7 min read",
    content: `
## SharePoint permissions can become complicated quickly

SharePoint is designed for collaboration, but years of site creation, group changes and ad-hoc sharing can leave an environment difficult to understand.

### 1. Too many unique permissions

Breaking inheritance can be useful, but widespread unique permissions make access harder to review. Prefer group-based access and a clear site structure where possible.

### 2. Old groups and accounts

Review Microsoft 365 groups, SharePoint groups and individual permissions. Remove accounts and groups that no longer have a business reason to access content.

### 3. Broad sharing links

Review anonymous or organisation-wide sharing links. Sharing should match the sensitivity of the information.

### 4. Former employees and stale guests

Leaver processes should remove access promptly. Guest users also need periodic review, particularly where external collaboration is common.

### 5. Sensitive information in general-access sites

A site may have correct permissions but still contain information that should be separated. Think about the information architecture as well as the permission model.

### 6. Poor information architecture

When users cannot find the right place for a document, they create another library, site or folder. Over time that increases duplication and access complexity.

### 7. Copilot readiness is ignored

Microsoft Copilot respects existing permissions. That means poorly governed SharePoint content can become a bigger problem when AI makes that content easier to discover.

## A better approach

Start with an inventory of sites, owners, permissions, external sharing and sensitive content. Then simplify where practical. SharePoint security is easier to maintain when the information architecture makes sense to the people using it.
`,
  },
  {
    title: "Microsoft Copilot Security: What Businesses Should Check Before Adoption",
    slug: "microsoft-copilot-security-readiness",
    category: "AI & Copilot Security",
    excerpt: "Microsoft Copilot security starts with identity, permissions and data governance. Here is what to review before wider adoption.",
    date: "18 August 2026",
    readTime: "7 min read",
    content: `
## Copilot does not fix poor information governance

One of the most important things to understand about Microsoft Copilot is that it works with the access a user already has. If users can access poorly governed content, AI can make that content easier to discover.

### Review SharePoint and OneDrive permissions

Identify broad access, stale sites, excessive sharing and content that has no clear owner. Permission hygiene should be part of your Copilot readiness work.

### Review sensitive information

Identify sensitive data and consider Microsoft Purview sensitivity labels, DLP and retention controls where appropriate.

### Strengthen identity controls

Copilot adoption should sit on top of a strong identity foundation. Review MFA, Conditional Access, privileged access and device compliance.

### Define an AI governance model

Decide who can use Copilot, how new AI agents will be created, who owns them and how data access will be reviewed.

### Start with a controlled rollout

A staged rollout gives you an opportunity to discover permission and governance problems before they affect the entire organisation.

## AI readiness is really data readiness

The most useful Copilot project often starts before Copilot itself. Clean up access, improve information architecture and establish governance first. That gives employees a safer and more useful AI experience.
`,
  },
  {
    title: "Microsoft Intune Security Baseline: What Should You Configure First?",
    slug: "intune-security-baseline-business",
    category: "Endpoint Security",
    excerpt: "A practical starting point for Microsoft Intune security, device compliance, endpoint protection and Conditional Access.",
    date: "12 August 2026",
    readTime: "6 min read",
    content: `
## Intune is more than device enrolment

Microsoft Intune can manage configuration, compliance, applications and endpoint security. The challenge is deciding which controls to implement first without overwhelming users or administrators.

### Start with device inventory

Know which devices are managed, which are compliant and which are outside your management boundary. An incomplete inventory makes every later decision harder.

### Establish a security baseline

Use Microsoft security recommendations as a starting point, then adjust them for your business requirements. Test changes before broad deployment.

### Configure compliance policies

Define practical requirements for supported operating systems, encryption, security controls and device health. Avoid requirements that create exceptions nobody maintains.

### Connect compliance to access

Conditional Access can use device compliance as part of an access decision. This creates a useful relationship between endpoint security and identity security.

### Deploy endpoint protection

Review Defender for Endpoint, attack surface reduction, firewall, antivirus and other endpoint controls according to your environment and licensing.

## Roll out in stages

A good Intune deployment is usually iterative. Start with a pilot group, measure the impact, fix exceptions and expand gradually. Security controls are more effective when they can be operated reliably.
`,
  },
  {
    title: "Microsoft Purview DLP: Where Should a Business Start?",
    slug: "microsoft-purview-dlp-starting-guide",
    category: "Purview & Information Protection",
    excerpt: "A practical introduction to Microsoft Purview Data Loss Prevention and how to approach DLP without creating unnecessary disruption.",
    date: "6 August 2026",
    readTime: "6 min read",
    content: `
## DLP should start with the information, not the policy

Microsoft Purview Data Loss Prevention can help reduce the risk of sensitive information being shared or handled inappropriately. But deploying too many restrictive policies too quickly can create operational problems.

### Identify the data that matters

Start by understanding the sensitive information your organisation actually handles. Financial information, customer information, credentials and confidential business data may require different controls.

### Use classification where appropriate

Sensitivity labels and sensitive information types can provide useful signals for protection policies. The objective is to make classification meaningful rather than adding labels that nobody understands.

### Begin in audit or simulation modes

Testing policies before enforcement can reveal false positives and unexpected workflows. Use that information to tune the policy before introducing stronger restrictions.

### Make exceptions deliberate

Business exceptions are sometimes necessary. Document them, assign an owner and review them periodically rather than creating permanent invisible bypasses.

### Monitor the results

DLP needs ongoing attention. Review alerts, investigate repeated patterns and adjust policies as the organisation changes.

## Good DLP is practical

The best DLP policy is not necessarily the strictest one. It is the one that protects important information while people can still do their jobs effectively.
`,
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug) ?? null;
}
