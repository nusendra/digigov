<template lang="pug">
  div
    custom-header
    clients
    keunggulan
    produk
    alur
    faq
    demo
    kontak
</template>

<script>
import customHeader from "@@/components/Header"
import clients from "@@/components/Clients"
import keunggulan from "@@/components/Keunggulan"
import produk from "@@/components/Produk"
import alur from "@@/components/Alur"
import faq from "@@/components/Faq"
import demo from "@@/components/Demo"
import kontak from "@@/components/Kontak"

export default {
  components: {
    customHeader, clients, keunggulan, alur, faq, demo, kontak, produk
  },
  mounted() {
    // this.tes();
  },
  methods: {
    tes() {
      this.$store.state.nama = "kan anjing";
    }
  }
}
</script>
