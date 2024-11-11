import React, { useState } from 'react';
import { ChevronDown, FileText, Youtube } from 'lucide-react';

interface DocContent {
  text: string;
  style: "normal" | "bold" | "code" | "underlineItalic" | "spacer";
}

interface DocSection {
  title: string;
  content: DocContent[];
  pdfLink?: string;
  videoLink?: string;
}

const docs: DocSection[] = [
  {
    title: "1. Introduction: Labs 1, 2, and 3.",
    content: [
      { text: 'Throughout all these labs, you will be working to construct a working "CETA IoT Robot" with functional, controllable motors and opto-sensors, based on the Arduino NANO 33 IoT board/platform.', style: "normal" },
      { text: "", style: "spacer" },
      { text: "BEFORE YOU START:", style: "bold" },
      { text: "", style: "spacer" },
      { text: 'Add the "Arduino Pico" Boards Manager URL to Preferences. Next, copy/paste the following URL in the "Additional Boards Manager URLs" field:', style: "normal" },
      { text: "", style: "spacer" },
      { text: "https://github.com/earlephilhower/arduino-pico/releases/download/global/package_rp2040_index.json", style: "code" },
      { text: "", style: "spacer" },
      { text: 'Ensure that you install and use the legacy version of Arduino IDE throughout every step. (The modern version doesn\'t work)', style: "underlineItalic" },
      { text: "", style: "spacer" },
      { text: 'Attached below is a folder named intro-sketches, containing Arduino sketches that correspond with each lab.', style: "normal" },
    ],
    pdfLink: "/docs/getting-started.pdf",
    videoLink: "https://youtube.com/watch?v=example1"
  },
  {
    title: "2. MQTT Basics - Labs 4, 5, and 6",
    content: [
      { text: "In this section, you'll be learning how to simulate unsecured MQTT messages (version 3.11) between a public MQTT broker and MQTT clients running on your PC. Additionally learning how to analyze MQTT messages using Wireshark.", style: "normal" },
      { text: "", style: "spacer" },
      { text: "Topics:", style: "bold" },
      { text: "", style: "spacer" },
      { text: "- How the MQTT protocol works, and key client parameters for IoT messaging.", style: "normal" },
      { text: "- The basic MQTT packet format and message sequence for common client actions - (CONNECTING, PUBLISHING, SUBSCRIBING, DISCONNECTING)", style: "normal" },
      { text: "- The basics of simulating an MQTT Client using the MQTT.fx application", style: "normal" },
      { text: "- The basics of Wireshark for capturing and displaying MQTT messages", style: "normal" },
    ],
    pdfLink: "/docs/mqtt-basics.pdf",
    videoLink: "https://youtube.com/watch?v=example2"
  },
  {
    title: "3. IoT: Internet-Based Monitoring and Control - Labs 7, 8, 9, and 10",
    content: [
      { text: "You will learn how to make your robot network-monitorable and controllable, such that it can exchange MQTT messages with the Adafruit IO service.", style: "normal" },
      { text: "", style: "spacer" },
      { text: "You can connect to Wi-Fi and get on the Network using Tdsb-Guest login:", style: "normal" },
      { text: "username: 4ynf71  password: 3k9v5hd8", style: "code" },
      { text: "", style: "spacer" },
      { text: "Attached below is a folder named 3-IoT-sketches, containing Arduino sketches for lab1 and lab4.", style: "normal" },
    ],
    pdfLink: "/docs/iot-monitoring.pdf",
    videoLink: "https://youtube.com/watch?v=example3"
  },
  {
    title: "4. Adafruit IO + Final Adjustments - Labs 11, 12, 13, and 14",
    content: [
      { text: "You will learn how to fully integrate Adafruit IO, as well as how to make adjustments to your robot.", style: "normal" },
      { text: "", style: "spacer" },
      { text: "Ensure that you have downloaded all the zip files, and completed all the steps:", style: "normal" },
      { text: "", style: "spacer" },
      { text: "rpi-pico-robotics-ws-1-19-00026a", style: "code" },
      { text: "rpi-pico-iot-ws-1-19-00027a", style: "code" },
      { text: "rpi-pico-robotics-ws-2-19-00028a", style: "code" },
      { text: "Arduino IDE 1.8.19", style: "code" },
      { text: "MQTTfx", style: "code" },
      { text: "(Wireshark - optional)", style: "code" },
      { text: "Created an account in Adafruit IO", style: "code" },
      { text: "", style: "spacer" },
      { text: "Used www.random.org to generate a random 5-digit number between 1 and 100,000. This will be your robot's ID during the competition.", style: "normal" },
      { text: "", style: "spacer" },
      { text: "When in room 110, use the following Wi-Fi settings:", style: "normal" },
      { text: "", style: "spacer" },
      { text: "Name: lynksysCETA", style: "code" },
      { text: "Password: ceta2024", style: "code" },
      { text: "", style: "spacer" },
      { text: 'Attached below is a folder named lab4-running-the-fairway-complete, containing the files needed for the "Running the Fairway" Challenge, with integrated IoT.', style: "normal" },
      { text: "", style: "spacer" },
      { text: "** Ensure that when uploading the sketch, you are in this directory. (We will go over this during meets) **", style: "underlineItalic" },
      { text: "", style: "spacer" },
      { text: 'After this stage is completed, your robot should be able to complete the "Running the Fairway" challenge.', style: "normal" },
    ],
    pdfLink: "/docs/adafruit-io.pdf",
    videoLink: "https://youtube.com/watch?v=example4"
  },
  {
    title: "5. Collision Detection and Navigation",
    content: [
      { text: 'In this tech brief, you will learn how to use an ultrasonic sensor to implement a collision detection mechanism in order to clear the final stage: The "Running The Fairway" Challenge with collision avoidance. When completed, your robot should be able to navigate within 10cm, successfully turn, and avoid the obstruction placed at the end of the track. Prebuilt sketches are provided (to test your own robot).', style: "normal" },
      { text: "", style: "spacer" },
      { text: "Circuitry:", style: "bold" },
      { text: "", style: "spacer" },
      { text: "The following HC-SR04 Ultrasonic signal connections are used for the example sketches:", style: "normal" },
      { text: "VCC >> Connect to 3.3V bus", style: "code" },
      { text: "TRIG >> Connect to Pico W Pin GP17", style: "code" },
      { text: "ECHO >> Connect to Pico W Pin GP16", style: "code" },
      { text: "GND >> Connect to circuit GND bus", style: "code" },
      { text: "", style: "spacer" },
      { text: "Follow the documentation and video for the rest of the assembly.", style: "normal" },
      { text: "", style: "spacer" },
      { text: "**Attached below is a folder named 5-collision-detection, containing Arduino sketches that include collision detection.**", style: "underlineItalic" },
    ],
    pdfLink: "/docs/collision-detection.pdf",
    videoLink: "https://youtube.com/watch?v=example5"
  },
];

