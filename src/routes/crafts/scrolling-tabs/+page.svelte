<script lang="ts">
	import Icon from '@iconify/svelte';
	import ScrollingTabs from './content/ScrollingTabs.svelte';
	import ScrollingTabsAnchors from './content/ScrollingTabsAnchors.svelte';
</script>

<section class="layout max-w-2xl">
	<a href="/" class="btn w-fit p-0 border-0 mb-6 text-primary">
		<Icon icon="ep:top-left" />Back
	</a>

	<hgroup>
		<h1 class="text-xl">Scrolling Tabs</h1>
		<p>April 2024</p>
	</hgroup>
	<p>My attempt at tackling this common design pattern.</p>
	<!--more-->
	<p>
		You don't have to look far on the internet to come across <strong>tabs</strong> or
		<strong>carousels</strong>.
	</p>
	<p>
		Almost any website I work on these days includes at least one of them. I've seen dozens of
		implementations, and yet there always seems to be something missing.
	</p>
	<p><strong>So I decided to give it a go myself.</strong></p>
	<p>
		The goal here isn't to replace the numerous carousel and tab libraries out there. <br />
		Instead, I'd just like to explore what's possible using some basic CSS and JavaScript.
	</p>
	<ScrollingTabs />
	<h2 id="bloopers">Bloopers</h2>
	<p>
		I would've loved to implement a version with no javascript by using <strong>anchor tags</strong>
		for the triggers — <code>{'<a href="#slide-id"...'}</code> (and I did).
	</p>
	<p><strong>Unfortunately, it's pretty buggy:</strong></p>
	<ul class="list-disc-outside mb-4 p-s-5">
		<li>
			Most browsers scroll the tabs component to the top of the page first
			<br />
			(I can't seem to find a way around this)
		</li>
		<li>Slides don't line up correctly (notice the border being cut off).</li>
	</ul>
	<p>Nonetheless, I've shared the implementation below if you'd like to play around with it.</p>
	<ScrollingTabsAnchors />
	<p>
		If anyone knows why this is happening please <a href="mailto:a@zaki.gg">let me know!</a>. I'd
		love to revisit this idea in the future.
	</p>
	<h2 id="that-s-a-wrap-">That's a wrap!</h2>
	<p>
		I hope you learned something from this <em>Craft.</em> I had a lot of fun putting it together :)
	</p>
	<p>
		Digging into this UI pattern and experimenting with different approaches has given me a new
		appreciation for what goes into making a proper tabs or carousel library.
	</p>
	<p>
		I'm fairly new to making these Craft pages, but I'm excited to share more of my experiments with
		you down the road.
	</p>
	<p>
		If you have any feedback or suggestions, or just wanna chat, feel free to <a
			href="mailto:a@zaki.gg">reach out</a
		>!
	</p>
</section>
