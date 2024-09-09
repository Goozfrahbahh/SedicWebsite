import { toggleNavigation, setupRoutes } from "./script.js"
import "./src/output.css"

document.querySelector('#app').innerHTML = `
<div id="backgroundImage">
<img class="absolute h-full inset-0 object-cover w-full object-center overflow-hidden"
  src="https://i.postimg.cc/xCzdXpfK/portrait-engineer-job-site-work-hours-1.jpg?auto=compress%2Cformat&amp;crop=focalpoint&amp;fit=crop&amp;fp-x=0.5&amp;fp-y=0.5&amp;h=1004&amp;q=80&amp;w=1600"
  loading="" style="aspect-ratio: 1600 / 1004;">
</div>
<div class="hide-page" id="aboutImage">
  <img class="hidden absolute h-full inset-0 object-cover w-full object-center overflow-hidden"
   src="https://i.postimg.cc/C5LqCmYv/pexels-pixabay-271667.jpg?auto=compress%2Cformat&amp;crop=focalpoint&amp;fit=crop&amp;fp-x=0.5&amp;fp-y=0.5&amp;h=1004&amp;q=80&amp;w=1600"
  loading="" style="aspect-ratio: 1600 / 1004;">
</div>
<div class="hide-page" id="serviceImage">
  <img class="hidden absolute h-full inset-0 object-cover w-full object-center overflow-hidden" 
  src="https://i.postimg.cc/C5LqCmYv/pexels-pixabay-271667.jpg?auto=compress%2Cformat&amp;crop=focalpoint&amp;fit=crop&amp;fp-x=0.5&amp;fp-y=0.5&amp;h=1004&amp;q=80&amp;w=1600"
  loading="" style="aspect-ratio: 1600 / 1004;">
</div>
<div class="hide-page" id="blogImage">
   <img class="hidden absolute h-full inset-0 object-cover w-full object-center overflow-hidden" 
   src="https://i.postimg.cc/C5LqCmYv/pexels-pixabay-271667.jpg?auto=compress%2Cformat&amp;crop=focalpoint&amp;fit=crop&amp;fp-x=0.5&amp;fp-y=0.5&amp;h=1004&amp;q=80&amp;w=1600"
  loading="" style="aspect-ratio: 1600 / 1004;">
</div>
<div class="hide-page" id="locationsImage">
   <img class="hidden absolute h-full inset-0 object-cover w-full object-center overflow-hidden" 
   src="https://i.postimg.cc/C5LqCmYv/pexels-pixabay-271667.jpg?auto=compress%2Cformat&amp;crop=focalpoint&amp;fit=crop&amp;fp-x=0.5&amp;fp-y=0.5&amp;h=1004&amp;q=80&amp;w=1600"
  loading="" style="aspect-ratio: 1600 / 1004;">
</div>
<div class="hide-page" id="contactImage">
 <img class="absolute h-full inset-0 object-cover w-full object-center overflow-hidden"
  src="https://i.postimg.cc/0N7Fjz8S/pexels-pixabay-271667.jpg?auto=compress%2Cformat&amp;crop=focalpoint&amp;fit=crop&amp;fp-x=0.5&amp;fp-y=0.5&amp;h=1004&amp;q=80&amp;w=1600"
  loading="" style="aspect-ratio: 1600 / 1004;background-image:linear-gradient(rgba(20, 30, 20, 1), rgba(20, 30, 20, 1));">
</div>
<nav id="navigationHover"
  class="lg:min-h-[90px] min-h-[90px] relative flex flex-wrap z-50 transition-all items-center bg-white lg:border-b dark:bg-zinc-800 lg:hover:border-black group lg:text-white lg:bg-opacity-10 lg:dark:bg-opacity-10 lg:dark:bg-gray-200 drop-shadow-md px-9 lg:bg-gray-200 lg:hover:bg-white lg:hover:text-black lg:dark:hover:bg-zinc-800"
  <a href="#" class="inline-flex items-center p-2 mr-4">
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 mr-2 text-white fill-current">
    <g transform="scale(0.1, -0.1)" fill="#000000">
      <path d="M2803 4138 c-11 -13 -28 -46 -37 -74 l-17 -52 -67 24 c-64 23 -132 31 -145 18 -8 -8 134 -142 182 -171 l36 -23 -402 0 -403 0 0 -109 0 -109 193 -1 192 0 3 -79 3 -79 52 9 c29 5 80 6 114 3 l62 -6 3 77 3 77 193 -2 192 -2 0 60 c0 34 2 61 5 61 3 0 32 -13 63 -30 81 -42 130 -47 184 -21 57 27 91 78 92 137 1 63 -25 84 -104 84 -37 0 -60 -5 -63 -12 -3 -7 -6 23 -6 68 -1 101 -11 115 -81 122 -66 6 -66 -12 0 -47 37 -19 40 -22 15 -16 -16 3 -52 24 -80 45 -98 74 -146 87 -182 48z m75 -70 c-6 -18 -28 -21 -28 -4 0 9 7 16 16 16 9 0 14 -5 12 -12z m54 -13 c0 -5 -5 -11 -11 -13 -6 -2 -11 4 -11 13 0 9 5 15 11 13 6 -2 11 -8 11 -13z m-202 -50 c30 -12 84 -41 120 -64 66 -43 139 -69 200 -71 59 -3 68 -1 73 18 3 9 5 -2 6 -25 1 -41 0 -42 -35 -49 -19 -3 -53 -4 -76 -1 l-40 5 28 -31 c22 -24 19 -23 -11 5 -21 21 -36 40 -33 44 4 3 27 2 51 -4 53 -11 107 -5 107 13 0 9 -13 11 -42 8 -24 -2 -66 2 -95 10 -29 8 -50 10 -47 5 14 -22 -23 -4 -61 30 -54 50 -119 88 -203 118 -37 13 -51 21 -32 18 19 -3 60 -16 90 -29z"/>
      <path d="M2348 3367 c-82 -23 -147 -87 -183 -177 -26 -67 -32 -212 -10 -285 32 -112 83 -173 304 -367 49 -43 98 -97 119 -131 32 -52 36 -67 40 -140 3 -71 0 -88 -20 -126 -34 -66 -67 -86 -141 -86 -119 1 -165 57 -175 211 l-5 84 -73 0 -74 0 0 -62 c0 -74 22 -183 45 -228 53 -102 141 -150 278 -150 100 0 141 11 204 53 37 25 56 48 83 101 35 68 35 71 35 195 0 119 -2 129 -29 182 -37 75 -95 144 -181 215 -143 121 -205 186 -237 251 -28 58 -30 69 -26 140 8 130 53 183 156 183 110 0 158 -52 169 -181 l6 -69 73 0 74 0 0 50 c0 153 -68 279 -178 326 -50 22 -194 28 -254 11z"/>
      <path d="M2432 3108 c-36 -46 -18 -144 38 -209 l39 -44 1 113 c0 62 -5 122 -10 133 -12 21 -52 26 -68 7z"/>
      <path d="M2400 2327 c0 -138 7 -157 55 -157 32 0 35 3 45 41 18 66 0 121 -64 194 l-35 40 -1 -118z"/>
    </g>
  </svg>
  <span class="text-lg font-bold tracking-wide text-zinc-600 lg:text-white uppercase lg:group-hover:text-zinc-600 lg:dark:group-hover:text-white dark:text-white">Sedic Texas</span>
  </a>
  <button class="inline-flex p-3 ml-auto text-zinc-600 lg:text-white uppercase lg:group-hover:text-zinc-600 lg:dark:group-hover:text-white dark:text-white rounded outline-none transition-all lg:hidden"
    id="toggleButton">
    <i class="material-icons">menu</i>
  </button>
  </button>
  <button class="hide-page p-3 ml-auto text-zinc-600 lg:text-white uppercase lg:group-hover:text-zinc-600 lg:dark:group-hover:text-white dark:text-white rounded outline-none transition-all lg:hidden"
    id="closeButton">
    <i class="material-icons">close</i>
  </button>
  <div
    class="hidden w-full text-sm font-sans tracking-widest uppercase transition-all lg:inline-flex lg:flex-grow lg:w-auto">
    <div
      class="flex flex-col items-start w-full lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center lg:h-auto">
      <button id="home"
        class="inline-flex justify-center items-center w-full px-3 py-2 text-white rounded group-hover:text-zinc-600 lg:text-opacity-0 lg:hover:text-opacity-100 lg:dark:text-opacity-0 lg:dark:hover:text-opacity-100 lg:dark:group-hover:text-white lg:inline-flex lg:w-auto hover:underline">
        <span>Home</span>
      </button>
      <button id="about"
        class="inline-flex items-center justify-center w-full px-3 py-2 text-white rounded group-hover:text-zinc-600 lg:text-opacity-0 lg:hover:text-opacity-100 lg:dark:text-opacity-0 lg:dark:hover:text-opacity-100 lg:dark:group-hover:text-white hover:underline lg:inline-flex lg:w-auto">
        <span>About</span>
      </button>
      <button id="service"
        class="inline-flex items-center justify-center w-full px-3 py-2 text-white rounded group-hover:text-zinc-600 lg:text-opacity-0 lg:hover:text-opacity-100 lg:dark:text-opacity-0 lg:dark:hover:text-opacity-100 lg:dark:group-hover:text-white hover:underline lg:inline-flex lg:w-auto">
        <span>Services</span>
      </button>
      <button id="blog"
        class="inline-flex items-center justify-center w-full px-3 py-2 text-white rounded group-hover:text-zinc-600 lg:text-opacity-0 lg:hover:text-opacity-100 lg:dark:text-opacity-0 lg:dark:hover:text-opacity-100 lg:dark:group-hover:text-white hover:underline lg:inline-flex lg:w-auto">
        <span>Blog</span>
      </button>
      <button id="locations"
        class="inline-flex items-center justify-center w-full px-3 py-2 text-white rounded group-hover:text-zinc-600 lg:text-opacity-0 lg:hover:text-opacity-100 lg:dark:text-opacity-0 lg:dark:hover:text-opacity-100 lg:dark:group-hover:text-white hover:underline lg:inline-flex lg:w-auto">
        <span>Locations</span>
      </button>
      <button id="contact"
        class="inline-flex items-center justify-center w-full px-3 py-2 text-white rounded group-hover:text-zinc-600 lg:text-opacity-0 lg:hover:text-opacity-100 lg:dark:text-opacity-0 lg:dark:hover:text-opacity-100 lg:dark:group-hover:text-white hover:underline lg:inline-flex lg:w-auto">
        <span>Contact Us</span>
      </button>
    </div>
  </div>
  <div
    class="hide-page absolute top-[90px] right-0 p-4 rounded-b min-w-[100vw] shadow-md font-sans tracking-widest uppercase drop-shadow-lg transition-all lg:hidden dark:bg-zinc-800 bg-white "
    id="navigation">
    <div
      class="flex flex-col items-start w-full lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center lg:h-auto">
      <button id="home2" class="inline-flex justify-start w-full px-5 py-6 dark:text-white text-zinc-600 rounded hover:underline ">
        <span>Home</span>
      </button>
      <button id="about2" class="inline-flex justify-start w-full px-5 py-6 dark:text-white text-zinc-600 rounded hover:underline ">
        <span>About</span>
      </button>
      <button id="services2"class="inline-flex justify-start w-full px-5 py-6 dark:text-white text-zinc-600 rounded hover:underline ">
        <span>Services & Divisions</span>
      </button>
      <button id="blog2" class="inline-flex justify-start w-full px-5 py-6 dark:text-white text-zinc-600 rounded hover:underline">
        <span>Blog</span>
      </button>
      <button id="locations2" class="inline-flex justify-start w-full px-5 py-6 dark:text-white text-zinc-600 rounded hover:underline">
        <span>Locations</span>
      </button>
      <button id="contact2" class="inline-flex justify-start w-full px-5 py-6 dark:text-white text-zinc-600 rounded hover:underline">
        <span>Contact Us</span>
      </button>
    </div>
  </div>
</nav>
<main class="grow" id="homepage">
  <div class="min-h-screen mt-[81vh] pt-16">
    <div class="py-12 sm:py-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mb-8 flex justify-center">
          <p
            class="relative rounded-full px-4 py-1.5 text-sm leading-6 text-gray-600 ring-1 ring-inset ring-gray-900/10 hover:ring-gray-900/20">
            <span class="hidden md:inline">Already know what you need..</span>
            <a href="#" target="_blank" class="font-semibold text-lime-600">
              <span class="absolute inset-0"></span> Contact an Engineer
              <span>→</span>
            </a>
          </p>
        </div>
        <div class="mx-auto max-w-2xl text-center">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            SecureCloud Backup Solution
          </h1>
          <p class="mt-6 text-lg leading-8 text-gray-600">
            Introducing our cutting-edge SecureCloud Backup Solution, the ultimate
            safeguard for your critical data. In today's rapidly evolving IT
            landscape, data security and disaster recovery have never been more
            crucial.
          </p>
        </div>
      </div>
      <div class="mt-10 flow-root sm:mt-20">
        <div class="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
          <!-- Photo by '@tvick' on Unsplash -->
          <img src="https://i.postimg.cc/v8Lps5DD/portrait-male-engineer-working-field-engineers-day-celebration.jpg"
            width="2000" height="1200" class="rounded-md shadow-2xl ring-1 ring-gray-900/10" />
        </div>
      </div>
    </div>
  </div>
  </div>
  <div class="py-16">
        <div class="mx-auto px-6 max-w-6xl text-gray-500">
            <div class="text-center">
                <h2 class="text-3xl text-gray-950 dark:text-white font-semibold">Our Goals and Objectives</h2>
                <p class="mt-6 text-gray-700 dark:text-gray-300">Harum quae dolore inventore repudiandae? orrupti aut temporibus ariatur.</p>
            </div>
            <div class="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <div class="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
                    <div aria-hidden="true" class="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-blue-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"></div>
                    <div class="relative">
                        <div class="border border-blue-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-lg dark:bg-gray-900 dark:border-white/15 before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-blue-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                            <svg class="text-[#000014] dark:text-white" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128">
                                <defs>
                                    <linearGradient id="deviconAstro0" x1="882.997" x2="638.955" y1="27.113" y2="866.902" gradientTransform="scale(.1)" gradientUnits="userSpaceOnUse">
                                        <stop offset="0" stop-color="currentColor"></stop>
                                        <stop offset="1" stop-color="currentColor"></stop>
                                    </linearGradient>
                                    <linearGradient id="deviconAstro1" x1="1001.68" x2="790.326" y1="652.45" y2="1094.91" gradientTransform="scale(.1)" gradientUnits="userSpaceOnUse">
                                        <stop offset="0" stop-color="#ff1639"></stop>
                                        <stop offset="1" stop-color="#ff1639" stop-opacity="0"></stop>
                                    </linearGradient>
                                </defs>
                                <path fill="url(#deviconAstro0)" d="M81.504 9.465c.973 1.207 1.469 2.836 2.457 6.09l21.656 71.136a90.079 90.079 0 0 0-25.89-8.765L65.629 30.28a1.833 1.833 0 0 0-3.52.004L48.18 77.902a90.104 90.104 0 0 0-26.003 8.778l21.758-71.14c.996-3.25 1.492-4.876 2.464-6.083a8.023 8.023 0 0 1 3.243-2.398c1.433-.575 3.136-.575 6.535-.575H71.72c3.402 0 5.105 0 6.543.579a7.988 7.988 0 0 1 3.242 2.402Zm0 0"></path>
                                <path fill="#ff5d01" d="M84.094 90.074c-3.57 3.055-10.696 5.137-18.903 5.137c-10.07 0-18.515-3.137-20.754-7.356c-.8 2.418-.98 5.184-.98 6.954c0 0-.527 8.675 5.508 14.71a5.671 5.671 0 0 1 5.672-5.671c5.37 0 5.367 4.683 5.363 8.488v.336c0 5.773 3.527 10.719 8.543 12.805a11.62 11.62 0 0 1-1.172-5.098c0-5.508 3.23-7.555 6.988-9.938c2.989-1.894 6.309-4 8.594-8.222a15.513 15.513 0 0 0 1.875-7.41a15.55 15.55 0 0 0-.734-4.735m0 0"></path>
                                <path fill="url(#deviconAstro1)" d="M84.094 90.074c-3.57 3.055-10.696 5.137-18.903 5.137c-10.07 0-18.515-3.137-20.754-7.356c-.8 2.418-.98 5.184-.98 6.954c0 0-.527 8.675 5.508 14.71a5.671 5.671 0 0 1 5.672-5.671c5.37 0 5.367 4.683 5.363 8.488v.336c0 5.773 3.527 10.719 8.543 12.805a11.62 11.62 0 0 1-1.172-5.098c0-5.508 3.23-7.555 6.988-9.938c2.989-1.894 6.309-4 8.594-8.222a15.513 15.513 0 0 0 1.875-7.41a15.55 15.55 0 0 0-.734-4.735m0 0"></path>
                            </svg>
                        </div>

                        <div class="mt-6 pb-6 rounded-b-[--card-border-radius]">
                            <p class="text-gray-700 dark:text-gray-300">Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente.</p>
                        </div>
                    </div>
                </div>
                <div href="#" class="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
                    <div aria-hidden="true" class="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-green-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"></div>
                    <div class="relative">
                        <div class="border border-green-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-lg dark:bg-gray-900 dark:border-white/15 before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-green-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                            <svg xmlns="http://www.w3.org/2000/svg" width="0.98em" height="1em" viewBox="0 0 256 263"><defs><linearGradient id="logosSupabaseIcon0" x1="20.862%" x2="63.426%" y1="20.687%" y2="44.071%"><stop offset="0%" stop-color="#249361"></stop><stop offset="100%" stop-color="#3ecf8e"></stop></linearGradient><linearGradient id="logosSupabaseIcon1" x1="1.991%" x2="21.403%" y1="-13.158%" y2="34.708%"><stop offset="0%"></stop><stop offset="100%" stop-opacity="0"></stop></linearGradient></defs><path fill="url(#logosSupabaseIcon0)" d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292z"></path><path fill="url(#logosSupabaseIcon1)" fill-opacity="0.2" d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292z"></path><path fill="#3ecf8e" d="M106.399 4.37c6.717-8.461 20.338-3.826 20.5 6.976l1.037 157.984H23.037c-19.241 0-29.973-22.223-18.008-37.292z"></path></svg>
                        </div>

                        <div class="mt-6 pb-6 rounded-b-[--card-border-radius]">
                            <p class="text-gray-700 dark:text-gray-300">Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente.</p>
                        </div>

                        <div class="flex gap-3 -mb-8 py-4 border-t border-gray-200 dark:border-gray-800">
                            <a href="#" download="/" class="group rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center">
                                <span>Download</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17 13l-5 5m0 0l-5-5m5 5V6"></path></svg>
                            </a>
                            <a href="#i" class="group flex items-center rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 size-8 justify-center">
                                <span class="sr-only">Source Code</span>
                                <svg class="size-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
                    <div aria-hidden="true" class="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-red-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"></div>
                    <div class="relative">
                        <div class="border border-red-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-lg dark:bg-gray-900 dark:border-white/15 before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-red-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                            <svg xmlns="http://www.w3.org/2000/svg" width="0.95em" height="1em" viewBox="0 0 256 271"><defs><linearGradient id="logosAngularIcon0" x1="25.071%" x2="96.132%" y1="90.929%" y2="55.184%"><stop offset="0%" stop-color="#e40035"></stop><stop offset="24%" stop-color="#f60a48"></stop><stop offset="35.2%" stop-color="#f20755"></stop><stop offset="49.4%" stop-color="#dc087d"></stop><stop offset="74.5%" stop-color="#9717e7"></stop><stop offset="100%" stop-color="#6c00f5"></stop></linearGradient><linearGradient id="logosAngularIcon1" x1="21.863%" x2="68.367%" y1="12.058%" y2="68.21%"><stop offset="0%" stop-color="#ff31d9"></stop><stop offset="100%" stop-color="#ff5be1" stop-opacity="0"></stop></linearGradient></defs><path fill="url(#logosAngularIcon0)" d="m256 45.179l-9.244 145.158L158.373 0zm-61.217 187.697l-66.782 38.105l-66.784-38.105L74.8 199.958h106.4zM128.001 72.249l34.994 85.076h-69.99zM9.149 190.337L0 45.179L97.627 0z"></path><path fill="url(#logosAngularIcon1)" d="m256 45.179l-9.244 145.158L158.373 0zm-61.217 187.697l-66.782 38.105l-66.784-38.105L74.8 199.958h106.4zM128.001 72.249l34.994 85.076h-69.99zM9.149 190.337L0 45.179L97.627 0z"></path></svg>
                        </div>

                        <div class="mt-6 pb-6 rounded-b-[--card-border-radius]">
                            <p class="text-gray-700 dark:text-gray-300">Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente.</p>
                        </div>
                        <div class="flex gap-3 -mb-8 py-4 border-t border-gray-200 dark:border-gray-800">
                            <a href="#" download="/" class="group rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center">
                                <span>Download</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17 13l-5 5m0 0l-5-5m5 5V6"></path></svg>
                            </a>
                            <a href="#" class="group flex items-center rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 size-8 justify-center">
                                <span class="sr-only">Source Code</span>
                                <svg class="size-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
                    <div aria-hidden="true" class="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-gray-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"></div>
                    <div class="relative">
                        <div class="border border-gray-500/10 flex relative *:relative *:size-6 *:m-auto  text-gray-950 dark:text-white size-12 rounded-lg dark:bg-gray-900 dark:border-white/15 before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-gray-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15"><path fill="currentColor" d="m4.5 4.5l.405-.293A.5.5 0 0 0 4 4.5zm3 9.5A6.5 6.5 0 0 1 1 7.5H0A7.5 7.5 0 0 0 7.5 15zM14 7.5A6.5 6.5 0 0 1 7.5 14v1A7.5 7.5 0 0 0 15 7.5zM7.5 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0zm0-1A7.5 7.5 0 0 0 0 7.5h1A6.5 6.5 0 0 1 7.5 1zM5 12V4.5H4V12zm-.905-7.207l6.5 9l.81-.586l-6.5-9zM10 4v6h1V4z"></path></svg>
                        </div>

                        <div class="mt-6 pb-6 rounded-b-[--card-border-radius]">
                            <p class="text-gray-700 dark:text-gray-300">Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente.</p>
                        </div>
                    </div>
                </div>
                <div class="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
                    <div aria-hidden="true" class="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-yellow-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"></div>
                    <div class="relative">
                        <div class="border border-yellow-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-lg dark:bg-gray-900 dark:border-white/15 before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-yellow-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                            <svg xmlns="http://www.w3.org/2000/svg" width="0.73em" height="1em" viewBox="0 0 256 351"><defs><filter id="logosFirebase0" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceAlpha" result="shadowBlurInner1" stdDeviation="17.5"></feGaussianBlur><feOffset in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset><feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2="-1" k3="1" operator="arithmetic" result="shadowInnerInner1"></feComposite><feColorMatrix in="shadowInnerInner1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"></feColorMatrix></filter><filter id="logosFirebase1" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceAlpha" result="shadowBlurInner1" stdDeviation="3.5"></feGaussianBlur><feOffset dx="1" dy="-9" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset><feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2="-1" k3="1" operator="arithmetic" result="shadowInnerInner1"></feComposite><feColorMatrix in="shadowInnerInner1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"></feColorMatrix></filter><path id="logosFirebase2" d="m1.253 280.732l1.605-3.131l99.353-188.518l-44.15-83.475C54.392-1.283 45.074.474 43.87 8.188z"></path><path id="logosFirebase3" d="m134.417 148.974l32.039-32.812l-32.039-61.007c-3.042-5.791-10.433-6.398-13.443-.59l-17.705 34.109l-.53 1.744z"></path></defs><path fill="#ffc24a" d="m0 282.998l2.123-2.972L102.527 89.512l.212-2.017L58.48 4.358C54.77-2.606 44.33-.845 43.114 6.951z"></path><use fill="#ffa712" fill-rule="evenodd" href="#logosFirebase2"></use><use filter="url(#logosFirebase0)" href="#logosFirebase2"></use><path fill="#f4bd62" d="m135.005 150.38l32.955-33.75l-32.965-62.93c-3.129-5.957-11.866-5.975-14.962 0L102.42 87.287v2.86z"></path><use fill="#ffa50e" fill-rule="evenodd" href="#logosFirebase3"></use><use filter="url(#logosFirebase1)" href="#logosFirebase3"></use><path fill="#f6820c" d="m0 282.998l.962-.968l3.496-1.42l128.477-128l1.628-4.431l-32.05-61.074z"></path><path fill="#fde068" d="m139.121 347.551l116.275-64.847l-33.204-204.495c-1.039-6.398-8.888-8.927-13.468-4.34L0 282.998l115.608 64.548a24.126 24.126 0 0 0 23.513.005"></path><path fill="#fcca3f" d="M254.354 282.16L221.402 79.218c-1.03-6.35-7.558-8.977-12.103-4.424L1.29 282.6l114.339 63.908a23.943 23.943 0 0 0 23.334.006z"></path><path fill="#eeab37" d="M139.12 345.64a24.126 24.126 0 0 1-23.512-.005L.931 282.015l-.93.983l115.607 64.548a24.126 24.126 0 0 0 23.513.005l116.275-64.847l-.285-1.752z"></path></svg>
                        </div>

                        <div class="mt-6 pb-6 rounded-b-[--card-border-radius]">
                            <p class="text-gray-700 dark:text-gray-300">Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente.</p>
                        </div>
                    </div>
                </div>
                <div class="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
                    <div aria-hidden="true" class="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-sky-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"></div>
                    <div class="relative">
                        <div class="border border-sky-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-lg dark:bg-gray-900 dark:border-white/15 before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-sky-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128"><path fill="#0080ff" d="M64.142 102.96H39.24V78.522h24.903ZM39.24 122.131H20.373v-19.173H39.24Zm-18.866-19.173H4.53V87.167h15.843Zm43.394 24.814v-24.814c26.41 0 46.784-25.94 36.597-53.388c-3.775-10.15-11.694-18.42-22.26-22.181c-27.167-9.772-53.2 10.527-53.2 36.468H0c0-41.354 40.37-74.064 84.52-60.53c19.242 6.017 34.334 21.055 40.37 40.23c13.581 43.985-19.245 84.214-61.123 84.214Zm0 0"></path></svg>
                        </div>

                        <div class="mt-6 pb-6 rounded-b-[--card-border-radius]">
                            <p class="text-gray-700 dark:text-gray-300">Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
<div id="aboutpage" class="hide-page min-h-screen bg-black">
  <h1 class="text-center text-3xl font-bold tracking-wide text-gray-900">
    Our Team
  </h1>
</div>
<div id="servicepage" class="hide-page min-h-screen bg-black">
  <h1 class="text-center text-3xl font-bold tracking-wide text-gray-900">
    Services & Divisions
  </h1>
</div>
<div id="blogpage" class="hide-page min-h-screen bg-black">
  <h1 class="text-center text-3xl font-bold tracking-wide text-gray-900">
   Blog
  </h1>
</div>
<div id="locationspage" class="hide-page min-h-screen bg-black">
  <h1 class="text-center text-3xl font-bold tracking-wide text-gray-900">
    Locations
  </h1>
</div>
<div id="contactpage" class="hide-page min-h-screen relative px-4 py-10 mt-[-90px] bg-white shadow-lg sm:rounded-3xl bg-clip-padding bg-opacity-5 border border-gray-200" style="backdrop-filter: blur(5px);">
  <div class="flex items-center justify-start mt-16">
    <div class="mx-auto w-full max-w-lg">
      <h1 class="text-4xl font-medium text-black z-10">Contact us</h1>
      <p class="mt-3">Email us at help@domain.com or message us here:</p>

      <form action="https://api.web3forms.com/submit" class="mt-10">
        <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
        <div class="grid gap-6 sm:grid-cols-2">
          <div class="relative z-0">
            <input type="text" name="name"
              class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
              placeholder=" " />
            <label
              class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your
              name</label>
          </div>
          <div class="relative z-0">
            <input type="text" name="email"
              class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
              placeholder=" " />
            <label
              class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your
              email</label>
          </div>
          <div class="relative z-0 col-span-2">
            <textarea name="message" rows="5"
              class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
              placeholder=" "></textarea>
            <label
              class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your
              message</label>
          </div>
        </div>
        <button type="submit" class="mt-5 rounded-md bg-black px-10 py-2 text-white">Send Message</button>
      </form>
    </div>
  </div>
</div>
  `


