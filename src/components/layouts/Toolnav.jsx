import { BsFillRocketTakeoffFill } from 'react-icons/bs';

function Toolnav() {
  return (
    <aside className="sm:w-72 border-l border-gray-200  overflow-y-auto px-3 pt-3">
      <div className="border border-gray-200 bg-gray-50 py-5 px-3.5 rounded-lg gap-3 ">
        <div className="flex items-center gap-2">
          <BsFillRocketTakeoffFill className="text-md text-gray-500" />
          <div className="text-gray-800 text-sm font-normal">Objective</div>
          <span className="bg-green-100 text-green-600 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
            Inform
          </span>
        </div>
        <div className="mt-4 text-xs italic font-normal text-gray-500">
          Hi ya'll! I wanted to share a webinar zeroheight is having regarding how to best measure your design system!
          This is the second session of our new webinar series on #DesignSystems discussions where we'll be speaking
          about Measurement.
        </div>
      </div>
      <div className="border border-gray-200 bg-gray-50 py-5 px-3.5 rounded-lg gap-3 mt-3">
        <div className="flex items-center gap-2">
          <BsFillRocketTakeoffFill className="text-md text-gray-500" />
          <div className="text-gray-800 text-sm font-normal">Actionables</div>
          <span className="bg-red-100 text-red-700 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
            3/5
          </span>
        </div>
        <div className="mt-4 text-xs italic font-normal text-gray-500">
          <div className="flex items-center mb-4">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 rounded-full "
            />
            <label
              htmlFor="default-checkbox"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 rounded-full"
            >
              Default checkbox
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 rounded-full "
            />
            <label
              htmlFor="default-checkbox"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 rounded-full"
            >
              Default checkbox
            </label>
          </div>
        </div>
      </div>
      <div className="border border-gray-200 bg-gray-50 py-5 px-3.5 rounded-lg gap-3 mt-3">
        <div className="flex items-center gap-2">
          <BsFillRocketTakeoffFill className="text-md text-gray-500" />
          <div className="text-gray-800 text-sm font-normal">Participants</div>
          <span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">
            3
          </span>
        </div>
        <div className="mt-4 text-xs italic font-normal text-gray-500 flex">
          <img
            src="https://senjaio.b-cdn.net/public/media/OPzSPl9cbk1PRFhDVwWrd7ey.jpeg"
            alt=""
            className="rounded-full active w-[35px] h-[35px] mr-[-5px]"
          />
          <img
            src="https://senjaio.b-cdn.net/public/media/EgZwWWQdD6qmWc7RDJpq3tHE.jpeg?width=100&height=100"
            alt=""
            className="rounded-full active w-[35px] h-[35px] mr-[-5px]"
          />
          <img
            src="https://senjaio.b-cdn.net/public/media/OPzSPl9cbk1PRFhDVwWrd7ey.jpeg"
            alt=""
            className="rounded-full active w-[35px] h-[35px] mr-[-5px]"
          />
        </div>
      </div>
    </aside>
  );
}

export default Toolnav;
