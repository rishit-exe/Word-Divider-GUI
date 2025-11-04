"use client"

import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Play, RotateCcw, Copy, Check, ArrowRight, Cpu, Database, Terminal, Loader2, ArrowDown } from "lucide-react"

export default function WordDividerPage() {
  const [inputText, setInputText] = useState("")
  const [delimiter, setDelimiter] = useState("?")
  const [output, setOutput] = useState("")
  const [copied, setCopied] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)

  const handleProcess = () => {
    if (!inputText.trim()) {
      setOutput("")
      return
    }

    setIsProcessing(true)
    setOutput("")
    
    // Simulate processing delay for animation
    setTimeout(() => {
      const chars = inputText.split("")
      const result = chars.join(delimiter)
      setOutput(result)
      setIsProcessing(false)
    }, 1200)
  }

  const handleReset = () => {
    setInputText("")
    setOutput("")
    setDelimiter("?")
  }

  const handleCopy = async () => {
    await navigator.clipboard.writeText(output)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 container px-4 md:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Page Header with gradient */}
          <div className="mb-8 relative overflow-hidden rounded-2xl bg-gradient-to-br from-chart-1/20 via-chart-2/20 to-chart-3/20 p-8 border-2 border-chart-1/30">
            <div className="relative z-10">
              <Badge className="mb-3 bg-chart-1 text-white border-0">8086 Assembly</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-chart-1 to-chart-3 bg-clip-text text-transparent">
                Word Divider Tool
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl">
                Interactive simulation of the 8086 assembly program that separates each character with a custom delimiter
              </p>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 mb-8">
            {/* Input Section with colorful accent */}
            <Card className="border-2 border-chart-1/30 shadow-lg shadow-chart-1/10">
              <CardHeader className="bg-gradient-to-r from-chart-1/10 to-chart-2/10">
                <div className="flex items-center gap-2">
                  <Terminal className="h-5 w-5 text-chart-1" />
                  <CardTitle className="text-chart-1">Input</CardTitle>
                </div>
                <CardDescription>
                  Enter text to be processed by the word divider
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 pt-6">
                <div className="space-y-2">
                  <Label htmlFor="input-text" className="text-base font-semibold">Text Input</Label>
                  <Textarea
                    id="input-text"
                    placeholder="Enter the required word to be separated..."
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    className="min-h-[150px] font-mono border-2 focus:border-chart-1 transition-colors"
                  />
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Characters: {inputText.length}</span>
                    <Badge variant="outline" className="border-chart-1 text-chart-1">
                      {inputText.length} chars
                    </Badge>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="delimiter" className="text-base font-semibold">Delimiter Character</Label>
                  <div className="flex gap-2">
                    <Input
                      id="delimiter"
                      type="text"
                      maxLength={1}
                      value={delimiter}
                      onChange={(e) => setDelimiter(e.target.value)}
                      placeholder="?"
                      className="font-mono text-2xl text-center w-20 border-2 focus:border-chart-2"
                    />
                    <div className="flex-1 p-3 rounded-lg bg-muted border-2 border-chart-2/30">
                      <p className="text-xs text-muted-foreground">
                        Default: <code className="px-1.5 py-0.5 bg-chart-2/20 rounded text-chart-2 font-bold">?</code> (as used in assembly)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button 
                    onClick={handleProcess} 
                    className="flex-1 bg-gradient-to-r from-chart-1 to-chart-2 hover:from-chart-1/90 hover:to-chart-2/90 text-white border-0 relative overflow-hidden"
                    disabled={isProcessing}
                  >
                    {isProcessing ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Play className="mr-2 h-4 w-4" />
                        Process
                      </>
                    )}
                  </Button>
                  <Button onClick={handleReset} variant="outline" className="border-2">
                    <RotateCcw className="mr-2 h-4 w-4" />
                    Reset
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Output Section with colorful accent */}
            <Card className="border-2 border-chart-3/30 shadow-lg shadow-chart-3/10">
              <CardHeader className="bg-gradient-to-r from-chart-3/10 to-chart-4/10">
                <div className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-chart-3" />
                  <CardTitle className="text-chart-3">Output</CardTitle>
                </div>
                <CardDescription>
                  Characters separated by the delimiter
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="min-h-[150px] p-4 rounded-lg bg-gradient-to-br from-chart-3/5 to-chart-4/5 border-2 border-chart-3/20 font-mono text-sm break-all relative overflow-hidden">
                    {isProcessing ? (
                      <div className="flex flex-col items-center justify-center h-full gap-4">
                        <div className="relative">
                          <Cpu className="h-12 w-12 text-chart-3 animate-pulse" />
                          <div className="absolute inset-0 animate-ping">
                            <Cpu className="h-12 w-12 text-chart-3 opacity-20" />
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-chart-1 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                          <div className="h-2 w-2 rounded-full bg-chart-2 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                          <div className="h-2 w-2 rounded-full bg-chart-3 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                        </div>
                        <p className="text-chart-3 font-semibold animate-pulse">Processing characters...</p>
                      </div>
                    ) : output ? (
                      <span className="text-foreground animate-in fade-in-0 slide-in-from-bottom-4 duration-500">{output}</span>
                    ) : (
                      <span className="text-muted-foreground italic">
                        Output will appear here...
                      </span>
                    )}
                  </div>

                  {output && !isProcessing && (
                    <div className="space-y-3 animate-in fade-in-0 slide-in-from-bottom-4 duration-700">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="p-3 rounded-lg bg-chart-1/10 border border-chart-1/30">
                          <div className="text-xs text-muted-foreground mb-1">Characters</div>
                          <div className="text-2xl font-bold text-chart-1">{inputText.length}</div>
                        </div>
                        <div className="p-3 rounded-lg bg-chart-3/10 border border-chart-3/30">
                          <div className="text-xs text-muted-foreground mb-1">Output Length</div>
                          <div className="text-2xl font-bold text-chart-3">{output.length}</div>
                        </div>
                      </div>
                      <Button
                        onClick={handleCopy}
                        variant="outline"
                        className="w-full border-2 border-chart-3/50 hover:bg-chart-3/10"
                        disabled={!output}
                      >
                        {copied ? (
                          <>
                            <Check className="mr-2 h-4 w-4 text-chart-4" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="mr-2 h-4 w-4" />
                            Copy Output
                          </>
                        )}
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Algorithm Flowchart Diagram */}
          <Card className="mb-8 border-2 border-chart-1/30 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-chart-1/10 to-chart-2/10">
              <CardTitle className="flex items-center gap-2">
                <Cpu className="h-5 w-5 text-chart-1" />
                Algorithm Flowchart Diagram
              </CardTitle>
              <CardDescription>
                Complete execution flow of the assembly program
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-8 pb-8">
              <div className="flex flex-col items-center gap-0">
                {/* Start */}
                <div className="relative">
                  <div className="w-32 h-16 rounded-full bg-gradient-to-br from-chart-4 to-chart-5 flex items-center justify-center text-white font-bold shadow-lg">
                    START
                  </div>
                </div>
                <ArrowDown className="h-8 w-8 text-chart-1 my-2" />

                {/* Initialize Registers */}
                <div className="w-48 h-20 bg-gradient-to-br from-chart-1/20 to-chart-1/10 border-2 border-chart-1 rounded-lg flex items-center justify-center text-center font-semibold shadow-md">
                  Initialize Data<br/>Segment (DS)
                </div>
                <ArrowDown className="h-8 w-8 text-chart-2 my-2" />

                {/* Display Prompt */}
                <div className="w-56 h-20 bg-gradient-to-br from-chart-2/20 to-chart-2/10 border-2 border-chart-2 skew-x-[-12deg] flex items-center justify-center text-center font-semibold shadow-md">
                  <span className="skew-x-[12deg]">Display Input<br/>Prompt Message</span>
                </div>
                <ArrowDown className="h-8 w-8 text-chart-3 my-2" />

                {/* Read Input */}
                <div className="w-56 h-20 bg-gradient-to-br from-chart-3/20 to-chart-3/10 border-2 border-chart-3 skew-x-[-12deg] flex items-center justify-center text-center font-semibold shadow-md">
                  <span className="skew-x-[12deg]">Read String Input<br/>(INT 21h, AH=0Ah)</span>
                </div>
                <ArrowDown className="h-8 w-8 text-chart-4 my-2" />

                {/* Set SI Pointer */}
                <div className="w-48 h-20 bg-gradient-to-br from-chart-4/20 to-chart-4/10 border-2 border-chart-4 rounded-lg flex items-center justify-center text-center font-semibold shadow-md">
                  SI ← Buffer + 2<br/>(Skip length bytes)
                </div>
                <ArrowDown className="h-8 w-8 text-chart-5 my-2" />

                {/* Display Output Prompt */}
                <div className="w-56 h-20 bg-gradient-to-br from-chart-5/20 to-chart-5/10 border-2 border-chart-5 skew-x-[-12deg] flex items-center justify-center text-center font-semibold shadow-md">
                  <span className="skew-x-[12deg]">Display Output<br/>Prompt Message</span>
                </div>
                <ArrowDown className="h-8 w-8 text-chart-1 my-2" />

                {/* Loop Start - Load Character */}
                <div className="relative">
                  <div className="absolute -left-24 top-8 text-xs font-bold text-chart-1 bg-chart-1/10 px-2 py-1 rounded">
                    LOOP
                  </div>
                  <div className="w-48 h-20 bg-gradient-to-br from-chart-1/20 to-chart-1/10 border-2 border-chart-1 rounded-lg flex items-center justify-center text-center font-semibold shadow-md">
                    Load Character<br/>AL ← [SI]
                  </div>
                </div>
                <ArrowDown className="h-8 w-8 text-chart-2 my-2" />

                {/* Decision Diamond - Check Null */}
                <div className="relative w-56 h-56 flex items-center justify-center">
                  <div className="absolute w-40 h-40 bg-gradient-to-br from-chart-2/20 to-chart-2/10 border-4 border-chart-2 rotate-45 shadow-lg"></div>
                  <div className="relative z-10 text-center font-bold">
                    AL = 0?<br/>(Null<br/>Terminator)
                  </div>
                </div>

                {/* Two branches */}
                <div className="flex items-start gap-32 w-full justify-center relative">
                  {/* Yes Branch */}
                  <div className="flex flex-col items-center">
                    <div className="text-sm font-bold text-chart-4 mb-2">YES</div>
                    <ArrowDown className="h-8 w-8 text-chart-4" />
                    <div className="w-32 h-16 rounded-full bg-gradient-to-br from-chart-4 to-chart-5 flex items-center justify-center text-white font-bold shadow-lg mt-2">
                      END
                    </div>
                  </div>

                  {/* No Branch */}
                  <div className="flex flex-col items-center">
                    <div className="text-sm font-bold text-chart-3 mb-2">NO</div>
                    <ArrowDown className="h-8 w-8 text-chart-3" />
                    <div className="w-48 h-20 bg-gradient-to-br from-chart-3/20 to-chart-3/10 border-2 border-chart-3 skew-x-[-12deg] flex items-center justify-center text-center font-semibold shadow-md mt-2">
                      <span className="skew-x-[12deg]">Display Character<br/>(INT 21h, AH=02h)</span>
                    </div>
                    <ArrowDown className="h-8 w-8 text-chart-5 my-2" />
                    <div className="w-48 h-20 bg-gradient-to-br from-chart-5/20 to-chart-5/10 border-2 border-chart-5 skew-x-[-12deg] flex items-center justify-center text-center font-semibold shadow-md">
                      <span className="skew-x-[12deg]">Display Delimiter<br/>(INT 21h, AH=02h)</span>
                    </div>
                    <ArrowDown className="h-8 w-8 text-chart-1 my-2" />
                    <div className="w-48 h-20 bg-gradient-to-br from-chart-1/20 to-chart-1/10 border-2 border-chart-1 rounded-lg flex items-center justify-center text-center font-semibold shadow-md">
                      Increment SI<br/>(Next Character)
                    </div>
                  </div>

                  {/* Loop back arrow */}
                  <svg className="absolute -right-12 top-0 h-full w-24" style={{ top: "60px" }}>
                    <defs>
                      <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                        <polygon points="0 0, 10 5, 0 10" fill="var(--chart-2)" />
                      </marker>
                    </defs>
                    <path
                      d="M 0 280 L 40 280 L 40 -200 L -280 -200"
                      fill="none"
                      stroke="var(--chart-2)"
                      strokeWidth="3"
                      strokeDasharray="5,5"
                      markerEnd="url(#arrowhead)"
                    />
                  </svg>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CPU Architecture Diagram */}
          <Card className="mb-8 border-2 border-chart-3/30 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-chart-3/10 to-chart-4/10">
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-chart-3" />
                8086 CPU Architecture Diagram
              </CardTitle>
              <CardDescription>
                Registers and components used in this program
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
                {/* Registers Block */}
                <div className="w-full lg:w-auto">
                  <div className="text-center mb-4 font-bold text-chart-1">CPU Registers</div>
                  <div className="space-y-3 bg-gradient-to-br from-chart-1/10 to-chart-2/10 p-6 rounded-xl border-4 border-chart-1/30 shadow-xl">
                    {/* AX Register */}
                    <div className="flex gap-2">
                      <div className="w-32 h-16 bg-gradient-to-r from-chart-1 to-chart-1/80 rounded-lg flex flex-col items-center justify-center text-white font-bold border-2 border-chart-1 shadow-md">
                        <div className="text-xs">AH</div>
                        <div className="text-sm">Function</div>
                      </div>
                      <div className="w-32 h-16 bg-gradient-to-r from-chart-2 to-chart-2/80 rounded-lg flex flex-col items-center justify-center text-white font-bold border-2 border-chart-2 shadow-md">
                        <div className="text-xs">AL</div>
                        <div className="text-sm">Char Data</div>
                      </div>
                    </div>
                    <div className="text-center text-xs text-muted-foreground">AX (Accumulator)</div>

                    {/* DX Register */}
                    <div className="flex gap-2 mt-4">
                      <div className="w-32 h-16 bg-gradient-to-r from-chart-3 to-chart-3/80 rounded-lg flex flex-col items-center justify-center text-white font-bold border-2 border-chart-3 shadow-md">
                        <div className="text-xs">DH</div>
                        <div className="text-sm">-</div>
                      </div>
                      <div className="w-32 h-16 bg-gradient-to-r from-chart-4 to-chart-4/80 rounded-lg flex flex-col items-center justify-center text-white font-bold border-2 border-chart-4 shadow-md">
                        <div className="text-xs">DL</div>
                        <div className="text-sm">Output</div>
                      </div>
                    </div>
                    <div className="text-center text-xs text-muted-foreground">DX (Data)</div>

                    {/* SI Register */}
                    <div className="mt-4">
                      <div className="w-64 h-16 bg-gradient-to-r from-chart-5 to-chart-5/80 rounded-lg flex flex-col items-center justify-center text-white font-bold border-2 border-chart-5 shadow-md">
                        <div className="text-xs">SI</div>
                        <div className="text-sm">Source Index Pointer</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Data Flow Arrows */}
                <div className="hidden lg:flex flex-col items-center gap-4">
                  <ArrowRight className="h-12 w-12 text-chart-2" />
                  <div className="text-xs font-semibold text-chart-2 text-center">Data<br/>Flow</div>
                  <ArrowRight className="h-12 w-12 text-chart-2" />
                </div>

                {/* Memory Block */}
                <div className="w-full lg:w-auto">
                  <div className="text-center mb-4 font-bold text-chart-3">Memory Buffer</div>
                  <div className="bg-gradient-to-br from-chart-3/10 to-chart-4/10 p-6 rounded-xl border-4 border-chart-3/30 shadow-xl">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="w-24 text-xs font-mono text-muted-foreground text-right">Buffer[0]</div>
                        <div className="w-48 h-12 bg-chart-1 rounded flex items-center justify-center text-white font-bold border-2 border-chart-1 shadow-md">
                          Max Length (80)
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-24 text-xs font-mono text-muted-foreground text-right">Buffer[1]</div>
                        <div className="w-48 h-12 bg-chart-2 rounded flex items-center justify-center text-white font-bold border-2 border-chart-2 shadow-md">
                          Actual Length
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-24 text-xs font-mono text-muted-foreground text-right">Buffer[2]</div>
                        <div className="w-48 h-12 bg-chart-3 rounded flex items-center justify-center text-white font-bold border-2 border-chart-3 shadow-md">
                          First Char
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-24 text-xs font-mono text-muted-foreground text-right">Buffer[3]</div>
                        <div className="w-48 h-12 bg-chart-4 rounded flex items-center justify-center text-white font-bold border-2 border-chart-4 shadow-md">
                          Second Char
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-24 text-xs font-mono text-muted-foreground text-right">...</div>
                        <div className="w-48 h-12 bg-chart-5/50 rounded flex items-center justify-center text-white font-bold border-2 border-dashed border-chart-5 shadow-md">
                          More Characters
                        </div>
                      </div>
                      <div className="flex items-center gap-3 opacity-50">
                        <div className="w-24 text-xs font-mono text-muted-foreground text-right">Buffer[N]</div>
                        <div className="w-48 h-12 bg-gray-400 rounded flex items-center justify-center text-white font-bold border-2 border-gray-500 shadow-md">
                          NULL (0)
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-xs bg-chart-5/20 p-2 rounded border border-chart-5/30">
                      <ArrowRight className="h-4 w-4 text-chart-5" />
                      <span className="font-semibold text-chart-5">SI points here during loop</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Flow Diagram */}
          <Card className="mb-8 border-2 border-chart-5/30 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-chart-5/10 to-chart-1/10">
              <CardTitle className="flex items-center gap-2">
                <Terminal className="h-5 w-5 text-chart-5" />
                Data Flow Diagram
              </CardTitle>
              <CardDescription>
                How data moves through the system during execution
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="grid md:grid-cols-5 gap-6 items-center">
                {/* Input */}
                <div className="flex flex-col items-center gap-2">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-chart-1 to-chart-1/70 flex items-center justify-center text-white font-bold text-center shadow-xl border-4 border-chart-1">
                    User<br/>Input<br/>Stream
                  </div>
                  <div className="text-xs text-center font-semibold text-chart-1">Keyboard</div>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="h-8 w-8 text-chart-2" />
                </div>

                {/* Buffer */}
                <div className="flex flex-col items-center gap-2">
                  <div className="w-32 h-32 rounded-lg bg-gradient-to-br from-chart-2 to-chart-2/70 flex items-center justify-center text-white font-bold text-center shadow-xl border-4 border-chart-2">
                    Memory<br/>Buffer<br/>(DS:DX)
                  </div>
                  <div className="text-xs text-center font-semibold text-chart-2">Storage</div>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="h-8 w-8 text-chart-3" />
                </div>

                {/* Processing */}
                <div className="flex flex-col items-center gap-2">
                  <div className="w-32 h-32 rounded-xl bg-gradient-to-br from-chart-3 to-chart-3/70 flex items-center justify-center text-white font-bold text-center shadow-xl border-4 border-chart-3 relative overflow-hidden">
                    <div className="absolute inset-0 bg-chart-4/20 animate-pulse"></div>
                    <div className="relative z-10">
                      CPU<br/>Registers<br/>(AL, SI)
                    </div>
                  </div>
                  <div className="text-xs text-center font-semibold text-chart-3">Processing</div>
                </div>
              </div>

              <div className="flex justify-center my-6">
                <ArrowDown className="h-8 w-8 text-chart-4" />
              </div>

              <div className="grid md:grid-cols-3 gap-6 items-center justify-center max-w-2xl mx-auto">
                {/* Loop Control */}
                <div className="flex flex-col items-center gap-2">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-chart-4 to-chart-4/70 flex items-center justify-center text-white font-bold text-center shadow-xl border-4 border-dashed border-chart-4">
                    Loop<br/>Control<br/>(JE, INC)
                  </div>
                  <div className="text-xs text-center font-semibold text-chart-4">Iteration</div>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="h-8 w-8 text-chart-5" />
                </div>

                {/* Output */}
                <div className="flex flex-col items-center gap-2">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-chart-5 to-chart-5/70 flex items-center justify-center text-white font-bold text-center shadow-xl border-4 border-chart-5">
                    Screen<br/>Output<br/>(INT 21h)
                  </div>
                  <div className="text-xs text-center font-semibold text-chart-5">Display</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Separator className="my-8" />

          {/* How It Works Section - Enhanced with colors */}
          <Card className="border-2 border-primary/20">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10">
              <CardTitle>How It Works</CardTitle>
              <CardDescription>
                Understanding the assembly program logic step by step
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="space-y-4">
                <div className="p-4 rounded-lg border-l-4 border-chart-1 bg-chart-1/5">
                  <Badge variant="outline" className="mb-2 border-chart-1 text-chart-1">Step 1</Badge>
                  <p className="text-sm">
                    <strong className="text-chart-1">Input Reading:</strong> The program uses DOS interrupt 21h with function 0Ah 
                    to read a string from the user into a buffer (input_buffer).
                  </p>
                </div>

                <div className="p-4 rounded-lg border-l-4 border-chart-2 bg-chart-2/5">
                  <Badge variant="outline" className="mb-2 border-chart-2 text-chart-2">Step 2</Badge>
                  <p className="text-sm">
                    <strong className="text-chart-2">Character Processing:</strong> The SI register points to input_buffer+2 
                    (skipping length bytes), and each character is loaded into AL register.
                  </p>
                </div>

                <div className="p-4 rounded-lg border-l-4 border-chart-3 bg-chart-3/5">
                  <Badge variant="outline" className="mb-2 border-chart-3 text-chart-3">Step 3</Badge>
                  <p className="text-sm">
                    <strong className="text-chart-3">Output Display:</strong> Each character is displayed using INT 21h function 02h, 
                    followed immediately by the delimiter character ('?').
                  </p>
                </div>

                <div className="p-4 rounded-lg border-l-4 border-chart-4 bg-chart-4/5">
                  <Badge variant="outline" className="mb-2 border-chart-4 text-chart-4">Step 4</Badge>
                  <p className="text-sm">
                    <strong className="text-chart-4">Iteration:</strong> SI is incremented to point to the next character, 
                    and the process repeats until a null terminator (0) is encountered.
                  </p>
                </div>

                <div className="p-4 rounded-lg border-l-4 border-chart-5 bg-chart-5/5">
                  <Badge variant="outline" className="mb-2 border-chart-5 text-chart-5">Step 5</Badge>
                  <p className="text-sm">
                    <strong className="text-chart-5">Termination:</strong> After all characters are processed, 
                    the program terminates using INT 21h function 4Ch.
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-br from-primary/10 to-chart-3/10 rounded-lg border-2 border-primary/20">
                <p className="text-sm font-semibold mb-3 flex items-center gap-2">
                  <Cpu className="h-4 w-4 text-primary" />
                  Key Assembly Concepts Used:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-chart-1"></div>
                    <span>DOS Interrupts (INT 21h)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-chart-2"></div>
                    <span>Register manipulation (AH, AL, DX, SI)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-chart-3"></div>
                    <span>Memory addressing and buffer management</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-chart-4"></div>
                    <span>Character I/O operations</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-chart-5"></div>
                    <span>Loop control with conditional jumps (JE, JMP)</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}