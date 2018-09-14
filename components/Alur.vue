<template lang="pug">
  #alur.section.light-bg
    .container
      .section-title
        h3 ALUR KERJA
      ul.nav.nav-tabs.nav-justified(role='tablist')
        li.nav-item
          a.nav-link.active(data-toggle='tab', href='#communication') Analisa dan Perencanaan
        li.nav-item
          a.nav-link(data-toggle='tab', href='#schedule') Proses Development
        li.nav-item
          a.nav-link(data-toggle='tab', href='#messages') Unit Testing
        li.nav-item
          a.nav-link(data-toggle='tab', href='#livechat') Implementasi Sistem
      .tab-content
        #communication.tab-pane.fade.show.active
          .d-flex.flex-column.flex-lg-row
            div
              h2 Mari diskusikan bersama
              p.lead
                | Mendiskusikan dan membuat perencanaan tentang software / sistem yang akan dibuat.
              p
                | Pada tahap awal ini, kami tim DigiGov akan berdiskusi, menganalisa pasar, dan menentukan perencanaan mengenai sistem yang akan dibangun.
                | Segala kebutuhan untuk menunjang proses development harus jelas disini, agar nanti ketika proses development mampu memperkecil kemungkinan kesalahan dan perubahan konsep.
              p
                | Di tahap inilah, 
                i customer
                |  / 
                i client
                |  dari sisi pemerintahan diharapkan mampu menyampaikan semua kebutuhan sistem yang diperlukan, sehingga tim DigiGov bisa segera 
                |                 menganalisa dan merancang sistem dengan baik sesuai dengan permintaan 
                i customer
                |  / 
                i client
                | .
        #schedule.tab-pane.fade
          .d-flex.flex-column.flex-lg-row
            div
              h2 Biarkan kami bekerja
              p.lead
                | Kami mulai eksekusi pembuatan sistem sesuai dengan perencanaan dan analisa di tahap pertama
              p
                | Disini kami tim Programmer DigiGov akan mulai bekerja merancang dan membangun sistem sesuai dengan kebutuhan 
                i customer
                |  / 
                i client
                | .
              p
                | Adakalanya tim DigiGov ingin berdiskusi kembali dengan 
                i customer
                |  / 
                i client
                |  jika memang terdapat kendala dalam proses development,
                |                 atau mungkin tim DigiGov ingin menggali lebih jauh mengenai informasi yang nanti akan diimplementasikan di sistem ini.
        #messages.tab-pane.fade
          .d-flex.flex-column.flex-lg-row
            div
              h2 Saatnya pengujian
              p.lead
                | Sebelum sistem dilepas ke 
                i customer
                |  / 
                i client
                | , kami perlu menguji sistem yang telah dibangun.
              p
                | Pada tahap ini para tim DigiGov menguji sistem / program dari segala sisi untuk memastikan apakah masih ada kesalahan yang terjadi di sistem.
              p
                | Jika ternyata ditemukan 
                i bug
                |  atau kesalahan dalam sistem ini, maka tim kami akan segera memperbaiki dan menguji nya kembali sampai proses ini mencapai lolos dalam pengujian.
        #livechat.tab-pane.fade
          .d-flex.flex-column.flex-lg-row
            div
              h2 Nikmati hasil pekerjaan kami
              p.lead
                | Sistem yang dibuat telah siap untuk dioperasikan dan dikonsumsi oleh 
                i customer
                |  / 
                i client
                | .
              p
                | Setelah melewati proses yang panjang, maka di tahap ini sistem sudah bisa dipakai dan dioperasikan oleh 
                i customer
                |  / 
                i client
                | . Disini kami tim DigiGov
                |               akan tetap memantau jalannya sistem apakah memang nantinya sistem ini perlu diadakan perkembangan atau perubahan konsep, tentunya hal ini sudah terdapat kesepakatan antara tim kami dengan 
                i customer
                |  / 
                i client
                | .

</template>
