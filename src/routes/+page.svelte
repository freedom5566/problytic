<script>
	/** @type {number} */
	let number = $state();

	async function roll() {
		const response = await fetch('/api/test');
		number = await response.json();
	}
</script>

<button onclick={roll}>Roll the dice</button>
{#if number !== undefined}
	<p>You rolled a {number.age}</p>
{/if}
<h1>Welcome to SvelteKit</h1>
<button class="btn btn-primary">One</button>
<button class="btn btn-secondary">Two</button>
<button class="btn btn-accent btn-outline">Three</button>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
