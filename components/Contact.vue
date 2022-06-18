<template>
  <div>
    <h1 class="mt-4 text-2xl font-bold">Contact</h1>
    <p class="mt-4">
      Feel free to reach out to me! I check Discord most often, but any contact
      method below works.
    </p>
    <div class="flex flex-col md:flex-row justify-center">
      <a
        href="https://discord.com/users/465853102914928640"
        target="_blank"
        class="bg-indigo-500 bg-opacity-30 flex-1 md:mr-4 px-8 mt-6 py-4 rounded-md hover:scale-105 transform ease-in-out duration-300"
      >
        <font-awesome-icon :icon="['fab', 'discord']" /> @Dellyis#6984
      </a>
      <a
        href="https://t.me/dellyis"
        target="_blank"
        class="bg-blue-500 bg-opacity-30 flex-1 md:ml-4 mt-6 px-8 py-4 rounded-md hover:scale-105 transform ease-in-out duration-300"
      >
        <font-awesome-icon :icon="['fab', 'telegram']" /> @dellyis
      </a>
    </div>
    <div class="flex flex-col md:flex-row justify-center">
      <a
        href="mailto:hi@dellyis.me"
        target="_blank"
        class="bg-yellow-500 bg-opacity-30 flex-1 md:mr-4 px-8 mt-6 py-4 rounded-md hover:scale-105 transform ease-in-out duration-300"
      >
        <font-awesome-icon :icon="['fa', 'envelope']" /> hi@dellyis.me
      </a>
      <a
        href="https://github.com/Dellyis"
        target="_blank"
        class="bg-purple-500 bg-opacity-30 flex-1 md:ml-4 mt-6 px-8 py-4 rounded-md hover:scale-105 transform ease-in-out duration-300"
      >
        <font-awesome-icon :icon="['fab', 'github']" /> Dellyis
      </a>
    </div>
  </div>
</template>
