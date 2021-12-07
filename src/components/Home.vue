<template>
  <div>
    <Header />
    <Colors />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Colors from "@/components/Colors.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Header,
    Colors,
    Footer,
  },
};
</script>