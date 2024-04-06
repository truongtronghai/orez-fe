<template>
	<div class="surface-card p-4 shadow-2 border-round w-full md:w-[40%]">
		<div class="flex flex-col items-center text-center mb-5">
			<img src="/public/images/logo.svg" alt="Image" height="50" class="mb-3" />
			<div class="text-900 text-3xl font-medium mb-3">Welcome Back</div>
		</div>

		<div>
			<label for="username" class="block text-900 font-medium mb-2"
				>User name</label
			>
			<InputText
				id="username"
				type="text"
				class="w-full mb-3"
				v-model="username"
			/>

			<label for="password" class="block text-900 font-medium mb-2"
				>Password</label
			>
			<Password
				id="password"
				type="password"
				class="w-full mb-3"
				v-model="password"
				:feedback="false"
			/>

			<div class="flex align-items-center justify-content-between mb-6">
				<div class="flex align-items-center">
					<Checkbox
						id="rememberme"
						:binary="true"
						v-model="checked"
						class="mr-2"
					></Checkbox>
					<label for="rememberme">Remember me</label>
				</div>
				<a
					class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer"
					>Forgot password?</a
				>
			</div>

			<Button
				label="Sign In"
				icon="pi pi-user"
				class="w-full"
				:disabled="!(!!username.length && !!password.length)"
				@click="handleSignIn"
			></Button>
		</div>
	</div>
</template>
<script setup lang="ts">
const checked = ref(false)
const username = ref('')
const password = ref('')

const handleSignIn = () => {
	alert(username.value + ' - ' + password.value)
}
</script>
<style scoped></style>
