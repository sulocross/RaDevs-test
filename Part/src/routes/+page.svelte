<script>
	import "./styles.scss"
	import carStore from './store'
	import { goto } from '$app/navigation';

	let nextButtonClicked = false
	let car_brand, zip_code, fname, lname, car_model,first_registartion;
	let validateCarsBrand = ["audi", "bmw", "nissan"]
	let validateZipCodes = ["65000", "66000", "67000", "68000"]
	let errors = []

	let formDefaultEventHandler = event => {
		event.preventDefault()
	}

	let changePageHandler = () => {
		nextButtonClicked = !nextButtonClicked
	}

	let submitHandler = () => {

		errors = []

		if(validateCarsBrand.indexOf(car_brand.toLowerCase().trim()) == -1){
			errors = ["Car brand is not valid", ...errors];
			return
		}

		if(validateZipCodes.indexOf(zip_code.toLowerCase().trim()) === -1){
			errors = ["Zip code is not valid", ...errors];
			return
		}

		if(!fname || !lname || !car_model || !first_registartion){
			errors = ["Fields can not be empty", ...errors]
			return
		}
		
		let object = {car_brand, zip_code, fname, lname, car_model, first_registartion}

		carStore.update(cars=>{
			return [...cars, object]
		})

		if(Math.floor(Math.random() * 100)>50){
			goto("/result/v1")
		}
		goto("/result/v2")
	}

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<form on:submit={formDefaultEventHandler} id="multistepsform">
	<fieldset class:fieldset-active = {!nextButtonClicked}>
		<h2 class="fs-title">Sing Up Form</h2>
		<input type="text" name="card_brand" placeholder="Card Brand" bind:value={car_brand}/>
		<input type="text" name="zip_code" placeholder="Zip Code" bind:value={zip_code}/>
		<input type="button" name="next" class="next action-button" value="Next" on:click={changePageHandler}/>
	</fieldset>
	<fieldset class:fieldset-active = {nextButtonClicked}>
		<h2 class="fs-title">Sing Up Form</h2>
		<input type="text" name="fname" placeholder="First Name"  bind:value={fname}/>
		<input type="text" name="lname" placeholder="Last Name"  bind:value={lname}/>
		<input type="text" name="car_model" placeholder="Car Model"  bind:value={car_model}/>
		<input type="text" name="first_registartion" placeholder="First Registartion"  bind:value={first_registartion}/>
		<input type="button" name="previous" class="previous action-button" value="Previous" on:click={changePageHandler}/>
		<input type="button" name="submit" class="submit action-button" value="Submit"  on:click={submitHandler}/>
	</fieldset>
</form>

<div class="alert error" class:active = {errors.length > 0}>
	<span>{errors.at(-1)}</span>
	<button on:click={()=>errors=[]}>X</button>
</div>