import { Navigation } from "@/components/Navigation"
import Image from "next/image"

type ProjectLink = {
  label: string
  href: string
}

type Project = {
  title: string
  year: string
  role?: string
  org?: string
  description: string
  tags: string[]
  image?: string
  imageGradient?: string
  links?: ProjectLink[]
}

const projects: Project[] = [
  {
    title: "arcade steps",
    year: "2023",
    org: "mit reality hack",
    role: "hardware + experience design (team of 5)",
    description:
      "vr + hardware system that gamifies stair climbing to encourage daily movement and reduce elevator use. wearable uses esp32, bmp388 barometer for altitude detection, bno085 imu for leg tracking, and led rings + vibration motors for feedback, paired with a unity experience on meta quest 2 passthrough. winner of the hardware: interfacing with the human body track.",
    tags: ["hardware", "xr/vr", "esp32", "unity", "hackathon"],
    image: "/projects/arcade.jpg",
    imageGradient: "from-purple-900 via-pink-800 to-orange-700",
    links: [
      { label: "devpost", href: "https://devpost.com/software/arcade-steps" },
      { label: "mit reality hack", href: "https://www.mitrealityhack.com/" },
    ],
  },
  {
    title: "sirmixabot (smab)",
    year: "2022",
    org: "mit delta v",
    role: "cofounder",
    description:
      "robotic bartender company i cofounded. started at mit and went through the delta v accelerator, taking the product from prototype and renderings to working demos.",
    tags: ["robotics", "startup", "hardware", "mit delta v"],
    imageGradient: "from-slate-800 via-zinc-700 to-stone-800",
    links: [
      { label: "mit delta v", href: "https://entrepreneurship.mit.edu/accelerator/" },
    ],
  },
  {
    title: "mini battle bots",
    year: "2022",
    role: "designer, builder, competitor",
    description:
      "1lb antweight combat robot. designed and machined a vertical spinner with a carbide-tipped saw blade weapon; cad to fabrication to arena.",
    tags: ["robotics", "combat", "cad", "machining"],
    imageGradient: "from-red-900 via-rose-800 to-amber-800",
  },
  {
    title: "hospital lobby assistant robot",
    year: "2017",
    org: "wpi, major qualifying project (senior thesis)",
    role: "team of 5 (robotics, mechanical, interdisciplinary)",
    description:
      "autonomous robot to assist visitors navigating hospital environments. features autonomous navigation, a robotic arm for door opening, and an onboard user interface, built on a modular backend so future teams can extend it. hands-on with machining, milling, cad, and programming, from first sketches to final fabrication. advised by gregory s. fischer and candace sidner.",
    tags: ["robotics", "medical", "autonomous navigation", "cad", "machining"],
    image: "/projects/hospital-robot.jpg",
    imageGradient: "from-sky-900 via-blue-800 to-indigo-800",
    links: [
      {
        label: "demo video",
        href: "https://www.youtube.com/watch?v=vpoiqBzuGNA",
      },
      {
        label: "wpi digital archive",
        href: "https://digital.wpi.edu/concern/student_works/mg74qn614?locale=en",
      },
    ],
  },
  {
    title: "kukbol",
    year: "2016",
    org: "parsons / the new school",
    role: "sole designer",
    description:
      "product design project reimagining the cooking pan as a hybrid of cookware and tableware. modular handle system with a stick handle for the stove, u-shape double handles for carrying, and handle-free for serving, so the pan goes straight from fire to table. developed through sketching, cardboard prototyping, cad, and final renderings. advised by len mayer.",
    tags: ["product design", "cad", "prototyping", "industrial design"],
    image: "/projects/kukbol.jpg",
    imageGradient: "from-emerald-800 via-teal-700 to-cyan-800",
  },
  {
    title: "chs cougars ftc 4102",
    year: "2013",
    org: "first tech challenge, chatham high school, nj",
    role: "team member",
    description:
      "3rd in the world at the ftc world championship. built competition robots end-to-end (cad, fabrication, programming) and ran a fundraising golfing robot to support the team.",
    tags: ["robotics", "ftc", "cad", "high school"],
    image: "/projects/ftc-4102.jpg",
    imageGradient: "from-yellow-700 via-orange-700 to-red-800",
    links: [
      {
        label: "patch: world championship coverage",
        href: "https://patch.com/new-jersey/maplewood/chs-robotics-team-takes-it-to-another-level",
      },
      {
        label: "competition video",
        href: "https://www.facebook.com/watch/?v=609423989083021",
      },
      {
        label: "promo video",
        href: "https://www.youtube.com/watch?v=3aTRJNr8bgE",
      },
      {
        label: "robot walkthrough / judge award",
        href: "https://www.youtube.com/watch?v=XneAkbZSfBc",
      },
    ],
  },
]

export default function Projects() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation currentPage="projects" />

      {/* Content */}
      <div className="pt-32 pb-16 px-8 md:px-16 lg:px-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">projects</h1>

          <p className="text-gray-300 text-sm md:text-base mb-12">
            things i&apos;ve built and am building.
          </p>

          <div className="space-y-4">
            {projects.map((project) => (
              <article
                key={project.title}
                className="border border-gray-800 hover:border-gray-600 transition-colors"
              >
                <div className="flex flex-col sm:flex-row gap-6 p-6">
                  <div
                    className={`relative w-full sm:w-40 aspect-square shrink-0 overflow-hidden bg-gradient-to-br ${
                      project.imageGradient ?? "from-gray-800 to-gray-900"
                    }`}
                  >
                    {project.image && (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 160px"
                        className="object-cover"
                      />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-4 mb-1">
                      <h2 className="text-lg font-medium">{project.title}</h2>
                      <span className="text-gray-500 text-sm whitespace-nowrap">
                        {project.year}
                      </span>
                    </div>

                    {(project.org || project.role) && (
                      <p className="text-gray-500 text-xs mb-3">
                        {[project.org, project.role].filter(Boolean).join(" · ")}
                      </p>
                    )}

                    <p className="text-gray-400 text-sm mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-xs border border-gray-700 text-gray-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {project.links && project.links.length > 0 && (
                      <div className="flex flex-wrap gap-x-4 gap-y-1">
                        {project.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-gray-400 hover:text-white underline underline-offset-4 decoration-gray-700 hover:decoration-white transition-colors"
                          >
                            {link.label} ↗
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
