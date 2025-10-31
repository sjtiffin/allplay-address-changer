<script lang="ts">
	export let form;
</script>

<h1 class="mb-4 text-center text-4xl">Allplay Address Changer</h1>

<p class="mb-6 text-center">
	Need to change your address on one or more of your orders? Please enter your email address below.
	You'll be provided with a list of order information and one or more links to change your address.
</p>

<form method="POST" class="mx-auto w-full max-w-md px-4">
	<div class="join w-full">
		<div class="w-full">
			<label class="validator input join-item w-full">
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
</form>
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
		<span>Uh oh, we didn't find any orders for the given email. Please try again.</span>
	</div>
{/if}
