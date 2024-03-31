import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "../components/HomepageFeatures";
import { Button_cn } from "../components/ui/button";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <div className=" py-8 dark:bg-gray-900 bg-neutral-100 ">
        <div className="px-8">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="text-start">
              <div className="font-bold text-2xl md:text-3xl lg:text-4xl py-4 text-start">
                <h1 className="leading-relaxed">
                  <span className="text-green-700">KWIKQA</span> Fast and
                  Reliable end-to-end Hybrid Test Automation Framework for
                  modern web apps.
                </h1>
              </div>
              <div className="py-3">
                <Button_cn
                  asChild
                  variant="outline"
                  size="xl"
                  className="text-lg font-bold hover:bg-green-700 transition duration-300 border-green-700 mr-3 my-2"
                >
                  <Link to="/docs/getting-started/installation">GET STARTED</Link>
                </Button_cn>

                <Button_cn
                  asChild
                  variant="outline"
                  size="xl"
                  className="text-lg font-bold hover:bg-green-700 transition duration-300 border-green-700 mr-3 my-2"
                >
                  <Link to="/contact-us">DEMO</Link>
                </Button_cn>

                <Button_cn
                  asChild
                  variant="default"
                  size="sm"
                  className="text-md font-bold mr-3 my-2"
                >
                  <Link
                    to="https://playwright.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.75432 0.819537C7.59742 0.726821 7.4025 0.726821 7.24559 0.819537L1.74559 4.06954C1.59336 4.15949 1.49996 4.32317 1.49996 4.5C1.49996 4.67683 1.59336 4.84051 1.74559 4.93046L7.24559 8.18046C7.4025 8.27318 7.59742 8.27318 7.75432 8.18046L13.2543 4.93046C13.4066 4.84051 13.5 4.67683 13.5 4.5C13.5 4.32317 13.4066 4.15949 13.2543 4.06954L7.75432 0.819537ZM7.49996 7.16923L2.9828 4.5L7.49996 1.83077L12.0171 4.5L7.49996 7.16923ZM1.5695 7.49564C1.70998 7.2579 2.01659 7.17906 2.25432 7.31954L7.49996 10.4192L12.7456 7.31954C12.9833 7.17906 13.2899 7.2579 13.4304 7.49564C13.5709 7.73337 13.4921 8.03998 13.2543 8.18046L7.75432 11.4305C7.59742 11.5232 7.4025 11.5232 7.24559 11.4305L1.74559 8.18046C1.50786 8.03998 1.42901 7.73337 1.5695 7.49564ZM1.56949 10.4956C1.70998 10.2579 2.01658 10.1791 2.25432 10.3195L7.49996 13.4192L12.7456 10.3195C12.9833 10.1791 13.2899 10.2579 13.4304 10.4956C13.5709 10.7334 13.4921 11.04 13.2543 11.1805L7.75432 14.4305C7.59742 14.5232 7.4025 14.5232 7.24559 14.4305L1.74559 11.1805C1.50785 11.04 1.42901 10.7334 1.56949 10.4956Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="pl-2">Powered by Playwright</span>
                  </Link>
                </Button_cn>
              </div>
            </div>
            <div>
              <img src="img/hero.png" alt="Test Structure"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      // title={`${siteConfig.title}`}
      title='Fast and Reliable end-to-end Test Automation Framework'
      description="Fast and Reliable end-to-end Test Automation Framework for modern Web Apps."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
