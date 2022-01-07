<template>
  <q-layout view="hHh lpr lFr">

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-tabs align="left">
        <q-route-tab name="login" to="/" label="로그인"/>
        <q-route-tab name="signup" to="/signup" label="회원가입" />
        <q-route-tab name="sword-wind-build" to="/sword-wind-build" label="칼바람 빌드 찾기" />
        <q-route-tab name="build-detail" to="/build-detail" label="빌드 상세정보" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  name: 'App',
}
</script>