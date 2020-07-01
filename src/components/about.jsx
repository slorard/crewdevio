/* @jsx insertionJsx */

import insertionJsx from "insertion";

import Programming_rafiki from '../images/Programming-rafiki.svg';

function About() {
  return (
    <section>
      <h1 class="about-title">
        About <span class="color-red">Us</span>
      </h1>
      <div class="about">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
          porro, voluptas tenetur <span class="color-red">commodi</span>{" "}
          deleniti temporibus voluptates aut sunt omnis recusandae suscipit
          nobis ratione mollitia, iusto, similique quas doloremque. Iste, natus?
        </p>
        <img src={Programming_rafiki} />
      </div>
    </section>
  );
}


export default About;