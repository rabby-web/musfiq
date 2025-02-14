import { IconCloud } from "../magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "redux",
  "bootstrap",
  "mui",
  "html5",
  "css3",
  "nodejs",
  "express",
  "nextdotjs",
  "shadcnui",
  "prisma",
  "antdesign",
  "redis",
  "postgresql",
  "mongodb",
  "firebase",
  "tailwindcss",
  "vercel",
  "amazonaws",
  "nodedotjs",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "swagger",
  "gitbook",
  "github",
  "postman",
  "visualstudiocode",
  "figma",
];

export default function TechAnimation() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border  bg-background">
      <IconCloud images={images} />
    </div>
  );
}
