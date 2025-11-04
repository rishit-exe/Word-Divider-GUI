import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Cpu, BookOpen, Code2, Zap, Users, Target } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container px-4 md:px-8 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="mb-4" variant="outline">
              Computer Organization & Architecture Project
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Word Divider
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              An Interactive 8086 Assembly Language Demonstration
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore low-level programming concepts through a practical tool that separates 
              text characters with delimiters, demonstrating fundamental Computer Organization 
              and Architecture principles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg">
                <Link href="/word-divider">
                  Try Word Divider
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/assembly-simulator">
                  Launch Simulator
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-muted/40 py-16 md:py-24">
          <div className="container px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Project Features
                </h2>
                <p className="text-lg text-muted-foreground">
                  Interactive tools for learning assembly programming
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <Code2 className="h-8 w-8 mb-2 text-primary" />
                    <CardTitle>Word Divider Tool</CardTitle>
                    <CardDescription>
                      Interactive text processing
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Real-time character separation with customizable delimiters, 
                      replicating the behavior of the 8086 assembly program.
                    </p>
                    <Button asChild variant="ghost" className="w-full">
                      <Link href="/word-divider">
                        Open Tool <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Cpu className="h-8 w-8 mb-2 text-primary" />
                    <CardTitle>Assembly Simulator</CardTitle>
                    <CardDescription>
                      Step-by-step execution
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Visualize register states, memory operations, and program flow 
                      with our interactive assembly code simulator.
                    </p>
                    <Button asChild variant="ghost" className="w-full">
                      <Link href="/assembly-simulator">
                        Start Simulator <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <BookOpen className="h-8 w-8 mb-2 text-primary" />
                    <CardTitle>COA Concepts</CardTitle>
                    <CardDescription>
                      Educational content
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Learn about ISA, registers, memory addressing, interrupts, 
                      and I/O operations with detailed explanations.
                    </p>
                    <Button asChild variant="ghost" className="w-full">
                      <Link href="/coa-concepts">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Technical Specifications
                </h2>
                <p className="text-lg text-muted-foreground">
                  Key components and technologies used in this project
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-5 w-5 text-primary" />
                      Project Objective
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm">
                      Create a computational tool that processes textual content by breaking 
                      it down into discrete linguistic units. The simulation demonstrates:
                    </p>
                    <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                      <li>Language-independent word division</li>
                      <li>Efficient algorithm execution</li>
                      <li>Text processing fundamentals</li>
                      <li>Character-level manipulation</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="h-5 w-5 text-primary" />
                      Technology Stack
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2 bg-muted rounded text-sm">
                        <div className="font-semibold">Platform</div>
                        <div className="text-muted-foreground">8086 Microprocessor</div>
                      </div>
                      <div className="p-2 bg-muted rounded text-sm">
                        <div className="font-semibold">Emulator</div>
                        <div className="text-muted-foreground">emu8086</div>
                      </div>
                      <div className="p-2 bg-muted rounded text-sm">
                        <div className="font-semibold">Architecture</div>
                        <div className="text-muted-foreground">x86 16-bit</div>
                      </div>
                      <div className="p-2 bg-muted rounded text-sm">
                        <div className="font-semibold">ISA</div>
                        <div className="text-muted-foreground">CISC</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code2 className="h-5 w-5 text-primary" />
                      Core Assembly Operations
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                      <div className="p-3 border rounded-lg">
                        <div className="font-semibold text-sm mb-1">Data Transfer</div>
                        <code className="text-xs text-muted-foreground">MOV, LEA</code>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <div className="font-semibold text-sm mb-1">Comparison</div>
                        <code className="text-xs text-muted-foreground">CMP, TEST</code>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <div className="font-semibold text-sm mb-1">Control Flow</div>
                        <code className="text-xs text-muted-foreground">JMP, JE, CALL</code>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <div className="font-semibold text-sm mb-1">I/O Operations</div>
                        <code className="text-xs text-muted-foreground">INT 21h</code>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-muted/40 py-16 md:py-24">
          <div className="container px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Project Team
                </h2>
                <p className="text-lg text-muted-foreground">
                  SRM Institute of Science and Technology
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Team Members</CardTitle>
                  <CardDescription>
                    Computer Organization and Architecture Lab - 21CSS201T
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-3 mb-6">
                    <div className="p-4 border rounded-lg text-center">
                      <div className="font-semibold">Anirudh Ashok</div>
                      <div className="text-sm text-muted-foreground">RA2411003010128</div>
                    </div>
                    <div className="p-4 border rounded-lg text-center">
                      <div className="font-semibold">Rishit Srivastava</div>
                      <div className="text-sm text-muted-foreground">RA2411003010079</div>
                    </div>
                    <div className="p-4 border rounded-lg text-center">
                      <div className="font-semibold">Nakul Joshi</div>
                      <div className="text-sm text-muted-foreground">RA2411003010099</div>
                    </div>
                  </div>

                  <div className="p-4 bg-muted rounded-lg">
                    <div className="text-sm">
                      <span className="font-semibold">Lab Supervisor:</span> Dr.M.K.Vidhyalakshmi
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      Department of Computing Technologies, School of Computing
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to Explore Assembly Programming?
              </h2>
              <p className="text-lg text-muted-foreground">
                Start experimenting with the Word Divider tool or dive deep into 
                assembly code execution with our interactive simulator.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button asChild size="lg">
                  <Link href="/word-divider">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/coa-concepts">
                    Learn Concepts
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}