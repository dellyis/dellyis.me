<template>
  <div class="max-w-xl">
    <h1 class="mt-4 text-3xl font-bold flex md:items-end md:flex-row flex-col">
      <div>Dellyis</div>
      <div class="flex md:ml-3">
        <div class="text-lg">[he/they]</div>
        <div class="text-xl ml-3">
          <a
            href="https://discord.com/users/465853102914928640"
            target="_blank"
            class="hover:opacity-80 transition"
            ><font-awesome-icon :icon="['fab', 'discord']"
          /></a>
          <a
            href="https://t.me/dellyis"
            target="_blank"
            class="hover:opacity-80 transition"
            ><font-awesome-icon :icon="['fab', 'telegram']"
          /></a>
          <a
            href="https://github.com/Dellyis"
            target="_blank"
            class="hover:opacity-80 transition"
            ><font-awesome-icon :icon="['fab', 'github']"
          /></a>
        </div>
      </div>
    </h1>
    <p class="mt-4">
      Hey there! I'm a fullstack developer and moderator. I'm interested in
      development, moderation, and building thriving online communities. I work
      on random projects in my free time, a lot involving Discord!
    </p>

    <img
      :src="require(`@/assets/img/skills.svg`)"
      class="mt-4"
    />
  </div>
</template>
