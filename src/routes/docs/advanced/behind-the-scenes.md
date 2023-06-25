# The Tcl interface

The `Tcl` class is a bridge between Python and Tcl. It can be used to initialize the interpreter, to run the mainloop, to load dll files to Tk, and to call Tcl commands from Python.

```python
from tukaan._tcl import Tcl
```

## Calling Tcl from Python
> There are two methods to call Tcl code in Tukaan.

The first is the `Tcl.call` method. You can pass in arbitary number of argument of any type (see `Tcl.to` below), and it will evaluate it. The first argument is always the return type of the call, if you don't expect any return it should be `None`

```python
>>> Tcl.call(None, "grid", textbox_widget, *Tcl.to_tcl_args(column=3, rowspan=8))
None
>>> Tcl.call(str, textbox_widget, "get")
foobar
```

There's a utility method called `to_tcl_args`, which can be used to convert Python keyword arguments to Tcl keyword arguments (`column=3` -> `("-column", "3")`). It returns a tuple, which you have to unpack, when passing into `Tcl.call` (with the `*` syntax)

The second is the `Tcl.eval` method, which is very similar to Python's `exec` function, except in Tcl. It doesn't do any Py-to-Tcl conversion, so you can only pass in a single string, but this means that this function is also a lot faster. Similarly to `Tcl.call` the first argument defines the return type. The second argument is the script to evaluate.

```python
>>> Tcl.eval(None, "grid .app.textbox_1 -column 3 -rowspan 8")
None
>>> Tcl.eval(str, ".app.textbox_1 get")
foobar
```


## About converting things to Tcl
You might know, that in Tcl everything is a string. Therefore Tukaan needs to convert every Python object to a string, and the strings returned from Tcl back to Python objects (this is the return value I was babbling about above). However, it isn't simply done by calling the `str()` function, but finding a way, that it can be represented in Tcl. For example when a Python funciont is passed in, it creates a new Tcl procedure at C-level, which will call the Python function (if you're really interested in this part, it's [here](https://github.com/python/cpython/blob/8feb7ab77c80968a6de6079299a39b0494b1701b/Modules/_tkinter.c#L2305) in `_tkinter.c`).
An object can also be converted to Tcl, if it has a `_name` attribute. Widgets use this attribute to store thier pathName, with which they are represented in Tk (e.g. `.frame.notebook.tab_1.button`).
If an object has a `__to_tcl__` method, but no `_name`, `Tcl.to` will call it to represent the object to Tcl. This method is useful if you want to give a name to the object on the fly. For example, Tukaan adds a `__to_tcl__` method to PIL images, which converts them to Tk images and then returns the image name, because by default PIL images aren't known by the Tcl interpreter.


---

> TODO: Revise this, as it's just a quick sketch
