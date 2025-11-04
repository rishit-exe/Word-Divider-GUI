"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Cpu, Database, Zap, MemoryStick, Network, Code2 } from "lucide-react"

export default function COAConceptsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 container px-4 md:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-3">Computer Organization & Architecture</h1>
            <p className="text-lg text-muted-foreground">
              Fundamental concepts demonstrated in the Word Divider project
            </p>
          </div>

          <Tabs defaultValue="isa" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6">
              <TabsTrigger value="isa">ISA</TabsTrigger>
              <TabsTrigger value="registers">Registers</TabsTrigger>
              <TabsTrigger value="memory">Memory</TabsTrigger>
              <TabsTrigger value="interrupts">Interrupts</TabsTrigger>
              <TabsTrigger value="addressing">Addressing</TabsTrigger>
              <TabsTrigger value="io">I/O Operations</TabsTrigger>
            </TabsList>

            {/* ISA Tab */}
            <TabsContent value="isa" className="space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Cpu className="h-5 w-5 text-primary" />
                    <CardTitle>Instruction Set Architecture (ISA)</CardTitle>
                  </div>
                  <CardDescription>
                    The interface between software and hardware
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">8086 Microprocessor ISA</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      The 8086 is a 16-bit microprocessor with a CISC (Complex Instruction Set Computing) 
                      architecture. It features a rich instruction set designed for efficient program execution.
                    </p>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Badge>Data Transfer</Badge>
                      </h4>
                      <ul className="text-sm space-y-1 list-disc list-inside">
                        <li><code className="bg-muted px-1 rounded">MOV</code> - Move data</li>
                        <li><code className="bg-muted px-1 rounded">PUSH/POP</code> - Stack operations</li>
                        <li><code className="bg-muted px-1 rounded">XCHG</code> - Exchange data</li>
                        <li><code className="bg-muted px-1 rounded">LEA</code> - Load effective address</li>
                      </ul>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Badge>Arithmetic</Badge>
                      </h4>
                      <ul className="text-sm space-y-1 list-disc list-inside">
                        <li><code className="bg-muted px-1 rounded">ADD/SUB</code> - Addition/Subtraction</li>
                        <li><code className="bg-muted px-1 rounded">MUL/DIV</code> - Multiplication/Division</li>
                        <li><code className="bg-muted px-1 rounded">INC/DEC</code> - Increment/Decrement</li>
                        <li><code className="bg-muted px-1 rounded">CMP</code> - Compare values</li>
                      </ul>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Badge>Logical</Badge>
                      </h4>
                      <ul className="text-sm space-y-1 list-disc list-inside">
                        <li><code className="bg-muted px-1 rounded">AND/OR/XOR</code> - Bitwise operations</li>
                        <li><code className="bg-muted px-1 rounded">NOT</code> - Bitwise complement</li>
                        <li><code className="bg-muted px-1 rounded">SHL/SHR</code> - Shift operations</li>
                        <li><code className="bg-muted px-1 rounded">ROL/ROR</code> - Rotate operations</li>
                      </ul>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Badge>Control Transfer</Badge>
                      </h4>
                      <ul className="text-sm space-y-1 list-disc list-inside">
                        <li><code className="bg-muted px-1 rounded">JMP</code> - Unconditional jump</li>
                        <li><code className="bg-muted px-1 rounded">JE/JNE</code> - Conditional jumps</li>
                        <li><code className="bg-muted px-1 rounded">CALL/RET</code> - Subroutine operations</li>
                        <li><code className="bg-muted px-1 rounded">INT</code> - Software interrupt</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-4 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                    <h4 className="font-semibold mb-2">Used in Word Divider:</h4>
                    <p className="text-sm">
                      MOV, CMP, JE, JMP, INC, INT - These instructions form the core of our 
                      character processing loop and I/O operations.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Registers Tab */}
            <TabsContent value="registers" className="space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Database className="h-5 w-5 text-primary" />
                    <CardTitle>8086 Registers</CardTitle>
                  </div>
                  <CardDescription>
                    Fast storage locations within the CPU
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-3">General Purpose Registers (16-bit)</h4>
                      <div className="space-y-3">
                        <div>
                          <Badge variant="outline" className="mb-1">AX (Accumulator)</Badge>
                          <p className="text-sm text-muted-foreground">
                            <strong>AH:AL</strong> - Primary register for arithmetic operations and I/O
                          </p>
                        </div>
                        <div>
                          <Badge variant="outline" className="mb-1">BX (Base)</Badge>
                          <p className="text-sm text-muted-foreground">
                            <strong>BH:BL</strong> - Used as base register for memory addressing
                          </p>
                        </div>
                        <div>
                          <Badge variant="outline" className="mb-1">CX (Count)</Badge>
                          <p className="text-sm text-muted-foreground">
                            <strong>CH:CL</strong> - Loop counter and shift/rotate operations
                          </p>
                        </div>
                        <div>
                          <Badge variant="outline" className="mb-1">DX (Data)</Badge>
                          <p className="text-sm text-muted-foreground">
                            <strong>DH:DL</strong> - I/O operations and extended arithmetic
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-3">Pointer & Index Registers</h4>
                      <div className="space-y-3">
                        <div>
                          <Badge variant="outline" className="mb-1">SI (Source Index)</Badge>
                          <p className="text-sm text-muted-foreground">
                            Points to source in string operations
                          </p>
                        </div>
                        <div>
                          <Badge variant="outline" className="mb-1">DI (Destination Index)</Badge>
                          <p className="text-sm text-muted-foreground">
                            Points to destination in string operations
                          </p>
                        </div>
                        <div>
                          <Badge variant="outline" className="mb-1">SP (Stack Pointer)</Badge>
                          <p className="text-sm text-muted-foreground">
                            Points to the top of the stack
                          </p>
                        </div>
                        <div>
                          <Badge variant="outline" className="mb-1">BP (Base Pointer)</Badge>
                          <p className="text-sm text-muted-foreground">
                            Used for accessing parameters and local variables
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-3">Segment Registers</h4>
                      <div className="space-y-3">
                        <div>
                          <Badge variant="outline" className="mb-1">CS (Code Segment)</Badge>
                          <p className="text-sm text-muted-foreground">
                            Points to the segment containing program code
                          </p>
                        </div>
                        <div>
                          <Badge variant="outline" className="mb-1">DS (Data Segment)</Badge>
                          <p className="text-sm text-muted-foreground">
                            Points to the segment containing data
                          </p>
                        </div>
                        <div>
                          <Badge variant="outline" className="mb-1">SS (Stack Segment)</Badge>
                          <p className="text-sm text-muted-foreground">
                            Points to the segment containing the stack
                          </p>
                        </div>
                        <div>
                          <Badge variant="outline" className="mb-1">ES (Extra Segment)</Badge>
                          <p className="text-sm text-muted-foreground">
                            Additional segment for data operations
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-3">Special Registers</h4>
                      <div className="space-y-3">
                        <div>
                          <Badge variant="outline" className="mb-1">IP (Instruction Pointer)</Badge>
                          <p className="text-sm text-muted-foreground">
                            Points to the next instruction to execute
                          </p>
                        </div>
                        <div>
                          <Badge variant="outline" className="mb-1">FLAGS Register</Badge>
                          <p className="text-sm text-muted-foreground">
                            Status flags: ZF, CF, SF, OF, PF, etc.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                    <h4 className="font-semibold mb-2">Used in Word Divider:</h4>
                    <ul className="text-sm space-y-1 list-disc list-inside">
                      <li><strong>AH:</strong> Function codes for INT 21h (09h, 0Ah, 02h, 4Ch)</li>
                      <li><strong>AL:</strong> Stores individual characters during processing</li>
                      <li><strong>DX:</strong> Points to string addresses (offset)</li>
                      <li><strong>DL:</strong> Character output for display operations</li>
                      <li><strong>SI:</strong> Iterates through input_buffer characters</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Memory Tab */}
            <TabsContent value="memory" className="space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <MemoryStick className="h-5 w-5 text-primary" />
                    <CardTitle>Memory Organization</CardTitle>
                  </div>
                  <CardDescription>
                    How data and instructions are stored and accessed
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Segmented Memory Model</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      The 8086 uses a segmented memory architecture with 20-bit addressing, 
                      allowing access to 1MB of memory (2^20 = 1,048,576 bytes).
                    </p>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">Physical Address Calculation</h4>
                      <div className="bg-muted p-3 rounded font-mono text-sm mb-2">
                        Physical Address = (Segment × 16) + Offset
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Example: If DS = 1000h and offset = 0050h<br/>
                        Physical = (1000h × 10h) + 0050h = 10050h
                      </p>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">Memory Segments</h4>
                      <ul className="text-sm space-y-1 list-disc list-inside">
                        <li><strong>Code Segment:</strong> Program instructions</li>
                        <li><strong>Data Segment:</strong> Variables and constants</li>
                        <li><strong>Stack Segment:</strong> Function calls, local vars</li>
                        <li><strong>Extra Segment:</strong> Additional data storage</li>
                      </ul>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-3">Memory Layout in Word Divider</h4>
                    <div className="space-y-2 font-mono text-sm">
                      <div className="flex items-center gap-2">
                        <Badge>ORG 100h</Badge>
                        <span className="text-muted-foreground">Program starts at offset 100h</span>
                      </div>
                      <div className="p-3 bg-muted rounded space-y-1">
                        <div>hello_msg: "Enter the required word..."</div>
                        <div>input_buffer: [80 bytes allocated]</div>
                        <div className="text-muted-foreground">
                          • First byte: Max length (80)<br/>
                          • Second byte: Actual length (filled by DOS)<br/>
                          • Remaining: Character data + null terminator
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                    <h4 className="font-semibold mb-2">Key Concepts:</h4>
                    <ul className="text-sm space-y-1 list-disc list-inside">
                      <li>Buffer allocation: <code className="bg-muted px-1 rounded">DB 80, ?, 80 DUP (0)</code></li>
                      <li>Direct memory access via SI register</li>
                      <li>Null-terminated string storage</li>
                      <li>Sequential byte-by-byte processing</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Interrupts Tab */}
            <TabsContent value="interrupts" className="space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    <CardTitle>Interrupt System</CardTitle>
                  </div>
                  <CardDescription>
                    Hardware and software interrupt mechanisms
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">What are Interrupts?</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Interrupts are signals that temporarily halt the CPU's current execution to handle 
                      specific tasks or events. They enable efficient I/O operations and system services.
                    </p>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">DOS Interrupt 21h</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        The primary DOS interrupt for system services
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="bg-muted p-2 rounded">
                          <strong>Function 09h:</strong> Display String<br/>
                          <span className="text-muted-foreground">AH=09h, DX=string address</span>
                        </div>
                        <div className="bg-muted p-2 rounded">
                          <strong>Function 0Ah:</strong> Buffered Input<br/>
                          <span className="text-muted-foreground">AH=0Ah, DX=buffer address</span>
                        </div>
                        <div className="bg-muted p-2 rounded">
                          <strong>Function 02h:</strong> Display Character<br/>
                          <span className="text-muted-foreground">AH=02h, DL=character</span>
                        </div>
                        <div className="bg-muted p-2 rounded">
                          <strong>Function 4Ch:</strong> Terminate Program<br/>
                          <span className="text-muted-foreground">AH=4Ch, AL=return code</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">Interrupt Execution Flow</h4>
                      <ol className="text-sm space-y-2 list-decimal list-inside">
                        <li>CPU saves current state (flags, CS, IP)</li>
                        <li>Pushes registers onto stack</li>
                        <li>Looks up interrupt vector in IVT</li>
                        <li>Jumps to interrupt handler routine</li>
                        <li>Executes the service routine</li>
                        <li>Restores registers and state</li>
                        <li>Returns to interrupted program</li>
                      </ol>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-3">Interrupt Usage in Word Divider</h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-muted rounded font-mono text-xs">
                        <div className="text-primary font-semibold mb-1">; Display prompt</div>
                        <div>MOV AH, 09h</div>
                        <div>MOV DX, offset hello_msg</div>
                        <div>INT 21h  <span className="text-muted-foreground">← Triggers DOS interrupt</span></div>
                      </div>
                      <div className="p-3 bg-muted rounded font-mono text-xs">
                        <div className="text-primary font-semibold mb-1">; Read input</div>
                        <div>MOV AH, 0Ah</div>
                        <div>MOV DX, offset input_buffer</div>
                        <div>INT 21h  <span className="text-muted-foreground">← Reads user input</span></div>
                      </div>
                      <div className="p-3 bg-muted rounded font-mono text-xs">
                        <div className="text-primary font-semibold mb-1">; Display character</div>
                        <div>MOV AH, 02h</div>
                        <div>MOV DL, AL  <span className="text-muted-foreground">← Character to display</span></div>
                        <div>INT 21h</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                    <h4 className="font-semibold mb-2">Why Use Interrupts?</h4>
                    <ul className="text-sm space-y-1 list-disc list-inside">
                      <li>Abstraction: No need to directly manage hardware</li>
                      <li>Efficiency: OS handles complex I/O operations</li>
                      <li>Portability: Same code works on different hardware</li>
                      <li>Standardization: Consistent API for system services</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Addressing Tab */}
            <TabsContent value="addressing" className="space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Network className="h-5 w-5 text-primary" />
                    <CardTitle>Addressing Modes</CardTitle>
                  </div>
                  <CardDescription>
                    Different ways to access data in memory
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="p-4 border rounded-lg">
                      <Badge className="mb-2">Immediate Addressing</Badge>
                      <p className="text-sm text-muted-foreground mb-2">
                        Data is part of the instruction itself
                      </p>
                      <div className="bg-muted p-2 rounded font-mono text-xs">
                        MOV AH, 09h<br/>
                        MOV DL, '?'
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <Badge className="mb-2">Register Addressing</Badge>
                      <p className="text-sm text-muted-foreground mb-2">
                        Data is in a CPU register
                      </p>
                      <div className="bg-muted p-2 rounded font-mono text-xs">
                        MOV DL, AL<br/>
                        MOV AX, BX
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <Badge className="mb-2">Direct Addressing</Badge>
                      <p className="text-sm text-muted-foreground mb-2">
                        Memory address is specified directly
                      </p>
                      <div className="bg-muted p-2 rounded font-mono text-xs">
                        MOV DX, offset hello_msg<br/>
                        MOV AL, [1234h]
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <Badge className="mb-2">Register Indirect</Badge>
                      <p className="text-sm text-muted-foreground mb-2">
                        Address is stored in a register
                      </p>
                      <div className="bg-muted p-2 rounded font-mono text-xs">
                        MOV AL, [SI]<br/>
                        MOV [DI], BL
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <Badge className="mb-2">Indexed Addressing</Badge>
                      <p className="text-sm text-muted-foreground mb-2">
                        Base address + index/offset
                      </p>
                      <div className="bg-muted p-2 rounded font-mono text-xs">
                        MOV SI, offset input_buffer + 2<br/>
                        MOV AL, [BX+SI]
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <Badge className="mb-2">Implied Addressing</Badge>
                      <p className="text-sm text-muted-foreground mb-2">
                        Operands are implicit in instruction
                      </p>
                      <div className="bg-muted p-2 rounded font-mono text-xs">
                        INC SI<br/>
                        PUSH AX
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                    <h4 className="font-semibold mb-2">Word Divider Examples:</h4>
                    <div className="space-y-2 text-sm font-mono bg-muted p-3 rounded">
                      <div><span className="text-primary">MOV AH, 09h</span> <span className="text-muted-foreground">← Immediate</span></div>
                      <div><span className="text-primary">MOV DL, AL</span> <span className="text-muted-foreground">← Register</span></div>
                      <div><span className="text-primary">MOV DX, offset hello_msg</span> <span className="text-muted-foreground">← Direct</span></div>
                      <div><span className="text-primary">MOV AL, [SI]</span> <span className="text-muted-foreground">← Register Indirect</span></div>
                      <div><span className="text-primary">INC SI</span> <span className="text-muted-foreground">← Implied</span></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* I/O Operations Tab */}
            <TabsContent value="io" className="space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Code2 className="h-5 w-5 text-primary" />
                    <CardTitle>Input/Output Operations</CardTitle>
                  </div>
                  <CardDescription>
                    Communicating with external devices
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Types of I/O</h3>
                    <div className="grid gap-4 md:grid-cols-2 mb-4">
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold mb-2">Port-Mapped I/O</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Separate address space for I/O devices
                        </p>
                        <div className="bg-muted p-2 rounded font-mono text-xs">
                          IN AL, 60h<br/>
                          OUT 20h, AL
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold mb-2">Memory-Mapped I/O</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Devices accessed like memory locations
                        </p>
                        <div className="bg-muted p-2 rounded font-mono text-xs">
                          MOV AL, [0B8000h]<br/>
                          MOV [0B8000h], AX
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-3">Character I/O in Word Divider</h4>
                    <div className="space-y-3">
                      <div>
                        <Badge variant="outline" className="mb-2">Input Operation</Badge>
                        <div className="bg-muted p-3 rounded font-mono text-xs space-y-1">
                          <div className="text-primary">; Buffered keyboard input</div>
                          <div>MOV AH, 0Ah  <span className="text-muted-foreground">; Function: Read string</span></div>
                          <div>MOV DX, offset input_buffer</div>
                          <div>INT 21h  <span className="text-muted-foreground">; DOS handles keyboard input</span></div>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">
                          Buffer structure: [max_length] [actual_length] [characters...]
                        </p>
                      </div>

                      <div>
                        <Badge variant="outline" className="mb-2">Output Operation</Badge>
                        <div className="bg-muted p-3 rounded font-mono text-xs space-y-1">
                          <div className="text-primary">; Single character output</div>
                          <div>MOV AH, 02h  <span className="text-muted-foreground">; Function: Display char</span></div>
                          <div>MOV DL, AL  <span className="text-muted-foreground">; Character in DL</span></div>
                          <div>INT 21h  <span className="text-muted-foreground">; Display to screen</span></div>
                        </div>
                      </div>

                      <div>
                        <Badge variant="outline" className="mb-2">String Output</Badge>
                        <div className="bg-muted p-3 rounded font-mono text-xs space-y-1">
                          <div className="text-primary">; Display $ terminated string</div>
                          <div>MOV AH, 09h</div>
                          <div>MOV DX, offset hello_msg</div>
                          <div>INT 21h</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Special Characters</h4>
                    <div className="grid gap-2 text-sm">
                      <div className="flex justify-between p-2 bg-muted rounded">
                        <span><code>0Dh</code> - Carriage Return (CR)</span>
                        <span className="text-muted-foreground">Move cursor to line start</span>
                      </div>
                      <div className="flex justify-between p-2 bg-muted rounded">
                        <span><code>0Ah</code> - Line Feed (LF)</span>
                        <span className="text-muted-foreground">Move cursor to next line</span>
                      </div>
                      <div className="flex justify-between p-2 bg-muted rounded">
                        <span><code>00h</code> - Null Terminator</span>
                        <span className="text-muted-foreground">End of string marker</span>
                      </div>
                      <div className="flex justify-between p-2 bg-muted rounded">
                        <span><code>'$'</code> - String Terminator</span>
                        <span className="text-muted-foreground">DOS string end marker</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                    <h4 className="font-semibold mb-2">I/O Flow in Word Divider:</h4>
                    <ol className="text-sm space-y-1 list-decimal list-inside">
                      <li>Display prompt message (Function 09h)</li>
                      <li>Read user input into buffer (Function 0Ah)</li>
                      <li>Output newline characters (CR, LF)</li>
                      <li>Loop: Display each character + delimiter (Function 02h)</li>
                      <li>Output final newline</li>
                      <li>Terminate program (Function 4Ch)</li>
                    </ol>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  )
}
