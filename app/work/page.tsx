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
      company: "Boost VC",
      title: "Investor",
      duration: "Feb 2024 - Present",
      location: "San Mateo, California",
      description: "We're your first believer. The first check into your deep tech startup. Focused on early stage ventures, deep tech, deal sourcing, deal evaluation, due diligence, robotics, and community building."
    },
    {
      company: "NFX",
      title: "Venture Fellow",
      duration: "Nov 2023 - Jun 2024",
      location: "Remote",
      description: "Part of the 2024 NFX Fellows program, working on deal sourcing and evaluation for one of the top seed-stage venture firms."
    },
    {
      company: "E14 Fund",
      title: "VC Fellow",
      duration: "Sep 2023 - Mar 2024",
      location: "Cambridge, Massachusetts",
      description: "Investing in early-stage deep tech companies across AI, climate technology, healthcare, and industrial automation."
    },
    {
      company: "AlleyCorp Robotics",
      title: "Venture Fellow",
      duration: "Feb 2023 - Aug 2023",
      location: "Remote",
      description: "Investing in early-stage robotics companies (pre-seed & seed) across industries such as climate/sustainability, construction, food & bev, and logistics. AlleyCorp Robotics invests in companies solving the world's problems through robotics and automation."
    },
    {
      company: "Amazon Robotics",
      title: "Sr. Design Engineer",
      duration: "Apr 2021 - Aug 2021",
      location: "North Reading, MA",
      description: "Led design and implementation of robotic systems for Amazon Fulfillment Centers in 10 countries across NA, EU, APAC."
    },
    {
      company: "Amazon Robotics",
      title: "Solutions Design Engineer",
      duration: "Nov 2018 - Apr 2021",
      location: "North Reading, MA",
      description: "At Amazon Robotics, we apply cutting edge advances in robotics and software to solve real-world challenges that transform our customers' experiences. The Solutions Design Team analyzes and optimizes existing Robotic FC performance, combining those learnings with the latest technologies to design new state of the art robotic material handling systems."
    },
    {
      company: "SirMixABot Inc",
      title: "Co-Founder, Head of Product",
      duration: "2019 - 2020",
      location: "Boston, MA / San Francisco, CA",
      description: "At SirMixABot, we build robotic bartenders for the home, office, and event spaces. MIT delta v 2019 Cohort. Enhanced customer engagement and increased website monthly visits to 3,000+. Led product development from concept to manufacturing. Received $50K+ funding from MIT entrepreneurship programs."
    }
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation currentPage="work" />

      {/* Content */}
      <div className="pt-32 pb-16 px-8 md:px-16 lg:px-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Work</h1>

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
