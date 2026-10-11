export default function About() {
  return (
    <section className="about-page" style={{ marginTop: '2rem', animation: 'fadeIn 0.5s ease' }}>
      <h2 className="section-title">My Journey</h2>
      
      <div className="about-content" style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '800px', lineHeight: '1.8' }}>
        <p>
            Hi, everyone! My name is Josh, and I'm a healthcare data engineer. I 
            spend my days writing SQL or Python, building and maintaining data 
            pipelines, crafting bugfixes, and responding to ad hoc requests from 
            stakeholders across my company. And I <i>love</i> it.  I really do.
            I consider myself so lucky to get to do this, because it wasn't always
            this way. In fact, my path into data and development has been the most 
            convoluted and meandering journey you can imagine.  Let me tell you
            about it...
        </p>
        <p>  
            For the first several years of my career, I worked in the trades - mostly 
            residential construction and facilities maintenance, but I've done 
            a little bit of everything in and around a job site. It was honest and 
            honorable work, and I'm proud of those years of my life. But it wasn't 
            exactly my dream. Deep down, I've pretty much always known that 
            I wanted to work in tech.
        </p>
        <p id="about-bottom-text">
            In 2016, I went back to school, starting with a Bachelor of 
            Multidisciplinary Studies from West Virginia University and 
            graduating with a 4.0 GPA. In my final year, I taught myself Python
            and built a small portfolio of data analytics projects. They weren't 
            much and far from professional grade, but it was enough to confirm
            that this was a path I wanted to pursue.
        </p>
        <p>
            As it turns out, it was also enough for me to be accepted into the 
            University of Pennsylvania's Master of Computer and Information Technology (MCIT) 
            program, a computer science curriculum designed for students without a CS 
            background. It was my first formal exposure to the deeper world of 
            programming and computer science, and despite how foreign and challenging
            it all seemed, I instantly fell in love.
        </p>
        <p>
            A few weeks into my first semester, however, my life changed dramatically. 
            Following a series of unexplained fevers, my two-year-old son was 
            diagnosed with acute lymphoblastic leukemia. 
        </p>
        <p>
            Like a crack of thunder on a sunny day, without warning,
            cancer had entered our lives.
        </p> 
        <p>
            We were fortunate, or as fortunate as one can be in that situation; ALL is quite 
            treatable and has a very high cure rate. However, while the prognosis 
            was good, the treatment was grueling: nearly three years of chemotherapy, 
            frequent hospital visits, and constant at-home care. This became
            my full time job, with school being relegated to an on-again-off-again
            endeavor.
        </p>
        <p>
            I took two leaves of absence from UPenn during that time, both due to my
            son being in hospital for extended periods of time. As this was the maximum 
            number of leaves one could take and remain in the MCIT program, it became
            clear my time at UPenn was tenuous, at best. I needed something more flexible, 
            that would allow me to continue growing while still being present for my family. That's 
            when I found Boston University's Master of Science in Software Development program. 
            After much deliberation, numerous late-night talks with my wife, and whole lot
            of wondering if I should even continue, I made the switch to BU.
        </p>
        <p>
            Thankfully, it turned out to be exactly what I needed at that moment. With small class
            sizes, professors both eminently knowledgeable and understanding, and a curriculum
            that was practical and project-focused, BU fit me perfectly, and I was able to graduate last year
            with a nearly miraculous 4.0 GPA.
        </p>
        <p>
            Today, my son has finished treatment and is a thriving second-grader, full of boundless
            energy and a mischievous streak wide enough to drive a semi across. His strength and unshakable
            positivity through an illness that has thus far defined his entire life has been and continues
            to be my greatest source of inspiration and motivation.   
        </p>
        <p>
            In March, I went back to work, in my very first role in the tech
            space - a junior data engineer at a healthcare startup. It was, without
            a doubt, one of the scariest things I've ever done. I trembled before
            every interview, talked through SQL problems with a quaver in my voice,
            and felt so out of place when I finally started that I considering quitting.
        </p>
        <p>
            Thankfully, I didn't do that. Despite the self-doubt and the deluge of
            new information to take in, I continued, trying to see every mistake
            and misstep as a learning opportunity. And I <i>have</i> learned so 
            much - Docker and dbt, Airflow tasks and DAGs, BigQuery and GCS, and 
            the many, <i>many</i> nuances of the world of healthcare. It's been 
            hard, but also one of the most exciting times of my life, and I 
            consider myself so fortunate to have landed where I did, with a team 
            that has been so welcoming and patient. 
        </p>
        <p>
            Now, several months in, I've settled in a bit, routinely handling 
            bugfixes in the data warehouse, requests from the billing and marketing
            departments, building and updating models or DAGs, and even occasionally
            doing some small ad hoc analysis requests. Even though I know that
            I've just begun in this world, I've started to develop the confidence
            to believe that I can tackle whatever new challenges await, and I am
            so eager to see what happens next.
        </p>
        
      </div>
    </section>
  );
}