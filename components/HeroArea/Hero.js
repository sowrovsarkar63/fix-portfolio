import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="hero min-h-screen bg-base-200" id="hero">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <Image
              className=" rounded-full  "
              src="/assets/img/important pic.jpg"
              alt="Profile pic"
              width={200}
              height={200}
            />
            <h4 className="font-semibold mb-3 mt-2">Md Mahabubul Hasan Sowrov </h4>
            <h1 className="text-5xl font-bold">
              <span className="text-red-600 font-extrabold ">Hello</span> there
            </h1>
            <p className="py-6">
              I'm Sowrov, I'm Front End Developer || React Js Specialist ||
              JavaScript's Fan. I Love To Explore New Tools And Technique To
              Solve Problem In Different Approaches. Passionate About Sharing
              Knowledge And Teach Others Some Critical Skill,Tools, And Concept
              Through Blog Article, And Linkedin Post.
            </p>
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg rounded px-4">
              My Resume 🤘
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
