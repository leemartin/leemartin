<template>
  <main>
    <style>
    :root{
      --accent-color: {{ website.fields.accentColor }};
      --background-color: {{ website.fields.backgroundColor }};
      --text-color: {{ website.fields.textColor }};
    }
    </style>

    <!-- Header -->
    <!-- ========== -->
    <header>
      <article>
        <h1><span>Lee Martin</span></h1>

        <nav>
          <a href="#" @click.prevent="scroll('about')">About</a>
          <a href="#" @click.prevent="scroll('work')">Work</a>
          <a href="#" @click.prevent="scroll('contact')">Contact</a>
          <a href="https://confirmsubscription.com/h/j/7BE1CD1F96F6B42F" target="_blank">Newsletter</a>
        </nav>
      </article>
    </header>

    <!-- Intro -->
    <!-- ========== -->
    <section id="intro">
      <article>
        <h2>{{ website.fields.tagline }}</h2>
        <a :href="website.fields.newsletter" target="_blank">Read latest newsletter</a>
      </article>
    </section>

    <!-- About -->
    <!-- ========== -->
    <section id="about">
      <article>
        <h3><i class="material-icons">remove_red_eye</i> Hello</h3>

        <template v-for="node in website.fields.about.content">
          <template v-if="node.nodeType == 'heading-4'">
            <h4>{{ node.content[0].value }}</h4>
          </template>
          <template v-else>
            <p>{{ node.content[0].value }}</p>
          </template>
        </template>

        <p>Have a project in mind? Please, <a href="#" @click.prevent="scroll('contact')">get in touch</a>.</p>
      </article>
    </section>

    <!-- Work -->
    <!-- ========== -->
    <section id="work">
      <article>
        <h3><i class="material-icons">bookmark</i> Latest Work</h3>

        <div id="projects">
          <a class="project" :href="project.fields.link" target="_blank" v-for="project in projects">
            <img :src="`${project.fields.image.fields.file.url}?w=1250&h=625&q=50`" />
          </a>
        </div>

        <p>For more case studies, visit <a href="https://medium.com/@leemartin">the blog</a>.</p>
      </article>
    </section>

    <!-- Contact -->
    <!-- ========== -->
    <section id="contact">
      <article>
        <h3><i class="material-icons">chat_bubble</i> Get in touch</h3>
        <p>+1 985 209 1111<br><a href="mailto:hi@leemartin.com" target="_blank">hi@leemartin.com</a></p>

        <nav>
          <a class="socicon-twitter" href="https://www.twitter.com/leemartin"></a>
          <a class="socicon-facebook" href="https://www.facebook.com/leemartin"></a>
          <a class="socicon-instagram" href="https://www.instagram.com/leemartin"></a>
          <a class="socicon-linkedin" href="https://www.linkedin.com/in/leepaulmartin"></a>
          <a class="socicon-medium" href="https://medium.com/@leemartin"></a>
        </nav>
      </article>
    </section>
  </main>
</template>

<script>
export default{
  methods: {
    scroll(section) {
      document.getElementById(section).scrollIntoView({
        behavior: 'smooth'
      })
    }
  },
  async asyncData({ app, payload, env }) {
    const projects = await app.contentful.getEntries({
      'content_type': 'project',
      'limit': 4,
      'order': '-fields.date'
    })

    const website = await app.contentful.getEntries({
      'content_type': 'website',
      'limit': 1
    })

    return {
      website: website.items[0],
      projects: projects.items
    }
  }
}
</script>
