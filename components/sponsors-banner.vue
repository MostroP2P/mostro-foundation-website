<template>
  <div class="bg-primary-500 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col gap-y-8">
      <h2 class="text-center text-xl/8 font-medium text-white">
        Proudly supported by
      </h2>
      <div class="grid grid-cols-2 md:flex gap-10 lg:gap-20 items-center justify-center">
        <img
          class="fill-tertiary-100 col-span-1 h-8 lg:h-12 object-contain lg:col-span-1"
          src="~/assets/icons/hrf.svg"
          alt="Human rights foundation"
        >
        <div class="flex items-center">
          <img
            class="col-span-1 h-8 lg:h-12 object-contain lg:col-span-1"
            src="~/assets/icons/open-sats.svg"
            alt="Open sats"
          >
          <p class="text-white font-medium text-lg lg:text-2xl">
            Open Sats
          </p>
        </div>
        <div class="flex flex-col items-center col-span-2">
          <img
            class="motion-safe:animate-bounce col-span-1 h-8 object-contain"
            src="~/assets/icons/arrow-circle-down.svg"
            alt="Downward pointing arrow"
          >
          <p class="text-sm text-white font-medium">
            Your logo could be here!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
