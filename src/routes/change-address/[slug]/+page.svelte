<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<div class="mx-auto mt-8 max-w-4xl">
	<h2 class="text-center">Change Shipping Address</h2>
	<h3 class="mb-4 text-center text-lg font-semibold">Order: {data.currentAddress.order.name}</h3>

	<div class="grid grid-cols-2 gap-4">
		<div class="rounded-lg border border-gray-300 p-4">
			<h3 class="mb-4 text-center">Current Address</h3>
			<form>
				<div class="form-control">
					<label class="label" for="current-name">
						<span class="label-text">Name</span>
					</label>
					<input
						class="input-bordered input"
						id="current-name"
						type="text"
						readonly
						disabled
						value={data.currentAddress.order.shippingAddress.name}
					/>
				</div>
				<div class="form-control">
					<label class="label" for="current-address1">
						<span class="label-text">Address Line 1</span>
					</label>
					<input
						class="input-bordered input"
						id="current-address1"
						type="text"
						readonly
						disabled
						value={data.currentAddress.order.shippingAddress.address1}
					/>
				</div>
				<div class="form-control">
					<label class="label" for="current-address2">
						<span class="label-text">Address Line 2</span>
					</label>
					<input
						class="input-bordered input"
						id="current-address2"
						type="text"
						disabled
						readonly
						value={data.currentAddress.order.shippingAddress.address2 || ''}
					/>
				</div>
				<div class="form-control">
					<label class="label" for="current-city">
						<span class="label-text">City</span>
					</label>
					<input
						class="input-bordered input"
						id="current-city"
						type="text"
						readonly
						disabled
						value={data.currentAddress.order.shippingAddress.city}
					/>
				</div>
				<div class="form-control">
					<label class="label" for="current-province">
						<span class="label-text">Province/State</span>
					</label>
					<input
						class="input-bordered input"
						id="current-province"
						type="text"
						readonly
						disabled
						value={data.currentAddress.order.shippingAddress.province}
					/>
				</div>
				<div class="form-control">
					<label class="label" for="current-zip">
						<span class="label-text">ZIP/Postal Code</span>
					</label>
					<input
						class="input-bordered input"
						id="current-zip"
						type="text"
						readonly
						disabled
						value={data.currentAddress.order.shippingAddress.zip}
					/>
				</div>
				<div class="form-control">
					<label class="label" for="current-country">
						<span class="label-text">Country</span>
					</label>
					<input
						class="input-bordered input"
						id="current-country"
						type="text"
						readonly
						disabled
						value={data.currentAddress.order.shippingAddress.country}
					/>
				</div>
				<div class="form-control">
					<label class="label" for="current-phone">
						<span class="label-text">Phone</span>
					</label>
					<input
						class="input-bordered input"
						id="current-phone"
						type="tel"
						readonly
						disabled
						value={data.currentAddress.order.shippingAddress.phone || ''}
					/>
				</div>
			</form>
		</div>

		<div class="rounded-lg border border-gray-300 p-4">
			<h3 class="mb-4 text-center">Update Address</h3>
			<form>
				<div class="form-control">
					<label class="label" for="update-name">
						<span class="label-text">Name</span>
					</label>
					<input class="input-bordered input" id="update-name" type="text" />
				</div>
				<div class="form-control">
					<label class="label" for="update-address1">
						<span class="label-text">Address Line 1</span>
					</label>
					<input class="input-bordered input" id="update-address1" type="text" />
				</div>
				<div class="form-control">
					<label class="label" for="update-address2">
						<span class="label-text">Address Line 2</span>
					</label>
					<input class="input-bordered input" id="update-address2" type="text" />
				</div>
				<div class="form-control">
					<label class="label" for="update-city">
						<span class="label-text">City</span>
					</label>
					<input class="input-bordered input" id="update-city" type="text" />
				</div>
				<div class="form-control">
					<label class="label" for="update-province">
						<span class="label-text">Province/State</span>
					</label>
					<input class="input-bordered input" id="update-province" type="text" />
				</div>
				<div class="form-control">
					<label class="label" for="update-zip">
						<span class="label-text">ZIP/Postal Code</span>
					</label>
					<input class="input-bordered input" id="update-zip" type="text" />
				</div>
				<div class="form-control">
					<label class="label" for="update-country">
						<span class="label-text">Country</span>
					</label>
					<input class="input-bordered input" id="update-country" type="text" />
				</div>
				<div class="form-control">
					<label class="label" for="update-phone">
						<span class="label-text">Phone</span>
					</label>
					<input class="input-bordered input" id="update-phone" type="tel" />
				</div>
				<div class="form-control mt-4">
					<button class="btn btn-primary" type="submit">Update Address</button>
				</div>
			</form>
		</div>
	</div>

	<div class="mt-6">
		<h3>Items:</h3>
		<ul class="list-inside list-disc">
			{#each data.currentAddress.order.lineItems.edges as edge}
				<li>{edge.node.title} (Qty: {edge.node.quantity})</li>
			{/each}
		</ul>
	</div>
</div>
