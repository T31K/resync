import React from 'react';

function Main() {
  return (
    <main className="flex-1  overflow-y-auto p-10 bg">
      <div className="">
        <div className="p-4 bg-white border border-gray-200 rounded-xl gradient shadow-sm dark:bg-gray-700 dark:border-gray-600">
          <div className="items-center justify-between mb-3 sm:flex">
            <div className="flex items-center gap-2">
              <img
                className="rounded-full shadow-lg w-[40px] h-[40px]"
                src="https://images.squarespace-cdn.com/content/v1/5446f93de4b0a3452dfaf5b0/1626904421257-T6I5V5IQ4GI2SJ8EU82M/Above+Avalon+Neil+Cybart"
                alt="Bonnie image"
              />
              <div className="text-md font-semibold text-gray-600 dark:text-gray-300">Tim Wong wishes to</div>
              <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className="text-green-500 font-bold bg-green-100  mx-1.5 rounded-full text-sm pr-1.5 pl-3.5 py-1 text-center inline-flex items-center "
                type="button"
              >
                Inform
                <svg
                  className="w-4 h-4 ml-2"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>

              <div
                data-popover-target="popover-default"
                className="text-md font-semibold text-gray-600 lex dark:text-gray-300 hover:cursor-default"
              >
                3 people...
              </div>
              <div
                data-popover
                id="popover-default"
                role="tooltip"
                className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
              >
                <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Popover title</h3>
                </div>
                <div className="px-3 py-2">
                  <p>And here's some amazing content. It's very engaging. Right?</p>
                </div>
                <div data-popper-arrow></div>
              </div>
              <div
                id="dropdown"
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">2 hours ago</time>
          </div>
          <div className="p-3 text-xs italic font-normal text-gray-500 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">
            Hi ya'll! I wanted to share a webinar zeroheight is having regarding how to best measure your design system!
            This is the second session of our new webinar series on #DesignSystems discussions where we'll be speaking
            about Measurement.
          </div>
          <div className="p-3  mt-3 text-xs italic font-normal text-gray-500 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">
            Hi ya'll! I wanted to share a webinar zeroheight is having regarding how to best measure your design system!
            This is the second session of our new webinar series on #DesignSystems discussions where we'll be speaking
            about Measurement.his is the second session of our new webinar series on #DesignSystems discussions where
            we'll be speaking about Measurement.his is the second session of our new webinar series on #DesignSystems
            discussions where we'll be speaking about Measurement.
          </div>
          <div className="p-3 text-xs mt-3 italic font-normal text-gray-500 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">
            Hi ya'll! I wanted to share a webinar zeroheight is having regarding how to best measure your design system!
            This is the second session of our new webinar series on #DesignSystems discussions where we'll be speaking
            about Measurement.
          </div>
        </div>
      </div>

      <div className="p-10">
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <img
                className="rounded-full shadow-lg"
                src="https://images.squarespace-cdn.com/content/v1/5446f93de4b0a3452dfaf5b0/1626904421257-T6I5V5IQ4GI2SJ8EU82M/Above+Avalon+Neil+Cybart"
                alt="Bonnie image"
              />
            </span>
            <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
              <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">just now</time>
              <div className="text-sm font-normal text-gray-500 dark:text-gray-300">
                Bonnie moved{' '}
                <a
                  href="#"
                  className="font-semibold text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Jese Leos
                </a>{' '}
                to{' '}
                <span className="bg-gray-100 text-gray-800 text-xs font-normal mr-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300">
                  Funny Group
                </span>
              </div>
            </div>
          </li>

          <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <img
                className="rounded-full shadow-lg"
                src="https://images.squarespace-cdn.com/content/v1/5446f93de4b0a3452dfaf5b0/1626904421257-T6I5V5IQ4GI2SJ8EU82M/Above+Avalon+Neil+Cybart"
                alt="Bonnie image"
              />
            </span>
            <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
              <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">1 day ago</time>
              <div className="text-sm font-normal text-gray-500 lex dark:text-gray-300">
                Jese Leos has changed{' '}
                <a
                  href="#"
                  className="font-semibold text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Pricing page
                </a>{' '}
                task status to <span className="font-semibold text-gray-900 dark:text-white">Finished</span>
              </div>
            </div>
          </li>
          <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <img
                className="rounded-full shadow-lg"
                src="https://images.squarespace-cdn.com/content/v1/5446f93de4b0a3452dfaf5b0/1626904421257-T6I5V5IQ4GI2SJ8EU82M/Above+Avalon+Neil+Cybart"
                alt="Bonnie image"
              />
            </span>
            <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
              <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">just now</time>
              <div className="text-sm font-normal text-gray-500 dark:text-gray-300">
                Bonnie moved{' '}
                <a
                  href="#"
                  className="font-semibold text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Jese Leos
                </a>{' '}
                to{' '}
                <span className="bg-gray-100 text-gray-800 text-xs font-normal mr-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300">
                  Funny Group
                </span>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </main>
  );
}

export default Main;
