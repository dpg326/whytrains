"use client";

import ScrollReveal from "@/components/ScrollReveal";

const sources = [
  {
    id: 1,
    text: "U.S. Environmental Protection Agency. (2026, March 10). Transportation sector emissions.",
    url: "https://www.epa.gov/ghgemissions/transportation-sector-emissions",
  },
  {
    id: 2,
    text: "International Energy Agency. (n.d.). Rail. IEA.",
    url: "https://www.iea.org/energy-system/transport/rail",
  },
  {
    id: 3,
    text: 'Nunno, R. (2018, May 30). Electrification of U.S. railways: Pie in the sky, or realistic goal? Environmental and Energy Study Institute.',
    url: "https://www.eesi.org/articles/view/electrification-of-u.s.-railways-pie-in-the-sky-or-realistic-goal",
  },
  {
    id: 4,
    text: "UK Government, Department for Energy Security and Net Zero. (2022). Carbon footprint of travel per kilometre. Via Our World in Data.",
    url: "https://ourworldindata.org/transport",
  },
  {
    id: 5,
    text: "Wikipedia. List of countries by rail transport network size. Sourced from national rail authorities.",
    url: "https://en.wikipedia.org/wiki/List_of_countries_by_rail_transport_network_size",
  },
  {
    id: 6,
    text: "Mathews, J. No, Amtrak does not have to make a profit. Rail Passengers Association.",
    url: "https://www.railpassengers.org/happening-now/news/blog/no-amtrak-does-not-have-to-make-a-profit/",
  },
  {
    id: 7,
    text: "High Speed Rail Alliance. Smart and sustainable growth through high-speed rail.",
    url: "https://www.hsrail.org/",
  },
  {
    id: 8,
    text: "California High-Speed Rail Authority. Fresno Station Area Master Plan.",
    url: "https://hsr.ca.gov/",
  },
  {
    id: 9,
    text: "Google Maps. Driving and rail travel time estimates between paired cities (2026).",
    url: "https://www.google.com/maps",
  },
  {
    id: 10,
    text: "Fresno Bee. Downtown Fresno is booming — and high-speed rail is a big reason why.",
    url: "https://www.fresnobee.com/",
  },
  {
    id: 11,
    text: "Amtrak. Nextgen Acela: maximum speed 160 mph with active tilt system.",
    url: "https://www.amtrak.com/nextgen-acela",
  },
  {
    id: 12,
    text: "TRP Magazine. The Allentown Triangle — history of passenger service to the Lehigh Valley and the 1967 Aldene Plan.",
    url: "https://trpmagazine.com/the-allentown-triangle/",
  },
  {
    id: 13,
    text: "U.S. Energy Information Administration. Greenhouse gases and the climate. Fossil fuels account for 74% of U.S. GHG and 93% of U.S. CO₂; atmospheric CO₂ in 2022 was ~1.5× 1850 levels.",
    url: "https://www.eia.gov/energyexplained/energy-and-the-environment/greenhouse-gases-and-the-climate.php",
  },
];

export default function SourcesFooter() {
  return (
    <footer className="bg-primary py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <div className="border-t border-background/10 pt-10">
            <h3 className="font-heading text-sm text-background/30 uppercase tracking-widest mb-8">
              Sources
            </h3>
            <ol className="space-y-4">
              {sources.map((source) => (
                <li key={source.id} className="flex gap-3">
                  <span className="font-body text-accent/50 text-xs mt-0.5 shrink-0">
                    [{source.id}]
                  </span>
                  <p className="font-body text-background/35 text-xs leading-relaxed">
                    {source.text}{" "}
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent/50 underline underline-offset-2 hover:text-accent/80 transition-colors break-all"
                    >
                      {source.url}
                    </a>
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
