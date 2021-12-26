<template>
    <div style="height:50px; background-color:#C4C4C4">
    </div>
    <div id="login_root">
        <q-form @submit="on_submit" >
            <h6 class="text-left">로그인</h6>
            <q-input
                style="width:464px"
                filled
                type="email"
                label="아이디"
                id="email"
                v-model="email"
                hint="example@gmail.com"
                lazy-rules
                :rules="[ val => val && val.length > 0 || '아이디를 입력하세요']">
                <template v-slot:prepend>
                    <q-icon name="mail" />
                </template>
            </q-input>
            <div style="height:10px"></div>
            <q-input
                filled
                style="width:464px"
                type="password"
                v-model="password"
                label="비밀번호"
                id="password"
                :rules="[ val => val && val.length > 0 || '패스워드를 입력하세요']">
                <template v-slot:prepend>
                    <q-icon name="lock" />
                </template>
            </q-input>
            <div style="height:10px"></div>
            <q-btn color="black" type="submit" style="width:464px" label="로그인하기"></q-btn>
        </q-form>
    </div>
</template>

<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'

export default {
  setup () {
    const $q = useQuasar()

    const name = ref(null)
    const password = ref(null)

    return {
      name,
      password,

      onSubmit () {
        if (name.value !== "") {
          name.value = null
          password.value = null
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'You need to accept the license and terms first'
          })
        }
        else {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted'
          })
        }
      },
    }
  }
}
</script>
<style>
    #login_root {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top:10%;
        font-family: "Abel", "sans-serif";
    }
</style>