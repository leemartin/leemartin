<template>
  <main>
    <!-- Header -->
    <!-- ========== -->
    <header>
      <article>
        <h1><span>Lee Martin</span></h1>

        <nav>
          <a href="#">About</a>
          <a href="#">Work</a>
          <a href="#">Contact</a>
          <a href="https://confirmsubscription.com/h/j/7BE1CD1F96F6B42F" target="_blank">Newsletter</a>
        </nav>
      </article>
    </header>

    <!-- Intro -->
    <!-- ========== -->
    <section id="intro">
      <article>
        <h2>Lee Martin develops websites for rock n roll bands and gets paid in sex and drugs.</h2>
        <a href="https://leemartin.createsend.com/campaigns/reports/viewCampaign.aspx?d=j&c=9B0B724E2C919577&ID=5B4E63BEA43BA3E22540EF23F30FEDED&temp=False&tx=0" target="_blank">Read latest newsletter</a>
      </article>
    </section>

    <!-- About -->
    <!-- ========== -->
    <section id="about">
      <article>
        <h3>Hello</h3>
        <h4>My name is Lee Martin, a designer & developer, with more than 16 years of experience in the music business.</h4>
        <p>I started my career by running a band's fan site during college and used my connections there (and some blind luck) to begin freelancing in the music business. I took my first real job at Silva Artist Management where I headed up their one-man new media department, crafting campaigns for Foo Fighters, Beck, Jimmy Eat World, Them Crooked Vultures, and many others.</p>
        <p>After two years at SAM, I became the first US employee of SoundCloud in the position of Experimental Developer, doing business development by building VIP artist campaigns and scalable apps that utilized SoundCloud's platform. Three years later, I've now exited SoundCloud and reunited with my old band: Freelancing.</p>
        <p>I enjoy creating accessible and focused projects that utilize new web technologies to engage fans in interactive ways and allow them to participate in the storytelling process. I feel this makes fans more inclined to share their participation and in turn expands the viral reach of the campaign's goals.</p>
        <p>Have a project in mind? Please, <a href="#">get in touch</a>.</p>
      </article>
    </section>

    <!-- Work -->
    <!-- ========== -->
    <section id="work">
      <article>
        <h3>Latest Work</h3>

        <ul>
          <li v-for="project in projects">
            <a :href="project.fields.link" target="blank">
              {{ project.fields.artist[0].fields.name }}: {{ project.fields.title }}
            </a>
          </li>
        </ul>

        <p>For more case studies, please visit <a href="https://medium.com/@leemartin">the blog</a>.</p>
      </article>
    </section>

    <!-- Contact -->
    <!-- ========== -->
    <section id="contact">
      <article>
        <h3>Get in touch</h3>
        <p>+1 985 209 1111<br><a href="mailto:hi@leemartin.com" target="_blank">hi@leemartin.com</a></p>

        <nav>
          <a href="https://www.twitter.com/leemartin">Twitter</a>
          <a href="https://www.facebook.com/leemartin">Facebook</a>
          <a href="https://www.linkedin.com/in/leepaulmartin">LinkedIn</a>
          <a href="https://medium.com/@leemartin">Medium</a>
        </nav>
      </article>
    </section>
  </main>
</template>

<script>
export default{
  async asyncData({ app, payload, env }) {
    const projects = await app.contentful.getEntries({
      'content_type': 'project',
      'limit': 4,
      'order': '-fields.date'
    })

    return {
      projects: projects.items
    }
  }
}
</script>
