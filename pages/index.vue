<template></template>
<script setup lang="ts">
const checked = ref(false)
const username = ref('')
const password = ref('')

const handleSignIn = () => {
	alert(username.value + ' - ' + password.value)
}
</script>
<style scoped></style>
