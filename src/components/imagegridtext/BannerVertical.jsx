import bannervertical from "../../assests/images/homebanner.svg";
import { FaApple } from "react-icons/fa";
import playstore from "../../assests/images/playstore.svg";

function BannerVertical() {
  return (
    <section className="flex gap-3 flex-col-reverse lg:flex-row p-2 items-center max-w-7xl mx-auto">
      <div
        className="rounded-3xl p-3 lg:h-[60vh]"
        style={{
          background: `linear-gradient(234.57deg, rgba(201, 201, 201, 0.06) -22.36%, rgba(3, 51, 41, 0.6) 148.09%),
              linear-gradient(108.87deg, rgba(255, 255, 255, 0.8) 0.66%, rgba(211, 211, 211, 0.1) 99.48%)`,
        }}
      >
        <div className="flex flex-col gap-3 justify-center h-full lg:w-[90%] mx-auto">
          <h1 className="text-2xl lg:text-6xl text-themeBlack font-bold">
            Ready to get <br className="hidden lg:block" /> started?
          </h1>
          <p className="lg:text-xl text-sm font-medium text-themeGray">
            It only takes 3 minutes to download our app, sign up, and invest
          </p>

          <section className="flex items-center lg:gap-4 gap-2">
            <div className="bg-themeBlack text-white flex items-center justify-center gap-1 lg:h-16 h-12 lg:w-52 w-36 rounded-xl">
              <FaApple className="text-2xl lg:text-5xl" />
              <p className="text-xs lg:text-md">
                Download on the <br />
                <span className="lg:text-3xl font-bold leading-4">
                  App Store
                </span>
              </p>
            </div>

            <div className="bg-themeBlack text-white flex items-center justify-center gap-1 rounded-xl lg:h-16 h-12 lg:w-52 w-36">
              <div className="w-4 lg:w-auto">
                <img src={playstore} className="play-icon max-w-full" />
              </div>
              <p className="text-xs lg:text-md">
                GET IT ON <br />
                <span className="lg:text-2xl font-medium leading-4">
                  Google Play
                </span>
              </p>
            </div>
          </section>
        </div>
      </div>

      <div className="grid place-content-center p-4">
        <img src={bannervertical} className="max-w-full object-contain" />
      </div>
    </section>
  );
}

export default BannerVertical;
