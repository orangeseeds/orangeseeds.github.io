---
title: Testing out this new build
date: "2022-11-30, Tuesday"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "
tags: [apple, ball ,cat, dog, eel]
readTime: 12 min
---

![post picture](https://picsum.photos/640/360/?random&date=2018-10-10)

Naice Lorem ipsum dolor sit amet, **consectetur** adipiscing elit, sed do eiusmod *tempor* incididunt ut labore et dolore ~~magna~~ aliqua. Ut enim ad -minim- veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

> Incididunt ut labore et dolore magna aliqua. Ut enim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

```go
// main.go

package main

import "fmt"

func main(){
    fmt.Println("Naice")
}

```

#### A List of Options
1. Anteater
2. Bull
3. Cow
- Dog
- Elephant

### Naice little title
- [ ] apple
- [ ] ball
- [ ] cat

#### A List of Options
1. Anteater
2. Bull
3. Cow
- Dog
- Elephant

<script>
    import "$lib/app.css";

    let count = 0


    const inc = ()=>{
        count++
    }
</script>


<button class="btn" on:click={inc}>
    Click {count}
</button>
