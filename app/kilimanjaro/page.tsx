import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import WhatsAppFloat from "@/components/whatsapp-float"
import Link from "next/link"

export default function KilimanjaroPage() {
  const routes = [
    {
      name: "Machame Route",
      nickname: "The Whiskey Route",
      duration: "6-7 days",
      difficulty: "Moderate to Challenging",
      description: "Scenic and challenging route with diverse landscapes",
      highlights: [
        "Most scenic route with varied terrain",
        "High success rate due to good acclimatization",
        "Camping under the stars",
        "Barranco Wall adventure",
      ],
    },
    {
      name: "Marangu Route",
      nickname: "The Coca-Cola Route",
      duration: "5-6 days",
      difficulty: "Moderate",
      description: "Comfortable hut accommodation route",
      highlights: [
        "Only route with hut accommodation",
        "Most popular and well-established",
        "Good for beginners",
        "Shorter duration option",
      ],
    },
    {
      name: "Lemosho Route",
      nickname: "The Pristine Route",
      duration: "7-8 days",
      difficulty: "Moderate to Challenging",
      description: "Pristine wilderness approach with excellent acclimatization",
      highlights: [
        "Less crowded wilderness experience",
        "Excellent acclimatization profile",
        "Stunning views of Shira Plateau",
        "High success rate",
      ],
    },
    {
      name: "Rongai Route",
      nickname: "The Northern Route",
      duration: "6-7 days",
      difficulty: "Moderate",
      description: "Quieter northern approach with unique perspectives",
      highlights: [
        "Only route from the north",
        "Less crowded than southern routes",
        "Good weather protection",
        "Unique wildlife viewing opportunities",
      ],
    },
    {
      name: "Umbwe Route",
      nickname: "The Steep Route",
      duration: "6-7 days",
      difficulty: "Very Challenging",
      description: "Steep and direct challenge for experienced trekkers",
      highlights: [
        "Most direct and steep route",
        "For experienced mountaineers",
        "Dramatic and challenging terrain",
        "Less crowded due to difficulty",
      ],
    },
    {
      name: "Northern Circuit",
      nickname: "The Grand Traverse",
      duration: "8-9 days",
      difficulty: "Moderate",
      description: "Longest and most scenic route around the mountain",
      highlights: [
        "Longest route with best acclimatization",
        "360-degree views of Kilimanjaro",
        "Highest success rate",
        "Most comprehensive mountain experience",
      ],
    },
  ]

  const whyClimb = [
    {
      title: "Personal Achievement",
      description:
        "Standing on the Roof of Africa is a life-changing accomplishment that builds confidence and resilience.",
    },
    {
      title: "Breathtaking Views",
      description: "Witness sunrise from 19,341 feet above sea level with panoramic views across East Africa.",
    },
    {
      title: "Diverse Ecosystems",
      description: "Journey through five distinct climate zones from tropical rainforest to arctic summit.",
    },
    {
      title: "No Technical Climbing",
      description: "Accessible to anyone with good fitness - no mountaineering experience required.",
    },
    {
      title: "Cultural Experience",
      description: "Meet local guides and porters while learning about Chagga and Maasai cultures.",
    },
    {
      title: "Life Perspective",
      description: "The challenge and beauty of Kilimanjaro provides profound perspective on life's possibilities.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <WhatsAppFloat />

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/kilimanjaro-distance.png)" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#55331e]/90 to-[#f88f2f]/90"></div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 font-serif">Mount Kilimanjaro</h1>
          <p className="text-xl md:text-3xl mb-8 font-sans">Why This Should Be on Everyone's Bucket List</p>
          <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Standing at 5,895 meters, Mount Kilimanjaro is not just Africa's highest peak—it's a life-changing journey
            that challenges your limits and rewards you with unparalleled views and personal triumph. This majestic
            mountain calls to adventurers from around the world, offering an achievable yet extraordinary challenge.
          </p>
        </div>
      </section>

      {/* Why Climb Kilimanjaro */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-8">
              <img
                src="/images/giant-senecio.png"
                alt="Giant Senecio plants on Kilimanjaro"
                className="w-full max-w-4xl mx-auto h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#55331e] mb-6 font-serif">
              Why Kilimanjaro Should Be Your Next Adventure
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              More than just a mountain, Kilimanjaro represents the ultimate personal challenge and natural wonder.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyClimb.map((reason, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold text-[#55331e] mb-3 font-serif">{reason.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Routes Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#55331e] mb-6 font-serif">
              Choose Your Route to the Summit
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each route offers a unique experience and challenge level. Our expert guides will help you choose the
              perfect path based on your fitness, experience, and preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {routes.map((route, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img
                    src={
                      index === 0
                        ? "/images/base-camp-sunset.png"
                        : index === 1
                          ? "/images/trail-signpost.png"
                          : index === 2
                            ? "/images/kilimanjaro-peak.png"
                            : index === 3
                              ? "/images/kilimanjaro-distance.png"
                              : index === 4
                                ? "/images/giant-senecio.png"
                                : "/images/night-camping.png"
                    }
                    alt={`${route.name} - ${route.nickname}`}
                    className="w-full h-full object-cover"
                  />
                </div>

                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-[#55331e] font-serif">{route.name}</h3>
                      <p className="text-[#f88f2f] font-medium">{route.nickname}</p>
                    </div>
                    <div className="text-right text-sm">
                      <p className="font-medium">{route.duration}</p>
                      <p className="text-gray-600">{route.difficulty}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{route.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-[#55331e] mb-2">Route Highlights:</h4>
                    <ul className="space-y-1">
                      {route.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-[#f88f2f] mt-1">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full bg-[#f88f2f] hover:bg-[#e67e1a] text-white">
                    <Link href="/contact">Choose This Route</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Preparation Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-96 rounded-lg overflow-hidden">
              <img
                src="/images/uhuru-peak-summit.png"
                alt="Uhuru Peak summit sign - Africa's highest point"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#55331e] mb-6 font-serif">
                Prepare for Your Summit Success
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Proper preparation is key to a successful Kilimanjaro climb. Our experienced team provides comprehensive
                guidance on training, equipment, and mental preparation to ensure you're ready for this incredible
                challenge.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#f88f2f] rounded-full"></span>
                  <span>Personalized training programs</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#f88f2f] rounded-full"></span>
                  <span>Complete equipment rental available</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#f88f2f] rounded-full"></span>
                  <span>Pre-climb briefing and preparation</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#f88f2f] rounded-full"></span>
                  <span>Expert guides with high success rates</span>
                </li>
              </ul>
              <Button size="lg" className="bg-[#f88f2f] hover:bg-[#e67e1a] text-white">
                <Link href="/contact">Get Preparation Guide</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/night-camping.png)" }}
        ></div>
        <div className="absolute inset-0 bg-[#55331e]/85"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">Ready to Conquer Kilimanjaro?</h2>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of successful climbers who have reached the Roof of Africa with Saitoti Tours & Safaris.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#f88f2f] hover:bg-[#e67e1a] text-white px-8">
              <Link href="/contact">Start Planning Your Climb</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#55331e] px-8 bg-transparent"
            >
              <Link href="/contact">Download Route Guide</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
