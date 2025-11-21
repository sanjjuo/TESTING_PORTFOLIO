import { Button } from "@/components/ui/button";

export const About = () => {
  return (
    <section className="relative h-[800px] max-w-[1800px] mx-auto">
      <div
        className="absolute inset-0 bg-center bg-cover bg-fixed h-full rounded-2xl"
        style={{
          backgroundImage: "url('/JPG/about.jpg')",
        }}
      ></div>

      <div className="absolute inset-0 bg-black/80 rounded-2xl">
        <p className="absolute top-5 lg:top-10 left-5 lg:left-10 max-w-6xl">
          I am an enthusiast of extreme sports and what I love about these
          sports is the creative aspect and the fact that each athlete has their
          own identity and style. Over two years ago, my passion for technology
          caught up with me. Since then, I have been training in web
          development, and my current goal is to create websites that reflect
          the values of the sports i pratice: creativity, originality, and
          technical skill.
        </p>

        <h1
          style={{ fontFamily: "humane" }}
          className="flex items-center justify-center h-full text-[200px] lg:text-[350px] uppercase font-bold opacity-5"
        >
          about me
        </h1>

        <Button className="absolute bottom-5 lg:bottom-10 right-5 lg:right-10 rounded-3xl bg-zinc-600/20 p-6">
          Learn more about me
        </Button>
      </div>
    </section>
  );
};
