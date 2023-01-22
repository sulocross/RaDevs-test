<script>
	import "./styles.scss"
	let form1, form2;
	let car_brand;
	function form1EventHandler(event){
		event.preventDefault()
	}
	function validationForm1(){
		let validateCarBrand = ["audi", "bmw", "nissan"]
		if (validateCarBrand.indexOf(car_brand.value.toLowerCase().trim()) == -1) {
			console.log("Brand is not valid!") 
			return
		}
		form1.classList.toggle("start-anim")
		form2.classList.toggle("start-anim")

	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
<form class="form1 start-anim" on:submit={form1EventHandler} bind:this={form1}>
	<label for='car_brand'>Car Brand</label>
	<input class="inputs" name="car_brand" placeholder="Enter your car brand" bind:this={car_brand}>
	<label for='zip_code'>Zip Code</label>
	<input name="zip_code" class="inputs" placeholder="Enter your zip code">
	<div class="buttons">
		<button>Back</button>
		<button on:click={validationForm1}>Next</button>
	</div>
</form>
<form class="form2" bind:this={form2}>
	<input class="inputs" placeholder="First Name">
	<input class="inputs" placeholder="Last Name">
	<input class="inputs" placeholder="Car Model">
	<input class="inputs" placeholder="First Registration">
	<div class="buttons">
		<button>Back</button>
		<button>Next</button>
	</div>
</form>
  