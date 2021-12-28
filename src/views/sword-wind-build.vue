<template>
    <div class="col-3">
    </div>
    <div class="col-9">
        <div class="row">
            <div class="col">
                <h6 class="text-left">챔피언 선택</h6>
            </div>

        </div>
    </div>
    <div class="col-3">
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
    #root {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top:10%;
        font-family: "Abel", "sans-serif";
    }
</style>