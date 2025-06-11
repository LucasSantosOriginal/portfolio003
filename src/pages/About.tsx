import React from "react";
import BackButton from "../components/BackButton";
import MeAnimation from "../assets/eu-animation.gif";
import MeGuitar from "../assets/eu-guitar-2.gif";
import MeGames from "../assets/eu-games.gif";

const About: React.FC = () => {
  return (
    <div className="page-container">
      <header className="page-header">
        <BackButton />
      </header>

      <main className="page-content">
        <h1>About Me</h1>
        <img src={MeAnimation} alt="me" className="gif-about" />
        <p>
          Welcome! If you’ve found your way to this site and are curious to
          learn more about me, I’m glad you’re here. I’m not a flashy or famous
          person, but I’m also not someone forgotten or invisible. I’m someone
          who finds joy in simple things and puts passion into everything I do,
          whether it’s reading, playing instruments, producing music, drawing,
          or building websites. I’ve always wanted to impact the world through
          my ideas, hoping that what I create or express can genuinely move
          people. I enjoy meeting new people, listening to their stories,
          exchanging ideas, and sharing knowledge. It feels natural to me. When
          I make music, for example, I love discovering the different emotions
          it brings out in each listener. I know I have a real strength for
          creating new things. I enjoy studying references, finding inspiration,
          and challenging myself to do something different, something that
          hasn’t been done before, or at least feels unique. Today, I combine my
          knowledge of web development with my passions for music production and
          pixel art. This site was created to bring those three worlds together
          and reflect who I am as a whole. I see myself as a wildcard, someone
          who can adapt to different creative spaces. And I know these three
          passions will always be part of my journey as I work toward my biggest
          dream: creating a fully independent game that inspires young people
          around the world.
        </p>
        <img src={MeGuitar} alt="guitar" className="gif-about" />
        <p>
          Music has been my greatest passion for as long as I can remember. I
          still recall listening to Elvis Presley at the age of seven and being
          completely fascinated. I think that was the first big musical impact
          of my life. In my earliest memories, I can see myself imitating the
          way he sang and danced, watching a classic DVD of his 1970 Las Vegas
          performance. Music was always present in my home. There was an
          acoustic guitar that belonged to my father, and when I was 15, I
          became curious about it. From the moment I picked it up, I never
          stopped. I remember the first time I played the beginning of a song,
          it was "Come As You Are" by Nirvana. I was amazed to realize it was
          possible to play a song I loved so much. That moment made me feel like
          the possibilities were endless. I could explore different bands,
          genres, and even start composing something uniquely mine. As the years
          went by, I never let go of music, the guitar, or the passion. At every
          stage of my life, I’ve written songs, not necessarily to sell or
          release on Spotify, but to express myself. After more than 10 years of
          learning and personal experiences, I now work as a music producer. I
          compose soundtracks, create beats, and collaborate with artists across
          different musical styles, always driven by love for music, my first
          true passion.
        </p>
        <img src={MeGames} alt="guitar" className="gif-about" />
        <p>
          It’s impossible to talk about my life without talking about games.
          Ever since I can remember, I’ve always loved gaming. I was introduced
          to this world thanks to my uncle and my father, and I’ve been playing
          video games since the PlayStation 1. Being a kid born in 1999, that
          era was the peak of gaming for me. I have vivid memories of games like
          "Crash Bandicoot", "Spyro the Dragon", "Winning Eleven", and "Resident
          Evil 1, 2, and 3", among many others. As the years went by, I became
          even more involved with games, especially multiplayer ones like
          "Counter-Strike 1.6". Through these online games, I met people
          virtually who helped me keep a healthy mind during the pandemic. But
          what really stuck with me was the curiosity I had every time I played
          — I always wanted to know how a game was made. Whether it was a 2D
          platformer, FPS, MMORPG, RPG, adventure, or horror game, I was
          fascinated by what happened behind the scenes. That’s what sparked my
          interest in programming, creating, and designing in general. Not long
          ago, I found an old video of myself at 14 years old, saying that my
          dream was to become a game designer. That dream still lives deep in my
          heart.
        </p>
      </main>
    </div>
  );
};

export default About;
