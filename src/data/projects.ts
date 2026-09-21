import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "one-source",
    name: "One Source",
    tagline: "B2B procurement for Saudi Arabia's food service industry",
    description:
      "A B2B ordering platform that lets restaurants, cafés, and hotels across Saudi Arabia source fresh ingredients, pantry stock, packaging, and kitchen supplies from one app — with bulk ordering, mapped deliveries, and in-app payments.",
    role: "Solo build — architecture to release",
    company: "InventorX",
    platform: "iOS & Android",
    stack: ["Flutter", "Dart", "Riverpod", "Dio", "Firebase", "Moyasar payments", "Google Maps"],
    status: "live",
    links: [
      { platform: "ios", url: "https://apps.apple.com/ca/app/one-source/id6795812747" },
      { platform: "android", url: "https://play.google.com/store/apps/details?id=com.one.source" },
    ],
  },
  {
    slug: "one-source-rider",
    name: "One Source Rider",
    tagline: "Delivery management for One Source's driver fleet",
    description:
      "The companion app for One Source's delivery riders — a live dashboard of assigned drops, turn-by-turn navigation, delivery status updates, and code-verified handoffs, with full English/Arabic RTL support.",
    role: "Solo build — companion app",
    company: "InventorX",
    platform: "Android",
    stack: ["Flutter", "Dart", "Riverpod", "GoRouter", "Google Maps", "RTL localization"],
    status: "live",
    links: [
      { platform: "android", url: "https://play.google.com/store/apps/details?id=com.one.source.rider" },
    ],
  },
  {
    slug: "vent-box",
    name: "Vent Box",
    tagline: "A private space to let frustration go",
    description:
      "Type out whatever's frustrating you and watch it get destroyed through animation — a lightweight, judgment-free release valve, with a freemium model and a lifetime-deal tier.",
    role: "Founder & solo developer",
    company: "Personal project",
    platform: "Android",
    stack: ["Flutter", "Riverpod", "Hive", "GoRouter", "RevenueCat"],
    status: "in-review",
    links: [],
  },
  {
    slug: "chepaticket",
    name: "ChepaTicket",
    tagline: "Bus and event ticket booking for Zambia",
    description:
      "An all-in-one booking platform for Zambian travelers and event-goers — search bus routes, pick seats, browse concerts and festivals, and manage every ticket from one app.",
    role: "Joined an existing app — UI redesign & new features",
    company: "Chepa Ticket Zone",
    platform: "iOS & Android",
    stack: ["Flutter", "Riverpod", "Dio", "Sealed error handling"],
    status: "live",
    links: [
      { platform: "android", url: "https://play.google.com/store/apps/details?id=com.cheepa.tickethub" },
      { platform: "ios", url: "https://apps.apple.com/us/app/chepa-ticket/id6769854821" },
    ],
  },
  {
    slug: "iv-hub",
    name: "IV Hub",
    tagline: "Book at-home IV therapy appointments",
    description:
      "Lets people browse IV therapy options, book a provider for their home or a wellness center, pay securely, and manage every appointment in one place.",
    role: "Team of 4 — built from scratch; published by the team lead",
    company: "7 King Codes",
    platform: "iOS & Android",
    stack: ["Flutter", "Dart"],
    status: "live",
    links: [
      { platform: "android", url: "https://play.google.com/store/apps/details?id=com.iv.hub" },
      { platform: "ios", url: "https://apps.apple.com/us/app/iv-hub/id6752780828" },
    ],
  },
  {
    slug: "iv-hub-servicer",
    name: "IV Hub Servicer",
    tagline: "The provider side of IV Hub",
    description:
      "Gives approved IV therapy providers the tools to manage availability, accept appointment requests, track visits, and handle inventory and earnings.",
    role: "Team of 4 — built from scratch; published by the team lead",
    company: "7 King Codes",
    platform: "iOS & Android",
    stack: ["Flutter", "Dart"],
    status: "live",
    links: [
      { platform: "android", url: "https://play.google.com/store/apps/details?id=com.ivhub.nursingside" },
      { platform: "ios", url: "https://apps.apple.com/us/app/iv-hub-servicer/id6757314768" },
    ],
  },
  {
    slug: "jobs-shopper",
    name: "Jobs Shopper",
    tagline: "A job board for candidates and employers",
    description:
      "A job-application marketplace where candidates browse and apply to listings while employers post openings and manage applicants, all from one app.",
    role: "Team of 4 — built from scratch; published by the team lead",
    company: "7 King Codes",
    platform: "iOS & Android",
    stack: ["Flutter", "Dart"],
    status: "live",
    links: [
      { platform: "android", url: "https://play.google.com/store/apps/details?id=app.jobs.shopper" },
      { platform: "ios", url: "https://apps.apple.com/ml/app/jobs-shopper/id6741592250" },
    ],
  },
];
