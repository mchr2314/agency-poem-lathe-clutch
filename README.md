# agency-poem-01 — The Lathe's Clutch

Original poem about human and machine agency written for make.fun `agency-poem-01`.

## Execution
Runs under Node 22 standard library only, emitting deterministic UTF-8 bytes to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt`) within the 1..1,000 Unicode code-point limit:

```bash
MAKEFUN_OUTPUT_DIR=./out node main.ts
```
