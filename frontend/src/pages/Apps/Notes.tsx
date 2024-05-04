import { Fragment } from "react";
import { Tab } from "@headlessui/react";

const Notes = () => {
  return (
    <div className="p-5">
      <Tab.Group>
        <Tab.List className="flex gap-4">
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`py-2 px-4 rounded ${
                  selected
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                } focus:outline-none`}
              >
                Get Ready
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`py-2 px-4 rounded ${
                  selected
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                } focus:outline-none`}
              >
                Prioritization
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`py-2 px-4 rounded ${
                  selected
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                } focus:outline-none`}
              >
                Multi Level Queue
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`py-2 px-4 rounded ${
                  selected
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                } focus:outline-none`}
              >
                Rescheduling
              </button>
            )}
          </Tab>
        </Tab.List>

        <Tab.Panels>
          <Tab.Panel className="pt-20px ">
            <div className="pt-20px bg-indigo-600 h-3/6 ">
              <div className="lg:grid lg:grid-cols-2">
                <div className="py-24 px-10 lg:px-0 max-w-3xl lg:max-w-md mx-auto">
                  <h2 className="text-4xl tracking-tight font-extrabold text-gray-100">
                    <span className="block">Report Cybercrime</span>
                  </h2>
                  <p className="text-gray-300 mt-5">
                    Submit cybercrime reports securely and efficiently. Our
                    platform provides a user-friendly interface for reporting
                    incidents, tracking case progress, and engaging with law
                    enforcement authorities.
                  </p>
                </div>
                <div className="lg:relative lg:mt-16">
                  <img
                    className=" animate-rotate-y lg:absolute lg:inset-0 h-60 w-full lg:h-full object-cover object-center lg:rounded-tl-md animate-rotate-y animate-once animate-ease-in-out"
                    src="https://www.shutterstock.com/shutterstock/photos/310831844/display_1500/stock-photo-text-let-us-get-started-with-red-marker-aside-is-isolated-on-white-paper-background-310831844.jpg"
                    alt="Woman workcation on the beach"
                  />
                </div>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel className="pt-20px">
            <div className="pt-20px bg-indigo-600 h-3/6">
              <div className="lg:grid lg:grid-cols-2">
                <div className="py-24 px-10 lg:px-0 max-w-3xl lg:max-w-md mx-auto">
                  <h2 className="text-4xl tracking-tight font-extrabold text-gray-100">
                    <span className="block">Case Tracking</span>
                  </h2>
                  <p className="text-gray-300 mt-5">
                    "Track the progress of reported cybercrime cases in
                    real-time. Our platform offers comprehensive case management
                    tools, allowing users to monitor case statuses, communicate
                    with assigned interns, and receive updates on
                    investigations."
                  </p>
                </div>
                <div className="lg:relative lg:mt-16">
                  <img
                    className="lg:absolute lg:inset-0 h-60 w-full lg:h-full object-cover object-center lg:rounded-tl-md animate-rotate-y animate-once animate-ease-in-out"
                    src="https://img.freepik.com/free-photo/html-css-collage-concept-with-hacker_23-2150061984.jpg?t=st=1714801344~exp=1714804944~hmac=2c677169f9ee831ee6d2f19f89d623d2360ae941fa2a071bfa5038364731a807&w=996"
                  />
                </div>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel className="pt-20px">
            <div className="pt-20px bg-indigo-600 h-3/6">
              <div className="lg:grid lg:grid-cols-2">
                <div className="py-24 px-10 lg:px-0 max-w-3xl lg:max-w-md mx-auto">
                  <h2 className="text-4xl tracking-tight font-extrabold text-gray-100">
                    <span className="block">
                    Real-Time Communication with Interns
                    </span>
                  </h2>
                  <p className="text-gray-300 mt-5">
                    For streamlining of cases, the Multi level Queue Algorithm
                    is used which distributes cases into multiple priority
                    queues, handles time slices, dynamically adaptive priorities
                    for responsive and equitable case scheduling
                  </p>
                </div>
                <div className="lg:relative lg:mt-16">
                  <img
                    className="lg:absolute lg:inset-0 h-60 w-full lg:h-full object-cover object-center lg:rounded-tl-md animate-rotate-y animate-once animate-ease-in-out"
                    src="https://img.freepik.com/free-vector/cyber-security-concept_23-2148534565.jpg?t=st=1714801421~exp=1714805021~hmac=441971b5408d54858fa6ca441a39bb3fdb2972d61bdd99b74982d68e71fe9fe0&w=740"
                    alt="Woman workcation on the beach"
                  />
                </div>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel className="pt-20px">
            <div className="pt-20px bg-indigo-600 h-3/6">
              <div className="lg:grid lg:grid-cols-2">
                <div className="py-24 px-10 lg:px-0 max-w-3xl lg:max-w-md mx-auto">
                  <h2 className="text-4xl tracking-tight font-extrabold text-gray-100">
                    <span className="block">
                      Real-Time Communication with Interns
                    </span>
                  </h2>
                  <p className="text-gray-300 mt-5">
                    "Interact with assigned interns in real-time to resolve
                    issues and seek guidance. Our platform facilitates seamless
                    communication between users and interns, ensuring prompt
                    assistance and support throughout the reporting process."
                  </p>
                </div>
                <div className="lg:relative lg:mt-16">
                  <img
                    className="lg:absolute lg:inset-0 h-60 w-full lg:h-full object-cover object-center lg:rounded-tl-md animate-rotate-y animate-once animate-ease-in-out"
                    src="https://img.freepik.com/free-photo/young-hispanic-call-center-agent-man-smiling-happy-working-office_839833-34402.jpg?t=st=1714801474~exp=1714805074~hmac=fb5356fcf1facf265c6f80f9ec81a14953acfdffb2f221d21274325c26734224&w=996"
                    alt="Woman workcation on the beach"
                  />
                </div>
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Notes;
