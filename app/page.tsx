import Image from 'next/image'

import codeImage from "../public/PIAIC_Logo.svg.png";
import level from "../public/download.png"


export default function Home() {
  return (
    <main>
   
    <>
      <header className="page-header">
        <img
          src={"/logo.png"}
          alt="remote"
          height={"300px"}
          width={"200"}
        />
        <h1 className="project-name">
          Certified Web 3.0 and Metaverse Developer: <br />A Nation wide Program in
          Karachi, Lahore, Islamabad, and Peshawar
        </h1>
        <h2 className="project-tagline">
          Getting Ready for the Next Generation and Future of the Internet -
          Join a 13 Trillion Dollar Industry with 5 Billion Users
        </h2>
      </header>

      <main id="content" className="main-content" role="main">
        <h1>
          Certified Web 3.0 and Metaverse Developer: A Nationwide Program in
          Karachi, Lahore, Islamabad, and Peshawar
        </h1>

        
          <img src={"/download.png"} alt="Panavers Clouds Native Program"/>
        
        <h2>PIAIC Offering Free First Quarter Classes Online</h2> <br />
       
        <video width="750" height="350" controls>
          <source
            src="/PIAIC.mp4"
            type="video/mp4"
          />
        </video>
        
        <p>
          The mission of PIAIC is to reshape Pakistan by revolutionizing
          education, research, and business by adopting latest, cutting-edge
          technologies.
        </p>
        <br />
        <br />
        <h2 id="the-future-of-the-web-is-web-30-metaverse-and-edge-computing-panaverse-dao-is-a-movement-to-spread-these-technolgies-globally-it-is-community-of-web-3-and-metaverse-developers-designers-trainers-startup-founders-and-service-providers">
          The Future of the Web is Web 3.0, Metaverse, and Edge Computing.
          Panaverse DAO is a movement to spread these technolgies globally. It
          is community of Web 3 and Metaverse developers, designers, trainers,
          startup founders and service providers.
        </h2>

        <h2>
          <a href="https://www.piaic.org/">
            Admissions Now Open in Karachi, Lahore, Islamabad, and Peshawar
          </a>
        </h2>

        <p>
          <a href="https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing">
            This document on Google Docs
          </a>
        </p>
        <p>
          The internet is without a doubt the most important technological
          development in human history. Web3 and metaverse technologies expand
          the internet as we know it by introducing novel features and
          advancements. Metaverse will make use of all aspects of modern
          technology, including 3D, VR, AR, AI, blockchain, cloud computing,
          voice computing, ambient computing, and more.
        </p>

        <p>
          Citi is the latest Wall Street business to give a positive prognosis
          for Web 3.0 and the Metaverse, terms used to depict a future internet
          vision centred on decentralised technologies and virtual worlds. Citi
          stated in a March 2022
          <a href="https://www.citivelocity.com/citigps/metaverse-and-money/">
            {" "}
            research paper{" "}
          </a>
          that the metaverse economy might have a total addressable market of up
          to $13 trillion and five billion people by 2030.
        </p>
        <h2>The Program in a Nutshell: Earn While You Learn</h2>
        <p>
          In this brand-new type of curriculum, students will learn how to make
          money and boost exports in the classroom and will begin doing so
          within six months of the program’s beginning. It resembles a cross
          between a corporate venture and an educational project.
        </p>
        <h2>Program of Studies</h2>
        <p>
          This curriculum is intended for beginners who want to learn software
          development from the ground up. The first two quarters are shared by
          all specialities and are dedicated to studying Object-Oriented
          Programming and cutting-edge Full-Stack Web 2.0 development. It is
          going to be a year-long hybrid programme that includes both onsite and
          online classes and is divided into four quarters of 13 weeks each. The
          emphasis will be on hands-on learning by educating students to produce
          projects. To accommodate everyone, courses will be held primarily on
          weekends or after 6:00 p.m. (Pakistan Time) on weekdays. It employs a
          hybrid teaching format, with core onsite classes complemented by
          online Zoom laboratories and recorded videos.
        </p>
        <h2>Core Courses (Common in All Specializations)</h2>
        <p>
          Every participant of the program will start by completing the
          following two core courses:
        </p>
        <p>
          <a href="https://github.com/panaverse/panaverse.github.io#quarter-i-core">
            Quarter I (Core) CS-101: Object-Oriented Programming using
            TypeScript
          </a>
        </p>
        <p>
          <a href="https://github.com/panaverse/panaverse.github.io#quarter-ii-core">
            Quarter II (Core) W2-201: Developing Planet-Scale Web 2.0 Serverless
            Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit
            (CDK) for Terraform
          </a>
        </p>
        <h2>Specialized Tracks</h2>
        <p>
          After completing the first two quarters the participants will select
          one or more specializations consisting of two courses each:
        </p>
        <h2>Web 3.0 (Blockchain) and Metaverse Specialization</h2>
        <p>
          This Web 3.0 and Metaverse specialization focuses on developing
          full-stack Web 3.0 and Metaverse experiences for the next generation
          of the internet by specializing in building worlds that merge the best
          of cutting-edge decentralized distributed blockchains with 3D
          metaverse client experiences.
        </p>
        <p>
          <a>
            Quarter III W3-351: Developing Smart Contracts and Planet-Scale Web
            3.0 Dapps
          </a>
        </p>
        <p>
          <a>
            Quarter IV MV-361: Developing Planet-Scale Open Virtual and
            Augmented Metaverse Experiences
          </a>
        </p>
        <h2>Artificial Intelligence (AI) and Deep Learning Specialization</h2>
        <p>
          The AI and Deep Learning specialization focuses on building and
          deploying intelligent APIs using OpenAI models and building custom
          Deep Learning Tensorflow models.
        </p>
        <p>
          <a>
            Quarter III AI-351: Developing Planet-Scale Intelligent APIs and
            Python Programming
          </a>
        </p>
        <p>
          <a>Quarter IV AI-361: Deep Learning and MLOps</a>
        </p>

        <h2>Cloud-Native Computing Specialization</h2>
        <p>
          The Cloud-Native Computing Specialization focuses on Containers,
          Kubernetes, and CDK for Kubernetes.
        </p>
        <p>
          <a>
            Quarter III CN-351: Certified Kubernetes Application Developer
            (CKAD)
          </a>
        </p>
        <p>
          <a>
            Quarter IV CN-361: Developing Multi-Cloud APIs using CDK for
            Terraform
          </a>
        </p>
        <h2>Ambient Computing and IoT Specialization</h2>
        <p>
          The Ambient Computing and IoT Specialization focuses on building Smart
          Homes, Offices, Factories, and Cities using Voice computing, Matter
          and Embedded Devices.
        </p>
        <p>
          <a>
            Quarter III AC-351: Ambient Computing with Voice Assistants and
            Matter Devices
          </a>
        </p>
        <p>
          <a>Quarter IV AC-361: Embedded Programming using C and Rust</a>
        </p>
        <h2>The Outcome for Participants of the Program</h2>
        <p>
          The graduates of this program will own products (Full-Stack App
          Templates, AR and VR Experiences, and APIs) that are marketed globally
          by the Panaverse DAO and, if they like, will also be able to start off
          by offering services at a rate of $50 per hour ($96,000 per year).
          This would give Pakistani professionals and students a fantastic
          opportunity to better their financial situation while also giving the
          economy a much-needed boost by expanding software exports.
        </p>
        <p>
          <a href="https://content.techgig.com/hiring/top-5-metaverse-jobs-that-will-rule-the-future-of-tech-industry/articleshow/87581325.cms">
            Top 5 ‘Metaverse’ jobs that will rule the future of tech industry
          </a>
        </p>
        <p>
          <a href="https://web3.career/web3-salaries/blockchain-developer">
            Blockchain Developer Salary - Jun 2022
          </a>
        </p>

        <p>
          <a href="https://thedefiant.io/web3-soaring-salaries/">
            Web3 Salaries Soar to $750,000 for Rank-and-File Devs
          </a>
        </p>

        <p>
          <a href="https://newzoo.com/insights/trend-reports/newzoo-report-on-metaverse-blockchain-gaming-nft-2022">
            The Metaverse, Blockchain Gaming, and NFTs: Navigating the
            Internet’s Uncharted Waters
          </a>
        </p>

        <p>
          <a href="https://www.blockchain-council.org/metaverse/how-to-become-metaverse-developer/">
            How To Become Metaverse Developer: Scope, Skills, and Salary
          </a>
        </p>
        <h2>Relevant Information Links</h2>
        <p>
          <a href="https://www.piaic.org/">Admission Website</a>
        </p>

        <p>
          <a href="https://www.piaic.org/">Facebook Group</a>
        </p>

        <p>
          <a href="https://www.piaic.org/">YouTube Live Channel</a>
        </p>

        <p>
          <a href="https://www.piaic.org/">Twitter</a>
        </p>

        <p>
          <a href="https://www.piaic.org/">Github Repos</a>
        </p>
        <h2>Our Clients</h2>
        <table border={10}>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
          </tr>
          <tr>
            <td>TechAndSol</td>
            <td>Johan Botha</td>
            <td>Australia</td>
          </tr>
          <tr>
            <td>Skills</td>
            <td>Smith</td>
            <td>Newzealand</td>
          </tr>
          <tr>
            <td>Tarea</td>
            <td>Sindrella</td>
            <td>Scotland</td>
          </tr>
          <tr>
            <td>Living House</td>
            <td>Lincoln</td>
            <td>USA</td>
          </tr>
          <tr>
            <td>Honours</td>
            <td>Abrar</td>
            <td>Pakistan</td>
          </tr>
        </table>
        <h2>Contact Us</h2>
        <div className="container">
          <form action="action_page.php" method="POST">
            <label htmlFor="fname">Name</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
              required
            />

            <label htmlFor="lname">Email</label><br />
            <input
              type="email"
              id="lname"
              name="lastname" 
              placeholder="Your email.."
              required
            />
<br />
            <label htmlFor="country">Country</label>
            <select id="country" name="country">
              <option value="australia">Australia</option>
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
              <option value="pakistan">Pakistan</option>
              <option value="uk">United Kingdom</option>
              
            </select>

            <label htmlFor="subject">Subject</label>
            <textarea
              id="subject"
              name="subject"
              placeholder="Write something.."
              style={{ height: "200px" }}
              required
            ></textarea>

            <input type="submit" value="Submit" />
          </form>
        </div>
      </main>
    </>
  );

    </main>
   
)
}
