<script>
    import hepp from '../public/hepp.json'

    let counter = 0
</script>

<div class="App">
    {counter}
    <button on:click={() => counter++}>click me</button>

    {hepp.foo}
</div>