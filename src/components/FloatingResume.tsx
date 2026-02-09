import { Download } from "lucide-react";

export default function FloatingResume() {
  return (
    <a
      href="/sid-resume.pdf"
      download
      className="floatingResume"
      title="Download Resume"
    >
      <Download size={18} />
      <span>Resume</span>
    </a>
  );
}
