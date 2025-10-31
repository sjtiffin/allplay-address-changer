<script lang="ts">
	import { enhance } from '$app/forms';
	export let form;
</script>

<div class="mt-8 mb-4 text-center text-4xl">
	<svg
		version="1.1"
		id="Logos"
		xmlns="http://www.w3.org/2000/svg"
		x="0px"
		y="0px"
		viewBox="0 0 80 32"
		style="height:60px;margin:0 auto"
		><g
			><g
				><path
					d="M80,4.8v16.9c0,2.1-0.8,4.1-2.3,5.7c-0.1,0.1-2.2,2.3-2.2,2.3C73.9,31.2,72,32,69.8,32c-4.4,0-7.9-3.6-7.9-8v0 c0,0-6.4,0-6.7,0c-1.9,0-3.6-0.6-5-1.7L48.4,24h-7.1v-3.5c-1.3,1.8-3.4,3.1-5.7,3.4v5.8L33.3,32h-7.1v-8c0,0-17.5,0-17.9,0 C3.7,24,0,20.2,0,15.5c0-1.2,0.2-2.3,0.7-3.3c0.4-1,1-1.9,1.8-2.7l2.2-2.3c1.5-1.5,3.6-2.5,5.9-2.5h4.5V2.3L17.3,0H30v8.3 c1.5-2.1,4-3.5,6.7-3.5c1.7,0,3.2,0.5,4.5,1.3V2.3L43.5,0h7.1v8.3c1.5-2.1,4-3.5,6.7-3.5c0.6,0,13.9,0,13.9,0v2.4l2.3-2.4H80z"
				></path></g
			><g
				><path
					class="st0"
					d="M15.3,6.8c-0.6,0-1.2,0.4-1.4,0.9c-1-0.6-2.1-0.9-3.3-0.9c-1.8,0-3.3,0.7-4.5,1.9c-1.1,1.2-1.9,2.8-1.9,4.5 c0,1.8,0.7,3.4,1.9,4.5c1.2,1.2,2.7,1.9,4.5,1.9c0.6,0,1.1-0.1,1.7-0.2c0.5-0.1,1-0.4,1.5-0.6v0.9h3.2V6.8H15.3z M12.8,15.5 c-0.6,0.6-1.4,0.9-2.2,0.9c-1.8,0-3.2-1.4-3.2-3.2c0-0.9,0.4-1.7,0.9-2.3c0.6-0.6,1.4-0.9,2.2-0.9c0.9,0,1.7,0.4,2.2,0.9 c0.6,0.6,0.9,1.4,0.9,2.3S13.4,14.9,12.8,15.5z"
					fill="#FFFFFF"
				></path><path
					class="st0"
					d="M62.2,6.8c-0.6,0-1.2,0.4-1.4,0.9c-1-0.6-2.1-0.9-3.3-0.9c-1.8,0-3.3,0.7-4.5,1.9c-1.1,1.2-1.9,2.8-1.9,4.5 c0,1.8,0.7,3.4,1.9,4.5c1.2,1.2,2.7,1.9,4.5,1.9c0.6,0,1.1-0.1,1.7-0.2c0.5-0.1,1-0.4,1.5-0.6v0.9h3.2V6.8H62.2z M57.4,16.5 c-0.9,0-1.7-0.4-2.2-0.9c-0.6-0.6-0.9-1.4-0.9-2.3s0.4-1.7,0.9-2.3c0.6-0.6,1.4-0.9,2.2-0.9c0.9,0,1.7,0.4,2.2,0.9 c0.6,0.6,0.9,1.4,0.9,2.3C60.6,15,59.2,16.5,57.4,16.5z"
					fill="#FFFFFF"
				></path><rect x="19.3" y="2" class="st0" width="3.2" height="17.7" fill="#FFFFFF"
				></rect><rect x="24.9" y="2" class="st0" width="3.2" height="17.7" fill="#FFFFFF"
				></rect><path
					class="st0"
					d="M41.3,8.7c-1.2-1.2-2.7-1.9-4.5-1.9c-3.5,0-6.4,2.9-6.4,6.4v14.5h3.2v-8.9c0.9,0.5,2,0.9,3.2,0.9 c1.8,0,3.3-0.7,4.5-1.9c1.1-1.2,1.9-2.8,1.9-4.5C43.1,11.5,42.4,9.9,41.3,8.7z M36.8,16.5c-0.9,0-1.7-0.4-2.2-0.9 c-0.6-0.6-0.9-1.4-0.9-2.3s0.4-1.7,0.9-2.3c0.6-0.6,1.4-0.9,2.2-0.9c0.9,0,1.7,0.4,2.2,0.9c0.6,0.6,0.9,1.4,0.9,2.3 C40,15,38.5,16.5,36.8,16.5z"
					fill="#FFFFFF"
				></path><rect x="45.5" y="2" class="st0" width="3.2" height="17.7" fill="#FFFFFF"
				></rect><path
					class="st0"
					d="M78,6.8v14.9c0,1.7-0.7,3.2-1.7,4.2c-1.1,1.1-2.6,1.8-4.2,1.8c-3.3,0-5.9-2.7-5.9-6h3.2 c0,1.5,1.2,2.8,2.8,2.8c1.5,0,2.8-1.2,2.8-2.8V19c-0.4,0.2-0.9,0.4-1.3,0.5c-0.5,0.1-0.9,0.2-1.4,0.2c-1.6,0-3.1-0.7-4.2-1.8 c-1.1-1.1-1.7-2.6-1.7-4.2V6.8h3.2v6.9h0c0,1.5,1.2,2.8,2.8,2.8c1.5,0,2.8-1.2,2.8-2.8V6.8H78z"
					fill="#FFFFFF"
				></path></g
			></g
		></svg
	>
</div>

<p class="mb-6 max-w-md text-center">
	Need to change your address on one or more of your orders? Please enter your email address below.
	You'll be provided with a list of order information and one or more links to change your address.
</p>

<form method="POST" class="mx-auto w-full max-w-md px-4">
	<div class="join w-full">
		<div class="w-full">
			<label class="validator input join-item mb-4 w-full">
				<svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<g
						stroke-linejoin="round"
						stroke-linecap="round"
						stroke-width="2.5"
						fill="none"
						stroke="currentColor"
					>
						<rect width="20" height="16" x="2" y="4" rx="2"></rect>
						<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
					</g>
				</svg>
				<input name="email" type="email" placeholder="mail@site.com" required class="w-full" />
			</label>
			<div class="validator-hint hidden">Enter valid email address</div>
		</div>
		<button class="btn join-item btn-neutral">Send</button>
	</div>
	{#if form?.incorrect}
		<div role="alert" class="alert alert-warning">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6 shrink-0 stroke-current"
				fill="none"
				viewBox="0 0 24 24"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
				/>
			</svg>
			<span>Uh oh, we didn't find any orders for that email. Please try again.</span>
		</div>
	{/if}
	{#if form?.success}
		<div role="alert" class="alert alert-success">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6 shrink-0 stroke-current"
				fill="none"
				viewBox="0 0 24 24"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
			<span>Message sent! Please check your email.</span>
		</div>
	{/if}
</form>
