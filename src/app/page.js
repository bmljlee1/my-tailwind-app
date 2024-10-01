import Image from "next/image";

export default function Home() {
  return (
    <div className="flex">
      <div className="bg-blue-500 p-4 flex">Blue Background</div>
      <p className="text-center text-red-500 font-bold flex">
        This is Tailwind!
      </p>
      <div>
        <p className="flex justify-center items-center">
          I am in the middle of the flexbox
        </p>
        <button className="bg-blue-500 md:bg-red-500 lg:bg-green-500">
          Background change
        </button>
      </div>
    </div>
  );
}
