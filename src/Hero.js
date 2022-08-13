import React from "react";
import TypeWriterEffect from "react-typewriter-effect";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
export default function Hero() {
  return (
    <div>
      <section className="dark-hero stars">
        <div className="twinkling">
          <div>
            <h1 href="#hero" className="center move-down">
              John Solomou
            </h1>
          </div>
          <div className="h-container center hero ">
            <div>
              <h1 className="typed-text ">
                <TypeWriterEffect
                  textStyle={{
                    fontFamily: "Red Hat Display",
                    color: "#fff",
                    fontWeight: 500,
                    fontSize: "1.5em",
                  }}
                  startDelay={1000}
                  cursorColor="#3F3D56"
                  multiText={[
                    "Front End Developer",
                    "React Developer",
                    "Freelancer",
                    "Front End Developer",
                    "React Developer",
                    "Freelancer",
                    "Front End Developer",
                    "React Developer",
                    "Freelancer",
                    "Front End Developer",
                    "React Developer",
                    "Freelancer",
                    "Front End Developer",
                    "React Developer",
                    "Freelancer",
                  ]}
                  multiTextDelay={1000}
                  typeSpeed={100}
                />
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
