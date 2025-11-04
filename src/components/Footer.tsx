import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";

export default function Footer() {
  const teamMembers = [
    { name: "Anirudh Ashok", regNo: "RA2411003010128" },
    { name: "Rishit Srivastava", regNo: "RA2411003010079" },
    { name: "Nakul Joshi", regNo: "RA2411003010099" }
  ];

  return (
    <footer className="w-full border-t bg-muted/40">
      <div className="container px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Project Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Word Divider Project</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Computer Organization and Architecture
            </p>
            <p className="text-sm text-muted-foreground">
              SRM Institute of Science and Technology
            </p>
            <p className="text-sm text-muted-foreground">
              Lab Code: 21CSS201T
            </p>
          </div>

          {/* Team Members */}
          <div>
            <h3 className="font-bold text-lg mb-4">Team Members</h3>
            <ul className="space-y-2">
              {teamMembers.map((member) =>
              <li key={member.regNo} className="text-sm">
                  <p className="font-medium">{member.name}</p>
                  <p className="text-muted-foreground">{member.regNo}</p>
                </li>
              )}
            </ul>
          </div>

          {/* References */}
          <div>
            <h3 className="font-bold text-lg mb-4">References</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://sq.wikipedia.org/wiki/Emu8086"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm flex items-center gap-1 hover:text-primary transition-colors">

                  Emu8086 Documentation
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/topics/emu8086"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm flex items-center gap-1 hover:text-primary transition-colors">

                  GitHub - Emu8086 Topics
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-sm font-medium mb-2">Lab Supervisor</p>
              <p className="text-sm text-muted-foreground">Dr.M.K.Vidhyalakshmi</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Word Divider Project. Created for educational purposes.
          </p>
        </div>
      </div>
    </footer>);

}