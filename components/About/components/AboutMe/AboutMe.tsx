import Link from "next/link";

export const AboutMe = () => {
  return (
    <div className="space-y-10">
      <div className="space-y-5">
        <p>
          I am an enthusiast of extreme sports and what I love about these
          sports is the creative aspect and the fact that each athlete has their
          own identity and style.
        </p>
        <p>
          My passion for technology caught up with me. Since then, I have been
          training in web development, and my current goal is to create websites
          that reflect the values of the sports i pratice: creativity,
          originality, and technical skill.
        </p>
      </div>
      <p>
        <span className="font-bold text-muted-foreground mr-2">
          LET&apos; S WORK
        </span>
        <Link href="" className="hover:underline">
          sanjeedofficial22@gmail.com
        </Link>
      </p>
    </div>
  );
};
