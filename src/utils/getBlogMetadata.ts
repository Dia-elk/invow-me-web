import { Metadata } from "next";
import blogs from "@/data/blogs.json";

export function getBlogMetadata(blogIndex: number): Metadata {
    const blog = blogs[blogIndex];

    return {
        title: blog.title,
        description: blog.description,
        keywords: blog.keywords,
        openGraph: {
            title: blog.title,
            description: blog.description,
            url: "https://invow.me" + blog.slug,
            siteName: "InvowMe",
            images: [
                {
                    url: "https://invow.me" + blog.image,
                    width: 1200,
                    height: 630,
                    alt: blog.title,
                },
            ],
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: blog.title,
            description: blog.description,
            images: ["https://invow.me" + blog.image],
        },
    };
}
