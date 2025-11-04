"use client"

import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Play, StepForward, RotateCcw, Pause } from "lucide-react"
import { cn } from "@/lib/utils"

interface RegisterState {
  AH: string
  AL: string
  DH: string
  DL: string
  SI: string
}

interface ExecutionStep {
  line: number
  instruction: string
  description: string
  registers: RegisterState
  memory: string
  output: string
}

export default function AssemblySimulatorPage() {
  const [inputWord, setInputWord] = useState("HELLO")
  const [currentStep, setCurrentStep] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [steps, setSteps] = useState<ExecutionStep[]>([])

  const assemblyCode = [
    { line: 1, code: "ORG 100h", comment: "Set origin to 100h" },
    { line: 2, code: "MOV AH, 09h", comment: "Function 09h Display String" },
    { line: 3, code: "MOV DX, offset hello_msg", comment: "Load prompt address" },
    { line: 4, code: "INT 21h", comment: "Display prompt" },
    { line: 5, code: "MOV AH, 0Ah", comment: "Function 0Ah Read String" },
    { line: 6, code: "MOV DX, offset input_buffer", comment: "Load buffer address" },
    { line: 7, code: "INT 21h", comment: "Read input" },
    { line: 8, code: "MOV AH, 02h", comment: "Function 02h Display Character" },
    { line: 9, code: "MOV DL, 0Dh", comment: "Carriage return" },
    { line: 10, code: "INT 21h", comment: "Display CR" },
    { line: 11, code: "MOV DL, 0Ah", comment: "Newline character" },
    { line: 12, code: "INT 21h", comment: "Display newline" },
    { line: 13, code: "MOV SI, offset input_buffer + 2", comment: "Point to first character" },
    { line: 14, code: "next_char:", comment: "Loop label" },
    { line: 15, code: "MOV AL, [SI]", comment: "Load character into AL" },
    { line: 16, code: "CMP AL, 0", comment: "Check for null terminator" },
    { line: 17, code: "JE terminate", comment: "Jump if end of string" },
    { line: 18, code: "MOV AH, 02h", comment: "Display character function" },
    { line: 19, code: "MOV DL, AL", comment: "Move character to DL" },
    { line: 20, code: "INT 21h", comment: "Display character" },
    { line: 21, code: "MOV DL, '?'", comment: "Load delimiter" },
    { line: 22, code: "INT 21h", comment: "Display delimiter" },
    { line: 23, code: "INC SI", comment: "Point to next character" },
    { line: 24, code: "JMP next_char", comment: "Repeat loop" },
    { line: 25, code: "terminate:", comment: "Termination label" },
    { line: 26, code: "MOV AH, 4Ch", comment: "Terminate program" },
    { line: 27, code: "INT 21h", comment: "Exit to DOS" },
  ]

  const generateSteps = (word: string): ExecutionStep[] => {
    const steps: ExecutionStep[] = []
    let output = ""
    
    // Step 1: Initialize
    steps.push({
      line: 1,
      instruction: "ORG 100h",
      description: "Program starts at memory offset 100h (256 bytes from segment start)",
      registers: { AH: "00", AL: "00", DH: "00", DL: "00", SI: "0000" },
      memory: "Empty buffer",
      output: ""
    })

    // Step 2-4: Display prompt
    steps.push({
      line: 4,
      instruction: "INT 21h (Display String)",
      description: "Displaying prompt message using DOS interrupt",
      registers: { AH: "09", AL: "00", DH: "00", DL: "00", SI: "0000" },
      memory: "hello_msg: 'Enter the required word...'",
      output: "Enter the required word to be separated:"
    })

    // Step 5-7: Read input
    steps.push({
      line: 7,
      instruction: "INT 21h (Read String)",
      description: `User input received: "${word}"`,
      registers: { AH: "0A", AL: "00", DH: "00", DL: "00", SI: "0000" },
      memory: `input_buffer: [${word.length}] [${word.length}] "${word}"`,
      output: "Enter the required word to be separated:"
    })

    // Step 8-12: Newline
    steps.push({
      line: 12,
      instruction: "INT 21h (Newline)",
      description: "Output carriage return and line feed for formatting",
      registers: { AH: "02", AL: "00", DH: "00", DL: "0A", SI: "0000" },
      memory: `input_buffer: "${word}"`,
      output: "Enter the required word to be separated:\n"
    })

    // Step 13: Initialize SI
    steps.push({
      line: 13,
      instruction: "MOV SI, offset input_buffer + 2",
      description: "SI now points to first character (skip length bytes)",
      registers: { AH: "02", AL: "00", DH: "00", DL: "0A", SI: "0102" },
      memory: `input_buffer: "${word}" <- SI points here`,
      output: "Enter the required word to be separated:\n"
    })

    // Process each character
    for (let i = 0; i < word.length; i++) {
      const char = word[i]
      const charCode = char.charCodeAt(0).toString(16).toUpperCase().padStart(2, '0')
      
      // Load character
      steps.push({
        line: 15,
        instruction: "MOV AL, [SI]",
        description: `Loading character '${char}' from memory into AL register`,
        registers: { 
          AH: "02", 
          AL: charCode, 
          DH: "00", 
          DL: "0A", 
          SI: (0x0102 + i).toString(16).toUpperCase().padStart(4, '0')
        },
        memory: `Current char: '${char}' (ASCII ${charCode}h)`,
        output: output
      })

      // Check for null
      steps.push({
        line: 16,
        instruction: "CMP AL, 0",
        description: `Compare AL with 0. Not zero, continue processing`,
        registers: { 
          AH: "02", 
          AL: charCode, 
          DH: "00", 
          DL: "0A", 
          SI: (0x0102 + i).toString(16).toUpperCase().padStart(4, '0')
        },
        memory: `Current char: '${char}'`,
        output: output
      })

      // Display character
      output += char
      steps.push({
        line: 20,
        instruction: "INT 21h (Display Char)",
        description: `Displaying character '${char}' to screen`,
        registers: { 
          AH: "02", 
          AL: charCode, 
          DH: "00", 
          DL: charCode, 
          SI: (0x0102 + i).toString(16).toUpperCase().padStart(4, '0')
        },
        memory: `Output char: '${char}'`,
        output: output
      })

      // Display delimiter
      output += "?"
      steps.push({
        line: 22,
        instruction: "INT 21h (Display '?')",
        description: "Displaying delimiter '?' after character",
        registers: { 
          AH: "02", 
          AL: charCode, 
          DH: "00", 
          DL: "3F", 
          SI: (0x0102 + i).toString(16).toUpperCase().padStart(4, '0')
        },
        memory: `Delimiter: '?'`,
        output: output
      })

      // Increment SI
      steps.push({
        line: 23,
        instruction: "INC SI",
        description: "Increment SI to point to next character in buffer",
        registers: { 
          AH: "02", 
          AL: charCode, 
          DH: "00", 
          DL: "3F", 
          SI: (0x0102 + i + 1).toString(16).toUpperCase().padStart(4, '0')
        },
        memory: `SI now points to next character`,
        output: output
      })
    }

    // Final null check
    steps.push({
      line: 16,
      instruction: "CMP AL, 0",
      description: "Reached null terminator (end of string)",
      registers: { 
        AH: "02", 
        AL: "00", 
        DH: "00", 
        DL: "3F", 
        SI: (0x0102 + word.length).toString(16).toUpperCase().padStart(4, '0')
      },
      memory: "End of string detected",
      output: output
    })

    // Terminate
    steps.push({
      line: 27,
      instruction: "INT 21h (Terminate)",
      description: "Program execution complete, returning to DOS",
      registers: { 
        AH: "4C", 
        AL: "00", 
        DH: "00", 
        DL: "3F", 
        SI: (0x0102 + word.length).toString(16).toUpperCase().padStart(4, '0')
      },
      memory: "Program terminated",
      output: output
    })

    return steps
  }

  const handleStart = () => {
    const newSteps = generateSteps(inputWord)
    setSteps(newSteps)
    setCurrentStep(0)
    setIsRunning(true)
  }

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      setIsRunning(false)
    }
  }

  const handleReset = () => {
    setCurrentStep(0)
    setSteps([])
    setIsRunning(false)
  }

  const currentStepData = steps[currentStep]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 container px-4 md:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-3">Assembly Code Simulator</h1>
            <p className="text-lg text-muted-foreground">
              Step-by-step execution visualization of the 8086 Word Divider program
            </p>
          </div>

          {/* Control Panel */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Simulation Controls</CardTitle>
              <CardDescription>
                Enter a word to simulate the assembly program execution
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    value={inputWord}
                    onChange={(e) => setInputWord(e.target.value.toUpperCase())}
                    placeholder="Enter word (e.g., HELLO)"
                    disabled={isRunning}
                    className="font-mono"
                  />
                </div>
                <div className="flex gap-2">
                  {!isRunning ? (
                    <Button onClick={handleStart} disabled={!inputWord}>
                      <Play className="mr-2 h-4 w-4" />
                      Start
                    </Button>
                  ) : (
                    <Button onClick={handleNext} disabled={currentStep >= steps.length - 1}>
                      <StepForward className="mr-2 h-4 w-4" />
                      Next Step
                    </Button>
                  )}
                  <Button onClick={handleReset} variant="outline">
                    <RotateCcw className="mr-2 h-4 w-4" />
                    Reset
                  </Button>
                </div>
              </div>
              {isRunning && (
                <div className="mt-4">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-muted-foreground">
                      Step {currentStep + 1} of {steps.length}
                    </span>
                    <Badge variant={currentStep >= steps.length - 1 ? "default" : "secondary"}>
                      {currentStep >= steps.length - 1 ? "Complete" : "Running"}
                    </Badge>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                    />
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {isRunning && currentStepData && (
            <div className="grid gap-6 lg:grid-cols-2">
              {/* Assembly Code Display */}
              <Card>
                <CardHeader>
                  <CardTitle>Assembly Code</CardTitle>
                  <CardDescription>
                    Current instruction highlighted
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted rounded-lg p-4 font-mono text-xs overflow-auto max-h-[500px]">
                    {assemblyCode.map((code) => (
                      <div
                        key={code.line}
                        className={cn(
                          "py-1 px-2 -mx-2 rounded",
                          code.line === currentStepData.line && "bg-primary/20 border-l-2 border-primary"
                        )}
                      >
                        <span className="text-muted-foreground w-8 inline-block">{code.line}</span>
                        <span className="text-foreground ml-2">{code.code}</span>
                        <span className="text-muted-foreground ml-4">; {code.comment}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Execution State */}
              <div className="space-y-6">
                {/* Current Instruction */}
                <Card>
                  <CardHeader>
                    <CardTitle>Current Instruction</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="bg-primary/10 p-3 rounded font-mono text-sm">
                        {currentStepData.instruction}
                      </div>
                      <p className="text-sm">{currentStepData.description}</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Register State */}
                <Card>
                  <CardHeader>
                    <CardTitle>Register State</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-3">
                      {Object.entries(currentStepData.registers).map(([reg, value]) => (
                        <div key={reg} className="flex justify-between p-2 bg-muted rounded font-mono text-sm">
                          <span className="font-semibold">{reg}:</span>
                          <span>{value}h</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Memory State */}
                <Card>
                  <CardHeader>
                    <CardTitle>Memory/Buffer State</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted p-3 rounded font-mono text-sm">
                      {currentStepData.memory}
                    </div>
                  </CardContent>
                </Card>

                {/* Output Display */}
                <Card>
                  <CardHeader>
                    <CardTitle>Screen Output</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-black text-green-400 p-4 rounded font-mono text-sm min-h-[100px] whitespace-pre-wrap">
                      {currentStepData.output || <span className="text-green-400/50">No output yet...</span>}
                      <span className="animate-pulse">_</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {/* Initial State */}
          {!isRunning && (
            <Card>
              <CardHeader>
                <CardTitle>How to Use the Simulator</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li>Enter a word in the input field (e.g., "HELLO", "WORLD", "CODE")</li>
                  <li>Click "Start" to begin the simulation</li>
                  <li>Click "Next Step" to execute each instruction one by one</li>
                  <li>Watch the registers, memory, and output update in real-time</li>
                  <li>Click "Reset" to start over with a new word</li>
                </ol>

                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-3">What You'll See:</h4>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="flex items-start gap-2">
                      <Badge variant="outline" className="mt-0.5">Assembly Code</Badge>
                      <p className="text-sm text-muted-foreground">
                        The complete program with current instruction highlighted
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Badge variant="outline" className="mt-0.5">Registers</Badge>
                      <p className="text-sm text-muted-foreground">
                        Live values of AH, AL, DH, DL, and SI registers
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Badge variant="outline" className="mt-0.5">Memory</Badge>
                      <p className="text-sm text-muted-foreground">
                        Current buffer contents and pointer locations
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Badge variant="outline" className="mt-0.5">Output</Badge>
                      <p className="text-sm text-muted-foreground">
                        DOS console output showing the divided word
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
