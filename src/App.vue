<template>
  <div class="wrapper">
    <div id="nav">
      <nav class="nav">
        <router-link class="link" to="/"
          >Categorizer<br /><span class="aid">カテゴライズ</span></router-link
        >
        <router-link class="link" to="/established"
          >Established<br /><span class="aid"
            >概念の確立について</span
          ></router-link
        >
        <router-link class="link" to="/actiondesign"
          >Action Design<br /><span class="aid">行動設計</span></router-link
        >
      </nav>
    </div>
    <router-view />
  </div>
</template>

<style></style>
