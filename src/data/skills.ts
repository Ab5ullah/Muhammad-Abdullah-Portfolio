import type { EducationEntry, SkillGroup } from "@/types";

export const skills: SkillGroup[] = [
  {
    category: "Languages & framework",
    items: ["Flutter", "Dart"],
  },
  {
    category: "Architecture & state",
    items: ["Clean Architecture", "Riverpod", "Repository pattern"],
  },
  {
    category: "Data & backend",
    items: ["Firebase", "Hive", "Dio", "REST APIs"],
  },
  {
    category: "Integrations",
    items: [
      "Payment gateways (Moyasar)",
      "In-app purchases (RevenueCat)",
      "Maps & live navigation",
      "Push notifications (FCM)",
    ],
  },
  {
    category: "Platform & tooling",
    items: ["GoRouter", "Localization & RTL support", "Git & GitHub"],
  },
];

export const education: EducationEntry[] = [
  {
    degree: "BS, Information Technology",
    institution: "University of Gujrat",
    period: "2020 — 2024",
  },
];
