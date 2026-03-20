"use client";

import { FormEvent, useState } from "react";
import { Mail, MessageSquare, Send, Share2, User } from "lucide-react";

type ContactFormProps = {
  email: string;
};

export function ContactForm({ email }: ContactFormProps) {
  const [name, setName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = `Portfolio inquiry from ${name || "Website Visitor"}`;
    const body = [
      `Name: ${name}`,
      `Email: ${senderEmail}`,
      "",
      "Message:",
      message,
    ].join("\n");

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="relative overflow-hidden rounded-[2.4rem] border border-white/10 bg-[#15131b] p-4 shadow-[0_0_40px_rgba(236,72,153,0.12)] lg:p-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(74,222,128,0.12),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.18),transparent_35%),radial-gradient(circle_at_60%_70%,rgba(99,102,241,0.14),transparent_30%)]" />
      <div className="relative rounded-[2rem] border border-white/8 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-8 backdrop-blur-sm lg:p-10">
        <div className="mb-10 flex items-start justify-between gap-6">
          <div>
            <p className="text-[2.5rem] font-semibold tracking-tight text-[#6d5efc] sm:text-[3.25rem]">
              Get in Touch
            </p>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-white/60 sm:text-[1.9rem] sm:leading-10">
              Have something to discuss? Send me a message and let&apos;s talk.
            </p>
          </div>
          <div className="hidden rounded-full bg-white/5 p-4 text-[#6d5efc] md:block">
            <Share2 size={34} />
          </div>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <label className="flex items-center gap-4 rounded-[1.6rem] border border-white/20 bg-white/[0.04] px-6 py-5 text-white/60 transition focus-within:border-white/35 focus-within:bg-white/[0.06]">
            <User size={28} className="shrink-0" />
            <input
              required
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="w-full bg-transparent text-xl text-white outline-none placeholder:text-white/35"
            />
          </label>

          <label className="flex items-center gap-4 rounded-[1.6rem] border border-white/20 bg-white/[0.04] px-6 py-5 text-white/60 transition focus-within:border-white/35 focus-within:bg-white/[0.06]">
            <Mail size={28} className="shrink-0" />
            <input
              required
              type="email"
              placeholder="Your Email"
              value={senderEmail}
              onChange={(event) => setSenderEmail(event.target.value)}
              className="w-full bg-transparent text-xl text-white outline-none placeholder:text-white/35"
            />
          </label>

          <label className="flex items-start gap-4 rounded-[1.6rem] border border-white/20 bg-white/[0.04] px-6 py-5 text-white/60 transition focus-within:border-white/35 focus-within:bg-white/[0.06]">
            <MessageSquare size={28} className="mt-1 shrink-0" />
            <textarea
              required
              placeholder="Your Message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              rows={6}
              className="min-h-44 w-full resize-y bg-transparent text-xl text-white outline-none placeholder:text-white/35"
            />
          </label>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-3 rounded-[1.55rem] bg-[linear-gradient(90deg,#6366f1_0%,#a855f7_55%,#d946ef_100%)] px-8 py-5 text-xl font-semibold text-white shadow-[0_0_28px_rgba(168,85,247,0.24)] transition hover:-translate-y-0.5 hover:brightness-110"
          >
            <Send size={24} />
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
