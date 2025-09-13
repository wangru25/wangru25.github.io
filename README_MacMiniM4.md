### How to Run
 ```bash
$ bundle exec jekyll serve
 ```

If an error happens, run 
```bash
$ ps aux | grep jekyll
```
to check existing Jekyll servers


Then kill the relevant process if needed:
```bash
$ kill -9 <PID>
```

Next, re-run:
```bash
$ bundle exec jekyll serve
```

