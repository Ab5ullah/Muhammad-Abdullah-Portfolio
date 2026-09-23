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
    image: "/projects/one-source.webp",
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
    image: "/projects/one-source-rider.webp",
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
    image: "/projects/vent-box.png",
    links: [],
  },
  {
    slug: "chepaticket",
    name: "ChepaTicket",
    tagline: "Bus and event ticket booking across Zambia with mobile money payments",
    description:
      "Launched a complete redesign and major architectural overhaul of the mobile application. Integrated multiple backend REST APIs including the PawaPay payment gateway for seamless mobile money transactions across Zambia, engineered an interactive pinch-to-zoom bus seat booking flow, dynamic event discovery, and structured clean error handling with Riverpod and Dio.",
    role: "Full app redesign & core API / payment integrations",
    company: "Chepa Ticket Zone",
    platform: "iOS & Android",
    stack: ["Flutter", "Riverpod", "Dio", "PawaPay", "REST APIs", "Sealed Architecture"],
    status: "live",
    image: "/projects/chepa-ticket.webp",
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
    image: "/projects/iv-hub.webp",
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
    image: "/projects/iv-hub-servicer.webp",
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
    image: "/projects/jobs-shopper.webp",
    links: [
      { platform: "android", url: "https://play.google.com/store/apps/details?id=app.jobs.shopper" },
      { platform: "ios", url: "https://apps.apple.com/ml/app/jobs-shopper/id6741592250" },
    ],
  },
];
