<template>
    <section class="daily-info">
        <time class="daily-info__date">Monday, December 21</time>
        <span class="daily-info__task-count">2 Active Tasks</span>
    </section>
</template>

<script>
export default {
  name: 'DailyInfo'
}
</script>

<style lang="scss" scoped>
.daily-info{
    display: flex;
    flex-direction: column;
    &__date{
        font-size: 2rem;
        color: $color-white;
    }
    &__task-count{
        margin-top: .7rem;
        color: $color-turqoise;
        font-size: 1.5rem;
    }
}
</style>
