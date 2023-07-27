	---
    title: post
    date: "2022-11-29"
    description: Blog Post 3 Description
    ---

# this is a post

<script>
    let count = 0 

    function incr(){
        count ++
    }
</script>

<button on:click={incr}>
    {count}
</button>
