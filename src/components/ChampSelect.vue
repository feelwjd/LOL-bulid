<template>
  <div class="q-pa-md">
    <q-layout view="lHh lpr lFf" container style="height: 400px" class="shadow-2 rounded-borders">
      <q-header elevated>
        <q-toolbar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>

          <q-toolbar-title>
            챔피언 선택
          </q-toolbar-title>

          <q-btn flat round dense icon="whatshot" />
        </q-toolbar>
      </q-header>

      <q-page-container>
        <q-page padding>
          <p v-for="n in 15" :key="n">
            <img alt="Quasar logo" src="../assets/logo.svg" style="width: px; height: 40px">
            <img alt="Quasar logo" src="../assets/logo.svg" style="width: 40px; height: 40px">
            <img alt="Quasar logo" src="../assets/logo.svg" style="width: 40px; height: 40px">
            <img alt="Quasar logo" src="../assets/logo.svg" style="width: 40px; height: 40px">
            <img alt="Quasar logo" src="../assets/logo.svg" style="width: 40px; height: 40px">
            <img alt="Quasar logo" src="../assets/logo.svg" style="width: 40px; height: 40px">
            <img alt="Quasar logo" src="../assets/logo.svg" style="width: 40px; height: 40px">
            <img alt="Quasar logo" src="../assets/logo.svg" style="width: 40px; height: 40px">
            <img alt="Quasar logo" src="../assets/logo.svg" style="width: 40px; height: 40px">
            <img alt="Quasar logo" src="../assets/logo.svg" style="width: 40px; height: 40px">
          </p>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
export default {
  name: 'champselect',
}
</script>