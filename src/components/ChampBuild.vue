<template>
<div class="q-ma-md">
  <div
    :filter="filter"
    >
    <q-scroll-area
      :thumb-style="thumbStyle"
      :bar-style="barStyle"
      style="height: 400px"
      id="scroll-area-with-virtual-scroll-1"
    >
      <q-virtual-scroll
        scroll-target="#scroll-area-with-virtual-scroll-1 > .scroll"
        :items="heavyList"
        :virtual-scroll-item-size="32"
        separator
      >
        <template v-slot="{ item, index }">
          <q-item
            :key="index"
            dense
          >
            <q-item-section>
              <q-item-label class="build">
                #{{ index }} - {{ item.label }} - {{champ}}
              </q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/boy-avatar.png">
              </q-avatar>
            </q-item-section>
            <q-item-section>Image avatar</q-item-section>
          </q-item>
        </template>
      </q-virtual-scroll>
    </q-scroll-area>
    </div>
  </div>
</template>

<script>
const maxSize = 20
const heavyList = []

for (let i = 0; i < maxSize; i++) {
  heavyList.push({
    label: '' + (i + 1)
  })
}

export default {
  name: 'champbuild',
  props: ["value"],


  setup () {
  
      return {
      heavyList,

      thumbStyle: {
        right: '5px',
        borderRadius: '8px',
        backgroundColor: '#027be3',
        width: '8px',
        opacity: 0.75
      },

      barStyle: {
        right: '2px',
        borderRadius: '14px',
        backgroundColor: '#027be3',
        width: '14px',
        opacity: 0.2,
        marginTop: '-3px',
        marginBottom: '-3px',
        paddingTop: '3px',
        paddingBottom: '3px'
      }
    }
  },
  watch:{
    build(){
      this.champ = this.value
    }
  },

  data () {
    return{
    champ : this.value
    }
  }
}
</script>
