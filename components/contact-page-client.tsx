"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { useSiteSettings } from "@/components/site-settings-provider"
import { getCmsIcon } from "@/lib/cms/icons"
import type { ContactContent } from "@/lib/cms/schema"

export default function ContactPageClient({ content }: { content: ContactContent }) {
  const settings = useSiteSettings()

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="relative py-16 md:py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-foreground mb-4 md:mb-6">
              {content.heroTitle}
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {content.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-6 md:space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4 md:mb-6">
                  {content.infoTitle}
                </h2>
                <p className="text-muted-foreground mb-6 md:mb-8 leading-relaxed">{content.infoSubtitle}</p>
              </div>

              <div className="space-y-4 md:space-y-6">
                <Card className="border-l-4 border-l-primary">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex items-start space-x-3 md:space-x-4">
                      <MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary mt-1 flex-shrink-0" />
                      <div className="min-w-0">
                        <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base">Office Address</h3>
                        <div className="text-muted-foreground text-sm md:text-base">
                          {settings.addressLines.map((line) => (
                            <p key={line}>{line}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-primary">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex items-start space-x-3 md:space-x-4">
                      <Phone className="w-5 h-5 md:w-6 md:h-6 text-primary mt-1 flex-shrink-0" />
                      <div className="min-w-0">
                        <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base">Phone &amp; WhatsApp</h3>
                        <p className="text-muted-foreground text-sm md:text-base">
                          Phone: {settings.phoneDisplay}
                          <br />
                          WhatsApp: {settings.whatsappDisplay}
                          <br />
                          <span className="text-xs md:text-sm">{settings.emergencyAvailabilityLabel}</span>
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
                          {settings.contactEmail}
                          <br />
                          <span className="text-xs md:text-sm">{settings.responseTimeLabel}</span>
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
                        <div className="text-muted-foreground text-sm md:text-base">
                          {settings.businessHours.map((line) => (
                            <p key={line}>{line}</p>
                          ))}
                          <span className="text-xs md:text-sm text-primary">{settings.timezoneLabel}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4 md:mb-6">
                {content.experienceTitle}
              </h2>

              <div className="grid grid-cols-1 gap-4 md:gap-6">
                {content.experienceCards.map((item) => (
                  <Card key={item.title} className="overflow-hidden">
                    <div className="aspect-video relative">
                      <img src={item.image} alt={item.alt} className="w-full h-full object-cover" />
                    </div>
                    <CardContent className="p-3 md:p-4">
                      <h3 className="font-semibold text-foreground mb-1 md:mb-2 text-sm md:text-base">{item.title}</h3>
                      <p className="text-xs md:text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-4 md:p-6">
                  <h3 className="font-semibold text-foreground mb-3 text-sm md:text-base">{content.whyChooseTitle}</h3>
                  <ul className="space-y-1 md:space-y-2 text-muted-foreground text-xs md:text-sm">
                    {content.whyChooseItems.map((item) => (
                      <li key={item}>{"• "}{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground mb-3 md:mb-4">
              {content.findUsTitle}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              {content.findUsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {content.locationCards.map((item) => {
              const Icon = getCmsIcon(item.icon)
              return (
                <Card key={item.title} className={item.icon === "phone" ? "sm:col-span-2 md:col-span-1" : ""}>
                  <CardContent className="p-4 md:p-6 text-center">
                    <Icon className="w-10 h-10 md:w-12 md:h-12 text-primary mx-auto mb-3 md:mb-4" />
                    <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base">{item.title}</h3>
                    <p className="text-muted-foreground text-xs md:text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
