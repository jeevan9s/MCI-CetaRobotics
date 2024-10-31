import React, { useState } from 'react';
import { ChevronDown, FileText, Youtube } from 'lucide-react';

interface DocSection {
  title: string;
  content: string;
  pdfLink?: string;
  videoLink?: string;
}

const docs: DocSection[] = [
  {
    title: "Getting Started Guide",
    content: "Complete guide for new team members covering basic robotics concepts and team protocols.",
    pdfLink: "/docs/getting-started.pdf",
    videoLink: "https://youtube.com/watch?v=example1"
  },
  {
    title: "Technical Documentation",
    content: "Detailed technical specifications, CAD files, and engineering documentation.",
    pdfLink: "/docs/technical-specs.pdf",
    videoLink: "https://youtube.com/watch?v=example2"
  },
  {
    title: "Competition Rules",
    content: "Official rulebook and competition guidelines for the current season.",
    pdfLink: "/docs/competition-rules.pdf"
  },
  {
    title: "Safety Protocols",
    content: "Essential safety guidelines and procedures for the workshop and competitions.",
    pdfLink: "/docs/safety-protocols.pdf",
    videoLink: "https://youtube.com/watch?v=example3"
  }
];

export default function Documentation() {
  const [openSection, setOpenSection] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-24 px-4 pb-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 mb-12 text-center">
          Documentation
        </h2>
        
        <div className="space-y-6">
          {docs.map((doc, index) => (
            <div
              key={index}
              className="group border border-gray-800 rounded-xl overflow-hidden bg-gray-900/50 backdrop-blur-sm hover:border-gray-700 transition-all duration-300"
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left transition-colors"
                onClick={() => setOpenSection(openSection === index ? null : index)}
              >
                <span className="text-lg font-medium text-gray-200 group-hover:text-white">
                  {doc.title}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transform transition-transform duration-300 ${
                    openSection === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openSection === index && (
                <div className="px-6 py-4 border-t border-gray-800 bg-gray-800/30">
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {doc.content}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {doc.pdfLink && (
                      <a
                        href={doc.pdfLink}
                        className="inline-flex items-center px-4 py-2 bg-blue-600/10 border border-blue-500/20 text-blue-400 rounded-lg transition-all hover:bg-blue-600/20 hover:border-blue-500/30"
                      >
                        <FileText className="w-4 h-4 mr-2" />
                        Download PDF
                      </a>
                    )}
                    {doc.videoLink && (
                      <a
                        href={doc.videoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-red-600/10 border border-red-500/20 text-red-400 rounded-lg transition-all hover:bg-red-600/20 hover:border-red-500/30"
                      >
                        <Youtube className="w-4 h-4 mr-2" />
                        Watch Tutorial
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}