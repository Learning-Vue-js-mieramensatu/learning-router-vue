<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <footer>
    <div class="element">
      <h1>Foolish Developer</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus vero
        soluta eveniet consequatur, iure modi commodi mollitia pariatur quam
        consequuntur adipisci perspiciatis minus maxime sequi totam, ullam
        inventore, quidem odit!
      </p>
      <div class="logo">
        <a href="/facebook">facebook</a>
        <a href="/twitter">twitter</a>
        <a href="/ig">ig</a>
        <a href="/wa">wa</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-color: black;
  color: white;
}
.element{
    width: 80%;
    margin: auto;
    text-align: center;
}
a{
    margin-left: 10vh;
    text-decoration: none;
    color: white;
    font-weight: bold;
}
</style>
