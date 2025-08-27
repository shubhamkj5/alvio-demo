"use client"
import { useState } from "react"
import { ComparisonCard } from "@/components/comparison-card"
import { Sidebar } from "@/components/sidebar"

const comparisons = [
  {
    title: "Tesla Stock Analysis",
    prompt:
      "I'd like a thorough analysis of Tesla stock, including: Summary: Company overview, key metrics, performance data and investment recommendations Financial Data: Revenue trends, profit margins, balance sheet and cash flow analysis Market Sentiment: Analyst ratings, sentiment indicators and news impact Technical Analysis: Price trends, technical indicators and support/resistance levels Compare Assets: Market share and financial metrics vs. key competitors Value Investor: Intrinsic value, growth potential and risk factors Investment Thesis: SWOT analysis and recommendations for different investor types. And create a beautiful Dashboard",
    chatgptLink: "https://chatgpt.com/share/68a4d781-bda4-8002-916c-58cb5b4b1851",
    alvioLink: "https://staging.alvio.io/share/c5dc02f3-88b8-4d4c-bdb9-ce8ea56d507a",
  },
  {
    title: "Contract Review",
    prompt: "Review this contract, and identify anything that could be misleading or suspicious",
    chatgptLink: "https://chatgpt.com/share/68a4d838-4ac0-8002-9ca6-809c56415774",
    alvioLink: "https://staging.alvio.io/share/134e4412-77c7-4542-9b7d-d929aefe1178",
  },
  {
    title: "MayFair Monitoring Dashboard",
    prompt:
      "For Mayfair's Capitals portfolio, create a monitoring dashboard with the following fields: Company name, sector, latest press/news (last 12 months), recent financial results and any management changes.",
    chatgptLink: "https://chatgpt.com/share/68a4d870-3a80-8002-bcf3-44c8fb721527",
    alvioLink: "https://staging.alvio.io/share/0d7d5770-9894-4601-82ef-6df335634f07",
  },
  {
    title: "MayFair Capital Investments Details",
    prompt:
      "Give me a list of all startups that mayfair capital has invested in and all details, and give me an excel file.",
    chatgptLink: "https://chatgpt.com/share/68a4d8c1-b740-8002-9b81-ed3c547d5abf",
    alvioLink: "https://staging.alvio.io/share/384dfda0-7291-4a90-bd3e-741135764be0",
  },
  {
    title: "Sourcing a Candidate",
    prompt:
      "LinkedIn Search for Chief Revenue Officer (CRO) candidates in London SaaS scale-ups Pull from LinkedIn, Crunchbase profiles, and GitHub (if relevant) Evaluate track record (ARR growth, exits, team leadership, culture fit) Create a ranked candidate pipeline with justification for ranking Draft a personalized outreach email template per candidate",
    chatgptLink: "https://chatgpt.com/share/68a5ed5f-7d44-8002-bc4e-f1580f754079",
    alvioLink: "https://staging.alvio.io/share/db5904b7-4ea1-4593-ad2f-e081ef281b25",
  },
  {
    title: "B2B Leads",
    prompt:
      "We are a tech consulting firm with in-depth research on technologies in the Gen AI field. Please create a potential customer form for us. The target companies are B2B American companies in the development stage before Series B that need AI technology empowerment. List at least 15 companies, clearly stating their contact information, company business introductions, addresses and other specific details.",
    chatgptLink: "https://chatgpt.com/share/68a4f2dd-e16c-8002-afd9-9c883c7f5126",
    alvioLink: "https://staging.alvio.io/share/c2d055de-49cf-4c6e-9611-746ea56a1b3e",
  },
  {
    title: "Amazon Sales Data Analysis",
    prompt:
      "Here's last month's sales data from my Amazon store. Could you analyze it thoroughly with visualizations and recommend specific, data-driven strategies to boost next month's sales by 10%?",
    chatgptLink: "https://chatgpt.com/share/68a5b24c-2c60-8002-af73-658e481c1f2e",
    alvioLink: "https://staging.alvio.io/share/86d21044-fcfd-4203-b140-dc02af68a8c8",
  },
  {
    title: "Mayfair Org Structure",
    prompt:
      "Please create a comprehensive Mayfair Capital organizational chart using public information, showing current hierarchy and reporting structures. Include key personnel (noting recent departures) and identify team members across departments.",
    chatgptLink: "https://chatgpt.com/share/68a5b31a-f3b0-8002-945e-53f25aceb646",
    alvioLink: "https://staging.alvio.io/share/a4ebed1d-6fdf-421c-8b06-0dc72ede58a9",
  },
  {
    title: "Financial Analysis",
    prompt: "Can you do a first pass review of the financial statement and tie-out to the supporting Excel workpapers?",
    chatgptLink: "https://chatgpt.com/share/68a5c68a-aa80-8002-b792-2dce903d5c5c",
    alvioLink: "https://staging.alvio.io/share/a61532fa-e16d-449b-acb9-8e01805edb79",
  },
  {
    title: "Recruitment CV Filtering",
    prompt:
      "I am an HR professional looking to hire a Reinforcement Learning Algorithm Engineer. I prefer someone with relevant RL experience. Please help me organize candidate information from PDFs into a complete Excel summary table including basic information and concise summary of project experiences (focusing on key highlights and achievements). Please rank candidates based on their RL expertise and provide me with an Excel file that includes all this information in an organized format. I hope you can carefully read through each candidate's resume one by one.",
    chatgptLink: "https://chatgpt.com/share/68a5c738-2ba4-8002-8a23-fc7cf60bd7f1",
    alvioLink: "https://staging.alvio.io/share/90da5e13-b5f6-4689-b41f-2dd7f68b2cc5",
  },
]

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="min-h-screen bg-black glass-bg">
      <Sidebar comparisons={comparisons} activeIndex={activeIndex} onSelectComparison={setActiveIndex} />

      <div className="lg:ml-80">
        <main className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <ComparisonCard
              title={comparisons[activeIndex].title}
              prompt={comparisons[activeIndex].prompt}
              chatgptLink={comparisons[activeIndex].chatgptLink}
              alvioLink={comparisons[activeIndex].alvioLink}
            />
          </div>
        </main>
      </div>
    </div>
  )
}
