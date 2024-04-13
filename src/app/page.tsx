import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import DevIcon from "@/assets/dev-icon.svg";
import DesignIcon from "@/assets/design-icon.svg";
import ConsultingIcon from "@/assets/consulting-icon.svg";
import ProfileImage from "@/assets/profile-image.svg";

export default function Home() {
  return (
    <main className="mx-auto max-w-[1550px] mb-36">
      <Navbar />

      <div className="mt-[90px]">
        <h1 className="font-title text-center text-primary-color font-medium text-8xl">
          Natalie Sihombing
        </h1>
      </div>

      <div className="flex mt-32 justify-between">
        <div className="self-end">
          <h2 className="font-title font-medium text-section-size text-primary-color mb-8">
            Service
          </h2>

          <div className="space-y-10">
            <div className="w-[294px]">
              <div className="flex items-center space-x-5">
                <div className="flex w-[60px] h-[60px] bg-white">
                  <Image
                    className="m-auto"
                    src={DevIcon}
                    alt="Web development"
                    width="35.28"
                    height="36.75"
                  />
                </div>

                <h4 className="font-title font-medium text-sub-section-size text-primary-color">
                  Web Development
                </h4>
              </div>

              <p className="text-secondary-color text-description-size mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <div className="w-[294px]">
              <div className="flex items-center space-x-5">
                <div className="flex w-[60px] h-[60px] bg-white">
                  <Image
                    className="m-auto"
                    src={DesignIcon}
                    alt="UI/UX Design"
                    width="35.28"
                    height="36.75"
                  />
                </div>

                <h4 className="font-title font-medium text-sub-section-size text-primary-color">
                  UI/UX Design
                </h4>
              </div>

              <p className="text-secondary-color text-description-size mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <div className="w-[294px]">
              <div className="flex items-center space-x-5">
                <div className="flex w-[60px] h-[60px] bg-white">
                  <Image
                    className="m-auto"
                    src={ConsultingIcon}
                    alt="Web Consulting"
                    width="35.28"
                    height="36.75"
                  />
                </div>

                <h4 className="font-title font-medium text-sub-section-size text-primary-color">
                  Web Consulting
                </h4>
              </div>

              <p className="text-secondary-color text-description-size mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>

        <div className="flex ml-28 justify-center w-[574px] h-[517px] border-x border-t border-[#CAC6BB] rounded-t-3xl self-end">
          <div className="relative rounded-t-3xl w-[544px] h-[503px] bg-[#CAC6BB] self-end">
            <div className="absolute top-[-143px] left-[-17px] w-[580px] self-end">
              <Image
                src={ProfileImage}
                alt="Person image"
                width="1120.5"
                height="852.77"
              />
            </div>
          </div>
        </div>

        <div className="w-[408px] self-end">
          <h2 className="font-title font-medium text-section-size text-primary-color mb-8">
            Web Specialist based in Jakarta
          </h2>

          <div className="space-y-10">
            <p className="text-secondary-color text-description-size">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <p className="text-secondary-color text-description-size">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <Link href="/">
            <button
              className="mt-12 w-40 h-[60px] bg-primary-color text-2xl/[40px] text-white
            "
            >
              Hire me
            </button>
          </Link>

          <div className="mt-[70px] flex w-[408px] justify-between">
            <div>
              <h2 className="mb-3 text-primary-color font-title font-medium text-section-size">
                13 Years
              </h2>
              <span className="text-secondary-color font-medium text-lg">
                Experience
              </span>
            </div>

            <div>
              <h2 className="mb-3 text-primary-color font-title font-medium text-section-size">
                256+
              </h2>
              <span className="text-secondary-color font-medium text-lg">
                Clients
              </span>
            </div>

            <div>
              <h2 className="mb-3 text-primary-color font-title font-medium text-section-size">
                99.8%
              </h2>
              <span className="text-secondary-color font-medium text-lg">
                Satisfaction
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
