<template>
	<div class="container">
		<v-sheet class="ma-6 pa-6">
			Count: {{count}}
			<br/>
			<v-btn class="my-3" @click="incrementCount">Increment Count</v-btn>
			<br/>
			<v-btn class="my-3"  @click="decrementCount">Decrement Count</v-btn>
			<br/>
			<v-btn class="my-3" @click="resetCount">Reset Count</v-btn>
			<br/>
			<v-btn class="my-3" @click="getCount">Refresh Count</v-btn>
		</v-sheet>
	</div>
</template>

<script src="./appCounter.js"></script>