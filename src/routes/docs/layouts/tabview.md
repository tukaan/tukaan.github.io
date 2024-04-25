# Working with tabs: The `TabView` widget

![Image of a Tukaan tabview](/resources/docs/tabview.png)

The `TabView` widget allows users to have multiple tabs (which are ontainers) in which they can place widgets. An example of how to set up a TabView widget is as follows:

```python
import tukaan


app = tukaan.App()
window = tukaan.MainWindow(title="Test TabView widget")

# Create tabview
tabview = tukaan.TabView(window)
tabview.grid(margin=20)

# Create tabs
tab_1 = tabview.Tab("Tab 1")
tab_2 = tabview.Tab("Tab 2")

# Add tab contents
button_1 = tukaan.Button(tab_1, "Button in tab 1")
button_1.grid(margin=20)

button_2 = tukaan.Button(tab_2, "Button in tab 2")
button_2.grid(margin=20)

app.run()

```

The first two blocks are fairly typical for a `Tukaan` program with the necessary import statement and app/window creation. The next block is where the `TabView` is clearly made and is also fairly standard. The next block, however, is slightly unorthodox. In this block we do the following: `tab_x = tabview.Tab("Tab x")`. Digging into the `TabView` source code we find [`self.Tab = Tab`](https://github.com/tukaan/tukaan/blob/f39bb197b1bbbb05a03e498114cc1c4dcff8b800/tukaan/widgets/tabview.py#L152-L155). If we go up in the file we then find class `Tab` which is really just a wrapper around the `Frame` class with extra methods for tabs. Because of how `Tab` is implemented, however, it creates a very clean API call that doesn't require much extra thought to understand. Moving on to the next two blocks we see that these tabs are interacted with exactly as one would work with a `Frame` which of course makes sense knowing that they are indeed a Frame on the inside. The final block is also fairly generic with the call of the `App.run()` method.