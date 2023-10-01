import {
  PresentationChartBarIcon,
  BeakerIcon,
  ChatBubbleLeftRightIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import dataSolutions from "@data/solutions.json";

const iconComponents: any = {
  PresentationChartBarIcon,
  BeakerIcon,
  ChatBubbleLeftRightIcon,
  ClipboardDocumentListIcon,
};

const features = dataSolutions.map((item) => ({
  ...item,
  icon: iconComponents[item.icon] || null,
}));

export default function AboutUs() {
  return (
    <div id="about-us" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl lg:text-center">
          <h2 className="text-xl normal-case lg:uppercase font-medium lg:font-semibold tracking-wide lg:tracking-normal leading-7 text-indigo-600">
            About Us
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Generative AI Solutions for Business
          </p>
          <p className="text-lg tracking-wider text-indigo-500">
            With minimum effort
          </p>
          <p className="mt-6 text-base antialiased font-light tracking-wide leading-loose text-gray-600">
            Discover how Business AI's diverse portfolio of Generative
            AI-powered solutions can elevate your business to new levels of
            productivity and efficiency. Our solutions are designed to simplify
            workflows, optimize performance, and enhance customer experiences
            with minimum effort from your team.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <Link
                key={feature.id}
                to={`/solutions/${feature.id}`}
                className="block"
              >
                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base antialiased font-light tracking-wide leading-loose text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              </Link>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
