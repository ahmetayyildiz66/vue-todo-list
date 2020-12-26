import { computed, ref, readonly, toRefs } from 'vue'
const tasks = ref([])

export default function useTask () {
  function addNew (name) {
    tasks.value.push(name)
  }

  const getTasks = computed(() => {
    return tasks.value
  })

  return {
    ...toRefs(readonly(tasks)),
    addNew,
    getTasks
  }
}
