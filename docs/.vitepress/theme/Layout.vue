<script setup lang="ts">
import { useData } from 'vitepress'

const { page, frontmatter } = useData()
</script>

<template>
  <h1>Custom Layout!</h1>

  <div v-if="page.isNotFound">404</div>
  <div class="overflow-hidden">
    <div class="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
      <div
        class="hidden lg:block fixed z-20 inset-0 top-[3.8125rem] left-[max(0px,calc(50%-45rem))] right-auto w-[19.5rem] pb-10 px-8 overflow-y-auto"
      >
        <nav id="nav" class="lg:text-sm lg:leading-6 relative">
          <div class="sticky top-0 -ml-0.5 pointer-events-none">
            <div class="h-10 bg-white dark:bg-slate-900"></div>
            <div class="h-8 bg-gradient-to-b from-white dark:from-slate-900"></div>
          </div>
          <ul>
            <li class="mt-12 lg:mt-8">
              <h5 class="mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200">
                Getting Started
              </h5>
              <ul class="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
                <li data-active="true">
                  <a
                    class="block border-l pl-4 -ml-px text-sky-500 border-current font-semibold dark:text-sky-400"
                    href="/docs/installation"
                    >Installation</a
                  >
                </li>
                <li>
                  <a
                    class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                    href="/docs/editor-setup"
                    >Editor Setup</a
                  >
                </li>
              </ul>
            </li>
            <li class="mt-12 lg:mt-8">
              <h5 class="mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200">
                Core Concepts
              </h5>
              <ul class="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
                <li>
                  <a
                    class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                    href="/docs/utility-first"
                    >Utility-First Fundamentals</a
                  >
                </li>
                <li>
                  <a
                    class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                    href="/docs/hover-focus-and-other-states"
                    >Hover, Focus, and Other States</a
                  >
                </li>
              </ul>
            </li>
            <li class="mt-12 lg:mt-8">
              <h5 class="mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200">
                Customization
              </h5>
              <ul class="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
                <li>
                  <a
                    class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                    href="/docs/configuration"
                    >Configuration</a
                  >
                </li>
                <li>
                  <a
                    class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                    href="/docs/content-configuration"
                    >Content</a
                  >
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
      <div class="lg:pl-[19.5rem]">
        <div class="max-w-3xl mx-auto pt-10 xl:max-w-none xl:ml-0 xl:mr-[15.5rem] xl:pr-16">
          <Content />
          <div
            class="fixed z-20 top-[3.8125rem] bottom-0 right-[max(0px,calc(50%-45rem))] w-[19.5rem] py-10 overflow-y-auto hidden xl:block"
          >
            <div class="px-8">sd</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <Page /> renders <Content /> -->
</template>
