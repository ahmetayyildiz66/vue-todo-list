import { computed, ref, readonly, toRefs } from 'vue'

const state = {
  tasks: ref([]),
  type: ref('incomplete'),
  length: ref(0)
}

export default function useTask () {
  function addNew (name) {
    state.tasks.value.push({
      id: state.tasks.value.length + 1,
      name,
      status: 'incomplete'
    })
  }

  const getTasks = computed(() => {
    return state.tasks.value
  })

  const updateState = (type) => {
    state.type.value = type
  }

  const getFilteredTasks = computed(() => {
    return state.tasks.value.filter(task => task.status === state.type.value)
  })

  const completeIncomplete = (task, type) => {
    state.tasks.value.forEach(el => {
      if (el.id === task.id) {
        el.status = type
      }
    })
  }

  const tasksLength = computed(() => {
    return state.tasks.value.length
  })

  const removeTask = (id) => {
    state.tasks.value = state.tasks.value.filter(task => task.id !== id)
  }

  return {
    ...toRefs(readonly(state.tasks)),
    addNew,
    getTasks,
    getFilteredTasks,
    updateState,
    completeIncomplete,
    removeTask,
    ...toRefs(tasksLength)
  }
}
