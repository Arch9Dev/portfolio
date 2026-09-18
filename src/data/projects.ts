import stockauraScreenshot from '../assets/screenshots/stockaura_image.png'
import furtherapyScreenshot from '../assets/screenshots/furtherapy_image.png'

export type Project = {
  id: string
  number: string
  name: string
  tagline: string
  summary: string
  stack: string[]
  status: string
  github?: string
  demo?: string
  screenshot?: string
  caseStudy: {
    problem: string
    solution: string
    engineering: string[]
    architecture: string[]
    decisions: string[]
    challenges: string
    learned: string
  }
}

export const projects: Project[] = [
  {
    id: 'stockaura',
    number: '001',
    name: 'StockAura',
    tagline: 'Inventory Management Platform',
    summary:
      'A full-stack inventory platform designed to help small businesses manage products, stock levels and operational activity.',
    stack: ['React', 'Express', 'PostgreSQL', 'Prisma', 'JWT / bcrypt'],
    status: 'Feature-complete — preparing for deployment',
    github: 'https://github.com/Arch9Dev',
    screenshot: stockauraScreenshot,
    caseStudy: {
      problem:
        'Small businesses often track inventory in spreadsheets, which breaks down once multiple people need to record stock movements, and offers no audit trail when something goes wrong.',
      solution:
        'A role-based inventory system with full CRUD over products and categories, soft-delete archiving instead of destructive deletes, and transactional stock movements so every change in quantity is recorded rather than silently overwritten.',
      engineering: [
        'JWT/bcrypt authentication with role-based access control (admin vs. staff permissions)',
        'Full CRUD across products, categories and stock movements',
        'Soft-delete archiving to preserve history instead of destroying records',
        'Transactional stock movement logging for an auditable trail of changes',
        'Seeded demo data for a realistic first-run experience',
        'Light / dark theme UI built as a first-class feature, not an afterthought',
      ],
      architecture: ['USER', 'REACT FRONTEND', 'EXPRESS API', 'POSTGRESQL (PRISMA)'],
      decisions: [
        'Prisma over a raw query builder, for type-safe schema access and predictable migrations as the data model grew.',
        'Soft deletes over hard deletes, so stock history stays intact for audit purposes — a small schema decision that mattered once movements needed to be traceable.',
        'Role-based access built in from the start rather than bolted on, since inventory systems are inherently multi-user.',
      ],
      challenges:
        'Modelling stock movements as their own transactional record — rather than just updating a quantity field — took a few iterations to get right, particularly around keeping the running total consistent when multiple movement types (restock, sale, adjustment) needed to be reconciled.',
      learned:
        'How much of an inventory system\'s value comes from its data model rather than its UI — getting the movement/audit trail right early made every feature built on top of it simpler.',
    },
  },
  {
    id: 'furtherapy',
    number: '002',
    name: 'FurTherapy',
    tagline: 'Booking Platform for a Real Client',
    summary:
      'A booking and admin platform built for a canine massage therapy business in Mission Bay, Auckland — a real freelance client, not a coursework exercise.',
    stack: ['SvelteKit', 'React / Express', 'PostgreSQL', 'Nodemailer'],
    status: 'In progress — rebuild for redeployment',
    demo: undefined,
    screenshot: furtherapyScreenshot,
    caseStudy: {
      problem:
        'The client needed a public-facing site where customers could view services and book appointments, plus an admin view to manage availability — without relying on manual back-and-forth messaging.',
      solution:
        'A multi-page booking platform: a marketing homepage, an availability system, a booking wizard for customers, an admin login for the business owner, and automated email notifications so both sides stay informed without manual follow-up.',
      engineering: [
        'Admin authentication, separate from the public booking flow',
        'An availability system driving what booking slots customers can select',
        'Email notifications via Nodemailer for booking confirmations',
        'Mobile responsiveness, including a hamburger navigation menu',
        'A CSS design-token system to keep styling consistent across pages',
        'A security hardening pass: replaced a static session cookie with HMAC-SHA256 signed tokens, rotated exposed credentials, and restricted CORS',
      ],
      architecture: ['CUSTOMER', 'SVELTEKIT FRONTEND', 'BACKEND', 'SQLITE / POSTGRESQL'],
      decisions: [
        'Started in SvelteKit for a fast, lightweight multi-page site suited to a small business\'s needs, later ported the booking logic to a React/Express/PostgreSQL stack as the project\'s scope and my own stack preferences evolved.',
        'HMAC-SHA256 signed session tokens over a static session cookie, once the original approach was identified as a security gap during a later audit.',
      ],
      challenges:
        'Working with a real client meant the requirements weren\'t fully fixed upfront — the availability and booking flow went through several revisions as the business owner clarified how she actually wanted to manage her schedule. Finding and fixing the static session cookie vulnerability after the fact was also a reminder to build security in from the start next time, not retrofit it.',
      learned:
        'What it actually takes to ship and operate software for a real business — deployment, credential handling, and CORS configuration aren\'t academic exercises once a real client\'s data and reputation are on the line.',
    },
  },
]