import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

interface ComparisonCardProps {
  title: string
  prompt: string
  chatgptLink: string
  alvioLink: string
}

export function ComparisonCard({ title, prompt, chatgptLink, alvioLink }: ComparisonCardProps) {
  return (
    <Card className="w-full bg-black/40 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-black/50">
      <CardHeader className="pb-6">
        <CardTitle className="text-2xl font-semibold text-white">{title}</CardTitle>

        <div className="mt-6 p-8 bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-500/30 rounded-xl backdrop-blur-sm">
          <Badge
            variant="outline"
            className="text-sm font-medium bg-purple-500/20 text-purple-300 border-purple-400/50 mb-4 px-4 py-2"
          >
            PROMPT
          </Badge>
          <p className="text-lg leading-relaxed text-gray-200 font-medium">
            <span className="text-purple-400 text-xl">"</span>
            <span className="italic text-white">{prompt}</span>
            <span className="text-purple-400 text-xl">"</span>
          </p>
        </div>
      </CardHeader>

      <CardContent className="pt-0 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex flex-col items-center justify-center p-6 bg-black/30 border border-white/10 rounded-xl min-h-[200px] hover:bg-black/40 transition-colors duration-300">
              <div className="mb-4">
                <div className="bg-white/90 rounded-lg p-2">
                  <Image
                    src="https://chatgptaihub.com/wp-content/uploads/2023/06/ChatGpt-logo-With-colour-Background-and-features-ChatGPT-Name-1024x301.png"
                    alt="ChatGPT Logo"
                    width={140}
                    height={42}
                    className="rounded"
                  />
                </div>
              </div>
              <Button
                asChild
                size="lg"
                className="bg-green-600 hover:bg-green-500 text-white px-6 py-2 font-semibold rounded-lg transition-colors duration-200"
              >
                <a
                  href={chatgptLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Response
                </a>
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col items-center justify-center p-6 bg-black/30 border border-white/10 rounded-xl min-h-[200px] hover:bg-black/40 transition-colors duration-300">
              <div className="mb-4">
                <div className="bg-white/90 rounded-lg p-3">
                  <Image
                    src="https://alvio.io/mainLogo.png"
                    alt="Alvio Logo"
                    width={120}
                    height={48}
                    className="rounded"
                  />
                </div>
              </div>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-400 hover:to-pink-400 text-white px-6 py-2 font-semibold rounded-lg transition-colors duration-200"
              >
                <a
                  href={alvioLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Response
                </a>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