// Routing Logic
const homeRoute = document.querySelector("#home")
const aboutRoute = document.querySelector("#about")
const serviceRoute = document.querySelector("#service")
const blogRoute = document.querySelector("#blog")
const locationsRoute = document.querySelector("#locations")
const contactRoute = document.querySelector("#contact")
const backgroundImg = document.querySelector("#backgroundImage")
const aboutImg = document.querySelector("#aboutImage")
const serviceImg = document.querySelector("#serviceImage")
const blogImg = document.querySelector("#blogImage")
const locationsImg = document.querySelector("#locationsImage")
const contactImg = document.querySelector("#contactImage")

// Small Navigation Menu
const homeRoute2 = document.querySelector("#home2")
const aboutRoute2 = document.querySelector("#about2")
const serviceRoute2 = document.querySelector("#services2")
const blogRoute2 = document.querySelector("#blog2")
const locationsRoute2 = document.querySelector("#locations2")
const contactRoute2 = document.querySelector("#contact2")

// Navigation Route Pages
const homePageRoute = document.querySelector("#homepage")
const aboutPageRoute = document.querySelector("#aboutpage")
const servicePageRoute = document.querySelector("#servicepage")
const blogPageRoute = document.querySelector("#blogpage")
const locationsPageRoute = document.querySelector("#locationspage")
const contactPageRoute = document.querySelector("#contactpage")

