import type { ExperienceEntry } from "@/types";

export const experience: ExperienceEntry[] = [
  {
    company: "7 Kings Code",
    role: "Flutter Developer",
    period: "Nov 2024 — May 2026",
    summary:
      "Shipped three apps as part of a four-person team — IV Hub, IV Hub Servicer, and Jobs Shopper — all live on the App Store and Google Play.",
    highlights: [
      "Built IV Hub, IV Hub Servicer, and Jobs Shopper from scratch alongside a team of four",
      "Worked across customer-facing and provider-facing apps in healthcare booking and hiring",
      "Contributed to clean architectural patterns, responsive mobile UI layouts, and store releases",
    ],
  },
  {
    company: "Chepa Ticket Zone",
    role: "Flutter Developer (Remote)",
    period: "Mar 2026 — Present",
    summary:
      "Launched a complete redesign of the ChepaTicket app, revamping the user experience and integrating multiple critical APIs including PawaPay mobile money payments.",
    highlights: [
      "Led end-to-end UI/UX redesign of the mobile app, crafting modern ticket booking, event exploration, and an interactive pinch-to-zoom seat reservation system",
      "Integrated PawaPay payment gateway and multiple REST APIs for real-time mobile money transactions across Zambia",
      "Restructured application state management using Riverpod and Dio with robust sealed error handling",
    ],
  },
  {
    company: "InventorX",
    role: "Flutter Developer",
    period: "Jun 2026 — Present",
    location: "Lahore, Pakistan",
    summary:
      "Building One Source and One Source Rider solo, from architecture through release, and currently developing a B2B e-commerce app for the Saudi Arabia market.",
    highlights: [
      "Owned One Source and One Source Rider end to end — architecture, implementation, and store release",
      "Building a B2B e-commerce platform for restaurants, cafés, and hotels in Saudi Arabia",
      "Integrated payments (Moyasar), live maps navigation, and Arabic RTL localization",
    ],
  },
];
