<template>
  <div class="bg-light w-screen min-h-screen">
    <div
      id="navbar"
      class="
        w-full
        flex
        items-center
        gap-4
        font-nunito
        sticky
        px-4
        xl:px-36
        py-2
        xl:py-0
      "
    >
      <img src="../assets/logo.svg" class="xl:w-24 xl:h-24 w-12 h-12" />
      <div class="text-md xl:text-3xl font-bold">Diary of Character</div>
      <a
        href="#"
        target="_blank"
        class="
          text-kasih-350 text-md
          xl:text-xl
          border-2
          ml-auto
          border-kasih-350
          rounded-xl
          px-2
          py-1
          xl:px-4 xl:py-2
          hover:bg-kasih-350
          cursor-pointer
          hover:text-light
        "
        >Download Sekarang</a
      >
    </div>
    <div class="my-24 px-4 xl:px-36">
      <h1 class="text-5xl mb-4">Privacy Policy for Diary of Character</h1>

      <p>
        At Diary of Character, accessible from https://www.karakterbuahroh.com,
        one of our main priorities is the privacy of our visitors. This Privacy
        Policy document contains types of information that is collected and
        recorded by Diary of Character and how we use it.
      </p>

      <p>
        If you have additional questions or require more information about our
        Privacy Policy, do not hesitate to contact us.
      </p>

      <h2 class="text-3xl mb-4 mt-6">Log Files</h2>

      <p>
        Diary of Character follows a standard procedure of using log files.
        These files log visitors when they visit websites. All hosting companies
        do this and a part of hosting services' analytics. The information
        collected by log files include internet protocol (IP) addresses, browser
        type, Internet Service Provider (ISP), date and time stamp,
        referring/exit pages, and possibly the number of clicks. These are not
        linked to any information that is personally identifiable. The purpose
        of the information is for analyzing trends, administering the site,
        tracking users' movement on the website, and gathering demographic
        information. Our Privacy Policy was created with the help of the
        <a href="https://www.privacypolicygenerator.org"
          >Privacy Policy Generator</a
        >.
      </p>

      <h2 class="text-3xl mb-4 mt-6">Privacy Policies</h2>

      <P
        >You may consult this list to find the Privacy Policy for each of the
        advertising partners of Diary of Character.</P
      >

      <p>
        Third-party ad servers or ad networks uses technologies like cookies,
        JavaScript, or Web Beacons that are used in their respective
        advertisements and links that appear on Diary of Character, which are
        sent directly to users' browser. They automatically receive your IP
        address when this occurs. These technologies are used to measure the
        effectiveness of their advertising campaigns and/or to personalize the
        advertising content that you see on websites that you visit.
      </p>

      <p>
        Note that Diary of Character has no access to or control over these
        cookies that are used by third-party advertisers.
      </p>

      <h2 class="text-3xl mb-4 mt-6">Third Party Privacy Policies</h2>

      <p>
        Diary of Character's Privacy Policy does not apply to other advertisers
        or websites. Thus, we are advising you to consult the respective Privacy
        Policies of these third-party ad servers for more detailed information.
        It may include their practices and instructions about how to opt-out of
        certain options.
      </p>

      <p>
        You can choose to disable cookies through your individual browser
        options. To know more detailed information about cookie management with
        specific web browsers, it can be found at the browsers' respective
        websites.
      </p>

      <h2 class="text-3xl mb-4 mt-6">Children's Information</h2>

      <p>
        Another part of our priority is adding protection for children while
        using the internet. We encourage parents and guardians to observe,
        participate in, and/or monitor and guide their online activity.
      </p>

      <p>
        Diary of Character does not knowingly collect any Personal Identifiable
        Information from children under the age of 13. If you think that your
        child provided this kind of information on our website, we strongly
        encourage you to contact us immediately and we will do our best efforts
        to promptly remove such information from our records.
      </p>

      <h2 class="text-3xl mb-4 mt-6">Online Privacy Policy Only</h2>

      <p>
        This Privacy Policy applies only to our online activities and is valid
        for visitors to our website with regards to the information that they
        shared and/or collect in Diary of Character. This policy is not
        applicable to any information collected offline or via channels other
        than this website.
      </p>

      <h2 class="text-3xl mb-4 mt-6">Consent</h2>

      <p>
        By using our website, you hereby consent to our Privacy Policy and agree
        to its Terms and Conditions.
      </p>
    </div>
    <div
      class="
        flex flex-col
        gap-2
        bg-footer
        px-4
        xl:px-36
        items-center
        justify-center
        text-light
        relative
      "
    >
      <div class="bg-black opacity-80 w-full h-full absolute"></div>
      <div class="flex flex-col xl:flex-row items-center z-10 xl:gap-4">
        <img src="../assets/logo-white.svg" alt="" srcset="" />
        <a href="#" target="_">
          <img src="../assets/playstore.svg" alt="" srcset=""
        /></a>
      </div>
      <div class="z-10 mb-12 text-center">
        ©2022 Diary of Character. Surabaya, Indonesia
        <br />
        <router-link :to="{ name: 'Policy' }">
          <a class="z-10 hover:opacity-80">Privacy Policy</a>
        </router-link>
      </div>
    </div>
  </div>
</template>