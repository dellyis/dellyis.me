<template>
  <div>
    <h1 class="mt-4 text-2xl font-bold">Major Projects</h1>
    <div class="flex flex-col mt-2">
      <Project
        v-for="project in majorProjects"
        :key="project.name"
        :icon="project.icon"
        :name="project.name"
        :link="project.link"
        :year="project.year"
        :description="project.description"
        :color="project.color"
      />
    </div>
    <button class="mt-6" @click="showAllProjects = !showAllProjects">
      <font-awesome-icon
        :icon="['fas', 'chevron-down']"
        class="transition duration-300 transform"
        :class="showAllProjects ? '-rotate-180' : ''"
      />
      Show All Projects
    </button>
    <transition name="slide">
      <div v-if="showAllProjects" class="flex flex-col mt-2">
        <Project
          v-for="project in projects"
          :key="project.name"
          :icon="project.icon"
          :name="project.name"
          :link="project.link"
          :year="project.year"
          :description="project.description"
          :color="project.color"
        />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showAllProjects: false,
      projects: [
        {
          icon: 'em.png',
          name: 'Ecology Month',
          // link: '',
          year: 'July 2022',
          description:
            'Coming Soon',
          color: 'bg-green-500',
        },
        {
          icon: 'rcb.png',
          name: 'Roblox Codes Bot',
          // link: '',
          year: 'Feb 2021',
          description:
            'A Discord bot that sends out codes from roblox games! Used in over 2,000 communities.',
          color: 'bg-indigo-500',
        },
      ],
      majorProjects: [
        {
          icon: 'lavan.png',
          name: 'Lavan',
          // link: '',
          year: 'Jan 2021',
          description:
            'A Discord bot that helps protect and manage their online communities! Used in over 25,000 communities.',
          color: 'bg-purple-500',
        },
      ],
    }
  },
}
</script>