export default function Documentation() {
  const [openSection, setOpenSection] = useState<number | null>(null);
  const [animatingSection, setAnimatingSection] = useState<number | null>(null);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Solid Black Background */}
      <div className="absolute inset-0 bg-black" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-24 pb-20">
        <div className="max-w-4xl w-full">
          <h2 className="text-6xl md:text-8xl font-bold text-white mb-12 tracking-tight text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              Documentation
            </span>
          </h2>

          <div className="space-y-6">
            {docs.map((doc, index) => (
              <div
                key={index}
                className="group border border-gray-800 rounded-xl overflow-hidden bg-gray-800/50 backdrop-blur-md hover:border-gray-700 transition-all duration-300 shadow-lg"
              >
                <button
                  className="w-full px-6 py-4 flex items-center justify-between text-left transition-colors bg-gray-900/50 hover:bg-gray-900/70"
                  onClick={() => {
                    if (openSection === index) {
                      // Start closing animation
                      setAnimatingSection(index);
                      setOpenSection(null);
                    } else {
                      // Open new section
                      setOpenSection(index);
                      setAnimatingSection(index);
                    }
                  }}
                >
                  <span className="text-xl font-semibold text-gray-200 group-hover:text-white">
                    {doc.title}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-gray-400 transform transition-transform duration-300 ${
                      openSection === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {(openSection === index || animatingSection === index) && (
                  <div
                    className={`px-6 overflow-hidden transition-max-height duration-500  ${
                      openSection === index ? 'max-h-screen py-4' : 'max-h-0'
                    }`}
                    onTransitionEnd={() => {
                      if (openSection !== index) {
                        setAnimatingSection(null);
                      }
                    }}
                  >
                    <div className="text-gray-300 mb-6 leading-relaxed">
                      {doc.content.map((item, idx) => {
                        const baseClass = "mb-2";
                        switch (item.style) {
                          case "bold":
                            return (
                              <p key={idx} className={`${baseClass} font-semibold`}>
                                {item.text}
                              </p>
                            );
                          case "code":
                            return (
                              <p key={idx} className={`${baseClass} font-mono bg-gray-800/70 px-2 py-1 rounded`}>
                                {item.text}
                              </p>
                            );
                          case "underlineItalic":
                            return (
                              <p key={idx} className={`${baseClass} italic underline`}>
                                {item.text}
                              </p>
                            );
                          case "spacer":
                            return <p key={idx} className={baseClass}>&nbsp;</p>;
                          default:
                            return <p key={idx} className={baseClass}>{item.text}</p>;
                        }
                      })}
                    </div>
                    <div className="flex flex-wrap gap-4 mt-4">
                      {doc.pdfLink && (
                        <a
                          href={doc.pdfLink}
                          className="inline-flex items-center px-6 py-2 bg-blue-600/10 border border-blue-500/20 text-blue-400 rounded-lg transition-all hover:bg-blue-600/20 hover:border-blue-500/30 hover:scale-105"
                        >
                          <FileText className="w-5 h-5 mr-2" />
                          Download PDF
                        </a>
                      )}
                      {doc.videoLink && (
                        <a
                          href={doc.videoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-6 py-2 bg-red-600/10 border border-red-500/20 text-red-400 rounded-lg transition-all hover:bg-red-600/20 hover:border-red-500/30 hover:scale-105"
                        >
                          <Youtube className="w-5 h-5 mr-2" />
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

        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-cyan-400 rounded-full animate-pulse delay-150" />
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-300" />
        <div className="absolute top-1/3 left-1/2 w-2.5 h-2.5 bg-purple-500 rounded-full animate-pulse delay-200" />
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-teal-400 rounded-full animate-pulse delay-500" />
        <div className="absolute top-1/4 right-1/5 w-2 h-2 bg-indigo-400 rounded-full animate-pulse delay-700" />
        <div className="absolute bottom-10 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-pulse delay-400" />
      </div>
    </div>
  );
}
