"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function ContactPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-foreground mb-4 md:mb-6">
              {t("contact.title")}
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t("contact.subtitle")}
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
                  {t("contact.contactInformation")}
                </h2>
                <p className="text-muted-foreground mb-6 md:mb-8 leading-relaxed">
                  {t("contact.contactInfoSubtitle")}
                </p>
              </div>

              <div className="space-y-4 md:space-y-6">
                <Card className="border-l-4 border-l-primary">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex items-start space-x-3 md:space-x-4">
                      <MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary mt-1 flex-shrink-0" />
                      <div className="min-w-0">
                        <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base">{t("contact.officeAddress")}</h3>
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
                          {t("contact.phoneWhatsappWechat")}
                        </h3>
                        <p className="text-muted-foreground text-sm md:text-base">
                          WhatsApp: +255 784 258 765
                          <br />
                          WeChat: +86 155 2930 9784
                          <br />
                          <span className="text-xs md:text-sm">{t("contact.availableEmergency")}</span>
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
                        <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base">{t("contact.email")}</h3>
                        <p className="text-muted-foreground text-sm md:text-base break-all">
                          tours@aussigroup.com
                          <br />
                          <span className="text-xs md:text-sm">{t("contact.respondTime")}</span>
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
                        <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base">{t("contact.businessHours")}</h3>
                        <p className="text-muted-foreground text-sm md:text-base">
                          {t("contact.mondayFriday")}
                          <br />
                          {t("contact.saturday")}
                          <br />
                          {t("contact.sundayEmergency")}
                          <br />
                          <span className="text-xs md:text-sm text-primary">{t("contact.timezone")}</span>
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
                {t("contact.experienceTitle")}
              </h2>

              <div className="grid grid-cols-1 gap-4 md:gap-6">
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
                      {t("contact.wildlifeSafaris")}
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      {t("contact.wildlifeSafarisDesc")}
                    </p>
                  </CardContent>
                </Card>

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
                      {t("contact.uniqueAdventures")}
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      {t("contact.uniqueAdventuresDesc")}
                    </p>
                  </CardContent>
                </Card>

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
                      {t("contact.mountainExpeditions")}
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      {t("contact.mountainExpeditionsDesc")}
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-4 md:p-6">
                  <h3 className="font-semibold text-foreground mb-3 text-sm md:text-base">
                    {t("contact.whyChooseSaitoti")}
                  </h3>
                  <ul className="space-y-1 md:space-y-2 text-muted-foreground text-xs md:text-sm">
                    <li>{"• "}{t("contact.whyItem1")}</li>
                    <li>{"• "}{t("contact.whyItem2")}</li>
                    <li>{"• "}{t("contact.whyItem3")}</li>
                    <li>{"• "}{t("contact.whyItem4")}</li>
                    <li>{"• "}{t("contact.whyItem5")}</li>
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
              {t("contact.findUs")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              {t("contact.findUsSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            <Card>
              <CardContent className="p-4 md:p-6 text-center">
                <MapPin className="w-10 h-10 md:w-12 md:h-12 text-primary mx-auto mb-3 md:mb-4" />
                <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base">{t("contact.strategicLocation")}</h3>
                <p className="text-muted-foreground text-xs md:text-sm">
                  {t("contact.strategicLocationDesc")}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 md:p-6 text-center">
                <Clock className="w-10 h-10 md:w-12 md:h-12 text-primary mx-auto mb-3 md:mb-4" />
                <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base">{t("contact.easyAccess")}</h3>
                <p className="text-muted-foreground text-xs md:text-sm">
                  {t("contact.easyAccessDesc")}
                </p>
              </CardContent>
            </Card>

            <Card className="sm:col-span-2 md:col-span-1">
              <CardContent className="p-4 md:p-6 text-center">
                <Phone className="w-10 h-10 md:w-12 md:h-12 text-primary mx-auto mb-3 md:mb-4" />
                <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base">{t("contact.alwaysAvailable")}</h3>
                <p className="text-muted-foreground text-xs md:text-sm">{t("contact.alwaysAvailableDesc")}</p>
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
