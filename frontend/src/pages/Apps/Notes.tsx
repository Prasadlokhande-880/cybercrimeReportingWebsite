import { Fragment } from 'react';
import { Tab } from '@headlessui/react';

const Notes = () => {
  return (
    <div className="p-5">
      <Tab.Group>
        <Tab.List className="flex gap-4">
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`py-2 px-4 rounded ${selected ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} focus:outline-none`}
              >
                Get Ready
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`py-2 px-4 rounded ${selected ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} focus:outline-none`}
              >
                Prioritization
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`py-2 px-4 rounded ${selected ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} focus:outline-none`}
              >
                Multi Level Queue
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`py-2 px-4 rounded ${selected ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} focus:outline-none`}
              >
                Rescheduling
              </button>
            )}
          </Tab>
        </Tab.List>

        <Tab.Panels>
          <Tab.Panel  className="pt-20px ">
    <div className="pt-20px bg-indigo-600 h-3/6 ">
      <div className="lg:grid lg:grid-cols-2">
        <div className="py-24 px-10 lg:px-0 max-w-3xl lg:max-w-md mx-auto">
          <h2 className="text-4xl tracking-tight font-extrabold text-gray-100">
          <span className="block">Ready to dive in?</span>
<span className="block">Start your journey today.</span>
          </h2>
          <p className="text-gray-300 mt-5">
          "Bringing it to your fingertips: File cases, track progress, and stay informed effortlessly."
Our platform serves as your ultimate legal companion online. Empowering legal access for all by simplifying case management with cutting-edge technology
</p>
        </div>
        <div className="lg:relative lg:mt-16">
        <img className=" animate-rotate-y lg:absolute lg:inset-0 h-60 w-full lg:h-full object-cover object-center lg:rounded-tl-md animate-rotate-y animate-once animate-ease-in-out" src="https://www.shutterstock.com/shutterstock/photos/310831844/display_1500/stock-photo-text-let-us-get-started-with-red-marker-aside-is-isolated-on-white-paper-background-310831844.jpg" alt="Woman workcation on the beach" />
        </div>
      </div>
    </div>
          </Tab.Panel>
          <Tab.Panel  className="pt-20px">
    <div className="pt-20px bg-indigo-600 h-3/6">
      <div className="lg:grid lg:grid-cols-2">
        <div className="py-24 px-10 lg:px-0 max-w-3xl lg:max-w-md mx-auto">
          <h2 className="text-4xl tracking-tight font-extrabold text-gray-100">
          <span className="block">Priority is assigned to cases</span>
          </h2>
          <p className="text-gray-300 mt-5">
          Registered cases are assigned a priority based on parameters like complexity, duration urgency, nature of case, party's age with the help of an AI based prioritization model
          </p>
        </div>
        <div className="lg:relative lg:mt-16">
        <img className="lg:absolute lg:inset-0 h-60 w-full lg:h-full object-cover object-center lg:rounded-tl-md animate-rotate-y animate-once animate-ease-in-out" src="https://www.shutterstock.com/image-photo/task-priority-management-concept-order-260nw-2330995513.jpg" />
        </div>
      </div>
    </div>
          </Tab.Panel>
         <Tab.Panel  className="pt-20px">
    <div className="pt-20px bg-indigo-600 h-3/6">
      <div className="lg:grid lg:grid-cols-2">
        <div className="py-24 px-10 lg:px-0 max-w-3xl lg:max-w-md mx-auto">
          <h2 className="text-4xl tracking-tight font-extrabold text-gray-100">
          <span className="block">Cases are streamlined using MLQ Algorithm</span>
          </h2>
          <p className="text-gray-300 mt-5">
          For streamlining of cases, the Multi level Queue Algorithm is used which distributes cases into multiple priority queues, handles time slices, dynamically adaptive priorities for responsive and equitable case scheduling
          </p>
        </div>
        <div className="lg:relative lg:mt-16">
        <img className="lg:absolute lg:inset-0 h-60 w-full lg:h-full object-cover object-center lg:rounded-tl-md animate-rotate-y animate-once animate-ease-in-out" src="https://media.geeksforgeeks.org/wp-content/uploads/Multilevel-Feedback-Queue-Scheduling-300x269.png" alt="Woman workcation on the beach" />
        </div>
      </div>
    </div>
          </Tab.Panel>
          <Tab.Panel  className="pt-20px">
    <div className="pt-20px bg-indigo-600 h-3/6">
      <div className="lg:grid lg:grid-cols-2">
        <div className="py-24 px-10 lg:px-0 max-w-3xl lg:max-w-md mx-auto">
          <h2 className="text-4xl tracking-tight font-extrabold text-gray-100">
          <span className="block">Rescheduling of Cases by the Judge</span>
          </h2>
          <p className="text-gray-300 mt-5">
          The judge can change the severity of cases, affecting the order in which streamlined proceedings are handled. This authority allows the judge to adjust the order in which cases are addressed.
          </p>
        </div>
        <div className="lg:relative lg:mt-16">
        <img className="lg:absolute lg:inset-0 h-60 w-full lg:h-full object-cover object-center lg:rounded-tl-md animate-rotate-y animate-once animate-ease-in-out" src="https://images.indianexpress.com/2015/03/hammer.jpg?w=414" alt="Woman workcation on the beach" />
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
