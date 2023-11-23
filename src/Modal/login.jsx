import PropTypes from "prop-types";
import { IoCloseOutline } from "react-icons/io5";

function Login({ closeModal }) {
  return (
    <section>
      <div className="flex justify-center items-center">
        <div className="w-[40%] bg-gray-300 px-8 pb-12 pt-2 text-center rounded-xl">
          <h2 className="text-3xl font-bold md:text-5xl">
            <div className="flex justify-end">
              <IoCloseOutline
                className="text-[#636262] text-2xl translate-x-4 cursor-pointer hover:text-red-500"
                onClick={() => closeModal(false)}
              />
            </div>
          </h2>
          <p className="mx-auto my-5 max-w-md text-sm text-[#636262] sm:text-base lg:mb-8">
            Lorem ipsum dolor sit amet consectetur adipiscing elit ut
            aliquam,purus sit amet luctus magna fringilla urna
          </p>
          <div className="mx-auto w-full max-w-[400px]">
            <p
              href="#"
              className="flex w-full max-w-full justify-center rounded-md bg-gray-300 py-3 text-white"
            >
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947090e6cf87_GoogleLogo.svg"
                alt=""
                className="mr-4 inline-block"
              />
              <p className="text-sm sm:text-base">Sign up with Google</p>
            </p>
            <div className="mb-14 mt-14 flex w-full justify-around">
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a948ef4e6cf94_Line%203.svg"
                alt=""
                className="inline-block"
              />
              <p className="text-sm text-[#636262]">or sign up with email</p>
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a948ef4e6cf94_Line%203.svg"
                alt=""
                className="inline-block"
              />
            </div>
            <div className="mx-auto mb-4 max-w-[400px] pb-4">
              <form name="wf-form-password" method="get">
                <div className="relative">
                  <img
                    alt=""
                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a9455fae6cf89_EnvelopeSimple.svg"
                    className="absolute left-[5%] top-[46%] inline-block"
                  />
                  <p className="peer-invalid:visible text-pink-600 text-sm text-left">
                    Veuillez saisir une adresse mail valide.
                  </p>
                  <input
                    type="email"
                    className="peer mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-14 text-sm text-[#333333] focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    placeholder="Email Address"
                    required=""
                  />
                </div>
                <div className="relative mb-4">
                  <img
                    alt=""
                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a946794e6cf8a_Lock-2.svg"
                    className="absolute left-[5%] top-[46%] inline-block"
                  />
                  <p className="per-invalid:visible text-pink-600 text-sm text-left">
                    Veuillez saisir un mot de passe valide.
                  </p>
                  <input
                    type="password"
                    className="per mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-14 text-sm text-[#333333] focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    placeholder="Password (min 8 characters)"
                    required=""
                  />
                </div>
                <input
                  type="submit"
                  value="Sign Up"
                  className="mt-4 inline-block w-full cursor-pointer items-center rounded-md bg-purple-heart-500 px-6 py-3 text-center font-semibold text-white"
                />
              </form>
            </div>
            <p className="text-sm text-[#636262]">
              Already have an account?{" "}
              <p href="#" className="font-bold text-purple-heart-900 ">
                Login now
              </p>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
Login.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default Login;
