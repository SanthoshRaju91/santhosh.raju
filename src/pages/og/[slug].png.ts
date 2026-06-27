import type { APIRoute, GetStaticPaths } from "astro";
import satori from "satori";
import sharp from "sharp";
import { readFileSync } from "fs";
import { resolve } from "path";

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = import.meta.glob("../blogs/*.md", { eager: true });
  return Object.entries(posts).map(([filePath, post]: [string, any]) => {
    const fileSlug = filePath.split("/").pop()!.replace(".md", "");
    return {
      params: { slug: fileSlug },
      props: {
        title: post.frontmatter.title as string,
        description: (post.frontmatter.description ?? "") as string,
        tags: (post.frontmatter.tags ?? []) as string[],
      },
    };
  });
};

export const GET: APIRoute = async ({ props }) => {
  const { title, description, tags } = props as {
    title: string;
    description: string;
    tags: string[];
  };

  const fontRegular = readFileSync(
    resolve("node_modules/@fontsource/inter/files/inter-latin-400-normal.woff")
  );
  const fontBold = readFileSync(
    resolve("node_modules/@fontsource/inter/files/inter-latin-700-normal.woff")
  );

  const visibleTags = tags.slice(0, 3);
  const truncatedDesc =
    description.length > 110 ? description.slice(0, 107) + "…" : description;

  const tagsRow = {
    type: "div",
    props: {
      style: {
        display: "flex",
        flexDirection: "row" as const,
        flexWrap: "wrap" as const,
        marginBottom: "24px",
      },
      children:
        visibleTags.length > 0
          ? visibleTags.map((tag: string, i: number) => ({
              type: "div",
              props: {
                style: {
                  display: "flex",
                  backgroundColor: "rgba(46, 139, 87, 0.15)",
                  color: "#8FBC8F",
                  fontSize: "18px",
                  fontWeight: 400,
                  padding: "6px 16px",
                  borderRadius: "6px",
                  marginRight: i < visibleTags.length - 1 ? "10px" : "0px",
                },
                children: tag,
              },
            }))
          : [
              {
                type: "div",
                props: { style: { display: "flex" }, children: "" },
              },
            ],
    },
  };

  const titleEl = {
    type: "div",
    props: {
      style: {
        display: "flex",
        fontSize: "54px",
        fontWeight: 700,
        color: "#FFFFFF",
        lineHeight: 1.2,
        marginBottom: "20px",
        flexGrow: 1,
      },
      children: title,
    },
  };

  const descEl = {
    type: "div",
    props: {
      style: {
        display: "flex",
        fontSize: "23px",
        fontWeight: 400,
        color: "rgba(255, 255, 255, 0.55)",
        lineHeight: 1.5,
        marginBottom: "32px",
      },
      children: truncatedDesc || "",
    },
  };

  const dividerEl = {
    type: "div",
    props: {
      style: {
        display: "flex",
        height: "1px",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        marginBottom: "24px",
      },
      children: "",
    },
  };

  const footerEl = {
    type: "div",
    props: {
      style: {
        display: "flex",
        flexDirection: "row" as const,
        alignItems: "center",
        justifyContent: "space-between",
      },
      children: [
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              fontSize: "22px",
              fontWeight: 700,
              color: "#2E8B57",
            },
            children: "santhoshraju.dev",
          },
        },
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "52px",
              height: "52px",
              borderRadius: "50%",
              backgroundColor: "#2E8B57",
              color: "#FFFFFF",
              fontSize: "18px",
              fontWeight: 700,
            },
            children: "SR",
          },
        },
      ],
    },
  };

  const contentChildren = [
    tagsRow,
    titleEl,
    ...(truncatedDesc ? [descEl] : []),
    dividerEl,
    footerEl,
  ];

  const svg = await satori(
    {
      type: "div",
      props: {
        style: {
          display: "flex",
          flexDirection: "row" as const,
          width: "1200px",
          height: "630px",
          fontFamily: "Inter",
          backgroundColor: "#111111",
        },
        children: [
          // Green left accent bar
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                width: "8px",
                height: "630px",
                backgroundColor: "#2E8B57",
                flexShrink: 0,
              },
              children: "",
            },
          },
          // Main content column
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                flexDirection: "column" as const,
                flex: 1,
                padding: "52px 68px",
              },
              children: contentChildren,
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Inter", data: fontRegular, weight: 400, style: "normal" },
        { name: "Inter", data: fontBold, weight: 700, style: "normal" },
      ],
    }
  );

  const png = await sharp(Buffer.from(svg)).png().toBuffer();

  return new Response(png, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
};
