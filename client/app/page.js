import Link from "next/link";
import { RiArrowRightDoubleLine } from "@remixicon/react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col font-mono bg-gradient-to-br from-blue-900 to-purple-900">
  <div className="flex flex-row justify-between items-center">
    <div className="w-20 h-20 m-7">
      <img src="data:image/png;base64,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" alt="blog"  className="rounded-full"/>
    </div>
    <div className="flex px-5 py-5 justify-around">
      <Link href="/posts">
        <button className="m-4 bg-yellow-400 p-5 rounded-lg flex flex-row text-slate-950 hover:bg-yellow-500 transition-all duration-300 font-semibold">
          See All Posts <RiArrowRightDoubleLine />
        </button>
      </Link>
    </div>
  </div>
  <div className=" flex flex-col items-center m-28">
    <h1 className="text-6xl m-4 text-white font-extrabold">Welcome to ThoughtStream</h1>
    <h3 className="text-4xl m-4 font-medium text-slate-100">Every story has its own unique melody, and within the pages of this blog, we aim to orchestrate a symphony of voices, ideas, and perspectives.</h3>
    <div className="flex flex-row align-middle items-center">
    <Link href="/login">
  <button className="m-10 bg-yellow-400 p-5 rounded-lg flex flex-row text-slate-950 hover:bg-yellow-500 transition-all duration-300 font-semibold">
    Login <RiArrowRightDoubleLine />
  </button>
</Link>
<Link href="/register">
  <button className="m-4 bg-yellow-400 p-5 rounded-lg flex flex-row text-slate-950 hover:bg-yellow-500 transition-all duration-300 font-semibold">
    Register <RiArrowRightDoubleLine />
  </button>
</Link>

    </div>
  </div>
</main>
  );
}
