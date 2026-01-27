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
      location: "san mateo, california",
      description: "we're your first believer. the first check into your deep tech startup. focused on early stage ventures, deep tech, deal sourcing, deal evaluation, due diligence, robotics, and community building."
    },
    {
      company: "nfx",
      title: "venture fellow",
      duration: "nov 2023 - jun 2024",
      location: "remote",
      description: "part of the 2024 nfx fellows program, working on deal sourcing and evaluation for one of the top seed-stage venture firms."
    },
    {
      company: "e14 fund",
      title: "vc fellow",
      duration: "sep 2023 - mar 2024",
      location: "cambridge, massachusetts",
      description: "investing in early-stage deep tech companies across ai, climate technology, healthcare, and industrial automation."
    },
    {
      company: "alleycorp robotics",
      title: "venture fellow",
      duration: "feb 2023 - aug 2023",
      location: "remote",
      description: "investing in early-stage robotics companies (pre-seed & seed) across industries such as climate/sustainability, construction, food & bev, and logistics. alleycorp robotics invests in companies solving the world's problems through robotics and automation."
    },
    {
      company: "amazon robotics",
      title: "sr. design engineer",
      duration: "apr 2021 - aug 2021",
      location: "north reading, ma",
      description: "led design and implementation of robotic systems for amazon fulfillment centers in 10 countries across na, eu, apac."
    },
    {
      company: "amazon robotics",
      title: "solutions design engineer",
      duration: "nov 2018 - apr 2021",
      location: "north reading, ma",
      description: "at amazon robotics, we apply cutting edge advances in robotics and software to solve real-world challenges that transform our customers' experiences. the solutions design team analyzes and optimizes existing robotic fc performance, combining those learnings with the latest technologies to design new state of the art robotic material handling systems."
    },
    {
      company: "sirmixabot inc",
      title: "co-founder, head of product",
      duration: "2019 - 2020",
      location: "boston, ma / san francisco, ca",
      description: "at sirmixabot, we build robotic bartenders for the home, office, and event spaces. mit delta v 2019 cohort. enhanced customer engagement and increased website monthly visits to 3,000+. led product development from concept to manufacturing. received $50k+ funding from mit entrepreneurship programs."
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
