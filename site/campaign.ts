/**
 * Campaign content — update names, ward, party, contacts, and priorities here.
 * Replace bracketed placeholders with verified facts.
 */
export interface Priority {
  title: string
  summary: string
}

export interface CampaignContent {
  candidate: {
    fullName: string
    shortTagline: string
    roleLabel: string
    county: string
    ward: string
    party: string
    photoAlt: string
  }
  bio: {
    intro: string
    paragraphs: string[]
  }
  priorities: Priority[]
  values: string[]
  contact: {
    phone: string
    email: string
    locationNote: string
    social: { label: string; href: string }[]
  }
  cta: {
    register: string
    vote: string
  }
}

export const campaign: CampaignContent = {
  candidate: {
    fullName: 'Wayne Gift Ludenyi',
    shortTagline: 'Service, integrity, and results for our ward.',
    roleLabel: 'Candidate for Member of County Assembly (MCA)',
    county: '[Your County]',
    ward: '[Your Ward]',
    party: '[Party or Independent]',
    photoAlt: 'Portrait of Wayne Gift Ludenyi',
  },
  bio: {
    intro:
      'Wayne Gift Ludenyi is running to represent residents as Member of County Assembly — bringing people together around practical solutions for jobs, safety, and basic services.',
    paragraphs: [
      'Raised with a belief that leadership is service, Wayne has focused on listening first: ward meetings, youth forums, and working with community groups to understand what families need most.',
      'This site outlines his commitments on infrastructure, health access, education support, economic opportunity, and open government. Replace this text with Wayne’s verified story, education, and experience.',
    ],
  },
  priorities: [
    {
      title: 'Water & sanitation',
      summary:
        'Reliable water and dignified sanitation in every neighbourhood — faster project delivery and transparent ward development funds.',
    },
    {
      title: 'Roads & mobility',
      summary:
        'Safer feeder roads, drainage, and street lighting where residents need them; working with the county on maintenance and last-mile connectivity.',
    },
    {
      title: 'Youth & livelihoods',
      summary:
        'Skills training, cooperatives, and links to county programmes so young people can earn a living at home.',
    },
    {
      title: 'Health & social care',
      summary:
        'Stronger ward-level health outreach, CHP support, and advocacy for dispensaries and referral access.',
    },
    {
      title: 'Education & child welfare',
      summary:
        'Bursaries, ECD support, and safe school environments — partnering with parents and teachers for every child.',
    },
    {
      title: 'Governance & accountability',
      summary:
        'Open ward offices, public participation in budgets, and reporting back to residents on projects and spending.',
    },
  ],
  values: [
    'Uphold the Constitution and serve all residents equally',
    'Listen before deciding; explain decisions clearly',
    'Zero tolerance for corruption and favouritism',
    'Collaborate across parties for ward benefit',
  ],
  contact: {
    phone: '+254 7XX XXX XXX',
    email: 'hello@example.com',
    locationNote: 'Campaign office / meeting point: [add address or area]',
    social: [
      { label: 'Facebook', href: 'https://facebook.com/' },
      { label: 'X (Twitter)', href: 'https://x.com/' },
    ],
  },
  cta: {
    register: 'Confirm you are registered to vote and your polling station on the IEBC portal.',
    vote: 'Election day: follow IEBC announcements. Every vote counts for the ward you call home.',
  },
}
