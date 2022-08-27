<template>
  <div class="bg-light w-screen min-h-screen">
    <div
      id="navbar"
      class="w-full flex items-center gap-4 font-nunito sticky px-4 xl:px-36 py-2 xl:py-0"
    >
      <img src="./assets/logo.svg" class="xl:w-24 xl:h-24 w-12 h-12" />
      <div class="text-md xl:text-3xl font-bold">Diary Karakter</div>
      <a
        href="#"
        target="_blank"
        class="
          text-kasih-350 text-md xl:text-3xl
          border-2
          ml-auto
          border-kasih-350
          rounded-xl
          px-2
          py-1
          xl:px-4
          xl:py-2
          hover:bg-kasih-350
          cursor-pointer
          hover:text-light
        "
        >Download Sekarang</a
      >
    </div>
    <div class="grid grid-cols-12 items-center my-24 px-4 xl:px-36">
      <div class="col-span-12 xl:col-span-3 flex flex-col items-center xl:items-start gap-4">
        <div class="text-md xl:text-3xl font-bold">
          Yuk isi Diary harianmu dengan Diary Karakter
        </div>
        <div class="text-xl">
          Tingkatkan pembangunan karakter dengan mengisi refleksi harian pada
          aplikasi ini.
        </div>
        <a
          href="#"
          target="_blank"
          class="
            rounded-xl
            bg-kasih-350
            text-light
            px-6
            py-3
            w-fit
            text-md xl:text-3xl
            cursor-pointer
            hover:opacity-80
          "
          >Coba Sekarang</a
        >
      </div>
      <div class="col-span-12 xl:col-span-9 mt-4 xl:mt-0">
        <img src="./assets/landing-1.svg" alt="" srcset="" />
      </div>
    </div>
    <div
      class="grid grid-cols-12 items-center my-24 bg-kasih-350 text-light px-4 xl:px-36 py-12 xl:py-0"
    >
      <div class="col-span-12 xl:col-span-9 xl:absolute">
        <img src="./assets/landing-2.svg" alt="" srcset="" />
      </div>
      <div class="col-span-8 invisible hidden xl:block h-148">
        <img src="./assets/landing-2.svg" />
      </div>
      <div class="col-span-12 xl:col-span-4 flex flex-col items-center xl:items-start gap-4 pt-4 xl:pt-0">
        <div class="text-md xl:text-3xl font-bold">
          Berbagai pilihan modul dalam memahami karakter
        </div>
        <div class="text-xl">
          Tersedia berbagai modul yang berdasarkan buah-buah kasih untuk
          dipelajari dan menerapkannya dalam kehidupan.
        </div>
        <a
          href="#"
          target="_blank"
          class="
            rounded-xl
            text-kasih-350
            bg-light
            px-6
            py-3
            w-fit
            text-md xl:text-3xl
            cursor-pointer
            hover:opacity-80
          "
          >Coba Sekarang</a
        >
      </div>
    </div>
    <div class="grid grid-cols-12 items-center my-24 pl-12 xl:pl-36 xl:pr-12 pb-12">
      <div class="col-span-12 xl:col-span-5">
        <div class="flex flex-col gap-4 pr-12">
          <div class="bg-white rounded-xl p-6 flex flex-col gap-4">
            <img src="./assets/bxs-widget.svg.svg" class="w-20 h-20" />
            <div class="text-md xl:text-3xl font-bold">
              Pilih Modul yang Akan Dikerjakan
            </div>
            <div class="text-xl">
              Terdapat 9 modul yang dapat dikerjakan dimulai dari modul kasih
              hingga penguasaan diri
            </div>
          </div>
          <div class="bg-white rounded-xl p-6 flex flex-col gap-4">
            <img src="./assets/bxs-book-heart.svg.svg" class="w-20 h-20" />
            <div class="text-md xl:text-3xl font-bold">Pilih Diary Harian</div>
            <div class="text-xl">
              Dalam setiap modul terdapat berbagai macam karakter yang dalam
              setiap karakternya memiliki diary harian yang perlu diselesiaikan
            </div>
          </div>
          <div class="bg-white rounded-xl p-6 flex flex-col gap-4">
            <img src="./assets/bxs-comment-edit.svg.svg" class="w-20 h-20" />
            <div class="text-md xl:text-3xl font-bold">Menyelesaikan Diary Harian</div>
            <div class="text-xl">
              Terdapat berbagai soal yang akan ditanyakan pada diary harian
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-12 xl:col-span-7 pt-4 xl:pt-0">
        <img src="./assets/landing-3.svg" alt="" srcset="" />
      </div>
    </div>
    <div
      class="
        flex flex-col
        gap-2
        bg-footer
        px-4 xl:px-36
        items-center
        justify-center
        text-light
        relative
      "
    >
      <div class="bg-black opacity-80 w-full h-full absolute"></div>
      <div class="flex flex-col xl:flex-row items-center z-10 xl:gap-4">
        <img src="./assets/logo-white.svg" alt="" srcset="" />
        <a href="#" target="_">
          <img src="./assets/playstore.svg" alt="" srcset=""
        /></a>
      </div>
      <div class="z-10 mb-12">©2022 Diary Karakter. Surabaya, Indonesia</div>
    </div>
  </div>
</template>