import people from '@data/profiles.json';

export default function Founders() {
  return (
    <div id="founders" className="bg-white py-16">
      <div className="mx-auto max-w-5xl px-6 lg:px-8 lg:text-center">
        <h2 className="text-xl normal-case lg:uppercase font-medium lg:font-semibold tracking-wide lg:tracking-normal leading-7 text-indigo-600">Founders</h2>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
        <div className="mx-auto grid justify-center gap-x-8 gap-y-20 mt-8 px-6 lg:px-8">
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-3 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <a href={person.link} target="_blank">
                    <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt={person.name} />
                  </a>
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                      <a href={person.link} target="_blank">{person.name}</a>
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
