<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# give quick short not on impliit and explicit grid in css

**Explicit Grid**

- Defined by `grid-template-columns` / `grid-template-rows`
- You control exact number + size of tracks
- Solid lines in browser dev tools

**Implicit Grid**

- Auto-created when items exceed explicit grid
- Controlled by `grid-auto-columns` / `grid-auto-rows` (default: `auto`)
- Dotted lines in dev tools, fills remaining items

**Quick example:**

```css
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;  /* Explicit: 2 cols */
  grid-auto-rows: 100px;           /* Implicit rows = 100px */
}
```

3+ items? First 2 go explicit, rest create implicit rows.