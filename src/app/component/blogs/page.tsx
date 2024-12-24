import Image from "next/image";

type IData = {
  title: string;
  description: string;
  price: string;
};

const data: IData[] = [
  { title: "Blogs", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", price: "$400" },
  { title: "Blogs", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", price: "$400" },
  { title: "Blogs", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", price: "$400" },
  { title: "Blogs", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", price: "$400" },
  { title: "Blogs", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", price: "$400" },
  { title: "Blogs", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", price: "$400" },
];

export default function Blogs() {
  return (
    <div className="justify-items-center mt-3">
      <header>
        <h1 className="font-bold text-4xl mb-2">My Blogs</h1>
        <hr className="w-5/10 mb-5 text-black" />
      </header>
      <div className="parentContainer w-full h-auto px-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data.map((blog, index) => (
          <article
            key={index}
            className="childContainer py-5 px-5 border border-spacing-2 mt-4 bg-slate-200 rounded-sm"
          >
            <div className="py-2 place-items-center">
              <Image
                src="/image.png"
                alt={`Image for ${blog.title}`}
                height={40}
                width={200}
                className="w-full h-[220px]"
              />
            </div>
            <h2 className="text-2xl font-semibold">{blog.title}</h2>
            <p className="text-sm">{blog.description}</p>
            <h3 className="text-xl text-red-700 font-bold">{blog.price}</h3>
            <button className="w-full px-6 py-2 bg-black text-white rounded-lg mt-3 hover:-translate-y-1 transition-all">
              Read More
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}
