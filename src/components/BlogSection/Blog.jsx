import { blogs } from "../../data";
import Caption from "../Caption";

function Blog() {
  return (
    <section className="w-full flex justify-center px-30 py-10 sm:px-25 max-sm:px-10 items-center">
      <div className="w-full flex flex-col items-center space-y-10 border-0">
        <Caption>BLOG</Caption>

        <h1
          className="w-1/2 max-sm:w-3/4 font-semibold text-center lg:text-4xl max-sm:text-2xl md:text-2xl sm:text-2xl"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
        >
          Latest Blog & Resources
        </h1>

        <div className="lg:grid lg:grid-cols-3 max-sm:grid-cols-1 max-sm:space-y-2 sm:flex sm:flex-col sm:w-full border-0">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="rounded-md space-y-4 sm:flex sm:flex-col sm:items-center border-0"
            >
              <div className="w-80 rounded-2xl border-0">
                <img src={blog.image} alt="blog-image" className="rounded-md" />
              </div>

              <h1
                className="w-11/12 sm:text-center text-lg font-semibold py-2 border-0"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                {blog.text}
              </h1>

              <img
                src={blog.target}
                alt="target-arrow"
                width={35}
                className="-mt-4 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