// Routes Config
const routesConfig = [
  {
    triggerElement: homeRoute,
    pagesToHide: [aboutPageRoute, servicePageRoute, blogPageRoute, locationsPageRoute, contactPageRoute],
    pageToShow: homePageRoute,
    imagesToHide: [aboutImg, serviceImg, blogImg, locationsImg, contactImg],
    imageToShow: backgroundImg
  },
  {
    triggerElement: aboutRoute,
    pagesToHide: [homePageRoute, servicePageRoute, blogPageRoute, locationsPageRoute, contactPageRoute],
    pageToShow: aboutPageRoute,
    imagesToHide: [backgroundImg, serviceImg, blogImg, locationsImg, contactImg],
    imageToShow: aboutImg
  },
  {
    triggerElement: serviceRoute,
    pagesToHide: [homePageRoute, aboutPageRoute, blogPageRoute, locationsPageRoute, contactPageRoute],
    pageToShow: servicePageRoute,
    imagesToHide: [backgroundImg, aboutImg, blogImg, locationsImg, contactImg],
    imageToShow: serviceImg
  },
  {
    triggerElement: blogRoute,
    pagesToHide: [homePageRoute, aboutPageRoute, servicePageRoute, locationsPageRoute, contactPageRoute],
    pageToShow: blogPageRoute,
    imagesToHide: [backgroundImg, aboutImg, serviceImg, locationsImg, contactImg],
    imageToShow: blogImg
  },
  {
    triggerElement: locationsRoute,
    pagesToHide: [homePageRoute, aboutPageRoute, servicePageRoute, blogPageRoute, contactPageRoute],
    pageToShow: locationsPageRoute,
    imagesToHide: [backgroundImg, aboutImg, serviceImg, blogImg, contactImg],
    imageToShow: locationsImg
  },
  {
    triggerElement: contactRoute,
    pagesToHide: [homePageRoute, aboutPageRoute, servicePageRoute, blogPageRoute, locationsPageRoute],
    pageToShow: contactPageRoute,
    imagesToHide: [backgroundImg, aboutImg, serviceImg, blogImg, locationsImg],
    imageToShow: contactImg
  },
  {
    triggerElement: homeRoute2,
    pagesToHide: [aboutPageRoute, servicePageRoute, blogPageRoute, locationsPageRoute, contactPageRoute],
    pageToShow: homePageRoute,
    imagesToHide: [aboutImg, serviceImg, blogImg, locationsImg, contactImg],
    imageToShow: backgroundImg
  },
  {
    triggerElement: aboutRoute2,
    pagesToHide: [homePageRoute, servicePageRoute, blogPageRoute, locationsPageRoute, contactPageRoute],
    pageToShow: aboutPageRoute,
    imagesToHide: [backgroundImg, serviceImg, blogImg, locationsImg, contactImg],
    imageToShow: aboutImg
  },
  {
    triggerElement: serviceRoute2,
    pagesToHide: [homePageRoute, aboutPageRoute, blogPageRoute, locationsPageRoute, contactPageRoute],
    pageToShow: servicePageRoute,
    imagesToHide: [backgroundImg, aboutImg, blogImg, locationsImg, contactImg],
    imageToShow: serviceImg
  },
  {
    triggerElement: blogRoute2,
    pagesToHide: [homePageRoute, aboutPageRoute, servicePageRoute, locationsPageRoute, contactPageRoute],
    pageToShow: blogPageRoute,
    imagesToHide: [backgroundImg, aboutImg, serviceImg, locationsImg, contactImg],
    imageToShow: blogImg
  },
  {
    triggerElement: locationsRoute2,
    pagesToHide: [homePageRoute, aboutPageRoute, servicePageRoute, blogPageRoute, contactPageRoute],
    pageToShow: locationsPageRoute,
    imagesToHide: [backgroundImg, aboutImg, serviceImg, blogImg, contactImg],
    imageToShow: locationsImg
  },
  {
    triggerElement: contactRoute2,
    pagesToHide: [homePageRoute, aboutPageRoute, servicePageRoute, blogPageRoute, locationsPageRoute],
    pageToShow: contactPageRoute,
    imagesToHide: [backgroundImg, aboutImg, serviceImg, blogImg, locationsImg],
    imageToShow: contactImg
  }
]

const menuIcon = document.querySelector("#toggleButton")
const closeIcon = document.querySelector("#closeButton")
const navigationMenu = document.querySelector("#navigation")

toggleNavigation(
  menuIcon,
  navigationMenu,
  closeIcon
)

setupRoutes(routesConfig, menuIcon, navigationMenu, closeIcon)