import Link from "next/link";
import { RiArrowRightDoubleLine } from "@remixicon/react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col font-serif bg-gradient-to-r from-purple-700 via-pink-500 to-red-500">
      <div className="flex flex-row justify-between items-center">
        <div className="w-20 h-20 m-7">
          <img src="https://media.istockphoto.com/id/182177938/photo/shopping-icon.webp?b=1&s=170667a&w=0&k=20&c=4ByxxAIOIb08WudUN2TDDnsal5ovxQA6FMLglKZ6Chc=" className="rounded-full" alt="web-series" />
        </div>
        <div className="flex px-5 py-5 justify-around">
          <Link href="/register">
            <button className="m-4 bg-blue-500 p-5 rounded-lg flex flex-row text-white hover:bg-blue-600 transition-all duration-300">
              Register <RiArrowRightDoubleLine />
            </button>
          </Link>
        </div>
      </div>
      <div className=" flex flex-col items-center m-28">
        <h1 className="text-6xl m-4 text-white font-extrabold">Unlimited Finds: Shop Gadgets, Fashion, and More!</h1>
        <h3 className="text-4xl m-4 font-medium text-slate-100">Shop Anywhere. Cancel Anytime. Discover Endless Treasures.</h3>
        <h4 className="text-4xl m-4 font-medium text-slate-100">Ready to Shop? Explore Now. Your Next Favorite Awaits.</h4>
        <Link href="/login">
          <button className="m-10 bg-blue-500 p-5 rounded-lg flex flex-row text-white hover:bg-blue-600 transition-all duration-300">
            Login Yourself <RiArrowRightDoubleLine />
          </button>
        </Link>
      </div>
    </main>
  );
}



