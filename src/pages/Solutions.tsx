import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  PresentationChartBarIcon,
  BeakerIcon,
  ChatBubbleLeftRightIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";

import Template from "@components/template/Template";
import { Solution } from "@shared/types";
import solutionsData from "@data/solutions.json";
import Icon from "@components/Icon";

const iconComponents: any = {
  PresentationChartBarIcon,
  BeakerIcon,
  ChatBubbleLeftRightIcon,
  ClipboardDocumentListIcon,
};

const solutionsDataMapped = solutionsData.map((item) => ({
  ...item,
  icon: iconComponents[item.icon] || null,
}));

const Solutions: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [solution, setSolution] = useState<Solution | null>(null);

  useEffect(() => {
    const foundSolution = solutionsDataMapped.find(
      (solution) => solution.id === id
    );

    if (foundSolution) {
      setSolution(foundSolution);
    } else {
      navigate("/notfound");
    }
  }, [id, navigate]);

  const createMarkup = (html: string) => {
    return { __html: html };
  };

  return (
    <Template>
      <div className="relative isolate overflow-hidden bg-white px-6 pt-8 sm:pt-16 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            />
          </svg>
        </div>
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none ">
          <div className="lg:mx-auto lg:w-full lg:max-w-7xl lg:px-8">
            <div className="flex flex-col items-center justify-center">
              <div className="flex h-32 w-32 mb-12 items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500">
                {solution && (
                  <Icon
                    component={solution.icon}
                    className="h-24 w-24 text-white"
                  />
                )}
              </div>
              <p className="text-xl font-semibold text-center leading-7 text-indigo-600">
                {solution?.name}
              </p>
            </div>
            <h1 className="mt-2 text-3xl font-bold text-center tracking-tight text-gray-900 sm:text-4xl">
              {solution?.headline}
            </h1>
            <div
              className="p-8 sm:pb-16 text-base leading-7 text-gray-700"
              dangerouslySetInnerHTML={createMarkup(solution?.pageContent!)}
            ></div>
          </div>
        </div>
      </div>
    </Template>
  );
};

export default Solutions;
