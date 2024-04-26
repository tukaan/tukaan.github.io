# The `.grid()` method

Lets take a quick journey into using `Tukaan`'s defacto method of placing widgets - the `.grid()` method! We'll start with an example use case that grids 9 buttons into a frame using two `for` loops (not best Python practice but thats neither here nor there in this example).

```python
import tukaan


app = tukaan.App()
window = tukaan.MainWindow(title="Test grid method")

main_frame = tukaan.Frame(window)
main_frame.grid()

for i in range(3):
    for j in range(3):
        b = tukaan.Button(main_frame, text=f"Button {i*3 + j}")
        b.grid(row=i, col=j, margin=5)

app.run()
```

In this example we start by creating the app/window and a main frame. Notice that when we cerate the main frame, we don't give `.grid()` any arguments. Next we have two `for` loops (one inside the other). At the top level of these two loops we have the lines `b = tukaan.Button(main_frame, text=f"Button {i*3 + j}")` and `b.grid(row=i, col=j, margin=5)`. The first line is simple enough with us putting a `Button` in the main frame and doing some simple math to determine which number button it is. The second line, however, is where things get interesting.

## `.grid()`'s arguments

The `.grid()` method has a few main arguments that are commonly used. These are as follows:
 - `row` (defaults to 0) (takes type `int`)
 - `col` (defaults to 0) (takes type `int`)
 - `margin` (defaults to `None`) (takes type `int` or a `tuple[int, ...]`)
 - `colspan` (defaults to `None`) (takes type `int` or `None`)
 - `rowspan` (defaults to `None`) (takes type `int` or `None`)

These are just the most commonly used arguments but there are also `cell` and `align` which can be discussed in more detail elsewhere. 

`row` and `col` will be discussed below along with `colspan` and `rowspan` so to briefly explain `margin`, it can be best described as an empty perimiter around a widget with an integer denoting how many pixels the margin should be, similar to the `margin` in CSS.

## How gridding works

If you don't understand what gridding does, imagine a flat plane as shown below in a matrix. This plane is of an unknown height and width (rows/columns). When we grid an item inside a `Window` or any other `Container` we tell the API what to fit the matrix size to.

```python
[
    [Button(0, ...), Label(1, ...)],
    [Button(0, ...), Label(2, ...)]
]
```

To have something take up more than one index however, we need to be able to tell the API that we intend to use either a `colspan`, a `rowspan`, or both. This allows like what we see in the above example where the button can extend to the spot below it. To understand how `colspan` and `rowspan` will move, remember that the top left coordinate is what will stay the same. Using this we know that `colspan` will always make the widget extend to columns to the right and that `rowspan` will make the widget extend further down.

Note that if I make something like what is shown below, that the widget won't actually increase in size. In order to do so we would need to add other widgets near it to tell the API that it isn't just taking up an arbitrary row/column amount but that there is actually a scale to it.

```python
[
    [Button(0, ...), Button(0, ...)],
    [Button(0, ...), Button(0, ...)]
]
```

## Returning to the starting example

So, going back to the starting example, we can tell that when we grid the main frame it is going to the index `(0, 0)`. Then, we put buttons in columns 1-3 before changing between rows 1-3 which fits all 9 spaces in a square. That would look internally somewhat like below:

```python
[
    [Button(0, ...), Button(1, ...), Button(2, ...)],
    [Button(3, ...), Button(4, ...), Button(5, ...)],
    [Button(6, ...), Button(7, ...), Button(8, ...)]
]
```

And thus we see that the `.grid()` method is actually quite simple and not nearly as daunting as it is first made out to be!