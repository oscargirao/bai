import companiesData from '@data/companies.json';
import Footer from '@components/template/Footer';

const CompanyLink = (companies: any[]) => {
  return (
    <>
      {companies.map((company, index) => (
        <a
          key={index}
          href={company.href}
          title={company.title}
          target="_blank"
          className="-m-1.5 p-1.5 flex max-w-xl flex-col items-center justify-between"
        >
          <span className="sr-only">{company.title}</span>
          <img
            src={company.imgSrc}
            alt={company.title}
            width={company.imgWidth}
            height={company.imgHeight ?? undefined} />
        </a>
      ))}
    </>
  );
}

export default function HomeFooter() {
  return (
    <div className="mx-auto bg-gray-50 text-center">
      <div className="mx-auto max-w-7xl py-16 px-6 lg:px-8">
        <div className="mx-auto max-w-3xl lg:text-center">
          <div className="mx-auto max-w-7xl text-base antialiased font-light tracking-wide leading-loose sm:text-center text-gray-600">
            <p className='break-normal whitespace-normal'>
              <span className="font-medium">Business AI</span> is part of the <span className="font-medium">Impacting Group</span>, which owns and controls companies in the Digital Business Technology Based.
              Founded in 2007 in Portugal, the group has succeeded to grow internationally, sustained by its R&D investment.
            </p>
          </div>
          <p className="mx-auto mt-8 sm:mt-10 xl:mt-12">
            <a
              href="https://www.impactinggroup.com/"
              title="Impacting Group"
              target="_blank"
              className="-m-1.5 p-1.5 flex max-w-xl flex-col items-start justify-between"
            >
              <span className="sr-only">Impacting Group</span>
              <img
                src="https://adc-signature.s3.amazonaws.com/images/logo-ig_red.png"
                alt="Impacting Group"
                width={180}
                height={42} />
            </a>
          </p>
          <div className="mx-auto grid max-w-2xl grid-cols-2 gap-y-8 gap-x-4 pt-5 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {CompanyLink(companiesData)}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
