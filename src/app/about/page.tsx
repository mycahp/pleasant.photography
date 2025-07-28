/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
function About() {
  return (
    <div className="flex-col p-0 card">
      <img
        src="https://mycah.pics/mpp_about.jpg"
        className="mb-8 rounded-t-2xl"
        alt="About Me"
      />
      <div className="sm:mx-auto mb-8 w-full md:w-[50%]">
        <h1 className="mb-8 text-brand-teal text-3xl">About</h1>
        <p>
          I'm a photographer based in North Georgia who loves to wander—both
          around town and across the country with my camera in tow.
        </p>
        <br />
        <p>
          I got my start in photojournalism, which taught me to look for the
          whole story, not just the pretty shot. These days, I'm usually out
          chasing wildlife or capturing street life, but I'm always up for
          portrait sessions, events, and commercial work too.
        </p>
        <br />
        <p>
          Whether it's a hawk mid-flight, a candid moment at your wedding, or
          headshots for your business, I just try to capture things as they
          really are.
        </p>
      </div>
    </div>
  );
}

export default About;
