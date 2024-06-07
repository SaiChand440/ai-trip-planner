"use client"
import { Button } from "../ui/button";


export default function FooterSection() {

    return (
      <div className="w-full h-full border-gray-600 dark:bg-black bg-white">
        <div
          className="w-full h-[1px]"
          style={{
            background: "radial-gradient(circle, #e5e7eb, transparent)",
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
          }}
        ></div>
        <div className="container flex flex-col justify-between items-center px-8 py-16">
          <div className="text-center">
            <h3 className="px-6 text-center text-3xl font-bold md:text-4xl lg:px-12 xl:text-5xl">
              Tailor your travel experiences with us
            </h3>
            <p className="mx-auto mb-5 mt-6 max-w-3xl text-lg text-gray-500">
              Hadana is an AI-powered travel planner, please consider it as a
              baseline for your plan. If you need an all inclusion package with
              experiences booked, Let our team with 25+ countries travel
              experience handle all your trip and ticket bookings. Contact us
              today to customize your journey!
            </p>
          </div>
          <Mailto
            className="w-64 rounded-lg mt-8"
            email="contactus@hadana.io"
            subject="Customize my travel"
            body="Hello Hadana team, I would like to customize my travel experience. Please get in touch with me."
          >
            Contact us
          </Mailto>
        </div>
      </div>
    );
}


const Mailto = ({ email, subject, body, children, className }: { email: string, subject: string, body: string, children: React.ReactNode, className: string }) => {
  return (
    <Button className={className}>
      <a
        href={`mailto:${email}?subject=${
          encodeURIComponent(subject) || ""
        }&body=${encodeURIComponent(body) || ""}`}
      >
        {children}
      </a>
    </Button>
  );
};