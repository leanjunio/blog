import blog from "https://deno.land/x/blog@0.5.0/blog.tsx";

blog({
  title: "Lean Junio",
  description:
    "Probably gonna be a space to remind myself of useful information",
  avatar: "https://deno-avatar.deno.dev/avatar/49fbbb.svg",
  avatarClass: "rounded-full",
  author: "Lean Junio",
  links: [
    { title: "Email", url: "mailto:leanjunio@outlook.com" },
    { title: "Github", url: "https://github.com/leanjunio" },
    { title: "Twitter", url: "https://twitter.com/leanjunio" },
  ],
  theme: "dark",
  style: `.markdown-body ul { list-style: disc !important; } .markdown-body ol { list-style: decimal !important; }`,
  // middlewares: [

  // If you want to set up Google Analytics, paste your GA key here.
  // ga("UA-XXXXXXXX-X"),

  // If you want to provide some redirections, you can specify them here,
  // pathname specified in a key will redirect to pathname in the value.
  // redirects({
  //  "/hello_world.html": "/hello_world",
  // }),

  // ]
});
