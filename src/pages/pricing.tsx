"use client";
import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

export default function Component() {
  return (
    <Layout>
      <div className="grid gap-4 w-full mx-auto p-8">
        <div className="px-4">
          <h2 className="text-2xl font-bold text-center">
            Why Choose{" "}
            <span className="font-extrabold text-green-700">KWIKQA</span>?
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className=" grid gap-6 ">
              <div>
                <h3 className="font-semibold">
                  Make Test Automation ASAP (As Simple As Possible)
                </h3>
                <p className="mt-2 text-zinc-500 dark:text-zinc-400">
                  KWIKQA simplifies the automation testing process, allowing
                  users to create automated tests quickly and easily using Excel
                  files. This saves time and effort compared to traditional
                  automation testing methods.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">No Coding Experience Required</h3>
                <p className="mt-2 text-zinc-500 dark:text-zinc-400">
                  With KWIKQA, no coding experience is required to start
                  automation testing. This means that individuals without
                  programming knowledge can still create automated tests easily.
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold">
                Start Automation Testing with a Manual Tester
              </h3>
              <div className="mt-2 text-zinc-500 dark:text-zinc-400">
                <p className="mb-2">
                  On average, the salary of an Automation Tester is $50/hr,
                  while the salary of a Manual Tester is $30/hr.
                </p>
                <p className="mb-2">
                  With KWIKQA, companies can empower their manual testers to
                  perform automation testing tasks, effectively doubling their
                  workforce's productivity at half the cost.
                </p>
                <p className="mb-1 font-bold text-green-700">
                  Monthly Savings per Resource on Average:
                </p>
                <ul className="list-disc pl-6">
                  <li className="mb-1">Hiring an Automation Tester: $8000</li>
                  <li className="mb-1">Hiring a Manual Tester: $4800</li>
                </ul>
                <p className="mb-1 font-bold">
                  Savings per Month by using{" "}
                  <span className="text-green-700"> KWIKQA: $3200 </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-auto text-center">
          <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-14 py-2 text-xl md:text-3xl text-bold bg-green-950 rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
            <Link className="hover:no-underline text-white hover:text-white" to="/contact-us"> Schedule a Demo Today </Link>
            </div>
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-3 px-8 py-4">
          {/*<!-- Pricing Card 1 --> */}
          <div className="border border-blue-500 rounded-lg p-6 flex flex-col justify-between items-center bg-gradient-to-br from-blue-200 to-blue-400 shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-blue-900">
                Testing Plans
              </h2>
              <h4 className="text-xl font-semibold text-blue-800 mb-4">
                Start Testing with KWIKQA
              </h4>
              <div className="text-lg text-blue-900 mb-6">
                <p>$199/month</p>
                <p>
                  <span className="text-red-700 line-through">$599</span>{" "}
                  <span className="text-blue-900"> $549/3 months</span>
                </p>
                <p>
                  <span className="text-red-700 line-through">$1199</span>{" "}
                  <span className="text-blue-900"> $899/6 months</span>
                </p>
                <p>
                  <span className="text-red-700 line-through">$2399</span>{" "}
                  <span className="text-blue-900 text-2xl font-bold">
                    {" "}
                    $1499/year
                  </span>
                </p>
              </div>
              <ul className="text-blue-900 text-start">
                <li>Access to all features</li>
                <li>Unlimited users</li>
                <li>Unlimited applications</li>
              </ul>
            </div>
          </div>

          {/* <!-- Pricing Card 2 --> */}
          <div className="border border-green-500 rounded-lg p-6 flex flex-col justify-between items-center bg-gradient-to-br from-green-200 to-green-400 shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-green-900">
                Service Bundles
              </h2>
              <h4 className="text-xl font-semibold text-green-800 mb-4">
                KWIKQA + Hire Us
              </h4>
              <div className="text-lg text-green-900 mb-6">
                <p>
                  Resource Pay Rate:{" "}
                  <span className="font-bold">$33.99/hour</span>
                </p>
                <p>$199/month</p>
                <p>
                  <span className="text-red-700 line-through">$599</span>{" "}
                  <span className="text-green-900"> $549/3 months</span>
                </p>
                <p>
                  <span className="text-red-700 line-through">$1199</span>{" "}
                  <span className="text-green-900"> $899/6 months</span>
                </p>
                <p>
                  <span className="text-red-700 line-through">$2399</span>{" "}
                  <span className="text-green-900 text-2xl font-bold">
                    {" "}
                    $1499/year
                  </span>
                </p>
              </div>
              <ul className="text-green-900 text-start">
                <li>Access to all features</li>
                <li>Unlimited users</li>
                <li>Unlimited applications</li>
                <li>Test Resource Support</li>
              </ul>
            </div>
          </div>

          {/* <!-- Pricing Card 3 --> */}
          <div className="border border-purple-500 rounded-lg p-6 flex flex-col justify-between items-center bg-gradient-to-br from-purple-200 to-purple-400 shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-purple-900">Licensing</h2>
              <h4 className="text-xl font-semibold text-purple-800 mb-4">
                White Label Licensing
              </h4>
              <div className="text-lg text-purple-900 mb-6">
                <span className="text-red-700 line-through">$5999</span>{" "}
                <span className="text-2xl font-bold">$3999</span>
              </div>
              <ul className="text-purple-900 text-start">
                <li>Access to Full code base</li>
                <li>Personalized Training</li>
                <li>Custom integrations</li>
                <li>Priority Feature Requests</li>
                <li>Dedicated Support</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  );
}
