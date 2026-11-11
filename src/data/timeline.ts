export type TimelineEntry = {
  title: string;
  // the org, course or context. shown under the title
  subtitle?: string;
  blurb?: string;
  // free text, shown in mono under the entry
  date: string;
  // drives the marker colour and the small label
  kind: 'role' | 'project' | 'education' | 'work' | 'certification' | 'event';
  links?: { label: string; href: string }[];
};

// newest first. verify the dates against your own records, some are inferred
// from repository history rather than a submission date
export const timeline: TimelineEntry[] = [
  {
    title: 'Director, Web Development',
    subtitle: 'DLSU College of Computer Studies Government',
    blurb:
      'Leading a committee of seven on web development for the college government, which ' +
      'represents the students of the College of Computer Studies.',
    date: 'September 2026 – Present',
    kind: 'role',
  },
  {
    title: 'Backend Engineer, Systems and Infrastructure',
    subtitle: 'La Salle Computer Society',
    blurb:
      'Building the backend for Align, a team availability scheduler in TypeScript, Fastify and ' +
      'PostgreSQL. Wrote the create-event and availability endpoints, four of the project’s seven ' +
      'database migrations, and over 40 tests that run against a real database.',
    date: 'September 2026 – Present',
    kind: 'role',
  },
  {
    title: 'Galicious Secret Scanner',
    subtitle: 'Advanced and Offensive Security',
    blurb:
      'A secret scanner with thirteen credential patterns, an entropy fallback and git-history ' +
      'scanning, built by five of us for the course mini project on hacking tool creation. I wrote ' +
      'the orchestration layer and CLI that tie the pipeline together, plus baseline, staged and ' +
      'remediation handling.',
    date: 'August 2026',
    kind: 'project',
    links: [{ label: 'Demo', href: 'https://youtu.be/wDCP1lN0BF0' }],
  },
  {
    title: 'First Capture the Flag',
    subtitle: 'Advanced and Offensive Security',
    blurb:
      'My first time competing in a CTF with twenty flags, worked through ' +
      'as a team against the clock alongside the coursework running at the time.',
    date: 'July 2026',
    kind: 'event',
  },
  {
    title: 'Junior Officer, Research and Development',
    subtitle: 'La Salle Computer Society',
    blurb:
      'Contributed to Check Republic, an automated compliance auditor for student-organization ' +
      'documents, building the audit status endpoint that maps four async job states to their ' +
      'HTTP responses, checked against the project’s Jest suite.',
    date: 'May 2026 – August 2026',
    kind: 'role',
  },
  {
    title: 'Full Capacity: The Evolution of Computer Data Storage',
    subtitle: 'Introduction to Computer Organization and Architecture 2',
    blurb:
      'Built the NAND flash chapter of a virtual exhibit: eleven React components simulating ' +
      'floating-gate charge trapping, wear leveling and SSD throughput.',
    date: 'May 2026 – August 2026',
    kind: 'project',
    links: [
      {
        label: 'Deployment Link',
        href: 'https://dlsu-archcraft.github.io/csarch2-virtual-exhibits/s01g7/',
      },
    ],
  },
  {
    title: 'Publicity and Promotions AVP, Animusika 2026',
    subtitle: 'Central Committee',
    blurb:
      'Wrote the captions behind the event’s social posts and helped shape the marketing and ' +
      'video concepts used to build reach and engagement, as part of a committee of ten.',
    date: 'May 2026 – July 2026',
    kind: 'event',
  },
  {
    title: 'ISC2 Certified in Cybersecurity (CC) Passer',
    subtitle: 'ISC2',
    blurb:
      'Passed the entry-level certification exam covering security principles, access control, ' +
      'network security, and security operations.',
    date: 'March 2026',
    kind: 'certification',
  },
    {
    title: 'ResQ: Response and Emergency Support Queue',
    subtitle: 'Web Application Development',
    blurb:
      'Built the posting side of a disaster-response forum in a team of five: twenty-two Express ' +
      'routes for posts, comments, replies, votes, bookmarks and notifications over a MongoDB ' +
      'data layer.',
    date: 'January 2026 – April 2026',
    kind: 'project',
    links: [{ label: 'Deployment Link', 
    href: 'https://resq-kkve.onrender.com/' }],
  },
  {
    title: 'Macky vs Malware',
    subtitle: 'La Salle Computer Society',
    blurb:
      'Spearheaded an awareness event on the risks people meet online, from malware and phishing ' +
      'to the habits that let them through. Planned over three months with a team of seven, ' +
      'where I ran most of the meetings, and run for around fifty attendees.',
    date: 'January 2026 – March 2026',
    kind: 'event',
  },
  {
    title: 'Documentations AVP, AnimoChristmas 2025',
    subtitle: 'Central Committee',
    blurb:
      'Handled the event’s documentation for a committee of ten, reviewing it for ' +
      'inconsistencies and keeping the records usable for the committees that depended on them.',
    date: 'October 2025 – December 2025',
    kind: 'event',
  },
  {
    title: 'Forza Rentals: Car Rental DBMS',
    subtitle: 'Information Management',
    blurb:
      'A Java desktop records system over a normalized MySQL schema of eleven tables, with a ' +
      'DAO layer between the Swing views and the database.',
    date: 'September – November 2025',
    kind: 'project',
    links: [{ label: 'Source', href: 'https://github.com/galiciary/ccinfom5' }],
  },
    {
    title: 'Accepted as a Junior Officer',
    subtitle: 'La Salle Computer Society',
    blurb:
      'Joined the junior officer training programme, taking part in the team building and ' +
      'technical events the organization ran through the year.',
    date: 'September 2025 – August 2026',
    kind: 'role',
  },
  {
    title: 'Associate, Data and Research',
    subtitle: 'DLSU Data Science Society',
    blurb:
      'Built the cleaning pipeline and overview page for the organization’s internal analytics ' +
      'dashboard, standardizing around fifty free-text degree program spellings and reporting ' +
      'attendance, registrations and satisfaction across six evaluation criteria.',
    date: 'September 2025 – August 2026',
    kind: 'role',
    links: [{ label: 'Deployment Link', 
    href: 'https://dlsu-dss-dashboard.onrender.com/' }],
  },
  {
    title: 'Director, Publications',
    subtitle: 'Association for Computing Machinery – DLSU',
    blurb:
      'Led a committee of around ten writers as the publication arm of the College of Computer ' +
      'Studies, publishing over ten articles across two terms, and hosted workshops on technical ' +
      'research and writing.',
    date: 'September 2025 – August 2026',
    kind: 'role',
  },
  {
    title: 'Executive, External Relations',
    subtitle: 'DLSU CATCH 2T28',
    blurb:
      'Built connections with other organizations, handling partnership correspondence and ' +
      'keeping the agreements on track through to fulfillment.',
    date: 'January 2025 – April 2025',
    kind: 'role',
  },
  {
    title: 'Associate, External Relations',
    subtitle: 'DLSU Data Science Society',
    blurb:
      'Sourced speakers and partners for data science seminars.',
    date: 'September 2024 – August 2025',
    kind: 'role',
  },
  {
    title: 'Executive, Creatives',
    subtitle: 'DLSU Microsoft Student Community',
    blurb:
      'Designed publicity materials for community events with a team of five, and helped shape ' +
      'the design direction behind them.',
    date: 'September 2024 – August 2025',
    kind: 'role',
  },
  {
    title: 'Started BS Computer Science, Major in Network and Information Security',
    subtitle: 'De La Salle University, Manila',
    date: 'September 2024',
    kind: 'education',
  },
  {
    title: 'Clerical Intern',
    subtitle: 'Daraga Municipal Hall, Employment Section',
    blurb:
      'Proposed and built an online adaptation of the summer internship application by integrating ' +
      'the PESO website with Google Sheets.',
    date: 'April 2024 – May 2024',
    kind: 'work',
  }
];
