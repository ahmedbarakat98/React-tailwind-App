import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="flex relative bottom-0 flex-col justify-center items-center text-white w-full bg-[#2C3E50]">
        <div className="container mx-auto ">
          <div className="grid grid-cols-1 md:grid-cols-3 py-5 text-center">
            <div className="py-5 flex flex-col justify-center items-center">
              <h3 className="text-xl font-bold">LOCATION</h3>
              <p className="pt-2">Helwan</p>
              <p className="pt-2">Rael St</p>
            </div>

            <div className="py-5 flex flex-col justify-center items-center gap-2 ">
              <h3 className="text-xl font-bold">AROUND THE WEB</h3>
              <div className="flex justify-between items-center space-x-4 text-2xl">
                <Link
                  href="https://www.facebook.com/"
                  className="text-white hover:text-blue-500"
                >
                  <svg
                    className="w-6 h-6 dark:text-gray-800 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </Link>
                <Link
                  href="https://x.com/"
                  className="text-white hover:text-blue-400"
                >
                  <svg
                    class="w-6 h-6 dark:text-gray-800 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                      clip-rule="evenodd"
                    />
                    <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                  </svg>
                </Link>
                <Link
                  href="https://www.instagram.com/"
                  className="text-white hover:text-pink-500"
                >
                  <svg
                    className="w-6 h-6 dark:text-gray-800 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"
                      clip-rule="evenodd"
                    />
                    <path
                      fill="currentColor"
                      d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* About */}
            <div className="py-5 flex flex-col justify-center items-center text-center px-4">
              <h3 className="text-xl font-bold">ABOUT FREELANCER</h3>
              <p>
                Freelance is a free to use, licensed BootstrapTailwind theme created by
                Eng/ Ahmed Barakat
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex justify-center items-center text-white w-full p-4 bg-gray-800 text-sm">
          Copyright © Your Website 2021
        </div>
      </div>
    </>
  );
}
