"use client";

import { useState } from "react";

export default function Component() {
  const [hasRegistered, setHasRegistered] = useState(false);
  const [email, setEmail] = useState("");

  const handleRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would connect to a registration system
    setHasRegistered(true);
    setEmail("");
  };

  const tickets = [
    {
      tier: "Volunteer",
      price: 20,
      description: "help us with cooking, front desk, etc",
      benefits: [
        "minifest access",
        "lunch, dinner, and snacks",
        "~3 hours of volunteer work",
      ],
      stripeLink: "https://buy.stripe.com/28oaIr1GyaWpcCscMN",
    },
    {
      tier: "Attendee",
      price: 80,
      description: "we're excited to see you!",
      benefits: ["minifest access", "lunch, dinner, and snacks"],
      stripeLink: "https://buy.stripe.com/4gw7wfgBs0hLauk5km",
    },
    {
      tier: "Supporter",
      price: 280,
      description: "aww, thanks for the support",
      benefits: [
        "minifest access",
        "lunch, dinner, and snacks",
        "first pick of vintage Manifest swag",
        "$200 donation to Manifund",
      ],
      stripeLink: "https://buy.stripe.com/bIY17Rad44y1fOE5kn",
    },
  ];

  const attendees = {
    supporters: ["Austin", "John", "Jane"],
    attendees: ["Alice", "Bob", "Charlie"],
    volunteers: ["Eve", "Mallory", "Trent"],
  };

  return (
    <div className="min-h-screen bg-[#FFF6E5] text-gray-800 md:px-4 md:py-16 font-mono">
      {/* Header */}
      <div className="max-w-2xl mx-auto border-4 border-amber-900 p-4 md:p-8 bg-white/70 backdrop-blur-sm">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-amber-900 font-serif">
          minifest
        </h1>
        <div className="text-lg text-amber-800 mb-8 border-b-2 border-amber-200 pb-4">
          December 14, 2024 • Lighthaven, Berkeley
        </div>

        {/* Quick Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          <div className="bg-amber-50 p-6 border-2 border-amber-200 shadow-[4px_4px_0px_0px_rgba(146,64,14,1)]">
            <h2 className="font-semibold mb-2">What</h2>
            <p>
              A cozy one-day festival celebrating prediction markets, blogging,
              economics, and more
            </p>
          </div>
          <div className="bg-amber-50 p-6 border-2 border-amber-200 shadow-[4px_4px_0px_0px_rgba(146,64,14,1)]">
            <h2 className="font-semibold mb-2">Who</h2>
            <p>~200 folks from the Manifest community and beyond</p>
          </div>
        </div>

        {/* Main Letter */}
        <div className="prose prose-amber max-w-none mb-12 [&>div]:leading-relaxed">
          <div className="bg-white md:p-8 text-sm p-4 border-2 border-amber-200 shadow-[4px_4px_0px_0px_rgba(146,64,14,1)]">
            <p className="mb-4">Hey!</p>

            <p className="mb-4">
              Austin here - it's been nearly half a year since{" "}
              <a
                href="https://www.manifest.is/"
                className="underline underline-offset-2 font-semibold"
              >
                Manifest 2024
              </a>
              , and we've been keeping busy, but I still sometimes miss being
              surrounded with my favorite people in the world, gathered together
              to indulge in our shared love of prediction markets.
            </p>

            <p className="mb-4">
              We've started thinking about Manifest 2025 (tentatively June 6-8,
              mark your calendars!); but in the meantime, I was wondering... why
              should we be limited to gathering once a year? There's no law that
              says festivals can only occur annually, and I sure would like to
              see y'all more often than that. Unfortunately, a proper Manifest
              takes us a ton of time & energy to coordinate: logistics,
              speakers, sponsors. What would an 80/20 minimal festival look
              like?
            </p>

            <p className="mb-4">
              And so: minifest! We've booked out Lighthaven for a single day,
              Dec 14. We'll have unconference-style sessions, a smattering of
              events like charity poker, and ample time to hang out and chat.
              We're running this on a shoestring budget, so that everyone can
              come -- eg expect a homecooked dinner instead of catering. It'll
              be a cozy, lowkey, experimental version of the Manifest you know
              and love.
            </p>

            <p className="italic">
              Hope to see you there~
              <br />- Austin
            </p>
          </div>
        </div>

        {/* Ticket Purchase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {tickets.map((ticket) => (
            <div
              key={ticket.tier}
              className="bg-amber-50 p-6 border-2 border-amber-900 shadow-[4px_4px_0px_0px_rgba(146,64,14,1)] flex flex-col gap-2"
            >
              <h3 className="text-xl font-medium mb-2">{ticket.tier}</h3>
              <p className="text-sm text-amber-700 mb-4 md:h-12">
                {ticket.description}
              </p>

              <a href={ticket.stripeLink} className="mb-6">
                <button className="bg-amber-700 text-white text-center py-3 px-6 border-2 border-amber-900 shadow-[4px_4px_0px_0px_rgba(146,64,14,1)] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(146,64,14,1)] transition-all">
                  <div className="text-2xl font-bold">${ticket.price}</div>
                </button>
              </a>

              <div className="text-sm">
                <div className="font-medium mb-2">This includes:</div>
                <ul className="space-y-2">
                  {ticket.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2">
                      <span className="text-amber-700">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-amber-700 text-sm border-t-2 border-amber-200 pt-4">
          {/* Attendee Lists */}
          <div className="my-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div>
              <h3 className="font-semibold text-amber-900 mb-2">Supporters</h3>
              <ul className="space-y-1">
                {attendees.supporters.map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-amber-900 mb-2">Attendees</h3>
              <ul className="space-y-1">
                {attendees.attendees.map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-amber-900 mb-2">Volunteers</h3>
              <ul className="space-y-1">
                {attendees.volunteers.map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
            </div>
          </div>

          <p>
            Questions? Find us on{" "}
            <a
              href="https://discord.gg/3KYVTpfads"
              className="underline underline-offset-2 font-semibold"
            >
              Discord
            </a>
            !
          </p>
        </footer>
      </div>
    </div>
  );
}
