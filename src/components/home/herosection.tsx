import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import ClientsSlider from "./clientsslider"

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50/50">
            {/* Background Grid Pattern */}
            <div
                className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"
                aria-hidden="true"
            />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-16 lg:py-16">
                <div className="mx-auto max-w-4xl text-center">

                    {/* Badge */}
                    <Badge
                        variant="secondary"
                        className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-white/50 px-3 py-1.5 text-[13px] font-medium backdrop-blur-sm"
                    >
                        <Sparkles className="h-3.5 w-3.5 text-[#2563eb]" />
                        Engineering Growth Systems
                    </Badge>

                    {/* Main Heading */}
                    <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                        We Solve the{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10 bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] bg-clip-text text-transparent">
                                Hardest Part
                            </span>
                            <span
                                className="absolute -bottom-2 left-0 h-3 w-full bg-[#2563eb]/10 -z-10"
                                aria-hidden="true"
                            />
                        </span>
                        <br className="hidden sm:block" />
                        {" "}of Your Business
                    </h1>

                    {/* Subheading */}
                    <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl max-w-3xl mx-auto">
                        CruxLabs engineers high-performance digital systems that eliminate
                        bottlenecks, automate operations, and turn traffic into revenue.
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/contact">
                            <Button
                                size="lg"
                                className="group h-12 w-full sm:w-auto rounded-lg bg-[#2563eb] px-8 text-[15px] font-medium text-white hover:bg-[#1d4ed8] shadow-sm transition-all hover:shadow-lg"
                            >
                                Build My Growth System
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </Link>

                        <Link href="/about">
                            <Button
                                size="lg"
                                variant="outline"
                                className="h-12 w-full sm:w-auto rounded-lg border-border/60 px-8 text-[15px] font-medium hover:bg-muted/50 hover:border-border transition-all"
                            >
                                View Our Approach
                            </Button>
                        </Link>
                    </div>

                    {/* Trust Indicators */}
                    <div className="mt-16 pt-8 border-t border-border/40">
                        <p className="mb-6 text-[13px] font-medium uppercase tracking-wider text-muted-foreground">
                            Trusted by Growing Businesses
                        </p>

                        <ClientsSlider />
                    </div>
                </div>
            </div>

            {/* Bottom Gradient Fade */}
            <div
                className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"
                aria-hidden="true"
            />
        </section>
    )
}