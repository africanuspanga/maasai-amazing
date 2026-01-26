import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-foreground mb-4 md:mb-6">
              Get in Touch
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to embark on your Tanzania adventure? We're here to help you plan the perfect safari, trek, or
              cultural experience.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Details */}
            <div className="space-y-6 md:space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4 md:mb-6">
                  Contact Information
                </h2>
                <p className="text-muted-foreground mb-6 md:mb-8 leading-relaxed">
                  Reach out to us through any of the following channels. We're available to assist you with planning
                  your perfect Tanzania experience.
                </p>
              </div>

              <div className="space-y-4 md:space-y-6">
                <Card className="border-l-4 border-l-primary">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex items-start space-x-3 md:space-x-4">
                      <MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary mt-1 flex-shrink-0" />
                      <div className="min-w-0">
                        <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base">Office Address</h3>
                        <p className="text-muted-foreground text-sm md:text-base">
                          Burka-Olasiti, Arusha
                          <br />
                          P.O. Box 23119
                          <br />
                          Tanzania
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-primary">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex items-start space-x-3 md:space-x-4">
                      <Phone className="w-5 h-5 md:w-6 md:h-6 text-primary mt-1 flex-shrink-0" />
                      <div className="min-w-0">
                        <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base">
                          Phone, WhatsApp & WeChat
                        </h3>
                        <p className="text-muted-foreground text-sm md:text-base">
                          WhatsApp: +255 784 258 765
                          <br />
                          WeChat: +86 155 2930 9784
                          <br />
                          <span className="text-xs md:text-sm">Available 24/7 for emergencies</span>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-primary">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex items-start space-x-3 md:space-x-4">
                      <Mail className="w-5 h-5 md:w-6 md:h-6 text-primary mt-1 flex-shrink-0" />
                      <div className="min-w-0">
                        <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base">Email</h3>
                        <p className="text-muted-foreground text-sm md:text-base break-all">
                          Osujakisaitoti982@gmail.com
                          <br />
                          <span className="text-xs md:text-sm">We respond within 24 hours</span>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-primary">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex items-start space-x-3 md:space-x-4">
                      <Clock className="w-5 h-5 md:w-6 md:h-6 text-primary mt-1 flex-shrink-0" />
                      <div className="min-w-0">
                        <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base">Business Hours</h3>
                        <p className="text-muted-foreground text-sm md:text-base">
                          Monday - Friday: 8:00 AM - 6:00 PM
                          <br />
                          Saturday: 9:00 AM - 4:00 PM
                          <br />
                          Sunday: Emergency calls only
                          <br />
                          <span className="text-xs md:text-sm text-primary">East Africa Time (EAT)</span>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4 md:mb-6">
                Experience Tanzania with Us
              </h2>

              <div className="grid grid-cols-1 gap-4 md:gap-6">
                {/* Adventure Image 1 */}
                <Card className="overflow-hidden">
                  <div className="aspect-video relative">
                    <img
                      src="/images/lion-portrait.png"
                      alt="Majestic lion in golden hour light representing our wildlife safari expertise"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-3 md:p-4">
                    <h3 className="font-semibold text-foreground mb-1 md:mb-2 text-sm md:text-base">
                      Wildlife Safaris
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Experience close encounters with Africa's Big Five
                    </p>
                  </CardContent>
                </Card>

                {/* Adventure Image 2 */}
                <Card className="overflow-hidden">
                  <div className="aspect-video relative">
                    <img
                      src="/images/balloon-safari.png"
                      alt="Hot air balloon floating over African savanna at sunset"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-3 md:p-4">
                    <h3 className="font-semibold text-foreground mb-1 md:mb-2 text-sm md:text-base">
                      Unique Adventures
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Balloon safaris and exclusive experiences
                    </p>
                  </CardContent>
                </Card>

                {/* Adventure Image 3 */}
                <Card className="overflow-hidden">
                  <div className="aspect-video relative">
                    <img
                      src="/images/kilimanjaro-night.png"
                      alt="Kilimanjaro silhouette under starry sky with illuminated camping tent"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-3 md:p-4">
                    <h3 className="font-semibold text-foreground mb-1 md:mb-2 text-sm md:text-base">
                      Mountain Expeditions
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Conquer Africa's highest peaks with expert guides
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-4 md:p-6">
                  <h3 className="font-semibold text-foreground mb-3 text-sm md:text-base">
                    Why Choose Saitoti Tours & Safaris?
                  </h3>
                  <ul className="space-y-1 md:space-y-2 text-muted-foreground text-xs md:text-sm">
                    <li>• Expert local guides with decades of experience</li>
                    <li>• Customized itineraries tailored to your interests</li>
                    <li>• Small group sizes for personalized attention</li>
                    <li>• Sustainable tourism supporting local communities</li>
                    <li>• 24/7 support throughout your Tanzania adventure</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground mb-3 md:mb-4">
              Find Us in Arusha
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Located in the heart of Tanzania's safari capital, we're perfectly positioned to start your adventure
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            <Card>
              <CardContent className="p-4 md:p-6 text-center">
                <MapPin className="w-10 h-10 md:w-12 md:h-12 text-primary mx-auto mb-3 md:mb-4" />
                <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base">Strategic Location</h3>
                <p className="text-muted-foreground text-xs md:text-sm">
                  Just minutes from Arusha Airport and major safari routes
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 md:p-6 text-center">
                <Clock className="w-10 h-10 md:w-12 md:h-12 text-primary mx-auto mb-3 md:mb-4" />
                <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base">Easy Access</h3>
                <p className="text-muted-foreground text-xs md:text-sm">
                  Convenient location with parking and public transport nearby
                </p>
              </CardContent>
            </Card>

            <Card className="sm:col-span-2 md:col-span-1">
              <CardContent className="p-4 md:p-6 text-center">
                <Phone className="w-10 h-10 md:w-12 md:h-12 text-primary mx-auto mb-3 md:mb-4" />
                <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base">Always Available</h3>
                <p className="text-muted-foreground text-xs md:text-sm">24/7 emergency support for all our travelers</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
