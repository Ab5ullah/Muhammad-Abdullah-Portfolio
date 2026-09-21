import { Download, ExternalLink, MessageCircle, Phone } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CopyButton } from "@/components/ui/CopyButton";
import { profile } from "@/data/profile";

const links = [
  { label: "GitHub", value: "Ab5ullah", href: profile.githubUrl },
  { label: "LinkedIn", value: "ab5ullah", href: profile.linkedinUrl },
  { label: "Fiverr", value: "ab5ullah", href: profile.fiverrUrl },
];

export function Contact() {
  return (
    <section id="contact" className="border-t border-line/10 bg-surface/30">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <SectionHeading
          title="Get in touch"
          description="Have a Flutter app to build, fix, or take over? I'm open to full-time roles and freelance work — reach out directly."
        />
        <div className="grid gap-8 md:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-sm text-muted">Email</p>
                <div className="mt-1 flex items-center gap-3">
                  <a
                    href={`mailto:${profile.email}`}
                    className="font-display text-lg text-foreground transition-colors hover:text-accent sm:text-xl"
                  >
                    {profile.email}
                  </a>
                  <CopyButton value={profile.email} />
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button href={`mailto:${profile.email}`} icon={<ExternalLink className="h-3.5 w-3.5" strokeWidth={1.75} />}>
                  Email me
                </Button>
                <Button
                  href={profile.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  variant="secondary"
                  icon={<MessageCircle className="h-3.5 w-3.5" strokeWidth={1.75} />}
                >
                  WhatsApp
                </Button>
                <Button
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  variant="secondary"
                  icon={<Download className="h-3.5 w-3.5" strokeWidth={1.75} />}
                >
                  Download CV
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <dl className="divide-y divide-line/15 rounded-md border border-line/20 bg-surface/50">
              <div className="flex items-center justify-between gap-4 px-5 py-3.5">
                <dt className="flex items-center gap-2 text-sm text-muted">
                  <Phone className="h-3.5 w-3.5" strokeWidth={1.75} />
                  Phone
                </dt>
                <dd>
                  <a href={`tel:${profile.phoneHref}`} className="font-mono text-sm text-foreground hover:text-accent">
                    {profile.phone}
                  </a>
                </dd>
              </div>
              {links.map((link) => (
                <div key={link.label} className="flex items-center justify-between gap-4 px-5 py-3.5">
                  <dt className="text-sm text-muted">{link.label}</dt>
                  <dd>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-sm text-foreground hover:text-accent"
                    >
                      {link.value}
                      <ExternalLink className="h-3 w-3" strokeWidth={1.75} />
                    </a>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
