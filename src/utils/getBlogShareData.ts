import blogs from "@/data/blogs.json";

export function getBlogShareData(slug: string) {
    const blog = blogs.find((b) => b.slug === slug);

    if (!blog) {
        return null;
    }

    return {
        title: blog.title,
        url: "https://invow.me" + blog.slug,
    };
}