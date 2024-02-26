export const metadata = {
  title: "Axion Hosting Store",
  description: "Page description",
};

import Link from "next/link";

export default function SignUp() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">
              We encourage you to follow the link below to get in touch with us!
            </h1>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto">
            <div className="flex items-center my-6">
              <div
                className="border-t border-gray-300 grow mr-3"
                aria-hidden="true"
              ></div>
              <div className="text-gray-600">See Below</div>
              <div
                className="border-t border-gray-300 grow ml-3"
                aria-hidden="true"
              ></div>
            </div>
            {/* WhatsApp */}
            <div className="flex flex-wrap -mx-3 mb-3">
              <div className="w-full px-3">
                <a
                  href="https://whatsapp.com/channel/0029VaMAfuOEwEk5VBtH4E3Q"
                  className="btn px-0 text-white bg-gray-900 hover:bg-gray-800 w-full relative flex justify-center"
                >
                  <span className="text-center">Continue with WhatsApp</span>
                </a>
              </div>
            </div>
            {/* Discord */}
            <div className="flex flex-wrap -mx-3">
              <div className="w-full px-3">
                <a href="" className="btn px-0 text-white bg-red-600 hover:bg-red-700 w-full relative flex items-center">
                  <span className="text-center">
                    Continue with Discord
                  </span>
                </a>
              </div>
            </div>
            {/* End */}
          </div>
        </div>
      </div>
    </section>
  );
}
