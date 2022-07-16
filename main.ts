import blog, { ga, redirects } from "https://deno.land/x/blog@0.4.1/blog.tsx";

blog({
  title: "My Blog",
  description: "This is my new blog.",
  avatar: "https://deno-avatar.deno.dev/avatar/49fbbb.svg",
  avatarClass: "rounded-full",
  author: "Lean Junio",
  links: [
    { title: "Email", url: "mailto:leanjunio@outlook.com" },
    { title: "Github", url: "https://github.com/leanjunio" },
    { title: "Twitter", url: "https://twitter.com/leanjunio" }
  ],

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
