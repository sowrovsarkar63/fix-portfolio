export default function Contact() {
  return (
    <>
      <section className=" min-h-full bg-base-200" id="contact">
        <div className="text-center m-5 p-5 ">
          <h1 className="text-4xl font-extrabold text-red-600">Contact 👇</h1>
        </div>
        <div className="hero">
          <div className="hero-content text-center">
            <div className="max-w-lg">
              <h1 className="text-3xl pb-5 ">
                <span className="text-green-600 font-extrabold ">Email</span> Me
              </h1>
              <a
                className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg rounded px-4 bg-green-600"
                href="mailto:  dev.sowrovsarkar63@gmail.com"
              >
                {" "}
                dev.sowrovsarkar63@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
