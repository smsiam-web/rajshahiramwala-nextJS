import SectionHeading from "../shared/SectionHeading";
import CategoryCard from "./CategoryCard";

const CATEGORY = [
  {
    category: "রাজশাহীর আম",
    img: "mango_1",
  },

  {
    category: "খেজুরের গুড়",
    img: "gur_1",
  },
  {
    category: "খাটি মধু",
    img: "honey_1",
  },
  {
    category: "রংপুরের আম",
    img: "mango_1",
  },
  {
    category: "লিচু",
    img: "litchi_1",
  },
  {
    category: "সরিষার তেল",
    img: "sorisha_tel_2",
  },
  {
    category: "পেয়ারা",
    img: "guava",
  },
  {
    category: "আনারস",
    img: "pineapple",
  },
];

const HomeCategory = () => {
  return (
    <section className="bg-white">
      <div className="container py-14">
        <SectionHeading title="Browse by Category" link="All Categories" />
        {/* Category slider */}
        <div className="flex pt-8 items-center gap-7 overflow-x-auto mt-5 pb-14 pl-2 -ml-2 no-scrollbar">
          {CATEGORY.map((item, index) => (
            <CategoryCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeCategory;
