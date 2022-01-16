# elephant
A Clojure alternative runtime written in Node.js that includes a package manager.

Erpi repo [here.](https://github.com/Unzor/erpi)

# Usage
First, install Elephant (comes packed with its package manager, erpi):
```
npm install -g elephant-runtime
```
Then, you can run the repl:
```
elephant
```
or you can run a file:
```
elephant hello_world.clj
```
And you can also do it without a file extension:
```
elephant hello_world
```
And you could also grab a package from the erpi database:
```
erpi-get hello-world
```
Or you could publish your own:
```
erpi-publish <FULL file name here> <package name>
```
Then you can paste it into any Clojure file!
