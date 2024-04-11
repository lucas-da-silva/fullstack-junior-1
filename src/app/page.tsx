import Navbar from "@/components/Navbar";
import Image from "next/image";
import DevIcon from "@/assets/dev-icon.svg";
import DesignIcon from "@/assets/design-icon.svg";
import ConsultingIcon from "@/assets/consulting-icon.svg";

export default function Home() {
  return (
    <main className="mx-auto max-w-[1550px]">
      <Navbar />

      <div className="mt-24">
        <h1 className="font-title text-center text-primary-color font-medium text-8xl">
          Natalie Sihombing
        </h1>
      </div>

      <div>
        <h3 className="font-title font-medium text-section-size text-primary-color mb-10">
          Service
        </h3>

        <div className="space-y-10">
          <div className="w-[294px]">
            <div className="flex items-center space-x-5">
              <div className="flex w-[60px] h-[60px] bg-white">
                <Image
                  className="m-auto"
                  src={DevIcon}
                  alt="Code"
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
                  alt="Code"
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
                  alt="Code"
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
    </main>
  );
}
