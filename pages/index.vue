<template>
  <div>
    <div class="max-w-3xl px-8 mt-24 mx-auto">
      <div>
        <img
          src="~/assets/img/avatar.png"
          class="w-32 h-32 rounded-3xl inline avatar"
        />
      </div>

      <About />
      <Divider />
      <Projects />
      <Divider />
      <Contact />
      <Divider />

      <div class="copyright text-center mb-8">
        &copy; {{ new Date().getFullYear() }} Dellyis#6984 |
        <a
          href="https://github.com/Dellyis/dellyis.me"
          target="_blank"
          class="hover:underline"
          >Built with NuxtJS & TailwindCSS</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
