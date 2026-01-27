import { Navigation } from "@/components/Navigation"

interface WorkItemProps {
  company: string
  title: string
  duration: string
  location: string
  description: string
}

function WorkItem({ company, title, duration, location, description }: WorkItemProps) {
  return (
    <div className="py-8 border-b border-gray-800 last:border-b-0">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
        <div>
          <h3 className="text-lg font-bold text-white">{company}</h3>
          <p className="text-gray-400">{title}</p>
        </div>
        <div className="text-sm text-gray-500 mt-1 md:mt-0 md:text-right">
          <p>{duration}</p>
          <p>{location}</p>
        </div>
      </div>
      <p className="text-sm text-gray-300 leading-relaxed">{description}</p>
    </div>
  )
}

export default function Work() {
  const workExperience = [
    {
      company: "boost vc",
      title: "investor",
      duration: "feb 2024 - present",
      location: "sf / san mateo, california",
      description: "writing first checks into the most ambitious founders solving the world's hardest problems. $50k-$1M."
    },
    {
      company: "venture fellow",
      title: "@nfx, e14 fund, alleycorp robotics",
      duration: "feb 2023 - jun 2024",
      location: "cambridge, massachusetts + remote",
      description: "invested in early-stage companies across ai, robotics, climate tech, healthcare, saas, and industrial automation. 2024 nfx fellows program, e14 vc fellows 2023-2024."
    },
    
    {
      company: "amazon robotics",
      title: "sr. design engineer",
      duration: "nov 2018 - aug 2021",
      location: "north reading, ma",
      description: "led design and implementation of robotic systems for amazon fulfillment centers in 10 countries across na, eu, apac."
    },

    {
      company: "sirmixabot inc",
      title: "co-founder, head of product",
      duration: "2019 - 2020",
      location: "boston, ma / san francisco, ca",
      description: "built robotic bartenders for the offices and coworking spaces. mit delta v 2019 cohort. led product development from concept to manufacturing. raised $250k+."
    }
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation currentPage="work" />

      {/* Content */}
      <div className="pt-32 pb-16 px-8 md:px-16 lg:px-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">work</h1>

          <div>
            {workExperience.map((job, index) => (
              <WorkItem key={index} {...job} />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
